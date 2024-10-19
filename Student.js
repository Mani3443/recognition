const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    batch: { type: String, required: true },
    scores: { type: Map, of: Number }, // dynamic scores for various subjects/criteria
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Student', studentSchema);
