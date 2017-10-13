/**
 * Created by jeffersonwu on 10/6/17.
 */

// load AWS SDK
const AWS           = require('aws-sdk');   // AWS SDK
const fs            = require('fs');        // file system module
const path          = require('path');      // node built in module for working with file paths.
const chalk         = require('chalk');

s3 = new AWS.S3({param: {Bucket: 'makerjeff-rnd'}});

// setup the file to be uploaded.
let upload_params = {Bucket: 'makerjeff-rnd', Key: '', Body: ''};
let file = process.argv[2];

// check for file
if (file === undefined) {
    return console.log(chalk.yellow('no file inputted. exiting.'));
}

// create file stream and read in the file
let file_stream = fs.createReadStream(file);

// set error handler
file_stream.on('error', function(err) {
    console.log('File Error', err);
});

// assign the body and key params.
upload_params.Body = file_stream;
upload_params.Key = path.basename(file);

// call S3 to retrieve upload file.
s3.upload(upload_params, function(err, data) {
    if (err) {
        console.log('Error', err);
    } else {
        console.log('Upload success.', data.Location);
    }
});



