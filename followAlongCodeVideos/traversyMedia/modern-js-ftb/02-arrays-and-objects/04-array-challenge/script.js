const arr = [1, 2, 3, 4, 5];
// let x;

// x = arr.push(6);
// x = arr.unshift(0);
// x = arr.reverse();

// console.log(x);

const arr2 = [5, 6, 7, 8, 9, 10];

let y;

y = [...arr, ...arr2.slice(1, 6)];

console.log(y);
