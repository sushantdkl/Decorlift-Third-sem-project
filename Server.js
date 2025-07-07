// server.js
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/decorliftDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('✅ Connected to MongoDB');
});

// Define a User Schema
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'vscode'))); // serve HTML, CSS, etc.

// Serve the signup form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'vscode', 'signup.html'));
});

// Handle form submission
app.post('/signup', async (req, res) => {
  const {
    'first-name': firstName,
    'last-name': lastName,
    email,
    password,
    'confirm-password': confirmPassword,
  } = req.body;

  if (password !== confirmPassword) {
    return res
      .status(400)
      .send('<h2>Error:</h2><p>Passwords do not match.</p><a href="/">Go Back</a>');
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .send('<h2>Error:</h2><p>Email already registered.</p><a href="/">Go Back</a>');
    }

    // Save user
    const user = new User({ firstName, lastName, email, password });
    await user.save();

    res.set('Content-Type', 'text/html');
    res.send(`
      <h2>Signup Successful</h2>
      <p>Welcome, ${firstName} ${lastName}!</p>
      <a href="/">Back to Home</a>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error. Try again later.');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
