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

