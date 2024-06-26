// You are going to be given a string. Your job is to return that string in a certain order that I will explain below:

// Let's say you start with this: "012345"

// The first thing you do is reverse it:"543210"
// Then you will take the string from the 1st position and reverse it again:"501234"
// Then you will take the string from the 2nd position and reverse it again:"504321"
// Then you will take the string from the 3rd position and reverse it again:"504123"

// Continue this pattern until you have done every single position, and then you will return the string you have created. For this particular number, you would return:"504132"

// Input:
// A string of length 1 - 1000

// Output:
// A correctly reordered string.


// My Solution

function flipNumber(n){
  const arr = String(n).split(""),
  ans = []


while(arr.length) {
arr.reverse()   
ans.push(arr.shift())
}

return ans.join("")
}


// Code Wars Alternative

const flipNumber = n => n.length < 2 ? n : n.slice(-1) + n[0] + flipNumber(n.slice(1, -1));