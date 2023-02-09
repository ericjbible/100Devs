const EventEmitter = require('events');

let url = 'http://mylogger.io/log'

class Logger extends EventEmitter {
  log(message) {
    //send an HTTP request
    console.log(message);
    this.emit('messageLogged', {id: 1, url: 'http://'}); //signaling an event
  }

}



module.exports = Logger;

// module.exports.log = log; this would be useful if there were multiple methods or properties
// module.exports.endPoint = url; this is an implementation detail and we would not export it because it's not "a button on the DVD player" it's more like a chipset on the board of the DVD player
