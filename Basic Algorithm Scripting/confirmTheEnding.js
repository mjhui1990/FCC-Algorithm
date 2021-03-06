// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge,
//  we would like you to use one of the JavaScript substring methods instead.




function confirmEnding(str, target) {
    //split string to Array
    var word = str.split(" ");
    //check if array is one word 
    if (word.length == 1) {
        //if 1 word check if last letter of str is target
      if(word[0].substring(word[0].length -1) == target){
        return true;
      }else{
        return false;
      }
      //else if its not 1 word but a setence
    }else{
     //pop the last word of out array and save it as matchWord
    var matchWord = word.pop();
    //check if match word includes target by counting backwards using negative -target.length 
    if (matchWord.substring(matchWord.length -(target.length)) == target) {
        return true;
        }else{
        return false;
        }
    }
  }