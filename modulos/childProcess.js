const { exec, spawn } = require('child_process');

exec('ls -la', (err, stdout, sterr) => {
    if (err) {
        console.log(err);
        return false;
    }

    console.log(stdout);
});


exec('node console.js', (err, stdout, sterr) => {
    if (err) {
        console.log(err);
        return false;
    }

    console.log(stdout);
});


// Spawn
let process = spawn('ls', ['-la']);

console.log(process.pid);
console.log(process.connected);

// NodeJS es orientado a eventos, por lo tanto:
process.stdout.on('data', function(info){
    console.log(process.killed);
    console.log(info.toString());
});

process.on('exit', function(){
    console.log('Process ended.');
    console.log(process.killed);
})

