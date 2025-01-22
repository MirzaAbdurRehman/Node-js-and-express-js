// index.js
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const connectDB = require('./db/db_connection');
// Connect to MongoDB Atlas
connectDB();

// For encryption Password
const bcrypt = require('bcryptjs');

const UserModel = require('./models/user_Signup_model');

// Middleware
app.use(bodyParser.json());

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Step 1: Check if the user exists
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'User not found!.' });
      }
  
      // Step 2: Compare the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
      // Step 3: Successful login
      res.status(200).json({
        status: '200',
        message: 'Login successful',
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          address: user.address,
          phone: user.phone,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error', error });
    }
  });

  // Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});