const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

// Transformación para el tratado del Stream:
const Transform = stream.Transform;

function UpperLetter(){
    Transform.call(this); // *1
}

upperLetter.prototype._transform = function(chuck, codif, cb){// *1
    chunkUpper = chuck.toString().toUpperCase();
    this.push(chunkUpper);
    cb();
}

// Ejecución:
let upperLetter = new UpperLetter();

util.inherits(upperLetter, Transform);

readableStream
    .pipe(UpperLetter)// send Stream
    .pipe(process.stdout);// show the output on terminal



/** Here we are not going to use a Callback because:
 * the Callback is executed when something finishes executing,
 * and with Streams we will be receiving data from time to time.
 */
readableStream.setEncoding('utf-8');
// for each event: on.[data] run: 
readableStream.on('data', function(chunk){
    //console.log(chunk); // Test 1
    data += chunk
});

readableStream.on('end', function(){
    console.log(data);
});

