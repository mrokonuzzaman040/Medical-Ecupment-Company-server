const express = require( 'express' );
const router = express.Router();
const {
    createDevice,
    getAllDevices,
    getDeviceById,
    updateDevice,
    deleteDevice,
} = require( '../controllers/device.controller' );

// POST /api/device - Create a new device record
router.post( '/', createDevice );

// GET /api/device - Retrieve all devices
router.get( '/', getAllDevices );

// GET /api/device/:id - Retrieve a device by its ID
router.get( '/:id', getDeviceById );

// PUT /api/device/:id - Update a device record by ID
router.put( '/:id', updateDevice );

// DELETE /api/device/:id - Delete a device record by ID
router.delete( '/:id', deleteDevice );

module.exports = router;
