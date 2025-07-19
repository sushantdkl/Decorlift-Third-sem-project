import SequelizeMock from 'sequelize-mock';
import { contactController } from '../controllers/contactController.js';

const DBConnectionMock = new SequelizeMock();

const ContactMock = DBConnectionMock.define('Contact', {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  phone: '1234567890',
  subject: 'Test Subject',
  message: 'Test Message',
});

describe('Contact Controller', () => {
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

  it('should create a new contact submission', async () => {
    const req = {
      body: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        subject: 'Test Subject',
        message: 'Test Message',
      },
    };
    const res = mockResponse();

    ContactMock.create = jest.fn(() => Promise.resolve(ContactMock.build(req.body)));

    await contactController.create(req, res);

    expect(ContactMock.create).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith({
      data: expect.objectContaining(req.body),
      message: 'Contact form submitted successfully',
    });
  });

  it('should handle contact creation error', async () => {
    const req = { body: {} };
    const res = mockResponse();

    ContactMock.create = jest.fn(() => Promise.reject(new Error('DB error')));

    await contactController.create(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Failed to submit contact form',
    });
  });

  it('should fetch all contact submissions', async () => {
    const req = {};
    const res = mockResponse();

    ContactMock.findAll = jest.fn(() => Promise.resolve([ContactMock.build()]));

    await contactController.getAll(req, res);

    expect(ContactMock.findAll).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      data: expect.any(Array),
      message: 'Successfully fetched contacts',
    });
  });

  it('should handle error while fetching contacts', async () => {
    const req = {};
    const res = mockResponse();

    ContactMock.findAll = jest.fn(() => Promise.reject(new Error('DB error')));

    await contactController.getAll(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: 'Failed to fetch contacts',
    });
  });
});
