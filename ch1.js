/**
var schedule = function(timeout, callbackfunction) {
	return {
		start: function() {
			setTimeout(callbackfunction, timeout)
		}
	}
};

(function() {
	var timeout = 1000;
	var count = 0;
	schedule(timeout, function doStuff() {
		console.log(++ count);
		schedule(timeout, doStuff).start();
	}).start(timeout);
})();
*/
(function schedule() {
	setTimeout(function() {
		console.log('World!');
		schedule();
}, 2000);
})();