// // An object literal with two key-value pairs
// let spaceship = {
//   'Fuel Type': 'diesel',
//   color: 'silver'
// };
// // The spaceship we have so far looks good but, unfortunately, is not very fast at hyperspace travel due to having an inferior fuel source. Make a new spaceship object named fasterShip with the same color as spaceship but with a Fuel Type equal to 'Turbo Fuel'.
// // Write your fasterShip object literal below
// let fasterShip = {
//   'Fuel Type': 'Turbo Fuel',
//   color: 'silver'
// }

// // Accessing Properties
// // There are two ways we can access an object’s property. Let’s explore the first way— dot notation, ..

// // You’ve used dot notation to access the properties and methods of built-in objects and data instances:

// 'hello'.length; // Returns 5

// // With property dot notation, we write the object’s name, followed by the dot operator and then the property name (key):

// let spaceship = {
//   homePlanet: 'Earth',
//   color: 'silver'
// };
// spaceship.homePlanet; // Returns 'Earth',
// spaceship.color; // Returns 'silver',

// // If we try to access a property that does not exist on that object, undefined will be returned.

// spaceship.favoriteIcecream; // Returns undefined

// // Let’s get some more practice using dot notation on an object!

// let spaceship = {
//   homePlanet: 'Earth',
//   color: 'silver',
//   'Fuel Type': 'Turbo Fuel',
//   numCrew: 5,
//   flightPath: ['Venus', 'Mars', 'Saturn']
// };

// Write your code below

// Let’s use the dot operator to access the value of numCrew from the spaceship object in the code editor. Create a variable crewCount and assign the spaceship‘s numCrew property to it.

const crewCount = spaceship.numCrew;

// Again using the dot operator, create a variable planetArray and assign the spaceship‘s flightPath property to it.

const planetArray = spaceship.flightPath;

// // We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.

// let spaceship = {
//   'Fuel Type': 'Turbo Fuel',
//   'Active Duty': true,
//   homePlanet: 'Earth',
//   numCrew: 5
// };
// spaceship['Active Duty'];   // Returns true
// spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
// spaceship['numCrew'];   // Returns 5
// spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

// // With bracket notation you can also use a variable inside the brackets to select the keys of an object. This can be especially helpful when working with functions:

// let returnAnyProp = (objectName, propName) => objectName[propName];

// returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

// // If we tried to write our returnAnyProp() function with dot notation (objectName.propName) the computer would look for a key of 'propName' on our object and not the value of the propName parameter.

// // Let’s get some practice using bracket notation to access properties!

// let spaceship = {
//   'Fuel Type' : 'Turbo Fuel',
//   'Active Mission' : true,
//   homePlanet : 'Earth',
//   numCrew: 5
//  };

// let propName =  'Active Mission';

// // Let’s use bracket notation to access the value of 'Active Mission' from the spaceship object in the code editor. Create a variable isActive and assign the spaceship‘s 'Active Mission' property to it.

// // Using bracket notation and the propName variable provided, console.log() the value of the 'Active Mission' property.

// // Write your code below
// let isActive = spaceship['Active Mission']

// console.log(spaceship[propName])


// //Methods

// let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// // Write your code below
// const alienShip = {
//   retreat: function() {
//     console.log(retreatMessage)
//   },
//   takeOff() {
//     console.log('Spim... Borp... Glix... Blastoff!')
//   }
// }

// alienShip.retreat();
// alienShip.takeOff();

// // Nested Objects
// // In application code, objects are often nested— an object might have another object as a property which in turn could have a property that’s an array of even more objects!

// // In our spaceship object, we want a crew object. This will contain all the crew members who do important work on the craft. Each of those crew members are objects themselves. They have properties like name, and degree, and they each have unique methods based on their roles. We can also nest other objects in the spaceship such as a telescope or nest details about the spaceship’s computers inside a parent nanoelectronics object.

// const spaceship = {
//      telescope: {
//         yearBuilt: 2018,
//         model: '91031-XLT',
//         focalLength: 2032
//      },
//     crew: {
//         captain: {
//             name: 'Sandra',
//             degree: 'Computer Engineering',
//             encourageTeam() { console.log('We got this!') }
//          }
//     },
//     engine: {
//         model: 'Nimbus2000'
//      },
//      nanoelectronics: {
//          computer: {
//             terabytes: 100,
//             monitors: 'HD'
//          },
//         'back-up': {
//            battery: 'Lithium',
//            terabytes: 50
//          }
//     }
// };

// // We can chain operators to access nested properties. We’ll have to pay attention to which operator makes sense to use in each layer. It can be helpful to pretend you are the computer and evaluate each expression from left to right so that each operation starts to feel a little more manageable.

// spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'

// // In the preceding code:

// // First the computer evaluates spaceship.nanoelectronics, which results in an object containing the back-up and computer objects.
// // We accessed the back-up object by appending ['back-up'].
// // The back-up object has a battery property, accessed with .battery which returned the value stored there: 'Lithium'

// let spaceship = {
//   passengers: null,
//   telescope: {
//     yearBuilt: 2018,
//     model: "91031-XLT",
//     focalLength: 2032
//   },
//   crew: {
//     captain: {
//       name: 'Sandra',
//       degree: 'Computer Engineering',
//       encourageTeam() { console.log('We got this!') },
//      'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
//   },
//   engine: {
//     model: "Nimbus2000"
//   },
//   nanoelectronics: {
//     computer: {
//       terabytes: 100,
//       monitors: "HD"
//     },
//     'back-up': {
//       battery: "Lithium",
//       terabytes: 50
//     }
//   }
// };

// // Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it. Make sure to use bracket and dot notation to get the value of the food through nested access (don’t just copy the value into the variable!)

// let capFave = spaceship.crew.captain['favorite foods'][0]

// // Right now the passengers property has a value of null. Instead, assign as its value an array of objects. These objects should represent the spaceship‘s passengers as individual objects. Make at least one passenger object in the array that has at least one key-value pair on it.

// spaceship.passengers = [{name: 'Ricky Biblay'}]

// // Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made). Make sure to use bracket and dot notation to get the passenger object through nested access (don’t just copy the object into the variable!)

// let firstPassenger = spaceship.passengers[0]

// // Pass By Reference
// // Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object. As a result, functions which change object properties actually mutate the object permanently (even when the object is assigned to a const variable).

// const spaceship = {
//   homePlanet : 'Earth',
//   color : 'silver'
// };

// let paintIt = obj => {
//   obj.color = 'glorious gold'
// };

// paintIt(spaceship);

// spaceship.color // Returns 'glorious gold'


// // Our function paintIt() permanently changed the color of our spaceship object. However, reassignment of the spaceship variable wouldn’t work in the same way:

// let spaceship = {
//   homePlanet : 'Earth',
//   color : 'red'
// };
// let tryReassignment = obj => {
//   obj = {
//     identified : false,
//     'transport type' : 'flying'
//   }
//   console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}

// };
// tryReassignment(spaceship) // The attempt at reassignment does not work.
// spaceship // Still returns {homePlanet : 'Earth', color : 'red'};

// spaceship = {
//   identified : false,
//   'transport type': 'flying'
// }; // Regular reassignment still works.

// // Let’s look at what happened in the code example:

// // We declared this spaceship object with let. This allowed us to reassign it to a new object with identified and 'transport type' properties with no problems.
// // When we tried the same thing using a function designed to reassign the object passed into it, the reassignment didn’t stick (even though calling console.log() on the object produced the expected result).
// // When we passed spaceship into that function, obj became a reference to the memory location of the spaceship object, but not to the spaceship variable. This is because the obj parameter of the tryReassignment() function is a variable in its own right. The body of tryReassignment() has no knowledge of the spaceship variable at all!
// // When we did the reassignment in the body of tryReassignment(), the obj variable came to refer to the memory location of the object {'identified' : false, 'transport type' : 'flying'}, while the spaceship variable was completely unchanged from its earlier value.

// let spaceship = {
//   'Fuel Type' : 'Turbo Fuel',
//   homePlanet : 'Earth'
// };

// // Write your code below
// // Write a function greenEnergy() that has an object as a parameter and sets that object’s 'Fuel Type' property to 'avocado oil'.

// let greenEnergy = obj => {
//   obj['Fuel Type'] = 'avocado oil'
// }

// // Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object’s disabled property to true.

// function remotelyDisable(obj) {
//   obj.disabled = true
// }

// // Call your two functions with the spaceship object in the code editor, then console.log() the spaceship object to confirm those properties were changed/added.

// greenEnergy(spaceship);
// remotelyDisable(spaceship);
// console.log(spaceship);

// // Looping Through Objects
// // Loops are programming tools that repeat a block of code until a condition is met. We learned how to iterate through arrays using their numerical indexing, but the key-value pairs in objects aren’t ordered! JavaScript has given us alternative solution for iterating through objects with the for...in syntax .

// // for...in will execute a given block of code for each property in an object.

// let spaceship = {
//   crew: {
//     captain: {
//       name: 'Lily',
//       degree: 'Computer Engineering',
//       cheerTeam() { console.log('You got this!') }
//     },
//     'chief officer': {
//       name: 'Dan',
//       degree: 'Aerospace Engineering',
//       agree() { console.log('I agree, captain!') }
//     },
//     medic: {
//       name: 'Clementine',
//       degree: 'Physics',
//       announce() { console.log(`Jets on!`) } },
//     translator: {
//       name: 'Shauna',
//       degree: 'Conservation Science',
//       powerFuel() { console.log('The tank is full!') }
//     }
//   }
// };

// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

// Our for...in will iterate through each element of the spaceship.crew object. In each iteration, the variable crewMember is set to one of spaceship.crew‘s keys, enabling us to log a list of crew members’ role and name.

let spaceship = {
  crew: {
  captain: {
      name: 'Lily',
      degree: 'Computer Engineering',
      cheerTeam() { console.log('You got this!') }
      },
  'chief officer': {
      name: 'Dan',
      degree: 'Aerospace Engineering',
      agree() { console.log('I agree, captain!') }
      },
  medic: {
      name: 'Clementine',
      degree: 'Physics',
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna',
      degree: 'Conservation Science',
      powerFuel() { console.log('The tank is full!') }
      }
  }
};

// Write your code below
// Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew roles and names in the following format: '[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.
for (let crewMember in spaceship.crew) {
console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
}

// Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew names and degrees in the following format: '[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'.

for (let crewMember in spaceship.crew) {
console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
}

// Review
// Way to go! You’re well on your way to understanding the mechanics of objects in JavaScript. By building your own objects, you will have a better understanding of how JavaScript built-in objects work as well. You can also start imagining organizing your code into objects and modeling real world things in code.

// Let’s review what we learned in this lesson:

// Objects store collections of key-value pairs.
// Each key-value pair is a property—when a property is a function it is known as a method.
// An object literal is composed of comma-separated key-value pairs surrounded by curly braces.
// You can access, add or edit a property within an object by using dot notation or bracket notation.
// We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.
// We can navigate complex, nested objects by chaining operators.
// Objects are mutable—we can change their properties even when they’re declared with const.
// Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.
// We can iterate through objects using the For...in syntax.
