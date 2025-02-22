const express = require('express');
const router = express.Router();

// import sub-route files:
const authRoutes = require('./auth.routes');
const bioreagentRoutes = require('./bioreagent.routes');
const shopitemsRoutes = require('./shopitems.routes');
const fileRoutes = require('./file.routes');
const mailRoutes = require('./mail.routes');
const machineRoutes = require('./machine.routes');
const deviceRoutes = require('./device.routes');

// example: /api/auth
router.use('/auth', authRoutes);

// /api/bioreagent
router.use('/bioreagent', bioreagentRoutes);

// /api/machine
router.use('/machine', machineRoutes);

// /api/device
router.use('/device', deviceRoutes);   

// /api/shopitems
router.use('/shopitems', shopitemsRoutes);

// /api/mail
router.use('/mail', mailRoutes);

// /api/file (for uploading files & images)
router.use('/', fileRoutes);

module.exports = router;
