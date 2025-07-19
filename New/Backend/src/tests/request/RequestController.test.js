import SequelizeMock from 'sequelize-mock';
import { requestController } from '../controllers/requestController.js';

const DBConnectionMock = new SequelizeMock();

const ProductMock = DBConnectionMock.define('Product', {
  id: 1,
  requested: true,
  save: jest.fn(),
});

describe('Request Controller', () => {
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
    it('should fetch all requested products', async () => {
      const req = {};
      const res = mockResponse();

      ProductMock.$queueResult([ProductMock.build()]);

      ProductMock.findAll = jest.fn(() => Promise.resolve([ProductMock.build()]));

      await requestController.getAll(req, res);

      expect(ProductMock.findAll).toHaveBeenCalledWith({ where: { requested: true } });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        data: expect.any(Array),
        message: 'Successfully fetched product requests',
      });
    });

    it('should handle error when fetching requests fails', async () => {
      const req = {};
      const res = mockResponse();

      ProductMock.findAll = jest.fn(() => Promise.reject(new Error('DB error')));

      await requestController.getAll(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Failed to fetch product requests',
      });
    });
  });

  describe('updateStatus', () => {
    it('should approve a product request', async () => {
      const req = {
        params: { id: '1' },
        body: { status: 'approved' },
      };
      const res = mockResponse();

      const product = ProductMock.build({ id: 1, requested: true });
      product.save = jest.fn();

      ProductMock.findByPk = jest.fn(() => Promise.resolve(product));

      await requestController.updateStatus(req, res);

      expect(ProductMock.findByPk).toHaveBeenCalledWith('1');
      expect(product.requested).toBe(false);
      expect(product.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        data: product,
        message: 'Status updated successfully',
      });
    });

    it('should decline a product request (no logic yet)', async () => {
      const req = {
        params: { id: '2' },
        body: { status: 'declined' },
      };
      const res = mockResponse();

      const product = ProductMock.build({ id: 2, requested: true });
      product.save = jest.fn();

      ProductMock.findByPk = jest.fn(() => Promise.resolve(product));

      await requestController.updateStatus(req, res);

      expect(ProductMock.findByPk).toHaveBeenCalledWith('2');
      expect(product.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({
        data: product,
        message: 'Status updated successfully',
      });
    });

    it('should return 404 if product not found', async () => {
      const req = {
        params: { id: '999' },
        body: { status: 'approved' },
      };
      const res = mockResponse();

      ProductMock.findByPk = jest.fn(() => Promise.resolve(null));

      await requestController.updateStatus(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Product not found',
      });
    });

    it('should handle error when updating status fails', async () => {
      const req = {
        params: { id: '1' },
        body: { status: 'approved' },
      };
      const res = mockResponse();

      ProductMock.findByPk = jest.fn(() => Promise.reject(new Error('DB error')));

      await requestController.updateStatus(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Failed to update status',
      });
    });
  });
});
