import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { db, sequelize } from "./database/index.js"; // Make sure this connects to your DB
import {
  userRouter,
  authRouter,
  productRouter,
  contactRouter,
  addressRouter,
  orderRouter,
  returnRequestRouter,
  requestRouter,
} from "./route/index.js"; // Import all routers together
import dotenv from "dotenv";
import { authenticateToken } from "./middleware/token-middleware.js";
import uploadRouter from "./route/uploadRoutes.js";
import { createUploadsFolder } from "./security/helper.js";
import bcrypt from "bcrypt";
import cors from "cors";

// Load environment variables
dotenv.config();

const app = express();

// Enable CORS for all origins with specific options
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:3000', 'http://127.0.0.1:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Use port from env or fallback
const port = process.env.PORT || 4000;

// Parse JSON request bodies
app.use(bodyParser.json());

// Serve static files from uploads directory with correct path
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Public routes
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/contact", contactRouter);
app.use("/api/auth", authRouter);
// Apply authentication middleware to all routes below
app.use(authenticateToken);

// Authenticated routes
app.use("/api/addresses", addressRouter);
app.use("/api/orders", orderRouter);
app.use("/api/returns", returnRequestRouter);
app.use("/api/requests", requestRouter);

// File upload routes
app.use("/api/file", uploadRouter);

// Ensure uploads folder exists
createUploadsFolder();

// Create default admin if not exists
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

// Start server and connect to DB
const startServer = async () => {
  try {
    await db(); // Connect to the database first
    await createDefaultAdmin(); // Then create the default admin

    const server = app.listen(port, () => {
      console.log(`Project running on port ${port}`);
    });

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is already in use, trying again in 5 seconds...`);
        setTimeout(() => {
          server.close();
          startServer();
        }, 5000);
      }
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1); // Exit if the database connection fails
  }
};

startServer();
