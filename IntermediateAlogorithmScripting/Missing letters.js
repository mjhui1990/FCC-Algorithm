function fearNotLetter(str) {
    //create alphabet array;
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  //split stright to array;
  str = str.split('');
  //get the index of last letter of array in alphabet array
  var lastone = alphabet.indexOf(str[str.length-1]);
  //get teh index of first letter in alphabet array
  var firstone = alphabet.indexOf(str[0]);
  //loop through the array comparing str to alphabet if it doesnt match the return the one that doesn't match
  for (var i= firstone+1; i < lastone; i++) {
    if (str[i-firstone] != alphabet[i]) {
      return alphabet[i];
      }
    }
    //if everything matches return undefined
   return undefined;
}
