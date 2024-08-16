const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validationMiddleware = require('../middleware/validationMiddleware');
const authValidation = require('../validations/authValidation');

router.post('/login', validationMiddleware(authValidation.login), authController.login);

module.exports = router;
