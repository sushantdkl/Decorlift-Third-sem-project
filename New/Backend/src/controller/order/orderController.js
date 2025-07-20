import { Order, Product, User } from '../../models/index.js';
 
/**
* Fetch all orders for a user
*/
const getAll = async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { UserId: req.user.id },
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
 
    const order = await Order.create({
      UserId: req.user.id,
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
 