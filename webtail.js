var http = require('http');
var spawn = require('child_process').spawn;

http.createServer(
    function (request, response) {

        response.writeHead(200, {
            'Content-Type':'text/plain'
        });
        var tail_child = spawn('tail', ['-f', 'temp.txt']);

        request.connection.on('end', function () {
            tail_child.kill();
        });

        tail_child.stdout.pipe(response);
        tail_child.on('exit', function () {
         console.log("tail finished");
         response.end();
     });

    }).listen(9000);