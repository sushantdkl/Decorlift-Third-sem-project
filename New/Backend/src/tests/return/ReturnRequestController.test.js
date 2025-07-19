import request from 'supertest';
import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import { returnRequestController } from '../controllers/returnRequestController.js';
import { ReturnRequest, Order, Product } from '../models/index.js';

// Mock the Sequelize models
jest.mock('../models/index.js', () => ({
  ReturnRequest: {
    findAll: jest.fn(),
    findByPk: jest.fn(),
    create: jest.fn(),
  },
  Order: {
    findByPk: jest.fn(),
  },
  Product: {}
}));

// Setup Express app
const app = express();
const upload = multer({ dest: 'uploads/' });
app.use(bodyParser.json());

app.get('/api/return-requests', returnRequestController.getAll);
app.post('/api/return-requests', upload.single('file'), returnRequestController.create);
app.patch('/api/return-requests/:id', returnRequestController.updateStatus);

describe('returnRequestController', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/return-requests', () => {
    it('should return refund requests with order and product', async () => {
      const mockData = [
        {
          id: 1,
          Order: {
            id: 1,
            Product: { id: 101, name: 'Test Product' }
          }
        }
      ];
      ReturnRequest.findAll.mockResolvedValue(mockData);

      const res = await request(app).get('/api/return-requests');

      expect(res.status).toBe(200);
      expect(res.body.message).toBe('Successfully fetched refund requests');
      expect(ReturnRequest.findAll).toHaveBeenCalled();
    });

    it('should return 500 on error', async () => {
      ReturnRequest.findAll.mockRejectedValue(new Error('DB Error'));
      const res = await request(app).get('/api/return-requests');
      expect(res.status).toBe(500);
    });
  });

  describe('POST /api/return-requests', () => {
    it('should create a new return request', async () => {
      Order.findByPk.mockResolvedValue({ id: 1 });
      ReturnRequest.create.mockResolvedValue({ id: 123 });

      const res = await request(app)
        .post('/api/return-requests')
        .send({ orderId: 1, reason: 'Wrong item', requestType: 'refund' });

      expect(res.status).toBe(201);
      expect(ReturnRequest.create).toHaveBeenCalled();
    });

    it('should return 400 if orderId is missing', async () => {
      const res = await request(app)
        .post('/api/return-requests')
        .send({ reason: 'Missing orderId', requestType: 'refund' });

      expect(res.status).toBe(400);
    });

    it('should return 400 if requestType is invalid', async () => {
      const res = await request(app)
        .post('/api/return-requests')
        .send({ orderId: 1, reason: 'Invalid type', requestType: 'invalid' });

      expect(res.status).toBe(400);
    });

    it('should return 500 if an error occurs', async () => {
      Order.findByPk.mockRejectedValue(new Error('Error fetching order'));
      const res = await request(app)
        .post('/api/return-requests')
        .send({ orderId: 1, reason: 'Error', requestType: 'refund' });

      expect(res.status).toBe(500);
    });
  });

  describe('PATCH /api/return-requests/:id', () => {
    it('should update return request status', async () => {
      const mockRequest = { id: 1, save: jest.fn(), status: 'Pending' };
      ReturnRequest.findByPk.mockResolvedValue(mockRequest);

      const res = await request(app)
        .patch('/api/return-requests/1')
        .send({ status: 'Approved' });

      expect(res.status).toBe(200);
      expect(mockRequest.save).toHaveBeenCalled();
      expect(mockRequest.status).toBe('Approved');
    });

    it('should return 404 if request not found', async () => {
      ReturnRequest.findByPk.mockResolvedValue(null);
      const res = await request(app).patch('/api/return-requests/99').send({ status: 'Rejected' });
      expect(res.status).toBe(404);
    });

    it('should return 500 on DB error', async () => {
      ReturnRequest.findByPk.mockRejectedValue(new Error('DB error'));
      const res = await request(app).patch('/api/return-requests/1').send({ status: 'Approved' });
      expect(res.status).toBe(500);
    });
  });
});
