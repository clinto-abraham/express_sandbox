const Joi = require('joi');

module.exports = {
    register: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    }),
};
