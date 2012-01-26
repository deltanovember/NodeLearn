var http = require('http');
var fs = require('fs');

var file_path = __dirname + '/cat.jpg';
fs.stat(file_path, function (err, stat) {

    http.createServer(
        function (request, response) {
            console.log('new request');
            response.writeHead(200, {
                'Content-Type':'image/jpeg',
                'Content-Length':stat.size
            });

            var rs = fs.createReadStream(file_path);
            rs.on('data', function (data) {
                   var flushed = response.write(data);
                    if (!flushed) {
                        rs.pause();
                    }
                }
            );

            response.on('drain', function() {
                rs.resume();
            });

            rs.on('end', function () {
                    response.end();
                }
            );

        }).listen(9000);

});

