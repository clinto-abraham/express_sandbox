const AWS = require('../config/aws');
const s3 = new AWS.S3();

exports.uploadFile = async (file) => {
    const params = {
        Bucket: process.env.AWS_S3_BUCKET,
        Key: file.originalname,
        Body: file.buffer,
    };

    const data = await s3.upload(params).promise();
    return data.Location;
};

// Add more AWS-related services as needed
