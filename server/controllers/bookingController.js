const Booking = require('../models/Booking');



exports.createBooking = async (req, res) => {
  const {
    customerName,
    carModel,
    carRegistrationNumber,
    date,
    status,
    carMake,
    problemDescription,
    diagnosis // Add diagnosis in the controller
  } = req.body;

  // Ensure all required fields are present
  if (!customerName || !carModel || !carRegistrationNumber || !carMake || !problemDescription || !diagnosis) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const booking = new Booking({
      customerName,
      carModel,
      carRegistrationNumber,
      date,
      status,
      carMake,
      problemDescription,
      diagnosis // Ensure diagnosis is saved to the database
    });
    
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};




exports.confirmBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status: 'confirmed' }, { new: true });
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


