function dropElements(arr, func) {
    //set variables
    var slicer = -1;
    var array = arr;
    //loop through array
    for (var i = 0; i < array.length; i++) {
        //test if value i of array is true
        if (func(array[i]) === true) {
            //if true set slicer to 1 and break out of loop
            slicer = i;
            break;
        }
    }
    //if slicer was never set then return empty array becuase it will return the full array
    if (slicer == -1) {
        array = [];
    }
    //slice array to return rest of array
    return array.slice(slicer);
}
