// middlewares/errorHandler.js
function errorHandler(err, req, res, next) {
    if (err.name === 'MulterError') {
      // handle multer-specific errors
      return res.status(400).json({ success: 0, message: err.message });
    }
  
    // handle any other errors
    return res.status(500).json({ success: 0, message: 'Server error', error: err });
  }
  
  module.exports = errorHandler;
  