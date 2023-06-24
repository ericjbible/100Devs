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

// let userColor = undefined;
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor

// console.log(currentColor);

// let x = 2 + 3 * 4;

// console.log(x);

// let x = 10;
// let y = ++x;

// console.log(y);

// let a = 'red';
// let b = 'blue';

// let c = undefined;

// c = b;
// b = a;
// a = c;

// console.log(a);
// console.log(b);

// hour
// if hour is between 5am and 12pm: Good morning!
// if it is between 12pm and 6pm: Good afternoon!
// otherwise: Good evening!

// let hour = 10;

// if (hour >= 5 && hour < 12)
//   console.log('Good morning!');
// else if (hour >= 12 && hour < 6)
//   console.log('Good afternoon!');
// else
//   console.log('Good evening!');

// let role;

// switch (role) {
//   case 'guest':
//     console.log('Guest User');
//     break

//   case 'moderator':
//     console.log('Moderator User');
//     break

//   default:
//     console.log('Unknown User');
// }

// for (let i = 0; i < 5; i++)
//   console.log('JavaScript RULES!');

// let i = 0;

// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let i = 0;

// do {
//   if (i % 2 !== 0)
//     console.log(i);
//   i++
// } while (i <= 5)

// const person = {
//   name: 'Eric',
//   age: 34
// };

// for (let key in person)
//   console.log(key, person[key]);

// const colors = ['red', 'green', 'blue'];

// for (let index of colors)
//   console.log(index);

// let i = 0;
// while (i <=10) {
//   if (i === 5) break;
  // if (i %2 === 0) {
  //   i++;
  //   continue;
  // }
//   console.log(i);
//   i++
// }

// write a function that takes two numbers and returns the maximum of the two

// function maxOfTwo(a, b) {
//   if (a > b)
//     return a;
//   else
//     return b;
// }

// console.log(maxOfTwo(5, 2));

// function isLandscape(width, height) {
//   return (width > height);
// }

// console.log(isLandscape(10, 8));

//implement fizzBuzz
// divisible by 3=>fizz
// divisible by 5=>buzz
// divisible by both 3 and 5 => fizzbuzz
// divisible by neither => input
// Not a number => 'Not a number'

// const output = fizzBuzz(false);
// console.log(output);

// function fizzBuzz(input) {
//   return (typeof input !== 'number') ? 'Not a number' : ((input % 3 === 0) && (input % 5 === 0)) ? 'fizzbuzz' : (input % 5 === 0) ? 'buzz' : (input % 3 === 0) ? 'fizz' : input;
// }

//speed limit = 70
// 5 => 1 point
// Math.floor(1.3)
// 12 points => suspended

// checkSpeed (80);
// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if ((Math.floor((speed - speedLimit) / kmPerPoint)) >= 12) {
//     console.log('Suspended');
//   } else {
//     console.log(`${(Math.floor((speed - speedLimit) / kmPerPoint))} points`);
//   }
// }

// showNumbers(10);

// function showNumbers(limit) {
//   for(let i = 0; i <= limit; i++) {
//     (i === 0) ? console.log(i, "EVEN") : (i % 2 === 0) ? console.log(i, "EVEN") : console.log(i, "ODD");
//   }
// }

// console.log(countTruthy([false, NaN, 1, 2, 3]));

// function countTruthy(array) {
//   let x = 0;
//   for(let index of array) {
//     if (index) {
//       x++;
//     }
//   }
//   return x;
// }
// const movie = {
//   title: 'a',
//   director: 'b',
//   releaseYear: 2023,
//   rating: 3.5
// };

// showProperties(movie)
// function showProperties(obj) {
//   for(let property in obj) {
//     if (typeof obj[property] === 'string') {
//       console.log(property, obj[property]);
//     }
//   }
// }
// console.log(sum(10));

// function sum(limit) {
//   let sum = 0;
//   for (let i = 0; i <= limit; i++) {
//     if ((i % 3 === 0) || (i % 5 === 0)) {
//       sum = sum + i;
//     }
//   }
//   return sum
// }

// const marks = [80, 80, 40];

// 1-59: F
// 60-69: D
// +10 : C
// +10 : B
// 90-100: A

// console.log(calculateGrade(marks));

// function calculateGrade(marks) {
//   let sum = 0;
//   let divisor = marks.length;

//   for(let index of marks) {
//     sum += index;
//   }

//   let average = sum / divisor;

//   if (average <= 59)
//     return 'F';
//   else if (average <= 69)
//     return 'D';
//   else if (average <= 79)
//     return 'C';
//   else if (average <= 89)
//     return 'B';
//   else
//     return 'A';
// }

// showStars(5);

// function showStars(rows) {
//   for (let i = 1; i <= rows; i++) {
//     let pattern = '';
//     for (let j = 0; j < i; j++){
//       pattern += '*';
//     }
//     console.log(pattern);
//   }
// }

// showPrimes(20);

// Prime (whose factors are only 1 and itself)

// function showPrimes(limit) {
//   for (let num = 2; num <= limit; num++)
//     if (isPrime(num)) console.log(num);
// }

// function isPrime(num) {
//   for (let factor = 2; factor < num; factor++)
//     if (num % factor === 0)
//       return false;
//   return true;
// }

// const circle = {
//   radus: 1,
//   location: {
//     x: 1,
//     y: 1
//   },
//   isVisible: true,
//   draw: function(){
//     console.log('draw');
//   }
// };

// circle.draw();

// Factory Function

// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log('draw');
//     }
// };
// }

// const circle1 = createCircle(1);

// console.log(circle1);

// Constructor Function

// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// }

// const circle = new Circle(1);

// const circle = {
//   radius: 1
// };

// circle.color = 'purple';

// circle.draw = function() {}

// delete circle.color;
// delete circle.draw;

// console.log(circle);

// const addressEric = {
//   street: '123 main st',
//   city: 'yomomma',
//   zipCode: 42069
// };

// function showAddress(address) {
//   for (let key in address) {
//     console.log(key, address[key]);
//   }
// }

// showAddress(addressEric);

// function createAddress(street, city, zipCode) {
//   return {
//     street,
//     city,
//     zipCode
//   };
// }

// const ericAddress = createAddress('123 main st', 'yomomma', 42069);

// console.log(ericAddress);

// function Address(street, city, zipCode) {
//   this.street = street,
//   this.city = city,
//   this.zipCode = zipCode
// }

// const maryAddress = new Address('456 main st', 'yomomma', 42069);

// console.log(maryAddress);

// const address1 = new Address('a', 'b', 'c');
// const address2 = new Address('a', 'b', 'c');

// function areEqual(address1, address2) {
//   for(key1 in address1) {
//     let value = address1[key1];
//     for(key2 in address2){
//       if (value !== address2[key2])
//         return false;
//       else
//         return true;
//     }
//   }
// }

// function areSame(address1, address2) {
//   return (address1 === address2);
// }

// console.log(areSame(address1, address2));
// console.log(areEqual(address1, address2));

//title
//body
//author
//views
//comments
//  (author, body)
//isLive

// let blogPostObject = {
//   title: 'a',
//   body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, in!',
//   author: 'Eric Bible',
//   views: 6969,
//   comments: [{
//     author: 'Jane Duprey',
//     body: 'Lorem ipsum dolor sit amet.'
//   }],
//     isLive: true
// };

// console.log(blogPostObject);

// function BlogPost(title, body, author) {
//   this.title = title,
//   this.body = body,
//   this.author = author
//   this.views = 0,
//   this.comments = [],
//   this.isLive = false
// }

// const unpublishedPost = new BlogPost('a', 'b', 'c');

// console.log(unpublishedPost);

// let priceRange = [
//   {
//     label: '$',
//     tooltip: 'Inexpensive',
//     minPerPerson: 0,
//     maxPerPerson: 10
//   },
//   {
//     label: '$$',
//     tooltip: 'Moderate',
//     minPerPerson: 11,
//     maxPerPerson: 30
//   },
//   {
//     label: '$$$',
//     tooltip: 'Expensive',
//     minPerPerson: 31,
//     maxPerPerson: 50
//   },
//   {
//     label: '$$$$',
//     tooltip: 'Luxurious',
//     minPerPerson: 51,
//     maxPerPerson: 150
//   }
// ];

// const numbers = [3, 4];
// numbers[0] = 5;

// //end
// numbers.push(9);
// console.log(numbers);

// //beginning
// numbers.unshift(0);
// console.log(numbers);

// //middle

// numbers.splice(1, 0, 2);
// console.log(numbers);

// const numbers = [1, 2, 1, 3, 4];
// console.log(numbers.lastIndexOf(1));
// console.log(numbers.includes(3));

// const courses = [
//   {id:1, name:'a'},
//   {id:2, name:'b'}
// ];

// const course = courses.find(function(course) {
//   return course.name = 'a';
// });

// console.log(course);

// const numbers = [1,2,3,4]

// //end
// const last = numbers.pop();
// console.log(numbers);
// console.log(last);
// //beginning
// const first = numbers.shift();
// console.log(numbers);
// console.log(first);
// //middle
// numbers.splice(2, 2);
// console.log(numbers);

// let numbers = [1,2,3,4];
// let another = numbers;

//emptying an array
//solution 1
// numbers = [];

//solution 2
// numbers.length = 0;

//solution 3
// numbers.splice(0, numbers.length);

//solution 4
// while (numbers.length > 0)
//   numbers.pop();

// console.log(numbers);
// console.log(another);

// const first = [1,2,3];
// const second = [4,5,6];

// const combined = first.concat(second);
// const combined = [...first, ...second];

// console.log(combined);

// const copy = [...combined];

// const slice = combined.slice();

// console.log(slice);

const numbers = [1,2,3];

for (let number of numbers)
  console.log(number);

  numbers.forEach((number, index) => console.log(number, index));
