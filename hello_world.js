var http = require('http');

http.createServer(function (request, response) {
    console.log('new request');
    response.writeHead(200, {
        'Content-Type':'text/plain'
    });
    response.end('Hello World');
}).listen(9000);