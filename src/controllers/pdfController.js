'use strict';

const pdfService = require('../services/pdfService');

const createPDF = async (req, res, next) => {
    try {
        const result = await pdfService.createPDF(req);
        res.status(result.status_code).send(result);
    } catch (error) {
        next(error);
    } finally{
        next();
    }
};

module.exports = {
    createPDF
}

