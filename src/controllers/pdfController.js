const pdfService = require('../services/pdfService');

module.exports.createPDF = async (req, res, next) => {
    try {
        const result = await pdfService.createPDF(req.body);
        res.json({ result });
    } catch (error) {
        next(error);
    } finally{
        next();
    }
};

