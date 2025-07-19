import { Order, Product, User } from '../../models/index.js';
 
/**
* Fetch all orders for a user
*/
const getAll = async (req, res) => {
  try {
    if (!req.user || !req.user.user || !req.user.user.id) {
      return res.status(401).json({ error: 'Unauthorized: User information missing in token' });
    }
    const userId = req.user.user.id;
    const orders = await Order.findAll({
      where: { UserId: userId },
      include: [Product],
    });
    res.status(200).send({ data: orders, message: "Successfully fetched orders" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};
 
/**
* Create new order
*/
const create = async (req, res) => {
  try {
    console.log("Creating order with body:", req.body);
    console.log("User from token:", req.user);
    const {
      productId,
      quantity,
      totalCost,
      shippingCost,
      estimatedTax,
      subTotal,
      customerName,
      address,
      phone,
      deliveryMethod,
    } = req.body;

    // Validate productId exists
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(400).json({ error: "Invalid productId: product not found" });
    }

    const userId = req.user.user ? req.user.user.id : req.user.id;
    const order = await Order.create({
      UserId: userId,
      ProductId: productId,
      quantity,
      totalCost,
      shippingCost,
      estimatedTax,
      subTotal,
      customerName,
      address,
      phone,
      deliveryMethod,
    });

    res.status(201).send({ data: order, message: "Order created successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to create order' });
  }
};
 
export const orderController = {
  getAll,
  create,
};
 