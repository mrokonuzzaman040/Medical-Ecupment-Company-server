const express = require('express');
const router = express.Router();
const { generateToken } = require('../controllers/auth.controller');

// /api/auth
router.post('/login', generateToken);

module.exports = router;
