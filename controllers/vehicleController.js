let Vehicle = require('../models/vehicle');

exports.getAllVehicles = async function(req, res) {

    try {
        const vehicles = await Vehicle.find();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.saveVehicle = async function(req, res) {

    const vehicle = new Vehicle({
        model: req.body.model,
        year: req.body.year,
        vehicles_available: req.body.vehicles_available
    })

    try {
        const newVehicle = await vehicle.save();
        res.status(201).json(newVehicle);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.getVehicleById = async function(vehicleId) {

    let vehicle = null;

    try {
        vehicle = await Vehicle.findById(vehicleId);
        if(vehicle === null) {
            return status(404).json({message: `There isn't a Vehicles with the id ${req.params.id}`})
        }
    } catch (error) {
        return status(500).json({message: error.message})
    }

    return vehicle;

}