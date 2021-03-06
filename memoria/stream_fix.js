const fs = require('fs');
const stream = require('stream');
const util = require('util'); // trabajar con herencia automatica

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');


/** Here we are not going to use a Callback because:
 * the Callback is executed when something finishes executing,
 * and with Streams we will be receiving data from time to time.
 */
readableStream.setEncoding('utf-8');
// for each event: on.[data] run: 
readableStream.on('data', function (chunk) {
    //console.log(chunk); // Test 1
    data += chunk
});

readableStream.on('end', function () {
    console.log(data);
});
