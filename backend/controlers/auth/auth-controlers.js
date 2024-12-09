const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/Users')

//register

const registerUser = async (req, res) => {
    console.log(req.body); // Add this to inspect the incoming data
    try {
      const { userName, email, password } = req.body;
  
      // Validate if email and password are provided
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
  
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
      }
  
      const newUser = new User({ userName, email, password });
      await newUser.save();
  
      res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
};
  
  
//login

//logout


//auth midelware


module.exports = {registerUser}