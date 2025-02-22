const jwt = require( 'jsonwebtoken' );

exports.generateToken = ( req, res ) => {
    const userData = req.body;
    const token = jwt.sign(
        userData,
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1h' }
    );
    res.send( { token } );
};
