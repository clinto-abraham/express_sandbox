'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./src/routes');
const errorMiddleware = require('./src/middlewares/errorHandler');

app.use(express.json());
app.use('/api', routes);
app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// const config = require('./src/config');
// const sequelize = require('./models').sequelize;
// sequelize.sync().then(() => {
//     app.listen(config.port, () => {
//         console.log(`Server is running on port ${config.port}`);
//     });
// });

