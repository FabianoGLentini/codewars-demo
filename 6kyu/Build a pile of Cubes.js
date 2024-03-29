// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of 
// �3n3 , the cube above will have volume of (�−1)3(n−1) 3  and so on until the top which will have a volume of 1313.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as 
// �
// 3+(�−1)3+(�−2)3+...+13=�n +(n−1) 3 +(n−2) 3 +...+1 3 =m if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

// My Attempt 

function findNb(m) {
    let n = 0,
        volume = 0,
        i = 0
    
    while(volume < m){
      n++
      volume += (n-i)^3
      i++
    }
    
    return volume === m ? n : -1
  }

  
//Code Wars solution with  my own minor adjustment

function findNb(m) {
    let n = 0;
    let sum = 0;

    while (sum < m) {
      n++;
      sum += n^3;
    }

    return sum === m ? n : -1;
  }

//or

function findNb(m) {
    let n = 0
    while (m > 0) m -= ++n**3
    return m ? -1 : n
  }