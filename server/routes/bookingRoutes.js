const express = require("express");
const Booking = require("../models/Booking"); // Adjust path based on your project structure

const router = express.Router();
const carMakes = {
  BMW: ["3 Series", "5 Series", "X3", "X5"],
  "Mercedes Benz": ["C-Class", "E-Class", "GLC", "S-Class"],
  Audi: ["A3", "A4", "Q5", "Q7"],
};

// Route to get car makes and models
router.get("/car-makes", (req, res) => {
  res.json(carMakes);
});

// Create a new booking
router.post("/", async (req, res) => {
  // '/' will map to '/api/bookings' as defined in app.js
  try {
    const booking = new Booking(req.body);
    const savedBooking = await booking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all bookings (Optional: For future use)
router.get("/", async (req, res) => {
  // '/' will map to '/api/bookings'
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
