// module name like: /binding.gyp : "target_name": "addon"
//const myAddon = require('addon')
// OR
const myAddon = require('./build/Release/addon.node');

console.log(myAddon);
console.log(myAddon.hello());