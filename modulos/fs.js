
// Bring a global package
const fs = require('fs');

function read(path, callback){
    fs.readFile(path, (err, data) => {
        callback(console.log(data.toSting));
    });
}

read(__dirname + 'file.txt', console.log());

function write(path, data, callback){
    fs.writeFile(path, data, function(err){
        if (err){
            console.log('Error to write: '+ err);
        } else{
            console.log('Ok');
        }
    })
}

write(__dirname + '/new_file.txt', 'New data added!', console.log);

function deleteFile(path, callback){
    fs.unlink(path, callback);
}

deleteFile(__dirname + '/new_file.txt');