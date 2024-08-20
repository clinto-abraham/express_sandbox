'use strict';

// const ejsService = require('../services/ejsService');

const renderEJS = async (req, res, next) => {
    try {
        console.log(req.route,7, req)
        const params = req.params;
        const ejs_file_path = req.params.ejs_file_path;
        const render_ejs_path = ejs_file_path + '/' + params['0']
        // const result = await ejsService.renderEJS(req);
        res.render(render_ejs_path, {})
    } catch (error) {
        next(error);
    } finally{
        next();
    }
};

module.exports = {
    renderEJS
}

// template/digi_loan/insurance/NIC_insurance_disclosure
