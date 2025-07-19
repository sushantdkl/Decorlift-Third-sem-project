import SequelizeMock from 'sequelize-mock';
import { refundRequestController } from '../controllers/return/refundRequestController.js';

const DBConnectionMock = new SequelizeMock();

const RefundRequestMock = DBConnectionMock.define('RefundRequest', {
  id: 1,
  UserId: 1,
  OrderId: 1,
  reason: 'Test reason',
  status: 'pending',
});

const OrderMock = DBConnectionMock.define('Order', {
  id: 1,
});

const ProductMock = DBConnectionMock.define('Product', {
  id: 10,
});

describe('Refund Request Controller', () => {
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getAll', () => {
    it('should fetch all refund requests with orders and products', async () => {
      const mockRequests = [{
        id: 1,
        Order: { id: 1, Product: { id: 10 } },
      }];
      RefundRequestMock.findAll = jest.fn(() => Promise.resolve(mockRequests));

      const req = {};
      const res = mockResponse();

      await refundRequestController.getAll(req, res);

      expect(RefundRequestMock.findAll).toHaveBeenCalledWith({
        include: [{ model: OrderMock, include: [ProductMock] }],
      });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        data: mockRequests,
        order: [mockRequests[0].Order],
        product: [mockRequests[0].Order.Product],
        message: "Successfully fetched refund requests",
      });
    });

    it('should handle errors while fetching refund requests', async () => {
      RefundRequestMock.findAll = jest.fn(() => Promise.reject(new Error('DB error')));
      const req = {};
      const res = mockResponse();

      await refundRequestController.getAll(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Failed to fetch refund requests' });
    });
  });

  describe('create', () => {
    it('should create a new refund request successfully', async () => {
      const req = {
        body: {
          orderId: 1,
          reason: 'Damaged item',
          requestType: 'refund',
        },
        file: { filename: 'image.jpg' },
      };
      const res = mockResponse();

      OrderMock.findByPk = jest.fn(() => Promise.resolve(OrderMock.build({ id: 1 })));
      RefundRequestMock.create = jest.fn(() => Promise.resolve(RefundRequestMock.build({ id: 1, ...req.body })));

      await refundRequestController.create(req, res);

      expect(OrderMock.findByPk).toHaveBeenCalledWith(1);
      expect(RefundRequestMock.create).toHaveBeenCalledWith({
        orderId: 1,
        reason: 'Damaged item',
        requestType: 'refund',
        status: 'Pending',
        photo: 'image.jpg',
      });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.send).toHaveBeenCalledWith({
        data: expect.objectContaining({ id: 1, ...req.body }),
        message: 'Refund request created successfully',
      });
    });

    it('should return 400 if orderId is missing', async () => {
      const req = {
        body: {
          reason: 'Wrong item',
          requestType: 'refund',
        },
      };
      const res = mockResponse();

      await refundRequestController.create(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'orderId is required' });
    });

    it('should return 400 if requestType is invalid', async () => {
      const req = {
        body: {
          orderId: 1,
          reason: 'Wrong item',
          requestType: 'invalid',
        },
      };
      const res = mockResponse();

      await refundRequestController.create(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Valid requestType is required' });
    });

    it('should return 400 if reason is missing', async () => {
      const req = {
        body: {
          orderId: 1,
          requestType: 'refund',
        },
      };
      const res = mockResponse();

      await refundRequestController.create(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'reason is required' });
    });

    it('should return 400 if order does not exist', async () => {
      const req = {
        body: {
          orderId: 100,
          reason: 'No delivery',
          requestType: 'refund',
        },
      };
      const res = mockResponse();
      OrderMock.findByPk = jest.fn(() => Promise.resolve(null));

      await refundRequestController.create(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ error: 'Invalid orderId: order not found' });
    });

    it('should handle server errors in create', async () => {
      const req = {
        body: {
          orderId: 1,
          reason: 'Damaged item',
          requestType: 'refund',
        },
      };
      const res = mockResponse();
      OrderMock.findByPk = jest.fn(() => Promise.resolve(OrderMock.build({ id: 1 })));
      RefundRequestMock.create = jest.fn(() => Promise.reject(new Error('Create failed')));

      await refundRequestController.create(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Failed to create refund request',
        details: 'Create failed',
      });
    });
  });

  describe('updateStatus', () => {
    it('should update status to approved if status provided', async () => {
      const req = {
        params: { id: '1' },
        body: { status: 'approved' },
        path: '/api/refunds/1',
      };
      const res = mockResponse();

      const mockRequest = RefundRequestMock.build({ id: 1 });
      mockRequest.save = jest.fn();
      RefundRequestMock.findByPk = jest.fn(() => Promise.resolve(mockRequest));

      await refundRequestController.updateStatus(req, res);

      expect(mockRequest.status).toBe('approved');
      expect(mockRequest.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        data: mockRequest,
        message: 'Status updated successfully',
      });
    });

    it('should update status based on URL (approve)', async () => {
      const req = {
        params: { id: '2' },
        body: {},
        path: '/api/refunds/2/approve',
      };
      const res = mockResponse();
      const mockRequest = RefundRequestMock.build({ id: 2 });
      mockRequest.save = jest.fn();
      RefundRequestMock.findByPk = jest.fn(() => Promise.resolve(mockRequest));

      await refundRequestController.updateStatus(req, res);

      expect(mockRequest.status).toBe('approved');
      expect(mockRequest.save).toHaveBeenCalled();
    });

    it('should return 404 if refund request not found', async () => {
      const req = {
        params: { id: '99' },
        body: { status: 'declined' },
        path: '/api/refunds/99/decline',
      };
      const res = mockResponse();
      RefundRequestMock.findByPk = jest.fn(() => Promise.resolve(null));

      await refundRequestController.updateStatus(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Refund request not found' });
    });

    it('should handle error in updateStatus', async () => {
      const req = {
        params: { id: '1' },
        body: { status: 'declined' },
        path: '/api/refunds/1',
      };
      const res = mockResponse();

      RefundRequestMock.findByPk = jest.fn(() => Promise.reject(new Error('Update failed')));

      await refundRequestController.updateStatus(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: 'Failed to update status' });
    });
  });
});
