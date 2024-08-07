/*
JavaScript provides a built-in parseInt method.

It can be used like this:

parseInt("10") returns 10
parseInt("10 apples") also returns 10
We would like it to return "NaN" (as a string) for the second case because the input string is not a valid number.

You are asked to write a myParseInt method with the following rules:

It should make the conversion if the given string only contains a single integer value (and possibly spaces - including tabs, line feeds... - at both ends)
For all other strings (including the ones representing float values), it should return NaN
It should assume that all numbers are not signed and written in base 10
*/

// My Solution 

function myParseInt(str) {
  return +str  ==  Math.floor(+str) && !str.includes("x10") && !str.includes(".") ? Number(str) : "NAN"
}


// Code Wars Alternatives

function myParseInt(str) {
  for(var i = 0; i < str.length; i++) {
  var a = str.split("");
  if(isNaN(a[i])) {
     return str = NaN;
    }
  }
  return Number(str);
}

// Or

function myParseInt(str) {
  return /^\s*\d+\s*$/.test(str) ? +str : NaN;
}