function greetings(username, myCallback){
    setTimeout(function(){
        console.log('Hello, '+ username);
        myCallback(username);
    }, 3000);
}

function talk(callbackHell){
    setTimeout(() => {
        console.log('bla, bla, bla.');
        callbackHell();
    }, 3000);
}

function farewell(username, anotherCallback){
    setTimeout(function(){
        console.log('Bye, '+ username);
        anotherCallback();
    }, 1000);
}

/* Callback Hell:
console.log('Process starting...');
// level 1
greetings('Gerard', function(username){
    // level 2
    talk(function(){
        // level 3
        talk(function(){
            // level 4
            talk(function(){
                // level 5
                //console.log('Process finished.');
                farewell(username, function(){
                    console.log("Process finished.");
                });
            });
        });
    });
});
*/

// Solution to Callback hell:
function conversation(name, times, callback){
    if(times > 0){
        talk(function(){
            conversation(name, --times, callback);
        });
    } else {
        farewell(name, callback);
    }
}

greetings('Gerard', function(username){
    conversation(username, 3, function(username){
        console.log("Process finished.");
    })    
});
