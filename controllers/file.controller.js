const path = require('path');
const multer = require('multer');

// Setup storage for images
const imageStorage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

// Setup storage for files
const fileStorage = multer.diskStorage({
  destination: './upload/files',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

// We can export different upload configs as needed:
exports.uploadImage = multer({
  storage: imageStorage,
  limits: { fileSize: 1000000 }
});

exports.uploadFile = multer({
  storage: fileStorage,
  limits: { fileSize: 1000000 }
});
