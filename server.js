const express = require( 'express' );
const app = express();
const multer = require( "multer" );
const path = require( "path" );

// storage engine 
const imageStorage = multer.diskStorage( {
    destination: './upload/images',
    filename: ( req, file, cb ) => {
        return cb( null, `${file.fieldname}_${Date.now()}${path.extname( file.originalname )}` )
    }
} )

const upload = multer( {
    storage: imageStorage,
    limits: {
        fileSize: 1000000
    }
} )
app.use( '/image', express.static( 'upload/images' ) );
app.post( "/upload", upload.single( 'image' ), ( req, res ) => {

    res.json( {
        success: 1,
        profile_url: `https://api.khanbiotech.com/product/${req.file.filename}`
    } )
} )

app.get( "/product/:image", ( req, res ) => {
    res.sendFile( path.join( __dirname, `upload/images/${req.params.image}` ) )
} );


//  file upload error handler
const fileStorage = multer.diskStorage( {
    destination: './upload/files',
    filename: ( req, file, cb ) => {
        return cb( null, `${file.fieldname}_${Date.now()}${path.extname( file.originalname )}` )
    }
} )

const fileUpload = multer( {
    storage: fileStorage,
    limits: {
        fileSize: 1000000
    }
} );

app.use( '/file', express.static( 'upload/files' ) );
app.post( "/uploadFile", fileUpload.single( 'file' ), ( req, res ) => {
    res.json( {
        success: 1,
        profile_url: `https://api.khanbiotech.com/${req.file.filename}`
    } )
} );

app.get( "/product/:file", ( req, res ) => {
    res.sendFile( path.join( __dirname, `upload/files/${req.params.file}` ) )
} );

// error handler
app.use( ( req, res, next ) => {
    res.json( {
        success: 0,
        message: "Page not found"
    } )
} );


function errHandler( err, req, res, next ) {
    if ( err instanceof multer.MulterError ) {
        res.json( {
            success: 0,
            message: err.message
        } )
    }
}
app.use( errHandler );

app.listen( 3000, () => {
    console.log( "Server is running on port 3000" );
} );