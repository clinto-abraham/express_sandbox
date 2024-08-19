const express = require('express');
const router = express.Router();

const pdfRoutes = require('./pdfRoutes.js')
router.use('/pdf', pdfRoutes);

// const userRoutes = require('./userRoutes');
// const authRoutes = require('./authRoutes');

// router.use('/users', userRoutes);
// router.use('/auth', authRoutes);

module.exports = router;
