const express = require( 'express' );
const router = express.Router();
const path = require( 'path' );
const { uploadImage, uploadFile } = require( '../controllers/file.controller' );

// serve images and files as static
router.use( '/image', express.static( 'upload/images' ) );
router.use( '/file', express.static( 'upload/files' ) );

router.post( '/upload/image', uploadImage.single( 'image' ), ( req, res ) => {
    return res.json( {
        success: 1,
        image_url: `https://api.khanbiotech.com/upload/images/${req.file.filename}`
    } );
} );

router.post( '/upload/file', uploadFile.single( 'file' ), ( req, res ) => {
    return res.json( {
        success: 1,
        file_url: `https://api.khanbiotech.com/upload/files/${req.file.filename}`
    } );
} );

// For retrieving a single image or file by name
router.get( '/product/:image', ( req, res ) => {
    res.sendFile( path.join( __dirname, '..', 'upload/images', req.params.image ) );
} );
router.get( '/catalogue/:file', ( req, res ) => {
    res.sendFile( path.join( __dirname, '..', 'upload/files', req.params.file ) );
} );

// etc. for imagebucket if needed

module.exports = router;
