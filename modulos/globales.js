let i = 0;
let interval = setInterval(function(){
    console.log('new interval.  n:'+ i);
    if (i === 3) {
        clearInterval(interval);
    }
    i++;
}, 1000);


setImmediate(function(){
    console.log('Send task.');
})

// Bad practice:
globalThis.myVariable = 'value';
console.log(myVariable);