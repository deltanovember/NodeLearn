var fs = require('fs');
fs.stat('temp.txt', function(err, stats) {
	if (err) {console.log(err.message); return;}
	console.log('this file is ' + stats.size + ' bytes');
})

// Ex 2
fs.open('temp.txt', 'r', function(err, fd) {
	if (err) { throw err }
	var readBuffer = new Buffer(1024),
		bufferOffset = 0,
		bufferLength = 4,
		filePosition = 0;

		fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition,
			function(err, readBytes) {
				if (err) {
					throw err;
				}
				console.log('just read ' + readBytes + ' bytes');
				if (readBytes > 0) {
					console.log(readBuffer.slice(0, readBytes))
				}
			});
}
);

// Ex 3
fs.open('temp.txt', 'r', function(err, fd) {
	if (err) { throw err }
	var readBuffer = new Buffer(1024),
		bufferOffset = 0,
		bufferLength = readBuffer.length,
		filePosition = 0;

		fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition,
			function(err, readBytes) {
				if (err) {
					throw err;
				}
				console.log('just read ' + readBytes + ' bytes');
				if (readBytes > 0) {
					console.log(readBuffer.slice(5, 4));
					console.log(readBuffer.slice(10, 4));
				}
			});
}
);