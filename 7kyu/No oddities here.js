// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// My First Pass

function noOdds( values ){
    return values.filter(el => !(el % 2))
  }

//Code Wars Refractor

var noOdds = values => values.filter(x => x % 2 === 0);