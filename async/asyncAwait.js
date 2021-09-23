/*function greetings(username){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Hello, '+ username);
            resolve(username);
        }, 3000);
    });
}*/

async function greetings(username){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Hello, '+ username);
            resolve(username);
        }, 2000);
    });
}

async function talk(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla, bla, bla.');
            resolve();
        }, 3000);
    })
}

async function farewell(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bye, '+ username);
            resolve(username);
        }, 1000);
    });
}

async function main(){
    // Using await to execute Async functions like synchronous functions
    let username = await greetings('Gerard');
    await talk();
    await talk();
    await talk();
    await farewell(username);
}

console.log("Process started.");
main();
console.log("Process ended.");

