// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13
// Bash note:
// input : 2 strings with substrings separated by ,
// output: number as a string

// My First Pass 

function mxdiflg(a, b) {
    if(!a.length || !b.length) return -1
    
    const ans = a.reduce((acc,c) => {
      b.forEach(el => {
        acc.push(Math.abs(c.length-el.length))
      })
      return acc
    },[])
    
    return Math.max(... ans)
  }

// Code Wars Alternative 

function mxdiflg(a1, a2) {
    var max = -1;
    for(var A1 of a1)
      for(var A2 of a2)
        max = Math.max(max, Math.abs(A1.length - A2.length));
    return max;
  }