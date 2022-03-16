var events = require('events')
 var queue = require('./timer.js');
var eventemmiter = new events.EventEmitter();

var myHandler = () => {
    console.log("Welcome");
}

eventemmiter.on('World' , myHandler);

eventemmiter.emit('World');
queue.Queue();
