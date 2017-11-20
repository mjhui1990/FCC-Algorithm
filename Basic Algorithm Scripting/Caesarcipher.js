// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.



function rot13(str) { // LBH QVQ VG!
    //split string
  str.split('');
    //create an empty container
  var container = [];
  //loop through array 
  for(var i = 0; i < str.length; i++) {
      //change each character to a ASCII Number
    var character = str.charCodeAt(i); 
    // if Number is less than 65 or greater than 90 it's not a captialize letter so just push it into array
    if (character < 65 || character > 90) {
       container.push(str[i]);   
      }
     //check if number is less than 78 its A-M, add 13 so it becomes the next 13 letters 
     //fromCharCode will change the ASCII number back to alphabet 
    else if (character < 78) {
       container.push(String.fromCharCode(character + 13));     
      }
      //this else statement takes char of characters 78-89 changes it to alphabet and pushes into array
    else {
       container.push(String.fromCharCode((character) - 13));
      }   
  }
  //join back into string and return
  return container.join('');
}