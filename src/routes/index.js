const express = require('express');
const router = express.Router();

const pdfRoutes = require('./pdfRoutes.js');
const ejsRoutes = require('./ejsRoutes.js');

router.use('/pdf', pdfRoutes);
router.use('/ejs', ejsRoutes);

// const userRoutes = require('./userRoutes');
// const authRoutes = require('./authRoutes');

// router.use('/users', userRoutes);
// router.use('/auth', authRoutes);

module.exports = router;
