let greetings = process.env.MY_NAME || 'without name';
let web = process.env.MY_WEB || 'without Web';

console.log(`Hello, ${greetings}`);
console.log(`Mi Web es: ${web}`);

