import { Product } from '../../models/index.js';
 
const getAll = async (req, res) => {
  try {
    // This is a placeholder. You may need to implement your own logic for product requests.
    const requests = await Product.findAll({ where: { requested: true } });
    res.status(200).send({ data: requests, message: "Successfully fetched product requests" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to fetch product requests' });
  }
};
 
const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // Expect 'approved' or 'declined'
    const product = await Product.findByPk(id);
 
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
 
    if (status === 'approved') {
      product.requested = false; // Or some other logic
    } else if (status === 'declined') {
      // Handle decline logic
    }
 
    await product.save();
 
    res.status(200).send({ data: product, message: "Status updated successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to update status' });
  }
};
 
export const requestController = {
  getAll,
  updateStatus
};
 