function sumAsync(callback) {
    setTimeout(() => {
        try {
            let a = 8 + i; 
            callback(null, a);
        } catch (error) {
            callback(error, null);
        }
    }, 1000);
}

sumAsync(function (err, data) {
    if (err) {
        console.error('Ouh, new error:');
        console.error(err);
        return false;
        //throw err; // No funciona para funciones asincronas
    }

    console.log('The whole process is completed.');
})


