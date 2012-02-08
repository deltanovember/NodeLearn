var fs = require('fs');
fs.open('./ch7.js', 'r', function(err, fd) {
	if (err) { throw err }
	var readBuffer = new Buffer(1024),
		bufferOffset = 0,
		bufferLength = readBuffer.length,
		filePosition = 100;

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

fs.open('./temp.txt', 'a', function(err, fd) {
	var writeBuffer = new Buffer('writing this string'),
	bufferOffset = 0,
	bufferLength = writeBuffer.length,
	filePosition = null;

	fs.write(
		fd,
		writeBuffer,
		bufferOffset,
		bufferLength,
		filePosition,
		function(err, written) {
			if (err) { throw err; }
			console.log('wrote ' +written + ' bytes');
		}
		
	)
})