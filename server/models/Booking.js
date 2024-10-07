const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  customerName: String,
  carModel: String,
  carRegistrationNumber: String,
  date: Date,
  status: String,
  carMake: String,
  problemDescription: String,
  diagnosis: String
});

module.exports = mongoose.model('Booking', BookingSchema);
