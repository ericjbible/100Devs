const calculator = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2;
  } else {
    return 'not a valid operation';
  }
};

console.log(calculator(5, 5, '&'));
