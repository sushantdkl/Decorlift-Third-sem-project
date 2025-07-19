import SequelizeMock from 'sequelize-mock';
import { addressController } from '../controllers/addressController.js';

const DBConnectionMock = new SequelizeMock();

const AddressMock = DBConnectionMock.define('Address', {
  id: 1,
  name: 'Home',
  mobile: '9812345678',
  address: 'Patan',
  city: 'Lalitpur',
  alternatePhone: '9800000000',
  landmark: 'Near Temple',
  UserId: 1,
  save: jest.fn(),
  destroy: jest.fn(),
});

describe('Address Controller', () => {
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  const mockUser = { id: 1, isAdmin: false };

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should fetch all addresses for a user', async () => {
    const req = { user: mockUser };
    const res = mockResponse();

    AddressMock.findAll = jest.fn(() => Promise.resolve([AddressMock.build()]));

    await addressController.getAll(req, res);

    expect(AddressMock.findAll).toHaveBeenCalledWith({ where: { UserId: 1 } });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      data: expect.any(Array),
      message: 'Successfully fetched addresses',
    });
  });

  test('should create a new address', async () => {
    const req = {
      user: mockUser,
      body: {
        name: 'Home',
        mobile: '9812345678',
        address: 'Patan',
        city: 'Lalitpur',
        alternatePhone: '9800000000',
        landmark: 'Near Temple',
      },
    };
    const res = mockResponse();

    AddressMock.create = jest.fn(() => Promise.resolve(AddressMock.build(req.body)));

    await addressController.create(req, res);

    expect(AddressMock.create).toHaveBeenCalledWith({
      UserId: 1,
      ...req.body,
    });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith({
      data: expect.objectContaining(req.body),
      message: 'Address created successfully',
    });
  });

  test('should update an address if exists', async () => {
    const req = {
      user: mockUser,
      params: { id: 1 },
      body: {
        name: 'Updated Home',
        city: 'Bhaktapur',
      },
    };
    const res = mockResponse();

    const existingAddress = AddressMock.build();
    existingAddress.save = jest.fn();

    AddressMock.findOne = jest.fn(() => Promise.resolve(existingAddress));

    await addressController.update(req, res);

    expect(existingAddress.name).toBe('Updated Home');
    expect(existingAddress.city).toBe('Bhaktapur');
    expect(existingAddress.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      data: existingAddress,
      message: 'Address updated successfully',
    });
  });

  test('should return 404 if address not found for update', async () => {
    const req = {
      user: mockUser,
      params: { id: 1 },
      body: {},
    };
    const res = mockResponse();

    AddressMock.findOne = jest.fn(() => Promise.resolve(null));

    await addressController.update(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ message: 'Address not found' });
  });

  test('should delete an address', async () => {
    const req = { user: mockUser, params: { id: 1 } };
    const res = mockResponse();

    const mockAddress = AddressMock.build();
    mockAddress.destroy = jest.fn();

    AddressMock.findOne = jest.fn(() => Promise.resolve(mockAddress));

    await addressController.deleteById(req, res);

    expect(mockAddress.destroy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      message: 'Address deleted successfully',
    });
  });

  test('should return 404 if address not found for delete', async () => {
    const req = { user: mockUser, params: { id: 1 } };
    const res = mockResponse();

    AddressMock.findOne = jest.fn(() => Promise.resolve(null));

    await addressController.deleteById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ message: 'Address not found' });
  });

  test('should fetch addresses by userId (admin only)', async () => {
    const req = { user: { id: 999, isAdmin: true }, params: { userId: 1 } };
    const res = mockResponse();

    AddressMock.findAll = jest.fn(() => Promise.resolve([AddressMock.build()]));

    await addressController.getByUserId(req, res);

    expect(AddressMock.findAll).toHaveBeenCalledWith({ where: { UserId: 1 } });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      data: expect.any(Array),
      message: 'Successfully fetched addresses',
    });
  });

  test('should return 403 if non-admin tries to access getByUserId', async () => {
    const req = { user: { id: 2, isAdmin: false }, params: { userId: 1 } };
    const res = mockResponse();

    await addressController.getByUserId(req, res);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.send).toHaveBeenCalledWith({ message: 'Forbidden' });
  });
});
