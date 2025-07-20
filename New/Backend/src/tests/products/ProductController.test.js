<<<<<<< HEAD
import SequelizeMock from 'sequelize-mock';
import { productController } from '../controllers/productController.js';

const DBConnectionMock = new SequelizeMock();

const ProductMock = DBConnectionMock.define('Product', {
  id: 1,
  productName: 'Test Product',
  price: 99.99,
  description: 'Test Desc',
});

describe('Product Controller', () => {
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a new product', async () => {
    const req = {
      body: {
        productName: 'Test Product',
        price: 99.99,
        description: 'Test Desc',
      },
    };
    const res = mockResponse();

    ProductMock.create = jest.fn(() => Promise.resolve(ProductMock.build(req.body)));

    await productController.createProduct(req, res);

    expect(ProductMock.create).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(req.body));
  });

  it('should return all products', async () => {
    const req = {};
    const res = mockResponse();

    ProductMock.findAll = jest.fn(() => Promise.resolve([ProductMock.build()]));

    await productController.getAllProducts(req, res);

    expect(ProductMock.findAll).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.any(Array));
  });

  it('should return a product by ID', async () => {
    const req = { params: { id: 1 } };
    const res = mockResponse();

    ProductMock.findByPk = jest.fn(() => Promise.resolve(ProductMock.build()));

    await productController.getProductById(req, res);

    expect(ProductMock.findByPk).toHaveBeenCalledWith(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({}));
  });

  it('should return 404 if product not found', async () => {
    const req = { params: { id: 2 } };
    const res = mockResponse();

    ProductMock.findByPk = jest.fn(() => Promise.resolve(null));

    await productController.getProductById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Product not found' });
  });
});
=======
const productController = require("../controllers/productController");
const Product = require("../model/Product");
 
// Mock Sequelize Methods
jest.mock("../model/Product", () => ({
  create: jest.fn(),
  findAll: jest.fn(),
  findByPk: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
}));
 
describe("Product Controller", () => {
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };
 
  it("should create a new product", async () => {
    const req = {
      body: {
        productName: "Test Product",
        price: 99.99,
        description: "Test Desc",
      },
    };
    const res = mockResponse();
    Product.create.mockResolvedValue(req.body);
 
    await productController.createProduct(req, res);
 
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining(req.body));
  });
 
  it("should return all products", async () => {
    const req = {};
    const res = mockResponse();
    Product.findAll.mockResolvedValue([{ id: 1, productName: "Test Product" }]);
 
    await productController.getAllProducts(req, res);
 
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(
      expect.arrayContaining([{ id: 1, productName: "Test Product" }])
    );
  });
 
  it("should return a product by ID", async () => {
    const req = { params: { id: 1 } };
    const res = mockResponse();
    Product.findByPk.mockResolvedValue({ id: 1, productName: "Test Product" });
 
    await productController.getProductById(req, res);
 
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ id: 1 }));
  });
 
  it("should return 404 if product not found", async () => {
    const req = { params: { id: 2 } };
    const res = mockResponse();
    Product.findByPk.mockResolvedValue(null);
 
    await productController.getProductById(req, res);
 
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "Product not found" });
  });
});
>>>>>>> Niraj_branch
