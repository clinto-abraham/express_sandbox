'use strict';

const express = require('express');
const router = express.Router();
const pdfController = require('../controllers/pdfController');
const loggingHandler = require('../middlewares/loggingHandler');

router.post('/create-doc', loggingHandler, pdfController.createPDF);

module.exports = router;
