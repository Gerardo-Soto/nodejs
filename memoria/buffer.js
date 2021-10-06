// buffer operation
let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < 26; i++){
    //access to the buffer location
    abc[i] = i + 97;
}
console.log(abc.toString());

    

let buffer = Buffer.alloc(4);
console.log(buffer);

let buffer2 = Buffer.from([1,2,5,6]);
console.log(buffer2);

let buffer3 = Buffer.from('Hola');
console.log(buffer3.toString());



