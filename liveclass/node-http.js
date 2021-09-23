const http = require('http');

http.createServer(function (req, res) {
    console.log(req.url);
    if(req.url === '/blog'){
        res.write('Página del Blog');
    } else if(req.url === '/class'){
        res.write('First class.');
    } else {
        res.write('404 not found.')
    }
    
    res.write('Hello, World!');
    res.end();
}).listen(8080);
