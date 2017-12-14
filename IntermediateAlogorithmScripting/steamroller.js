function steamrollArray(arr) {
    // I'm a steamroller, baby
    var container = [];
    //calls flatten on arr
    flatten(arr);
    //create a function flatten that takes an array
    function flatten(arr) {
        //foreach goes through each element
        arr.forEach(function (array) {
            //checks if its an array if it isnt an array it pushes the the number into
            //array container
            if (!Array.isArray(array)) {
                container.push(array);
            } else {
                //if it is array it runs flatten on the array to check if its an array
                flatten(array);
            }
        });
    }
    return container;
}

//got stuck on this one used youtube https://www.youtube.com/watch?v=W7yF_5X80OU