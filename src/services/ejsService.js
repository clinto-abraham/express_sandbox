const ejs = require('ejs');

const generateHtmlByRenderingEJS = (file_path, options) => {
    return new Promise((resolve, reject) => {
        console.log(file_path, "file_path", 48)
        ejs.renderFile(file_path, options ? options : {}, function (error, success) {
            console.log(error, success, 50)
            if (error) {
                resolve({
                    success: 0,
                    message: 'Failed to generate html from ejs file!',
                    error
                })
            } else {
                resolve({
                    success: 1,
                    data: success,
                    message: 'Successfully generated html from ejs file!',
                })
            }
        });
    })
}

module.exports = generateHtmlByRenderingEJS;