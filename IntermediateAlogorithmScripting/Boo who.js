function booWho(bool) {  
   // came up with2 solutions

   //first one checks if its true or false if it is return true else truen false;
    if (bool === true || bool === false) {
      return true;
    }
    else {
      return false;
    }

//second one checks the type of bool if it is a boolean then it returns true else false
    return typeof bool === 'boolean';
  }