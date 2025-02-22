// controllers/machine.controller.js
const connection = require( '../config/db' );

// Create a new machine record
exports.createMachine = ( req, res ) => {
    const machine = req.body;
    connection.query( 'INSERT INTO machine SET ?', [ machine ], ( err, results ) => {
        if ( err ) {
            return res.status( 500 ).send( err );
        }
        return res.status( 200 ).send( 'Machine added successfully.' );
    } );
};

// Get all machine records
exports.getAllMachines = ( req, res ) => {
    connection.query( 'SELECT * FROM machine', ( err, results ) => {
        if ( err ) {
            return res.status( 500 ).send( err );
        }
        return res.status( 200 ).json( results );
    } );
};

// Get a single machine record by ID
exports.getMachineById = ( req, res ) => {
    const { id } = req.params;
    connection.query( 'SELECT * FROM machine WHERE id = ?', [ id ], ( err, results ) => {
        if ( err ) {
            return res.status( 500 ).send( err );
        }
        if ( !Array.isArray( results ) || results.length === 0 ) {
            return res.status( 404 ).send( 'Machine not found.' );
        }
        return res.status( 200 ).json( results[ 0 ] );
    } );
};

// Update a machine record by ID
exports.updateMachine = ( req, res ) => {
    const { id } = req.params;
    const updatedData = req.body;
    connection.query( 'UPDATE machine SET ? WHERE id = ?', [ updatedData, id ], ( err ) => {
        if ( err ) {
            return res.status( 500 ).send( err );
        }
        return res.status( 200 ).send( 'Machine updated successfully.' );
    } );
};

// Delete a machine record by ID
exports.deleteMachine = ( req, res ) => {
    const { id } = req.params;
    connection.query( 'DELETE FROM machine WHERE id = ?', [ id ], ( err ) => {
        if ( err ) {
            return res.status( 500 ).send( err );
        }
        return res.status( 200 ).send( 'Machine deleted successfully.' );
    } );
};
