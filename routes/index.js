const express = require('express');
const router = express.Router();

// import sub-route files:
const authRoutes = require('./auth.routes');
const bioreagentRoutes = require('./bioreagent.routes');
const shopitemsRoutes = require('./shopitems.routes');
const fileRoutes = require('./file.routes');
const mailRoutes = require('./mail.routes');

// example: /api/auth
router.use('/auth', authRoutes);

// /api/bioreagent
router.use('/bioreagent', bioreagentRoutes);

// /api/shopitems
router.use('/shopitems', shopitemsRoutes);

router.use('/mail', mailRoutes);

// /api/file (for uploading files & images)
router.use('/', fileRoutes);

module.exports = router;
