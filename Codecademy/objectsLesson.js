// An object literal with two key-value pairs
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};
// The spaceship we have so far looks good but, unfortunately, is not very fast at hyperspace travel due to having an inferior fuel source. Make a new spaceship object named fasterShip with the same color as spaceship but with a Fuel Type equal to 'Turbo Fuel'.
// Write your fasterShip object literal below
let fasterShip = {
  'Fuel Type': 'Turbo Fuel',
  color: 'silver'
}

// Accessing Properties
// There are two ways we can access an object’s property. Let’s explore the first way— dot notation, ..

// You’ve used dot notation to access the properties and methods of built-in objects and data instances:

'hello'.length; // Returns 5

// With property dot notation, we write the object’s name, followed by the dot operator and then the property name (key):

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',

// If we try to access a property that does not exist on that object, undefined will be returned.

spaceship.favoriteIcecream; // Returns undefined

// Let’s get some more practice using dot notation on an object!

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below

// Let’s use the dot operator to access the value of numCrew from the spaceship object in the code editor. Create a variable crewCount and assign the spaceship‘s numCrew property to it.

const crewCount = spaceship.numCrew;

// Again using the dot operator, create a variable planetArray and assign the spaceship‘s flightPath property to it.

const planetArray = spaceship.flightPath;

// We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them. Without bracket notation in these situations, our code would throw an error.

let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

// With bracket notation you can also use a variable inside the brackets to select the keys of an object. This can be especially helpful when working with functions:

let returnAnyProp = (objectName, propName) => objectName[propName];

returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

// If we tried to write our returnAnyProp() function with dot notation (objectName.propName) the computer would look for a key of 'propName' on our object and not the value of the propName parameter.

// Let’s get some practice using bracket notation to access properties!

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

// Let’s use bracket notation to access the value of 'Active Mission' from the spaceship object in the code editor. Create a variable isActive and assign the spaceship‘s 'Active Mission' property to it.

// Using bracket notation and the propName variable provided, console.log() the value of the 'Active Mission' property.

// Write your code below
let isActive = spaceship['Active Mission']

console.log(spaceship[propName])
