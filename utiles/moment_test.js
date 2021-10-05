//moment
const moment = require('moment');

let now = moment();

console.log(now);
console.log(now.format('YYYY-MM-DD'));
console.log(now.format('YYYY/MM/DD - HH:mm'));

let startWort = moment().subtract('2', 'M');
console.log('Start to work:');
console.log(startWort);

let daysWork = now.subtract(startWort).toDate();
console.log('Days at work: '+ daysWork);

