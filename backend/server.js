const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express(); // Initialize app here
app.use(cors()); // Then apply the cors middleware

app.use(express.json());

// Routes

// Mongoose configuration
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://lavish637728:lavish637728@sachinecom.uragf.mongodb.net/';

mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.log(error));

// CORS Configuration
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma"
    ],
    credentials: true,
  })
);

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
