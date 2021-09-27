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

function brokeAsynchronous(){
    setTimeout(function() {
        return 5 + y;
    }, 1000);
}

try {
    brokeAsynchronous();
} catch (error) {
    console.log('Asynchronous error');
    console.error(error.message);
}

