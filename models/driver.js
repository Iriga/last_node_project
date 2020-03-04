const mongoose = require('mongoose');

const Driver = new mongoose.Schema({
    age: {
        type: Number,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    driver_license: {
        type: String,
        required: true
    },
    vehicles: {
        type: [],
        required: false
    }
})

module.exports = mongoose.model('Driver', Driver);