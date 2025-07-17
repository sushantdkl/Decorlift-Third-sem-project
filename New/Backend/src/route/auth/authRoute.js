// routes/authRouter.js

import express from "express";
import { authController } from "../../controller/index.js";
import { authenticateToken } from "../../middleware/token-middleware.js";

const router = express.Router();

// Get current authenticated user info
router.get("/init", authenticateToken, authController.init);

// Login user
router.post("/login", authController.login);

// Forgot password – generate and send reset token
router.post("/forgot-password", authController.forgotPassword);

// Reset password using token
router.post("/reset-password/:token", authController.resetPassword);

export { router as authRouter };
