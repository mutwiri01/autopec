const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the AUTOPEC CLOUD' });
});

// Export the app
module.exports = app; 