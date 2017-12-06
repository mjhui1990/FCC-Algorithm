


function pairElement(str) {
    //create a container to put arrays in
    var container = []; 
    //split the str to an array
    var arr = str.split('');
    //use map function to go through each element of an array
  arr.map(function(x) {
    //switch criteria if x matches case push in corrsponding array then break
    switch(x) {
      case "A" :
        container.push(["A", "T"]);
        break;
       case "T" :
        container.push(["T","A"]);
        break;
       case "C" :
        container.push(["C","G"]);
        break;
        case "G" :
        container.push(["G","C"]);
        break;
    }
  });
    //return container
   return container; 
  }