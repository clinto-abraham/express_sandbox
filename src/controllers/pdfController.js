const pdfService = require('../services/pdfService.js');

module.exports.createPDF = async (req, res, next) => {
    try {
        const result = await pdfService.createPDF(req);
        res.json(result);
    } catch (error) {
        next(error);
    } finally{
        next();
    }
};

