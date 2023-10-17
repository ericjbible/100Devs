const getCelsius = (temp) => (temp - 32) * (5 / 9);

console.log(`The temperature is ${getCelsius(32)} \xB0C`);

const minMax = (arr) => ({
  min: Math.min(...arr),
  max: Math.max(...arr),
});

console.log(minMax([1, 9001, 2, 3, 90]));

(function (l, w) {
  console.log(
    `The area of a rectangle with a length of ${l} and a width of ${w} is ${
      l * w
    }.`
  );
})(10, 5);
