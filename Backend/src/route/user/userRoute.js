// routes/userRouter.js

import express from "express";
import { userController } from "../../controller/index.js";

const router = express.Router();

// Get all users
router.get("/", userController.getAll);

// Create a new user
router.post("/", userController.create);

// Update an existing user by ID
router.put("/:id", userController.update);

// Get a user by ID
router.get("/:id", userController.getById);

// Delete a user by ID
router.delete("/:id", userController.delelteById);

export { router as userRouter };
// Export the user router