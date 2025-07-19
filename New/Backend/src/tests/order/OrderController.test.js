const SequelizeMock = require('sequelize-mock');
const { orderController } = require('../controllers/orderController.js');

const DBConnectionMock = new SequelizeMock();

const OrderMock = DBConnectionMock.define('Order', {
  id: 1,
  UserId: 1,
  ProductId: 1,
  quantity: 2,
});

const ProductMock = DBConnectionMock.define('Product', {
  id: 1,
  productName: 'Test Product',
  price: 99.99,
});

describe('Order Controller', () => {
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
    it('should fetch all orders for a user', async () => {
      const req = { user: { user: { id: 1 } } };
      const res = mockResponse();

      OrderMock.findAll = jest.fn(() => Promise.resolve([OrderMock.build()]));

      await orderController.getAll(req, res);

      expect(OrderMock.findAll).toHaveBeenCalledWith({
        where: { UserId: 1 },
        include: [ProductMock],
      });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        data: expect.any(Array),
        message: 'Successfully fetched orders',
      });
    });

    it('should return 401 if user info missing in token', async () => {
      const req = { user: null };
      const res = mockResponse();

      await orderController.getAll(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Unauthorized: User information missing in token',
      });
    });

    it('should handle error during fetching orders', async () => {
      const req = { user: { user: { id: 1 } } };
      const res = mockResponse();

      OrderMock.findAll = jest.fn(() => Promise.reject(new Error('DB error')));

      await orderController.getAll(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Failed to fetch orders',
      });
    });
  });

  describe('create', () => {
    it('should create a new order', async () => {
      const req = {
        user: { user: { id: 1 } },
        body: {
          productId: 10,
          quantity: 2,
          totalCost: 200,
          shippingCost: 10,
          estimatedTax: 5,
          subTotal: 185,
          customerName: 'Alice',
          address: 'Kathmandu',
          phone: '9800000000',
          deliveryMethod: 'Standard',
        },
      };
      const res = mockResponse();

      ProductMock.findByPk = jest.fn(() => Promise.resolve(ProductMock.build({ id: 10 })));
      OrderMock.create = jest.fn(() => Promise.resolve(OrderMock.build({ id: 1, ...req.body })));

      await orderController.create(req, res);

      expect(ProductMock.findByPk).toHaveBeenCalledWith(10);
      expect(OrderMock.create).toHaveBeenCalledWith({
        UserId: 1,
        ProductId: 10,
        quantity: 2,
        totalCost: 200,
        shippingCost: 10,
        estimatedTax: 5,
        subTotal: 185,
        customerName: 'Alice',
        address: 'Kathmandu',
        phone: '9800000000',
        deliveryMethod: 'Standard',
      });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.send).toHaveBeenCalledWith({
        data: expect.objectContaining({ id: 1, ...req.body }),
        message: 'Order created successfully',
      });
    });

    it('should return 400 if product is not found', async () => {
      const req = {
        user: { user: { id: 1 } },
        body: { productId: 999 },
      };
      const res = mockResponse();

      ProductMock.findByPk = jest.fn(() => Promise.resolve(null));

      await orderController.create(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Invalid productId: product not found',
      });
    });

    it('should handle error during order creation', async () => {
      const req = {
        user: { user: { id: 1 } },
        body: {
          productId: 10,
          quantity: 1,
          totalCost: 100,
          shippingCost: 5,
          estimatedTax: 2,
          subTotal: 93,
          customerName: 'Bob',
          address: 'Lalitpur',
          phone: '9812345678',
          deliveryMethod: 'Express',
        },
      };
      const res = mockResponse();

      ProductMock.findByPk = jest.fn(() => Promise.resolve(ProductMock.build({ id: 10 })));
      OrderMock.create = jest.fn(() => Promise.reject(new Error('DB error')));

      await orderController.create(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Failed to create order',
      });
    });
  });
});
