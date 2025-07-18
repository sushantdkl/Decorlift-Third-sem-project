import { User } from "../../models/index.js";
import { generateToken } from "../../security/jwt-util.js";
<<<<<<< HEAD

import bcrypt from "bcrypt";

const login = async (req, res) => {
  try {
    console.log("Login attempt with email:", req.body.email);
    if (req.body.email == null) {
      console.log("Email is missing in request");
      return res.status(400).send({ message: "email is required" });
    }
    if (req.body.password == null) {
      console.log("Password is missing in request");
=======
import crypto from "crypto";
>>>>>>> 49cd4cef27059ea0a48263253e45aefb36d634d8
import bcrypt from "bcrypt";
import { Op } from "sequelize"; // Required for expiry comparison

// LOGIN
const login = async (req, res) => {
  try {
<<<<<<< HEAD
    if (req.body.email == null) {
      return res.status(400).send({ message: "email is required" });
    }
    if (req.body.password == null) {
      return res.status(400).send({ message: "password is required" });
    }
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      console.log("User not found for email:", req.body.email);
      return res.status(404).send({ message: "user not found" });
    }
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordMatch) {
      console.log("Invalid password for user:", req.body.email);
      return res.status(401).send({ message: "invalid password" });
    }
    const token = generateToken({ user: user.toJSON() });
    const userData = user.toJSON();
    delete userData.password;
    console.log("Login successful for user:", req.body.email);
=======
    const { email, password } = req.body;

    if (!email) return res.status(400).send({ message: "email is required" });
    if (!password) return res.status(400).send({ message: "password is required" });

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).send({ message: "user not found" });

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return res.status(401).send({ message: "invalid password" });

    const token = generateToken({ user: user.toJSON() });
    const userData = user.toJSON();
    delete userData.password;

>>>>>>> 49cd4cef27059ea0a48263253e45aefb36d634d8
    return res.status(200).send({
      token,
      user: userData,
      message: "successfully logged in",
    });
  } catch (e) {
<<<<<<< HEAD
    console.log("Login error:", e);
    console.log(e);
=======
    console.error(e);
>>>>>>> 49cd4cef27059ea0a48263253e45aefb36d634d8
    res.status(500).json({ error: "Failed to login" });
  }
};

// INIT
const init = async (req, res) => {
  try {
    const user = req.user?.user || req.user;
    delete user.password;

    res.status(200).send({
      data: user,
      message: "successfully fetched current user",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

// FORGOT PASSWORD
const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(404).send({ message: "User not found" });

    const resetToken = crypto.randomBytes(32).toString("hex");
    const passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    const passwordResetExpires = Date.now() + 60 * 60 * 1000; // 1 hour

    user.resetPasswordToken = passwordResetToken;
    user.resetPasswordExpires = passwordResetExpires;
    await user.save();

    // In a real app: Send resetToken via email
    console.log(`Password reset token for ${email}: ${resetToken}`);

    res.status(200).send({ message: "Password reset token sent to your email" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to send password reset token" });
  }
};

// RESET PASSWORD
const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
      where: {
        resetPasswordToken: hashedToken,
        resetPasswordExpires: { [Op.gt]: Date.now() },
      },
    });

    if (!user) {
      return res.status(400).send({ message: "Password reset token is invalid or has expired" });
    }

    user.password = await bcrypt.hash(password, 10);
    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;
    await user.save();

    res.status(200).send({ message: "Password has been reset successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to reset password" });
  }
};

// EXPORT CONTROLLER
export const authController = {
  login,
  init,
  forgotPassword,
  resetPassword,
};
