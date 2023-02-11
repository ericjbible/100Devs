// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }

// sayHello('Eric');

/*
console.log(); // global

setTimeout();
clearTimeout();

setInterval();
clearInterval();

Above -- These are all global in JavaScript from the window object
Below -- node has a similar object called global

var message =''

console.log(global.message) would be undefined as there is only local modular scope in Node
*/

//every node project has at least one main module

// console.log(module);

// const log = require('./logger'); //returns the export object from the module

// log('message');

// const path = require('path')

// let pathObj = path.parse(__filename);

// console.log(pathObj);

// const os = require('os');

// let totalMemory = os.totalmem();
// let freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory} and Free Memory: ${freeMemory}`)

// console.log(`Used Memory: ${totalMemory - freeMemory}`)

// const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files)

// fs.readdir('./', function(err, files) {
  // if (err) console.log('Error', err);
  // else console.log('Result', files);
// })
// const EventEmitter = require('events');

// const Logger = require('./logger');
// const logger = new Logger();

// logger.addListener('messageLogged', (arg) => {
  // console.log('Listener called', arg);
// }); //registering a listener

// logger.log('message');

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello World');
    res.end;
  }
  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]));
    res.end
  }
}); //is an EventEmitter


server.listen(3000);

console.log('listening on port 3000...');



server.on('connection', (socket) => {
  console.log('New connection...');
});
