const express = require('express');
const diagnosisController = require('../controllers/diagnosisController');

const router = express.Router();

// POST route for diagnosis
router.post('/', diagnosisController.performDiagnosis);  // Maps to '/api/diagnosis'

module.exports = router;
