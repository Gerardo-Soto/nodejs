/*function greetings(username, myCallback){
    setTimeout(function(){
        console.log('Hello, '+ username);
        myCallback(username);
    }, 3000);
}*/

function greetings(username){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Hello, '+ username);
            resolve(username);
        }, 3000);
    });
}

function talk(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla, bla, bla.');
            resolve(username);
        }, 3000);
    })
}

function farewell(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Bye, '+ username);
            resolve(username);
        }, 1000);
    });
}

/*greetings('Gerard', function(username){
    conversation(username, 3, function(username){
        console.log("Process finished.");
    })    
});*/
console.log('Process starting...');
greetings('Gerard')
    .then(talk)
    .then(talk)
    .then(talk)
    .then(farewell)
    .then((username) => console.log(username))
    .catch(error => {
        console.log('Error: code 1');
        console.log(error);
    });