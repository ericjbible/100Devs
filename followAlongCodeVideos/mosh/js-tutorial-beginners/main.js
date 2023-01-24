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

let selectedColors = ['red', 'blue'];
console.log(selectedColors);

//Arrays are zero-indexed, here is how to access the elements

console.log(selectedColors[0]);

//elements can also be initialized with index access

selectedColors[2] = 'green';

//arrays are technically objects and have properties that can be accessed using dot notation

console.log(selectedColors.length);

//Functions
