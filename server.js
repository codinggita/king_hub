const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth')); // User authentication
app.use('/api/restaurants', require('./routes/restaurants')); // Restaurant details
app.use('/api/menu', require('./routes/menu')); // Menu items
app.use('/api/cart', require('./routes/cart')); // Cart management
app.use('/api/search', require('./routes/search')); // Search functionality

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  dbName: 'FoodDelivery'
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
