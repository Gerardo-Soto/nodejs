function greetings(username, myCallback){
    setTimeout(function(){
        console.log('Hello, '+ username);
        myCallback(username);
    }, 3000);
}

function farewell(username, anotherCallback){
    setTimeout(function(){
        console.log('Bye, '+ username);
        anotherCallback();
    }, 1000);
}


console.log('Process starting...');
greetings('Gerard', function(username){
    //console.log('Process finished.');
    farewell(username, function(){
        console.log("Process finished.");
    });
});


/*console.log('Process starting...');
greetings('Gerard', function() {});
farewell('Gerard', function() {});
*/
