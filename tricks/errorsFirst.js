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
        console.error(err);

        return false
    }

    console.log('The whole process is completed.');
})


