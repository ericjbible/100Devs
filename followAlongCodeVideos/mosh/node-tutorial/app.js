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

const log = require('./logger'); //returns the export object from the module

log('message');
