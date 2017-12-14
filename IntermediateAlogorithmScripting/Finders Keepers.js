


function findElement(arr, func) {
    //loop through array
    for (var i = 0; i < arr.length; i++) {
        //plug each digit in the function if it passes it will return true;
        if (func(arr[i]) == true) {
            //if true return the value in arr[i]
            return arr[i];
        }
    }
}