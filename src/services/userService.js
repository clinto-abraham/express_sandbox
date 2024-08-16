const { User } = require('../models');

exports.getAllUsers = async () => {
    return await User.findAll();
};

// Add more user-related services as needed
