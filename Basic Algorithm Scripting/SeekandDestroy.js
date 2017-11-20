// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
    // Remove all the values
    
    var args = Array.prototype.slice.call(arguments);
    var container = args[0];
    var first = args[1],
        second = args[2],
        third = args[3];
  
  var answer = container.filter(function(word){
    return (word != first && word != second && word != third);
    });
    return answer;
  }