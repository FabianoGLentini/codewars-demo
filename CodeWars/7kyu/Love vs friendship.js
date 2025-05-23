// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.


// My JS Solution 

function wordsToMarks(string){
    return string.split("").reduce((sum, char) => sum += char.charCodeAt() - 96 , 0)  
}


// Code Wars Alternatives

const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)

// Or

function wordsToMarks(str){
  var sum = 0;
  for (let i = 0; i < str.length; i++)
    sum += str.charCodeAt(i) - 96;
  return sum;
}