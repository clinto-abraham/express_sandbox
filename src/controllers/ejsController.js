'use strict';

// const ejsService = require('../services/ejsService');

const renderEJS = async (req, res, next) => {
    try {
        console.log(req.route,7, req)
        const params = req.params;
        const ejs_file_path = req.params.ejs_file_path;
        const render_ejs_path = ejs_file_path + '/' + params['0']
        // const result = await ejsService.renderEJS(req);
        res.render(render_ejs_path, {
            locals: {
                otherProperty: {
                    imgUrl: 'https://localhost:5606/',
                    host: 'https://localhost:5605',
                    component_details: { components: [Array] },
                    form_application_id: 6214,
                    integradoc_process_id: null,
                    email: 'adobetestmail999@yopmail.com',
                    url1: 'https://localhost:5606/api/digi-loan/downloadApplication/79d71c10b484e57228d21a3f60ecb268:931c1f8c6c5fc46637b48efa79e36f3d=745731af4484f323968969eda289aeee005b5903ac561e64/05a9055512c8e49ad18cc2dc52fe8e38ca56b38f3a804e935b844478cd225056:134e864fd359ba78307b4b22856a2630=745731af4484f323968969eda289aeee005b5903ac561e64/sanction_letter_6214.pdf',
                    url2: 'https://localhost:5606/api/digi-loan/downloadApplication/959ce3f9a5f57f675a55bd624a588dfb:992acb69f09fe891e1080fb5daf4ea53=745731af4484f323968969eda289aeee005b5903ac561e64/d4430e6eabee8dcac724411bfa4ae13a0cc114017d7eaf465771b576f3db22bd:2c81ebb779feaca79d6f8dce7263575b=745731af4484f323968969eda289aeee005b5903ac561e64/NIC_insurance_letter_6214.pdf',
                    url3: 'https://localhost:5606/api/digi-loan/downloadApplication/959ce3f9a5f57f675a55bd624a588dfb:992acb69f09fe891e1080fb5daf4ea53=745731af4484f323968969eda289aeee005b5903ac561e64/ae08029a088ea389f9a4e898e84c4b057366a1ee03cdc860547595afe93c8206:15320a02d1ac3b1ea84f6084c17ff84c=745731af4484f323968969eda289aeee005b5903ac561e64/NIC_insurance_general_6214.pdf',
                    url4: 'https://localhost:5606/api/digi-loan/downloadApplication/959ce3f9a5f57f675a55bd624a588dfb:992acb69f09fe891e1080fb5daf4ea53=745731af4484f323968969eda289aeee005b5903ac561e64/012e2275d590abd1e97c59ae4d966e7b0852a4c35d11a0e96be2b295d4171b5772174e90f824cfdc02ce8ce3c3f98d36:7ab8e2d428cb0e0ba11d06df1d8f2877=745731af4484f323968969eda289aeee005b5903ac561e64/NIC_insurance_disclosure_6214.pdf',
                    hostname: 'https://localhost:5605'
                  }
            }
        })
    } catch (error) {
        next(error);
    } finally{
        next();
    }
};

module.exports = {
    renderEJS
}

// http://localhost:7000/api/ejs/template/digi_loan/mails/insurance_manual_sign.ejs
// {
//     imgUrl: 'https://localhost:5606/',
//     host: 'https://localhost:5605',
//     email: 'adobetestmail999@yopmail.com',
//     url: 'https://localhost:5606/api/digi-loan/downloadApplication/f7d4e8961e2564d56489d818f4ea1d4f:8c3cdef00752ad5b730f1906f6855bbd=745731af4484f323968969eda289aeee005b5903ac561e64/d7e3f97a4435932de17f737c108e22539661e8e5cac16f966833b4ed2377da72:50c15c1de43d37f6827c7dd3028330b9=745731af4484f323968969eda289aeee005b5903ac561e64/salary_pledge-6214.pdf',
//     hostname: 'https://localhost:5605'
//   }

// template/digi_loan/insurance/NIC_insurance_disclosure
