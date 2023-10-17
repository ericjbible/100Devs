let x;

const todo = new Object();

todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

const todos = [
  { id: 1, name: 'Eat Breakfast' },
  { id: 2, name: 'Eat Lunch' },
  { id: 3, name: 'Eat Dinner' },
];

x = Object.keys(todo).length;
x = Object.values(todo);
x = Object.entries(todo);
x = todo.hasOwnProperty('name');

console.log(x);
