// @ts-nocheck
require( 'dotenv' ).config();
const express = require( 'express' );
const cors = require( 'cors' );
const app = express();
const errorHandler = require( './middlewares/errorHandler' );

// Connect to DB
require( './config/db' ); // just executes the connection logic

// Middleware
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );
app.use( cors(/* your corsOptions if you want them */ ) );
app.use( errorHandler );

// Combine all routes
const allRoutes = require( './routes' );
app.use( '/api', allRoutes );

// Basic test route
app.get( '/api', ( req, res ) => {
    res.send( { message: 'API is working!' } );
} );

// Error Handling / 404
app.use( ( req, res ) => {
    res.status( 404 ).json( { success: 0, message: 'Page not found' } );
} );

// Start server
const port = process.env.PORT || 3000;
app.listen( port, () => {
    console.log( `Server is running on port ${port}` );
} );
