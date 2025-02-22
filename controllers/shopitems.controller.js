const connection = require( '../config/db' );

exports.createShopItem = ( req, res ) => {
    const { name, brand, countryorigin, price, discountprice, specification, imageurls } = req.body;
    const sql = `INSERT INTO Products SET 
    name=?, brand=?, countryorigin=?, price=?, discountprice=?, specification=?, imageurls=?`;

    connection.query(
        sql,
        [ name, brand, countryorigin, price, discountprice, specification, JSON.stringify( imageurls ) ],
        ( err ) => {
            if ( err ) return res.status( 500 ).send( err );
            return res.status( 200 ).send( 'Product added.' );
        }
    );
};

exports.getShopItems = ( req, res ) => {
    connection.query( 'SELECT * FROM Products', ( err, results ) => {
        if ( err ) return res.status( 500 ).send( err );
        return res.status( 200 ).json( results );
    } );
};

exports.getShopItemById = ( req, res ) => {
    const { id } = req.params;
    connection.query( 'SELECT * FROM Products WHERE id = ?', [ id ], ( err, results ) => {
        if ( err ) return res.status( 500 ).send( err );
        return res.status( 200 ).json( results );
    } );
};

exports.deleteShopItemById = ( req, res ) => {
    const { id } = req.params;
    connection.query( 'DELETE FROM Products WHERE id = ?', [ id ], ( err ) => {
        if ( err ) return res.status( 500 ).send( err );
        return res.status( 200 ).send( 'Product deleted.' );
    } );
};
