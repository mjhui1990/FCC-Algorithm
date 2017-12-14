function binaryAgent(str) {
  //create container
  var container = [];
  //split string to an array
  str = str.split(" ");
  //loop through str
  for (var i = 0; i < str.length; i++) {
    //convert each binary to a letter and push it to container
   container.push(String.fromCharCode(parseInt(str[i],2)));
    //join the string back;
 }return container.join('');
}
