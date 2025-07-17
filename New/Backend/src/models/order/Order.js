import { DataTypes } from "sequelize";
import { sequelize } from "../../database/index.js";
 
export const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalCost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  shippingCost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  estimatedTax: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  subTotal: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  customerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deliveryMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "Delivered",
  },
});
 
 