import { Product } from '../../models/index.js';

/**
 * Fetch all products
 */
const getAll = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).send({ data: products, message: "Successfully fetched products" });
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

/**
 * Create new product
 */
const create = async (req, res) => {
  try {
    const { title, description, price, image } = req.body;

    // validation
    if (!title || !price) {
      return res.status(400).send({ message: "Title and price are required" });
    }

    const product = await Product.create({
      title,
      description,
      price,
      image,
    });

    res.status(201).send({ data: product, message: "Product created successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to create product' });
  }
};

/**
 * Update existing product
 */
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, subtitle, description, price, image } = req.body;

    const product = await Product.findOne({ where: { id } });

    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    product.title = title ?? product.title;
    product.description = description ?? product.description;
    product.price = price ?? product.price;
    product.image = image ?? product.image;

    await product.save();

    res.status(200).send({ data: product, message: "Product updated successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to update product' });
  }
};

/**
 * Delete product by ID
 */
const deleteById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({ where: { id } });

    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    await product.destroy();

    res.status(200).send({ message: "Product deleted successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to delete product' });
  }
};

/**
 * Get product by ID
 */
const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({ where: { id } });

    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.status(200).send({ data: product, message: "Product fetched successfully" });
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};

export const productController = {
  getAll,
  create,
  update,
  deleteById,
  getById
};