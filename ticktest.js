require('./ticker.js');
var util		 = require('util');

util.inherits(Ticker, EventEmitter);

var ticker = new Ticker();
ticker.on('tick', function() {
	console.log('TICK');
});