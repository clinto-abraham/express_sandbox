const authService = require('../services/authService');

exports.login = async (req, res, next) => {
    try {
        const token = await authService.login(req.body);
        res.json({ token });
    } catch (error) {
        next(error);
    }
};

// Add more authentication-related controllers as needed
