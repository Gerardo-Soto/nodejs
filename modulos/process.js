//const process = require('process');
// process is also into global modules

// Exception without a try/catch
process.on('uncaughtException', (err, origin) => {
    console.log('Warning: There was an Exception.');
    console.error(`Error: ${err}`);
    console.error(`Origin: ${origin}`);
});

// promises reject without a try/catch
process.on('unhandledRejection', (err) => {
    console.error(`Warning: A promise was rejected, error: ${err}`);
})

process.on('beforeExit', () => {
    console.log(`This process with pid: ${process.pid} is going to finish.`);
});


process.on('exit', () => {
    console.log(`This process with pid: ${process.pid} has already finished.`);
});

functionIsNotExist();