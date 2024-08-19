const ejs = require('ejs');

const generateHtmlByRenderingEJS = (file_path, options) => {
    return new Promise((resolve, reject) => {
        console.log(file_path, "file_path", 48)
        ejs.renderFile(file_path, options ? options : {}, function (error, data) {
            console.log(error, 50)
            if (error) {
                resolve({
                    success: 0,
                    message: 'Failed to generate html from ejs file!',
                    error,
                    status_code: 500
                })
            } else {
                resolve({
                    success: 1,
                    data,
                    message: 'Successfully generated html from ejs file!',
                    status_code: 200
                })
            }
        });
    })
}

module.exports = generateHtmlByRenderingEJS;