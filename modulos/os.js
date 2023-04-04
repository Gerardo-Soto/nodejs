const os = require('os');

console.log(`Arch: ${os.arch()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Cores: ${os.cpus().length}`);

//console.log(os.constants);
const SIZE = 1024;
function kb(bytes) { return bytes / SIZE };
function mb(bytes) { return kb(bytes) / SIZE };
function gb(bytes) { return mb(bytes) / SIZE};

console.log(`Free RAM: ${os.freemem()} bytes,  ${kb(os.freemem())} Kb, 
${mb(os.freemem())} Mb, ${gb(os.freemem())} Gb`);
console.log(`Total RAM: ${gb(os.totalmem())} Gb.`);

console.log(`Save data in: ${os.homedir()}`);
console.log(`temporal data: ${os.tmpdir()}`);