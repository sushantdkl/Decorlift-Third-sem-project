import { User } from "../../models/index.js";
import { generateToken } from "../../security/jwt-util.js";

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
import bcrypt from "bcrypt";

const login = async (req, res) => {
  try {
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
    return res.status(200).send({
      token,
      user: userData,
      message: "successfully logged in",
    });
  } catch (e) {
    console.log("Login error:", e);
    console.log(e);
    res.status(500).json({ error: "Failed to login" });
  }
};

/**
 *  init
 */

const init = async (req, res) => {
  try {
    const user = req.user.user;
    delete user.password;
    res
      .status(201)
      .send({ data: user, message: "successfully fetched current  user" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const authController = {
  login,
  init,
};
