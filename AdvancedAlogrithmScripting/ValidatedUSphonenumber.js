
function telephoneCheck(str) {
    //^(1\s) allows only a space or 1 in the beginning
    //the second part (\([0-9]{3}\)|[0-9]{3}) of the phone number we give it two options only allow (numbernumbernumber) or numbernumbernumber then allow space or - [\s\-]?
    //allows 3 numbers [0-9]{3} then space or - [\s\-]?
    // must end with 4 numbes [0-9]{4}$
          
     var regextest = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/;
      
      return regextest.test(str);
    
    }
    
    telephoneCheck("555-555-5555");