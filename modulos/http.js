const http = require('http');

// server config
const port = 3000

// Web server gives a Callback router and setting port:
http.createServer(router).listen(port);

function router(req, res) {
    console.log('New request!');
    console.log(req.url);

    switch (req.url) {
        case '/hello':
            res.write('Hello, World! How are you?');
            res.end();
            break;
    
        default:
            res.write('Error 404: Page not found');
            res.end();
    }
}

console.log('Listening http on port: '+ port);

