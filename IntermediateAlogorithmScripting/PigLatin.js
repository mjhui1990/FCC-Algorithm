function translatePigLatin(str) {
  // create new str 
  var newStr;
  //create switch case to check for first character
  switch(str.charAt(0)) {
    // if first character matches character in "" then add way at end thne break out of case
    case "a":
        newStr = str + "way";
        break;
         case "e":
        newStr = str + "way";
        break;
          case "o":
        newStr = str + "way";
        break;
          case "u":
        newStr = str + "way";
        break;
      // if the conditions above are not met 
      default:
      //loop through the string
     for (var i = 0; i < str.length; i++) {
       //until it finds a vowel
       if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "a") {
       //cut off the front of teh string until the vowel appears + add the part that was cut off + add ay save as newStr
        newStr = str.slice(i, str.length) + str.slice(0, i) + "ay";
       //break out of forloop so it doesnt continue looping and slicing
        break;  
      }
    }
  }
// retrun new Str
  return newStr;
}