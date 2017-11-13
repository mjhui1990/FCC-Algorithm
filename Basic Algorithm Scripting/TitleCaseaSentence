// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".



function titleCase(str) {

  //split string into an array by the space btw the letters  
  str = str.toLowerCase().split(" ");
  //loop through array replacing each word's first character with a uppercase char
  for (var i = 0; i < str.length; i++) {
     str[i] = str[i].replace(str[i][0], str[i][0].toUpperCase());
    }
  //return and joined str with space
  return str.join(' ');

}