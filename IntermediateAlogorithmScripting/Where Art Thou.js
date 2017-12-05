function whatIsInAName(collection, source) {
  // What's in a name?
 
  // Only change code below this line
  //filler creates a new array in our case its called arr... and pushes in the objs pass the a certain criteria when it passes it returns true
  var arr = collection.filter(function(match) {
    
  for (var i in source) {
   //checks if source == match if it doesn't it returns falase
      if(source[i] != match[i]) {
        return false;
        }
  }
    //if matches return true and pushes into arr
    return true;
  });
  
  // Only change code above this line
  return arr;
}