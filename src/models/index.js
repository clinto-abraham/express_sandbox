const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const models = {
    User: require('./user')(sequelize, Sequelize.DataTypes),
    Post: require('./post')(sequelize, Sequelize.DataTypes),
};

Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
