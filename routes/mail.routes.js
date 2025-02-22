const express = require('express');
const router = express.Router();

const { sendMail } = require('../controllers/mail.controller');

// POST /api/mail
router.post('/', sendMail);

module.exports = router;
