// db.js

// Import dotenv module to load environment variables from .env file
require("dotenv").config();

// Import mongoose module for MongoDB interaction
const mongoose = require("mongoose");

// Set strictQuery option to suppress deprecation warning
mongoose.set('strictQuery', true);

// Define connectDB function to establish connection with MongoDB
const connectDB = async () => {
    try {
        // Connect to MongoDB using the connection URL from environment variables
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        // Log a success message upon successful connection
        console.log(`AUTOPEC DATABASE CONNECTED`);
    } catch (error) {
        // Log an error message if connection fails
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

// Export the connectDB function to make it accessible from other modules
module.exports = connectDB;