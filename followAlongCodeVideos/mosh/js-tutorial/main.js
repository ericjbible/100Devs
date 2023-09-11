//variable reassignment with let and not with const
// const interestRate = 0.3

// console.log(interestRate);

//Primitives

// let name = "Eric" // string literal
// let age = 34.95 // number literal
// let isCool = true //boolean literal
// let dateMarried = undefined
// let purchasedHouse = null

//Dynamic Typing

//typeof operator helps us understand types of variables at run time, this is a reserved keyword

//undefined is a type and a value whereas null is an object

//Objects

// let person = {
//   name: 'Eric',
//   age: 34.95
// };

// console.log(person);

//Dot Notation with Objects
// console.log(person.name);
//Bracket Notation with Objects
// console.log(person['age']);

//Arrays

// let selectedColors = ['red', 'blue'];
// console.log(selectedColors);

//Arrays are zero-indexed, here is how to access the elements

// console.log(selectedColors[0]);

//elements can also be initialized with index access

// selectedColors[2] = 'green';

//arrays are technically objects and have properties that can be accessed using dot notation

// console.log(selectedColors.length);

//Functions
//below function performs a task
// function greet(name) {
  //body of function
  // console.log(`Hello ${name}`);
// }

// greet('Eric');

//Types of Functions

//calculating a value
// function square(number) {
//   return number * number;
// }

// console.log(square(3));

// let x = 10;
// let y = 3;

// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);

// Increment (++)

// console.log(x++);
// console.log(x);

// Decrement (++)

// console.log(x--);

// let x = 1;

// console.log(x > 0)

// Strict Equality (Type + Value)

// console.log(1 === 1);
// console.log('1' === 1);

// Loose Equality

// console.log('1' == 1);

// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer

// let points = 101;

// points > 100 ? console.log('gold') : console.log('silver')

// Falsy (false)
// undefined
//null
// 0
// false
// ''
// NaN

// Anything that is not Falsy -> Truthy

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor

console.log(currentColor);
