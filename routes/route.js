const express = require('express');
const router = express.Router();

const VehicleController = require('../controllers/vehicleController');
const DriverController = require('../controllers/driverController');


//VEHICLE
router.get('/vehicles', VehicleController.getAllVehicles);
router.post('/vehicles/save', VehicleController.saveVehicle);


//DRIVERS
router.get('/drivers', DriverController.getAllDrivers);
router.post('/drivers', DriverController.saveDriver);
router.put('/drivers/:id', DriverController.updateDriver);
router.get('/drivers/:id', DriverController.getDriver, DriverController.getDriverById);
router.post('/drivers/:driver_id/vehicles/:vehicle_id', DriverController.addVehicle);




module.exports = router;