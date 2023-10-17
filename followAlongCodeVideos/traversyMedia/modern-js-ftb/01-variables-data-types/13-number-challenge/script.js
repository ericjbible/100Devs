let x = Math.ceil(Math.random() * 100);
let y = Math.ceil(Math.random() * 50);

let sumOutput = x + y;
let differenceOutput = x - y;
let productOutput = x * y;
let quotientOutput = x / y;
let remainderOutput = x % y;

console.log(`
x: ${x}
y: ${y}
sum: ${sumOutput}
difference: ${differenceOutput}
multiplication: ${productOutput}
division: ${quotientOutput}
modulus: ${remainderOutput}
`);
