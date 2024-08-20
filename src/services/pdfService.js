'use strict';
const rootDir = process.cwd();
const path = require('path');

const generateHtmlByRenderingEJS = require('./ejsService');
const {
    footerTemplate_Retail_Mortgage,
    footerTemplate_MAU_disclosure,
    footerTemplate_NIC_disclosure,
    footerTemplate_NIC_general,
    footerTemplate_final_sanction_letter
} = require('../helpers/layout/footers');
const {
    headerTemplate_final_sanction_letter,
    headerTemplate_NIC_insurance_letter,
    headerTemplate_NIC_general,
    headerTemplate_NIC_disclosure,
    headerTemplate_MUA_general,
    headerTemplate_MAU_disclosure,
    headerTemplate_MAU_insurance_letter,
    headerTemplate_Retail_Mortgage
} = require('../helpers/layout/headers');
const {
    retail_mortgage_sample_data,
    sanction_letter_sample_data
} = require('../utils/static_data/sample_data');


const convertToPDFByPuppeteer = (dataRendered, local_file_path, headerTemplate, footerTemplate) => {
    return new Promise(async (resolve, reject) => {
        try {
            const puppeteer = require('puppeteer');
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setContent(dataRendered, { waitUntil: 'networkidle0' });
            await page.emulateMediaType('print');
            const config = {
                path: `${local_file_path}`,
                format: 'A4',
                displayHeaderFooter: true,
                // printBackground: true,
                margin: {
                    top: '100px',
                    bottom: '100px',
                    right: '5px',
                    left: '5px'
                }
            }
            if (headerTemplate) {
                config.headerTemplate = headerTemplate
            } else {
                config.headerTemplate = `<span></span>`
            }
            if (footerTemplate) {
                config.footerTemplate = footerTemplate
            } else {
                config.footerTemplate = `<span></span>`
            }

            const result = await page.pdf(config);
            console.log('createPDF', result)
            resolve({
                success: 1,
                status_code: 200,
                message: 'Successfully converted data into pdf file',
                data: result
            })
            await browser.close();
            console.log('PDF generated successfully.', 68);

        } catch (error) {
            resolve({
                success: 0,
                status_code: 500,
                error,
                data: 'Failed to generate pdf by puppeteer!'
            })

        }

    })
}

const createPDF = (req) => {
    return new Promise(async (resolve, reject) => {
        const { doc_type } = req.body;
        let file_path, sample_data, download_path, headerTemplate, footerTemplate;
        console.log(doc_type, 999)
        switch (doc_type) {
            case 'salary':

                file_path = `src/public/views/template/digi_loan/salary/${'salary_pledge'}.ejs`;
                sample_data = retail_mortgage_sample_data;
                download_path = 'download/digi_loan/salary_pledge.pdf';
                headerTemplate = headerTemplate_Retail_Mortgage;
                footerTemplate = footerTemplate_Retail_Mortgage;
                break;

            case 'sanction':

                file_path = `src/public/views/template/digi_loan/sanction/${'final_sanction_letter'}.ejs`;
                sample_data = sanction_letter_sample_data;
                download_path = 'download/digi_loan/final_sanction_letter.pdf';
                headerTemplate = headerTemplate_final_sanction_letter;
                footerTemplate = footerTemplate_final_sanction_letter;
                break;

            case 'sanction_own_insurance':

                file_path = `src/public/views/template/digi_loan/sanction/${'final_sanction_letter_own_insurance'}.ejs`;
                sample_data = sanction_letter_sample_data;
                download_path = 'download/digi_loan/final_sanction_letter_own_insurance.pdf';
                headerTemplate = headerTemplate_final_sanction_letter;
                footerTemplate = footerTemplate_final_sanction_letter;
                break;


            case 'NIC_insurance_letter':

                file_path = `src/public/views/template/digi_loan/insurance/${'NIC_insurance_letter'}.ejs`;
                sample_data = retail_mortgage_sample_data;
                download_path = 'download/digi_loan/NIC_insurance_letter.pdf';
                headerTemplate = headerTemplate_NIC_insurance_letter;
                footerTemplate = null;
                break;

            case 'NIC_insurance_general':

                file_path = `src/public/views/template/digi_loan/insurance/${'NIC_insurance_general'}.ejs`;
                sample_data = retail_mortgage_sample_data;
                download_path = 'download/digi_loan/NIC_insurance_general.pdf';
                headerTemplate = headerTemplate_NIC_general;
                footerTemplate = footerTemplate_NIC_general;
                break;


            case 'NIC_insurance_disclosure':

                file_path = `src/public/views/template/digi_loan/insurance/${'NIC_insurance_disclosure'}.ejs`;
                sample_data = retail_mortgage_sample_data;
                download_path = 'download/digi_loan/NIC_insurance_disclosure.pdf';
                headerTemplate = headerTemplate_NIC_disclosure;
                footerTemplate = footerTemplate_NIC_disclosure;
                break;

            case 'MUA_insurance_letter':

                file_path = `src/public/views/template/digi_loan/insurance/${'MUA_insurance_letter'}.ejs`;
                sample_data = retail_mortgage_sample_data;
                download_path = 'download/digi_loan/MUA_insurance_letter.pdf';
                headerTemplate = headerTemplate_MAU_insurance_letter;
                footerTemplate = null;
                break;

            case 'MUA_insurance_general':

                file_path = `src/public/views/template/digi_loan/insurance/${'MUA_insurance_general'}.ejs`;
                sample_data = retail_mortgage_sample_data;
                download_path = 'download/digi_loan/MUA_insurance_general.pdf';
                headerTemplate = headerTemplate_MUA_general;
                footerTemplate = null;
                break;


            case 'MUA_insurance_disclosure':

                file_path = `src/public/views/template/digi_loan/insurance/${'MUA_insurance_disclosure'}.ejs`;
                sample_data = retail_mortgage_sample_data;
                download_path = 'download/digi_loan/MUA_insurance_disclosure.pdf';
                headerTemplate = headerTemplate_MAU_disclosure;
                footerTemplate = footerTemplate_MAU_disclosure;
                break;

            case 'retail_mortgage':

                file_path = `src/public/views/template/retail/${'retail_mortgage_facility'}.ejs`;
                sample_data = retail_mortgage_sample_data;
                download_path = 'download/retail/retail_mortgage.pdf';
                headerTemplate = headerTemplate_Retail_Mortgage;
                footerTemplate = footerTemplate_Retail_Mortgage;
                break;

            default:
                resolve({
                    success: 0,
                    status_code: 404,
                    doc_type: 'wrong',
                    error: `doc_type : ${doc_type} doesnot match in defined file_path or process, please check spelling of doc_type`
                })
                break;
        }

        console.log(rootDir, file_path, "rootDir, file_path")
        const templateEJS_filePath = path.join(rootDir, file_path);
        const {
            success: successEJS,
            data: dataEJS,
            message: messageEJS,
            error: errorEJS,
            status_code: statusCodeEJS
        } = await generateHtmlByRenderingEJS(templateEJS_filePath, sample_data);

        if (successEJS == 1) {
            const {
                success: successPDF,
                data: dataPDF,
                message: messagePDF,
                error: errorPDF,
                status_code: statusCodePDF
            } = await convertToPDFByPuppeteer(dataEJS, download_path, headerTemplate, footerTemplate);
            if (successPDF == 1) {
                resolve({
                    success: successPDF,
                    message: messagePDF,
                    status_code: statusCodePDF
                });
            } else {
                resolve({
                    success: successPDF,
                    status_code: statusCodePDF,
                    error: errorPDF,
                    message: 'Failed to convert into pdf by puppeteer!'
                });
            }

        } else {
            resolve({
                success: successEJS,
                message: messageEJS,
                error: errorEJS,
                status_code: statusCodeEJS
            })
        }
    });
}

module.exports = {
    createPDF
};

// const templateEJS_filePath = path.join(rootDir, `src/template/retail/${'retail_mortgage'}.ejs`);
// const {success: successEJS, data: dataEJS, message: messageEJS } = await generateHtmlByRenderingEJS(templateEJS_filePath, retail_mortgage_sample_data);
// const {success: successPDF, data: dataPDF, message: messagePDF} = await convertToPDFByPuppeteer(dataEJS, 'download/retail/retail_mortgage_facility.pdf', headerTemplate_Retail_Mortgage, footerTemplate_Retail_Mortgage)

// const templateEJS_filePath = path.join(rootDir, `src/public/views/template/digi_loan/sanction/${'final_sanction_letter'}.ejs`);
// const {success: successEJS, data: dataEJS, message: messageEJS } = await generateHtmlByRenderingEJS(templateEJS_filePath, retail_mortgage_sample_data);
// const {success: successPDF, data: dataPDF, message: messagePDF} = await convertToPDFByPuppeteer(dataEJS, 'download/digi_loan/final_sanction_letter.pdf', headerTemplate_Retail_Mortgage, footerTemplate_Retail_Mortgage)


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