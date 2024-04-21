// Make a function "add" that will be able to sum elements of list continuously and return a new list of sums.

// For example:

// add [1,2,3,4,5] == [1, 3, 6, 10, 15], because it's calculated like 
// this : [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, 1 + 2 + 3 + 4 + 5]
// If you want to learn more see https://en.wikipedia.org/wiki/Prefix_sum

// My First Pass

function add(arr) {
    return arr.map((el,i) => {
      for(j=0;j<i;j++) {
        el += arr[j]
      }
      
      return el
    })
  }

//Code Wars Alternative

function add(a){
    let t = 0
    return a.map(e=>t+=e)
  }