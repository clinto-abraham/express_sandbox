'use strict';

const express = require('express');
const router = express.Router();
const pdfController = require('../controllers/pdfController.js');
const loggingHandler = require('../middlewares/loggingHandler.js');

router.post('/create-doc', loggingHandler, pdfController.createPDF);

module.exports = router;
