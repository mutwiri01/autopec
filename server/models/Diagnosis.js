const mongoose = require('mongoose');

const diagnosisSchema = new mongoose.Schema({
  carModel: { type: String, required: true },
  symptoms: [{ type: String, required: true }],
  diagnosis: { type: String, required: true },
});

module.exports = mongoose.model('Diagnosis', diagnosisSchema);