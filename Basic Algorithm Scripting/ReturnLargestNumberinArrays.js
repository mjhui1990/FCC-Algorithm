// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax 


function largestOfFour(arr) {
  var largestArray= [];
//trying to use map function instead of for loop map through array
  arr.map(function(x) {
    //sory each array from largest to smallest
    x.sort(function(a, b){return b-a});
    //push the first number from each array to new array
    largestArray.push(x[0]);
  });
  return largestArray;
}
