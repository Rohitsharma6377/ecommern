const express = require('express');
const router = express.Router();

// Import Controllers
const { registerUser } = require('../../controlers/auth/auth-controlers');

// Define Routes
router.post('/register', registerUser);

// Export Router
module.exports = router;
