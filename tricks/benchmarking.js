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

console.timeEnd('benchmark todo');

