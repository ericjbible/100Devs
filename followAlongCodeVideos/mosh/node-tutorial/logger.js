let url = 'http://mylogger.io/log'

function log(message) {
  //send an HTTP request
  console.log(message);
}

module.exports.log = log;
// module.exports.endPoint = url; this is an implementation detail and we would not export it because it's not "a button on the DVD player" it's more like a chipset on the board of the DVD player