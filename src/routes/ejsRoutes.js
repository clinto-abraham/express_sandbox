'use strict';

const express = require('express');
const router = express.Router();
const ejsController = require('../controllers/ejsController.js');
const loggingHandler = require('../middlewares/loggingHandler.js');

router.get('/:ejs_file_path/*', loggingHandler, ejsController.renderEJS);

module.exports = router;
