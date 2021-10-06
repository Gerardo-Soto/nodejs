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

try {
    sumAsync(function (err, data) {
        if (err) {
            console.error('Ouh, new error:');
            throw err;
        }
    
        console.log('The whole process is completed.');
    })
} catch (error) {
    console.error('Error catches: '+ error);
}
