// Convert boolean values to strings 'Yes' or 'No'.

function boolToWord( bool ){
  //takes in true or false, TRUE, FALSE, False, True
  //returns yes or no
  if ( bool === true) {
    return 'Yes'
  } else if ( bool === false) {
    return 'No'
  } else {
    return 'invalid input'
  }
}

console.log(boolToWord(true)) //yes
console.log(boolToWord(false)) //no`

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


//my solution

function betterThanAverage(classPoints, yourPoints) {
  const initialValue = yourPoints
  const sumOfScores = classPoints.reduce((acc, cv) => acc + cv, initialValue)
  return sumOfScores / (classPoints.length + 1) < yourPoints ? true : false
}

//solution I liked

function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}
