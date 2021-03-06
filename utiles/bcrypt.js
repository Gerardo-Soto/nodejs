//
const bcrypt = require('bcrypt');

const password = '12345qwerty';

//bcrypt.hashSync // <- op. sincrona que bloquea en proceso principal
bcrypt.hash(password, 5, function(err, hash){
    // 5 {2} <- Salt or Rounds: string | number
    if (err) {
        console.log(err);
    } else{
        console.log(hash);
    }

    // check password:
    bcrypt.compare(password, hash, function(err, res){
        console.log(res); // true|false
    });

    // check password:
    bcrypt.compare('otherPassword', hash, function (err, res) {
        console.log(res); // true|false
    });

})

