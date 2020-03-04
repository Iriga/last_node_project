let Driver = require('../models/driver');
let VehicleController = require('../controllers/vehicleController');
let Vehicle = require('../models/vehicle');

exports.getAllDrivers = async function(req, res) {

    try {
        const drivers = await Driver.find();
        res.json(drivers);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

exports.saveDriver = async function(req, res) {

    const driver = new Driver({
        age: req.body.age,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        driver_license: req.body.driver_license
    })

    try {
        const newDriver = await driver.save();
        res.status(200).json(newDriver);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.getDriver = async function(req, res, next) {

    try {
        driver = await Driver.findById(req.params.id);
        if(driver === null) {
            return res.status(400).json({message: `There isn't a Driver with the id ${req.params.id}`})
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

    res.driver = driver;
    next();

}

exports.getDriverById = async function(req, res) {
    res.json(res.driver)
}

exports.updateDriver = async function(req, res) {
    try {
        const editedDriver = await Driver.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(editedDriver);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

exports.addVehicle = async function(req, res) {

    try {
        const vehicle = await VehicleController.getVehicleById(req.params.vehicle_id);
        const vehicleToAdd = { id: vehicle.id, model: vehicle.model, year:vehicle.year };
        const driver = await Driver.findById(req.params.driver_id);

        if (driver === null){
            return status(404).json({message: `There isn't a Driver with the id ${req.params.driver_id}`})
        }

        driver.vehicles.push(vehicleToAdd)
        vehicle.vehicles_available = vehicle.vehicles_available - 1;
        vehicle.save();
        driver.save()

        res.json(driver);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}
