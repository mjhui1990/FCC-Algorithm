function diffArray(arr1, arr2) {
  var newArr = [];
  //loop through arr2 add items arent in arr1 to newArr
  for (var i = 0; i <= arr1.length; i++){
    if (arr2.indexOf(arr1[i]) == -1) {
    newArr.push(arr1[i]);
    }
  }
   //loop through arr1 add items arent in arr2 to newArr
  for (var j = 0; j <= arr2.length; j++){
    if (arr1.indexOf(arr2[j]) == -1) {
    newArr.push(arr2[j]);
    }
  }
  //filter through array and remove null
    var result = newArr.filter(function(word){
     return word != null;
   });
  // return result
  return result;
}
