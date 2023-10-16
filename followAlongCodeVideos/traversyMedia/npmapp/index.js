const _ = require('lodash');

const numbers = [22, 46, 76, 44, 32, 31];

_.each(numbers, function(number, i){
  console.log(number);
})
