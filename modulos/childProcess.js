// export the objects: exec and spawn of child_process Object
const { exec, spawn } = require('child_process');
const { log } = require('console');

/*
List the current directory 
*/
exec('ls -la', (err, stdout, sterr) => {
    if (err) {
        console.log(err);
        return false;
    }

    console.log(stdout);
});


exec('node /app/modulos/console.js', (err, stdout, sterr) => {
    if (err) {
        console.log(err);
        return false;
    }

    console.log(stdout);
});



// Spawn
let process = spawn('ls', ['-la']);

console.log(`[Spawn] Process with pid ${process.pid}. Is it connected: ${process.connected}`);

// NodeJS es orientado a eventos, por lo tanto:
process.stdout.on('data', function(info){
    console.log(process.killed);
    console.log(info.toString());
});

process.on('exit', function(){
    console.log('Process ended.');
    console.log(process.killed);
});

