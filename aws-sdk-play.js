/**
 * Created by jeffersonwu on 10/6/17.
 */

const AWS = require('aws-sdk');
const chalk = require('chalk');

console.log(chalk.green('Config below:'));
console.log(AWS.config);

console.log(AWS.config.credentials);


AWS.config.logger = process.stdout; // can be set to anything the accepts writes.

// sets the parameters into the S3 object.
let s3 = new AWS.S3({params: {Bucket: 'makerjeff-rnd'}});

s3.listBuckets(function(err, data) {
    if (err) {
        console.log("Error: " + err);
    } else {
        console.log("Bucket List: ", data.Buckets);
    }
});




