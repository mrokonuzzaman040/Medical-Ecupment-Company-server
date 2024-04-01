const express = require( 'express' );
const app = express();
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );

const mySql = require( 'mysql2' );
const cors = require( 'cors' );
const jwt = require( 'jsonwebtoken' );
require( 'dotenv' ).config();

const multer = require( "multer" );
const path = require( "path" );


const corsOptions = {
    origin: [ "https://khanbiotech.com", "http://localhost:5173" ],
    methods: "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    allowedHeaders: [ "Content-Type", "Authorization" ],
    credentials: true,
    optionsSuccessStatus: 200
}

// const corsOptions = {
//     headers: {
//         "Access-Control-Allow-Origin": [ "https://khanbiotech.com", "http://localhost:5173" ],
//         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//         'Content-Type': 'multipart/form-data',
//     },
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200
// }

app.use( cors( corsOptions ) );

const connection = mySql.createConnection( {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
} );

const port = process.env.PORT || 3000;


app.post( '/api/jwt', ( req, res ) => {
    const user = req.body;
    const token = jwt.sign( user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' } );
    res.send( { token } );
} );


app.get( '/api', ( req, res ) => {
    res.send( {
        message: 'Thank You For Visiting The Test API. This API is working well. No problem here.',
    } );
} );


// Post operations
app.post( '/api/bioreagent', ( req, res ) => {
    const bioreagent = req.body;
    connection.query( 'INSERT INTO bioreagent SET ?', [ bioreagent ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( 'Product added' );
    } );
} );


app.post( '/api/coadevice', ( req, res ) => {
    const coadevice = req.body;
    connection.query( 'INSERT INTO coadevice SET ?', [ coadevice ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( 'Product added' );
    } );
} );

app.post( '/api/device', ( req, res ) => {
    const device = req.body;
    connection.query( 'INSERT INTO device SET ?', [ device ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( 'Product added' );
    } );
} );

app.post( '/api/elsreagnt', ( req, res ) => {
    const elsreagnt = req.body;
    connection.query( 'INSERT INTO elsreagnt SET ?', [ elsreagnt ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( 'Product added' );
    } );
} );


app.post( '/api/serreagent', ( req, res ) => {
    const serreagent = req.body;
    connection.query( 'INSERT INTO serreagent SET ?', [ serreagent ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( 'Product added' );
    } );
} );

app.post( '/api/machine', ( req, res ) => {
    const machine = req.body;
    connection.query( 'INSERT INTO machine SET ?', [ machine ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( 'Product added' );
    } );
} );

// Delete operations

app.delete( '/api/bioreagent/:id', ( req, res ) => {
    const id = req.params.id;
    connection.query( 'DELETE FROM bioreagent WHERE id = ?', [ id ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( 'Product deleted' );
    }
    );
} );

app.delete( '/api/coadevice/:id', ( req, res ) => {
    const id = req.params.id;
    connection.query( 'DELETE FROM coadevice WHERE id = ?', [ id ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send
                ( err );
            return;
        }
        res.status( 200 ).send( 'Product deleted' );
    } );
} );

app.delete( '/api/device/:id', ( req, res ) => {
    const id = req.params.id;
    connection.query( 'DELETE FROM device WHERE id = ?', [ id ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send
                ( err );
            return;
        }
        res.status( 200 ).send( 'Product deleted' );
    } );
} );

app.delete( '/api/elsreagnt/:id', ( req, res ) => {
    const id = req.params.id;
    connection.query( 'DELETE FROM elsreagnt WHERE id = ?', [ id ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send
                ( err );
            return;
        }
        res.status( 200 ).send( 'Product deleted' );
    } );
} );

app.delete( '/api/serreagent/:id', ( req, res ) => {
    const id = req.params.id;
    connection.query( 'DELETE FROM serreagent WHERE id = ?', [ id ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send
                ( err );
            return;
        }
        res.status( 200 ).send( 'Product deleted' );
    } );
} );

app.delete( '/api/machine/:id', ( req, res ) => {
    const id = req.params.id;
    connection.query( 'DELETE FROM machine WHERE id = ?', [ id ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send
                ( err );
            return;
        }
        res.status( 200 ).send( 'Product deleted' );
    } );
} );

// Get operations

app.get( '/api/bioreagent', ( req, res ) => {
    connection.query( 'SELECT * FROM bioreagent', ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send
                ( err );
            return;
        }
        res.status( 200 ).send( results );
    } );
} );

app.get( '/api/coadevice', ( req, res ) => {
    connection.query( 'SELECT * FROM coadevice', ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send
                ( err );
            return;
        }
        res.status( 200 ).send( results );
    } );
} );

app.get( '/api/device', ( req, res ) => {
    connection.query( 'SELECT * FROM device', ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send
                ( err );
            return;
        }
        res.status( 200 ).send( results );
    } );
} );

app.get( '/api/elsreagnt', ( req, res ) => {
    connection.query( 'SELECT * FROM elsreagnt', ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send
                ( err );
            return;
        }
        res.status( 200 ).send( results );
    } );
} );

app.get( '/api/serreagent', ( req, res ) => {
    connection.query( 'SELECT * FROM serreagent', ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send
                ( err );
            return;
        }
        res.status( 200 ).send( results );
    } );
} );

app.get( '/api/machine', ( req, res ) => {
    connection.query( 'SELECT * FROM machine', ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send
                ( err );
            return;
        }
        res.status( 200 ).send( results );
    } );
} );

app.get( '/api/machine/:id', ( req, res ) => {
    const id = req.params.id;
    connection.query( 'SELECT * FROM machine WHERE id = ?', [ id ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( results );
    } );
} );

// Update operations

app.put( '/api/bioreagent/:id', ( req, res ) => {
    const id = req.params.id;
    const bioreagent = req.body;
    connection.query( 'UPDATE bioreagent SET ? WHERE id = ?', [ bioreagent, id ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( 'Product updated' );
    } );
} );

app.put( '/api/coadevice/:id', ( req, res ) => {
    const id = req.params.id;
    const coadevice = req.body;
    connection.query( 'UPDATE coadevice SET ? WHERE id = ?', [ coadevice, id ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( 'Product updated' );
    } );
} );

app.put( '/api/device/:id', ( req, res ) => {
    const id = req.params.id;
    const device = req.body;
    connection.query( 'UPDATE device SET ? WHERE id = ?', [ device, id ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( 'Product updated' );
    } );
} );

app.put( '/api/elsreagnt/:id', ( req, res ) => {
    const id = req.params.id;
    const elsreagnt = req.body;
    connection.query( 'UPDATE elsreagnt SET ? WHERE id = ?', [ elsreagnt, id ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( 'Product updated' );
    } );
} );

app.put( '/api/serreagent/:id', ( req, res ) => {
    const id = req.params.id;
    const serreagent = req.body;
    connection.query( 'UPDATE serreagent SET ? WHERE id = ?', [ serreagent, id ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( 'Product updated' );
    } );
} );

app.put( '/api/machine/:id', ( req, res ) => {
    const id = req.params.id;
    const machine = req.body;
    connection.query( 'UPDATE machine SET ? WHERE id = ?', [ machine, id ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( 'Product updated' );
    } );
} );

// add product api for shop products add
app.post( '/api/shopitems', async ( req, res ) => {
    const { name, brand, countryorigin, price, discountprice, specification, imageurls } = req.body;
    const sql = 'INSERT INTO Products SET `name` = ?, `brand` = ?, `countryorigin` = ?, `price` = ?, `discountprice` = ?, `specification` = ?, `imageurls` = ?';
    connection.query( sql, [ name, brand, countryorigin, price, discountprice, specification, JSON.stringify( imageurls ) ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send(
                err
            );
            return;
        } else {
            res.status( 200 ).send( 'Product added' );
        }
    } );
} );


// get product api for shop products get
app.get( '/api/shopitems', ( req, res ) => {
    connection.query( 'SELECT * FROM Products', ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( results );
    } );
} );

// get product api for shop products get by id
app.get( '/api/shopitems/:id', ( req, res ) => {
    const id = req.params.id;
    connection.query( 'SELECT * FROM products WHERE id = ?', [ id ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( results );
    } );
} );

// delete product api for shop products delete
app.delete( '/api/shopitems/:id', ( req, res ) => {
    const id = req.params.id;
    connection.query( 'DELETE FROM Products WHERE id = ?', [ id ], ( err, results ) => {
        if ( err ) {
            res.status( 500 ).send( err );
            return;
        }
        res.status( 200 ).send( 'Product deleted' );
    } );
} );

// 
// Image and File Upload Section
// 

// storage engine 
const imageStorage = multer.diskStorage( {
    destination: './upload/images',
    filename: ( req, file, cb ) => {
        return cb( null, `${file.fieldname}_${Date.now()}${path.extname( file.originalname )}` );
    }
} );

const upload = multer( {
    storage: imageStorage,
    limits: {
        fileSize: 1000000
    }
} );
app.use( '/image', express.static( 'upload/images' ) );
app.post( "/upload/image", upload.single( 'image' ), ( req, res ) => {

    res.json( {
        success: 1,
        image_url: `https://api.khanbiotech.com/upload/images/${req.file.filename}`
    } );
} );

app.get( "/product/:image", ( req, res ) => {
    res.sendFile( path.join( __dirname, `upload/images/${req.params.image}` ) );
} );


//  file upload error handler
const fileStorage = multer.diskStorage( {
    destination: './upload/files',
    filename: ( req, file, cb ) => {
        return cb( null, `${file.fieldname}_${Date.now()}${path.extname( file.originalname )}` );
    }
} );

const fileUpload = multer( {
    storage: fileStorage,
    limits: {
        fileSize: 1000000
    }
} );

app.use( '/file', express.static( 'upload/files' ) );

app.post( "/upload/file", fileUpload.single( 'file' ), ( req, res ) => {
    res.json( {
        success: 1,
        file_url: `https://api.khanbiotech.com/upload/files/${req.file.filename}`
    } );
},

    app.get( "/catalogue/:file", ( req, res ) => {
        res.sendFile( path.join( __dirname, `upload/files/${req.params.file}` ) );
    } ) );

// upload multiple images
const imagebuckettorage = multer.diskStorage( {
    destination: './upload/imagebucket/',
    filename: function ( req, file, cb ) {
        const uniqueSuffix = Date.now() + '-' + Math.round( Math.random() * 1E9 );
        cb( null, file.fieldname + '-' + uniqueSuffix + path.extname( file.originalname ) );
    }
} );

const multipleUpload = multer( {
    storage: imagebuckettorage,
    limits: {
        fileSize: 1000000
    }
} );
app.use( '/imagebucket', express.static( 'upload/imagebucket' ) );

app.post( "/upload/imagebucket", multipleUpload.array( 'image', 10 ), ( req, res ) => {
    if ( !req.files ) {
        res.status( 400 ).json( { error: 'No file uploaded' } );
    } else {
        const imageUrls = req.files.map( file => `https://api.khanbiotech.com/upload/imagebucket/${file.filename}` );
        res.json( {
            success: 1,
            image_urls: imageUrls
        } );
    }
} );

app.get( "/upload/imagebucket/:image", ( req, res ) => {
    res.sendFile( path.join( __dirname, `upload/imagebucket/${req.params.image}` ) );
} );
// File and Image upload done


app.listen( port, () => {
    console.log( `Server is running on port ${port}` );
} );