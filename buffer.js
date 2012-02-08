var buf = new Buffer(100);
for (i=0;i<100;i++) {
	buf[i] = i;
}
var slice = buf.slice(40, 60);
var copy = new Buffer(20);
buf.copy(copy, 0, 40, 60);
console.log(copy);