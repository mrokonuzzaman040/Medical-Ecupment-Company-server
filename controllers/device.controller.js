const connection = require( '../config/db' );

// Create a new device record
exports.createDevice = ( req, res ) => {
    const device = req.body;
    connection.query( 'INSERT INTO device SET ?', [ device ], ( err, results ) => {
        if ( err ) {
            return res.status( 500 ).send( err );
        }
        return res.status( 200 ).send( 'Device added successfully.' );
    } );
};

// Get all device records
exports.getAllDevices = ( req, res ) => {
    connection.query( 'SELECT * FROM device', ( err, results ) => {
        if ( err ) {
            return res.status( 500 ).send( err );
        }
        return res.status( 200 ).json( results );
    } );
};

// Get a single device record by ID
exports.getDeviceById = ( req, res ) => {
    const { id } = req.params;
    connection.query( 'SELECT * FROM device WHERE id = ?', [ id ], ( err, results ) => {
        if ( err ) {
            return res.status( 500 ).send( err );
        }
        if ( !Array.isArray( results ) || results.length === 0 ) {
            return res.status( 404 ).send( 'Device not found.' );
        }
        return res.status( 200 ).json( results[ 0 ] );
    } );
};

// Update a device record by ID
exports.updateDevice = ( req, res ) => {
    const { id } = req.params;
    const updatedData = req.body;
    connection.query( 'UPDATE device SET ? WHERE id = ?', [ updatedData, id ], ( err ) => {
        if ( err ) {
            return res.status( 500 ).send( err );
        }
        return res.status( 200 ).send( 'Device updated successfully.' );
    } );
};

// Delete a device record by ID
exports.deleteDevice = ( req, res ) => {
    const { id } = req.params;
    connection.query( 'DELETE FROM device WHERE id = ?', [ id ], ( err ) => {
        if ( err ) {
            return res.status( 500 ).send( err );
        }
        return res.status( 200 ).send( 'Device deleted successfully.' );
    } );
};
