//#Get the averages of these numbers

//Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

//Example:

//Input:  [ 1, 3, 5, 1, -10]
//Output:  [ 2, 4, 3, -4.5]
//If the array has 0 or 1 values or is null, your method should return an empty array.

//Have fun coding it and please don't forget to vote and rank this kata! :-)


// My Solution

function averages(numbers) {
  if(numbers == null || numbers.length < 2) return []
  return numbers.reduce((acc,c, i, arr) => (typeof arr[i+1] === "number" ? acc.push((c + arr[i+1])/2) : "", acc),[])
}

// Code Wars Alternative

function averages(numbers) {
  var final = [];
  if (numbers) {
    for (var i=0; i<numbers.length-1; i++) {
      final.push((numbers[i] + numbers[i+1]) / 2);
    }
  }
  return final;
}

// Or

function averages(numbers) {
  return numbers ? numbers.map((v, i, a) => (v + a[i + 1]) / 2).slice(0, -1) : [];
}