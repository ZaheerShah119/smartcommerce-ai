const express = require("express");
const router = express.Router();
const User = require("../models/User");

// USER REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ name, email, password });
    const savedUser = await user.save();
    
    res.status(201).json({
      _id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
      message: "Registration successful!"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// USER LOGIN (Production Style Payload)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      message: "Login successful!"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;