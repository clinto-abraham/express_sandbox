'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// const config = require('./src/config');
const routes = require('./src/routes');
const errorMiddleware = require('./src/middlewares/errorHandler');

app.use(express.json());
app.use('/api', routes);
app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// const sequelize = require('./models').sequelize;
// sequelize.sync().then(() => {
//     app.listen(config.port, () => {
//         console.log(`Server is running on port ${config.port}`);
//     });
// });




const path = require('path')

const convertToPDFByPuppeteer = require('./src/services/pdfService');
const generateHtmlByRenderingEJS = require('./src/services/ejsService');
const { footerTemplate_Retail_Mortgage, footerTemplate_MAU_disclosure, footerTemplate_NIC_disclosure, footerTemplate_NIC_general, footerTemplate_final_sanction_letter } = require('./src/helpers/layout/footers');
const { headerTemplate_final_sanction_letter, headerTemplate_NIC_insurance_letter, headerTemplate_NIC_general, headerTemplate_NIC_disclosure, headerTemplate_MUA_general, headerTemplate_MAU_disclosure, headerTemplate_MAU_insurance_letter, headerTemplate_Retail_Mortgage } = require('./src/helpers/layout/headers');
const retail_mortgage_sample_data = require('./src/utils/sample_data');

app.get('/convert-pdf', async(req, res) => {
    const rootDir = process.cwd(); 

    // const templateEJS_filePath = path.join(rootDir, `src/template/retail/${'retail_mortgage'}.ejs`);
    // const {success: successEJS, data: dataEJS, message: messageEJS } = await generateHtmlByRenderingEJS(templateEJS_filePath, retail_mortgage_sample_data);
    // const {success: successPDF, data: dataPDF, message: messagePDF} = await convertToPDFByPuppeteer(dataEJS, 'download/retail/retail_mortgage_facility.pdf', headerTemplate_Retail_Mortgage, footerTemplate_Retail_Mortgage) 

    // const templateEJS_filePath = path.join(rootDir, `src/public/views/template/digi_loan/sanction/${'final_sanction_letter'}.ejs`);
    // const {success: successEJS, data: dataEJS, message: messageEJS } = await generateHtmlByRenderingEJS(templateEJS_filePath, retail_mortgage_sample_data);
    // const {success: successPDF, data: dataPDF, message: messagePDF} = await convertToPDFByPuppeteer(dataEJS, 'download/digi_loan/final_sanction_letter.pdf', headerTemplate_Retail_Mortgage, footerTemplate_Retail_Mortgage) 

    const templateEJS_filePath = path.join(rootDir, `src/public/views/template/digi_loan/salary/${'salary_pledge'}.ejs`);
    const {success: successEJS, data: dataEJS, message: messageEJS } = await generateHtmlByRenderingEJS(templateEJS_filePath, retail_mortgage_sample_data);
    const {success: successPDF, data: dataPDF, message: messagePDF} = await convertToPDFByPuppeteer(dataEJS, 'download/digi_loan/salary_pledge.pdf', headerTemplate_Retail_Mortgage, footerTemplate_Retail_Mortgage) 

    // DONE
    // const templateEJS_filePath = path.join(rootDir, `template/sanction/${'final_sanction_letter'}.ejs`);
    // const {success, data, message } = await generateHtmlByRenderingEJS(templateEJS_filePath);
    // const {succ, dat, mess} = await convertToPDFByPuppeteer(data, 'download/final_sanction_letter.pdf', headerTemplate_final_sanction_letter, footerTemplate_final_sanction_letter) 

    // //DONE
    // const templateEJS_filePath_2 = path.join(rootDir, `template/${'MUA_insurance_general'}.ejs`);
    // const { data: data_2} = await generateHtmlByRenderingEJS(templateEJS_filePath_2);
    // await convertToPDFByPuppeteer(data_2, 'download/MUA_insurance_general.pdf', headerTemplate_MUA_general) 

    // //DONE
    // const templateEJS_filePath_3 = path.join(rootDir, `template/${'MUA_insurance_letter'}.ejs`);
    // const { data: data_3} = await generateHtmlByRenderingEJS(templateEJS_filePath_3);
    // await convertToPDFByPuppeteer(data_3, 'download/MUA_insurance_letter.pdf', headerTemplate_MAU_insurance_letter) 

    // //DONE
    // const templateEJS_filePath_4 = path.join(rootDir, `template/${'NIC_insurance_disclosure'}.ejs`);
    // const { data: data_4} = await generateHtmlByRenderingEJS(templateEJS_filePath_4);
    // await convertToPDFByPuppeteer(data_4, 'download/NIC_insurance_disclosure.pdf', headerTemplate_NIC_disclosure, footerTemplate_MAU_disclosure) 

    // //DONE
    // const templateEJS_filePath_5 = path.join(rootDir, `template/${'NIC_insurance_general'}.ejs`);
    // const { data: data_5} = await generateHtmlByRenderingEJS(templateEJS_filePath_5);
    // await convertToPDFByPuppeteer(data_5, 'download/NIC_insurance_general.pdf', headerTemplate_NIC_general, footerTemplate_NIC_general) 
    
    // //DONE
    // const templateEJS_filePath_6 = path.join(rootDir, `template/${'NIC_insurance_letter'}.ejs`);
    // const { data: data_6} = await generateHtmlByRenderingEJS(templateEJS_filePath_6);
    // await convertToPDFByPuppeteer(data_6, 'download/NIC_insurance_letter.pdf', headerTemplate_NIC_insurance_letter) 
    res.send('Successfully converted to pdf!')

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
