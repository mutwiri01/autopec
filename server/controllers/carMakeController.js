// controllers/carMakeController.js
const CarMake = require("../models/CarMake");

// Get all car makes and models
exports.getAllCarMakes = async (req, res) => {
  try {
    const carMakes = await CarMake.find();
    res.json(carMakes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new car make and models

exports.addCarMake = async (req, res) => {
  const carMakes = req.body; // Expecting an array of car makes

  try {
    const savedCarMakes = await CarMake.insertMany(carMakes); // Bulk insert
    res.status(201).json(savedCarMakes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
