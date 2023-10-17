const firstName = 'John';
const lastName = 'Smith';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person);

// Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',
};

const { id, title } = todo;

console.log(id, title);
