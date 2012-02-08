var EventEmitter = require('events').EventEmitter,
	util		 = require('util');

var MyClass = function(option1, option2) {
	this.option1 = option1;
	this.option2 = option2;
}

util.inherits(MyClass, EventEmitter);