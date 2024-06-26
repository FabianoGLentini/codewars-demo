// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

// My First Pass

function generateShape(integer){
    let ans = []
    
    for(i=0;i<integer;i++) {
      ans.push("+".repeat(integer))
    }
    
    return ans.join(" ").replaceAll(" ", "\n")
  }

// Code Wars Alternative

function generateShape(n){
    return ("+".repeat(n)+"\n").repeat(n).trim()
  }

  // Or

  let generateShape = int => [...Array(int)].map(_ => "+".repeat(int)).join("\n")