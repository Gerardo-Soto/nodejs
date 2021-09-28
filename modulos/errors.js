function anotherFunction(){
    return broke();
}


function broke(){
    return 3 + z;
}

try {
    broke()
} catch (error) {
    console.log('Ups... error.');
    console.error(error.message);
}

console.log('End');

function brokeAsynchronous(callback){
    setTimeout(function() {
        try {
            return 5 + y;
        } catch (error) {
            console.log('Asynchronous errors in the function.');
            callback(error);
        }
    }, 1000);
}

try {
    brokeAsynchronous(function(err){
        console.log(err.message);
    });
} catch (error) {
    console.log('Asynchronous error');
    console.error(error.message);
}

