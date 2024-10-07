// models/CarMake.js
const mongoose = require('mongoose');

const carMakeSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true, // Ensure this is set to true
  },
  models: {
    type: [String], // Array of strings for models
    required: true, // Optional: make this required if you want at least one model
  },
});

const CarMake = mongoose.model('CarMake', carMakeSchema);

module.exports = CarMake;
    