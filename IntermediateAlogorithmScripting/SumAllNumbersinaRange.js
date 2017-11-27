
function sumAll(arr) {
    //set largest number
    var largest = arr.reduce(function(a, b) {
      return Math.max(a, b);
    });
    //set lowest number
    var lowest = arr.reduce(function(a, b) {
      return Math.min(a, b);
    });
    //create empty array
    var emptyarr = [];
    //create loop starting from lowest number stopping at largest number adding 1 everytime
    for (var i = lowest; i <= largest; i++) {
      emptyarr.push(i);
    }
    //reduce the array - this function "reduces the array" to just one number a sum of the array
    return emptyarr.reduce(
      function getSum(total, num) {
     return total + num;
      });
  }
  