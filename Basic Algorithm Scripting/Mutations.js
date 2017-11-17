// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


function mutation(arr) {
  //set arr[0] to firstword and set to lowercase
  var firstWord = arr[0].toLowerCase(); 
  //create empty array
  var emptyArray = [];
  //set arr[1] to split and lowercase it parse it to an array
  var split = arr[1].toLowerCase().split("");
  //loop over each letter of split to check if it exist in firstWord and push the result into an array
  for(var i = 0; i < split.length; i++){
    emptyArray.push( firstWord.indexOf(split[i])); 
  }
  //check if array has a -1 if it has a negative -1 that means we found a a character in split that's not in first word
  if (emptyArray.indexOf(-1) >= 0) { 
  //found letter thats not included return false else return true
    return false;
  }else 
    return true;
}
