// User controller for managing user operations
import { User } from '../../models/index.js';
import bcrypt from 'bcrypt';

/**
 * Fetch all users
 */
const getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send({ data: users, message: "Successfully fetched users" });
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

/**
 * Create new user
 */
const create = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      gender,
      mobile,
      securityQuestion,
      securityAnswer,
    } = req.body;

    if (!email || !firstName || !lastName || !password || !securityQuestion || !securityAnswer) {
      return res.status(400).send({ message: "Invalid payload" });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ 
        error: "Email already exists. Please use a different email address." 
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name: `${firstName} ${lastName}`,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      gender,
      mobile,
      securityQuestion,
      securityAnswer,
    });

    res.status(201).send({ data: user, message: "User created successfully" });
  } catch (e) {
    console.error("User creation error:", e);
    
    // Handle unique constraint violation for email
    if (e.name === 'SequelizeUniqueConstraintError') {
      if (e.errors && e.errors[0] && e.errors[0].path === 'email') {
        return res.status(409).json({ 
          error: "Email already exists. Please use a different email address." 
        });
      }
      return res.status(409).json({ 
        error: "This information already exists in our system." 
      });
    }
    
    res.status(500).json({ error: e.message || "Failed to create user" });
  }
};

/**
 * Update existing user
 */
const update = async (req, res) => {
  try {
    const { id = null } = req.params;
    const {
      firstName,
      lastName,
      email,
      password,
      gender,
      mobile,
    } = req.body;

    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    user.name = `${firstName} ${lastName}`;
    user.firstName = firstName;
    user.lastName = lastName;
    user.gender = gender;
    user.mobile = mobile;
    user.email = email;

    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    await user.save();
    res.status(200).send({ data: user, message: "User updated successfully" });
  } catch (e) {
    console.error("User update error:", e);
    res.status(500).json({ error: "Failed to update user" });
  }
};

/**
 * Delete user by ID
 */
const delelteById = async (req, res) => {
  try {
    const { id = null } = req.params;
    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    await user.destroy();
    res.status(200).send({ message: "User deleted successfully" });
  } catch (e) {
    console.error("Delete error:", e);
    res.status(500).json({ error: "Failed to delete user" });
  }
};

/**
 * Fetch user by ID
 */
const getById = async (req, res) => {
  try {
    const { id = null } = req.params;
    const user = await User.findOne({ where: { id } });

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    res.status(200).send({ data: user, message: "User fetched successfully" });
  } catch (e) {
    console.error("Fetch by ID error:", e);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

export const userController = {
  getAll,
  create,
  update,
  delelteById,
  getById,
};
