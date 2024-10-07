const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow the frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  credentials: true // If you are sending cookies or authentication data
}));
app.use(express.json()); // Ensure this is defined before routes

// Connect to MongoDB
connectDB();

// Define routes
const carMakeRoutes = require('./routes/carMakeRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const diagnosisRoutes = require('./routes/diagnosisRoutes');

// Use routes
app.use('/api/carmakes', carMakeRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/diagnosis', diagnosisRoutes);


app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Resource API 9' });
});

// Export the app
module.exports = app;  // Export app for serverless deployment
