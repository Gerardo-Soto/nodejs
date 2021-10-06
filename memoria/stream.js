const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.on('data', function (chunk) {
    console.log(chunk.toString());
})


// Transformación para el tratado del Stream:
const Transform = stream.Transform;

function Mayus(){
    Transform.call(this); // *1
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chuck, codif, cb){// *1
    chunkMayus = chuck.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

// Ejecución: crear la transforemacion a mayusculas
let mayus = new Mayus();

readableStream
    .pipe(mayus)// send Stream
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

