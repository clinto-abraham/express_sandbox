const jwt = require('jsonwebtoken');
const { User } = require('../models');
const config = require('../config/config');

exports.login = async (credentials) => {
    const user = await User.findOne({ where: { email: credentials.email } });

    if (!user || user.password !== credentials.password) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id }, config.jwtSecret, { expiresIn: '1h' });
    return token;
};

// Add more authentication-related services as needed
