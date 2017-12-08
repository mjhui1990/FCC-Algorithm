// jshint esversion:6
function uniteUnique(...arr) {
    //create container to push in array
    var container = [];
    // assigne the arguments to arrconainer
    var arrcontainer = arr;
    //loop through each array
    for (var i = 0; i < arrcontainer.length; i++) {
        //loop through each array inside the arraycontainer
        for (var j = 0; j < arrcontainer[i].length; j++) {
            //if it item is not containeed in container
            if (container.indexOf(arrcontainer[i][j]) == -1) {
                //push into container
                container.push(arrcontainer[i][j]);
            }

        }
    }
    return container;
}
