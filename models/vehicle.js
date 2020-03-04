const mongoose = require('mongoose');

const Vehicle = new mongoose.Schema({
    model: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    vehicles_available: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Vehicle', Vehicle);
