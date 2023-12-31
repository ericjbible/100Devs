// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// function bmi(weight, height) {
//   return "";
// }

//my solution

let bmi = (weight, height) => {
  return ( weight / ( height*height )) <= 18.5 ? "Underweight" : ( weight / ( height*height )) <= 25.0 ? "Normal" : ( weight / ( height*height )) <= 30.0 ? "Overweight" : "Obese"
}

//optimization of my solution

bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                              bmi <= 25 ? "Normal" :
                              bmi <= 30 ? "Overweight" : "Obese";


// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// function check(a, x) {
//   // your code here
// }

//my solution

const check = (a, x) => a.includes(x)


