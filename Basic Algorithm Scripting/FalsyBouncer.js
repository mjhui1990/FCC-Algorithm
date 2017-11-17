
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {

  var array = arr.filter(function(word){
  return ((typeof word === 'string' && word.length > 0) || typeof word ==='number' && word > 0);
  });
  return array;      
}