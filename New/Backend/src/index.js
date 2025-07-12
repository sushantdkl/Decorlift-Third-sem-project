import express from "express";
import bodyParser from "body-parser";
import { db, sequelize } from "./database/index.js"; // Ensure this function connects to your database
import { userRouter, authRouter ,productRouter } from "./route/index.js"; // Combined import for clarity
import dotenv from "dotenv";
import { authenticateToken } from "./middleware/token-middleware.js";
import router from "./route/uploadRoutes.js";
import { createUploadsFolder } from "./security/helper.js";
import bcrypt from "bcrypt";
import cors from "cors";
// Load environment variables from .env file
dotenv.config();

const app = express();


// Middleware to enable CORS
app.use(cors());

// Use the port from environment variables or default to 5000
const port = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Apply authentication middleware to specific routes
app.use("/api/users", userRouter); // Public route
app.use("/api/products", productRouter); // Public route
app.use("/api/auth", authRouter); // Public route
app.use(authenticateToken); // Apply to routes that need authentication
app.use("/api/file", router);

// Create uploads folder if it doesn't exist
createUploadsFolder();

// Function to create default admin user if not exists
const createDefaultAdmin = async () => {
  try {
    const { User } = await import("./models/index.js");
    const adminEmail = "sushantdhakal@gmail.com";
    const admin = await User.findOne({ where: { email: adminEmail } });
    if (!admin) {
      const hashedPassword = await bcrypt.hash("admin123", 10);
      await User.create({
        name: "Admin",
        email: adminEmail,
        password: hashedPassword,
        securityQuestion: "Default admin question",
        securityAnswer: "Default admin answer",
        isAdmin: true,
      });
      console.log("Default admin user created");
    } else {
      console.log("Default admin user already exists");
    }
  } catch (error) {
    console.error("Error creating default admin user:", error);
  }
};

// Start the server and connect to the database
app.listen(4000, async function () {
  console.log(`Project running on port 2000`);
  await db();
  await createDefaultAdmin();
});
