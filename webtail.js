var http = require('http');
var spawn = require('child_process').spawn;

http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type':'text/plain'
    });

    var tail_child = spawn('tail', ['-f', 'test.Q']);
    tail_child.stdout.on('data', function(data) {
       console.log(data.toString());
        response.write(data);

    });
}).listen(9000);