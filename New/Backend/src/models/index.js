import { User } from "./user/User.js";
import { Product } from "./product/Product.js";
import { Contact } from "./contact/Contact.js";
import { Address } from "./address/Address.js";
import { ReturnRequest } from "./return/ReturnRequest.js";
import { Order } from "./order/Order.js";

User.hasMany(Order);
Order.belongsTo(User);

Product.hasMany(Order);
Order.belongsTo(Product);

Order.hasMany(ReturnRequest, { foreignKey: 'orderId' });
ReturnRequest.belongsTo(Order, { foreignKey: 'orderId' });

export { User, Product, Contact, Address, ReturnRequest, Order };
