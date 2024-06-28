const convertToPDFByPuppeteer = (dataRendered, local_file_path, headerTemplate, footerTemplate)=>{
    return new Promise(async (resolve, reject) => {
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
                right: '20px',
                left: '20px'
            }
        }
        if(headerTemplate){
            config.headerTemplate = headerTemplate
        } else {
            config.headerTemplate = `<span></span>` 
        }
        if(footerTemplate){
            config.footerTemplate = footerTemplate
        } else {
            config.footerTemplate = `<span></span>`
        }
  
        const result = await page.pdf(config);
        console.log('convertToPDFByPuppeteer', result)
        resolve({
            success: 1,
            message: 'Successfully converted data into pdf file',
            data: result
        })
        await browser.close();
        console.log('PDF generated successfully.');
    })
}

module.exports = convertToPDFByPuppeteer;