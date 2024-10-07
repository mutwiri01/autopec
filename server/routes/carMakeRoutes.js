// routes/carMakeRoutes.js
const express = require('express');
const router = express.Router();
const carMakeController = require('../controllers/carMakeController');

// Get all car makes
router.get('/', carMakeController.getAllCarMakes);

// Add a new car make
router.post('/', carMakeController.addCarMake);

module.exports = router;
