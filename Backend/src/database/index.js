import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
  }
);

export const db = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database authenticated successfully.");
    
    await sequelize.sync({force:false})
    console.log("Database synchronized successfully.");

  } catch (e) {
    console.error("Failed to connect to the database:", e);
  }
}



