const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRouter = require('./routes/auth/auth-routes');

// Using environment variables for sensitive credentials
const DB_URI = process.env.DB_URI || 'mongodb+srv://lavish637728:lavish637728@sachinecom.uragf.mongodb.net/';

mongoose.connect(DB_URI)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 3000;

// CORS Configuration
app.use(
  cors({
    origin: 'http://localhost:5173', // Fixed extra space
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: [
      "Content-Type",
      "Authorization", // Fixed typo
      "Cache-Control",
      "Expires",
      "Pragma"
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
