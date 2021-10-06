// Web server
const http = require('http');
const port = 3000

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

