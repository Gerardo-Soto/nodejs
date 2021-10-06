console.time('benchmark todo');

let sum = 0;
console.time('first for');

for (let i = 0; i < 100000000; i++) {
    sum += 1;
}

console.timeEnd('first for');

let sum2 = 0;
console.time('second for');

for (let i = 0; i < 1000000000; i++) {
    sum += 1;
}

console.timeEnd('second for');

console.time('asynchronous')
console.log('Start asynchronous process');

asynchronous()
    .then(() => {
        console.timeEnd('asynchronous');
    });

console.timeEnd('benchmark todo');

function asynchronous() {
    return new Promise((resolve) =>{
        setTimeout(() => {
            console.log('Ends the asynchronous process.');
            resolve();
        }, 3000);
    })
}

