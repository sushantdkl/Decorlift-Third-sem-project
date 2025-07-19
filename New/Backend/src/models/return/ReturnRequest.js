import { DataTypes } from "sequelize";
import { sequelize } from "../../database/index.js";

export const ReturnRequest = sequelize.define('ReturnRequest', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Orders', // Name of the table
      key: 'id',
    },
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  requestType: {
    type: DataTypes.ENUM('refund', 'exchange'),
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('Pending', 'Approved', 'Rejected', 'Completed'),
    defaultValue: 'Pending',
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'ReturnRequests',
  timestamps: true,
});

