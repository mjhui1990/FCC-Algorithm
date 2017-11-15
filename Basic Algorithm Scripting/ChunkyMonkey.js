// Write a function that splits an array (first argument) 
// into groups the length of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
    //create a empty storage array
    var storageArr = [];
    //loop through arr until its length is less less than 0
    while (arr.length > 0) {
    //splice removes the size amount and pushes it to storageArr
    //for example if the array is [1,2,3,4] and size is 2 it will "splice" 1 & 2 create a new array and push it into storageArr
    storageArr.push(arr.splice(0,size));
  }
    
    return storageArr;
  }