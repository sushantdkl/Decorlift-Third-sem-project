import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config();

export const sequelize = new Sequelize(
  "Decorlift",
  "postgres",
  "root", // Updated to match the new DB_PASSWORD
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false
  }
);

export const db = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database authenticated successfully.");
    
    await sequelize.sync({alter:true})
    console.log("Database synchronized successfully.");

  } catch (e) {
    console.error("Failed to connect to the database:", e);
  }
}



