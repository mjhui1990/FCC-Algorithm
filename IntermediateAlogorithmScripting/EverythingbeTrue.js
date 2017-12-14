function truthCheck(collection, pre) {
    //create empty array
    var array = [];
    //create for in loop to check each object in array
    for (var x in collection) {
        //basically this checks if collection[0]has pre then collection [1] has pre and pushes in to array
        array.push(Boolean(collection[x][pre]));
      //if the array includes a false it means one of them either didnt have pre or had pre but it was equal to (NaN;0;"",null,undefined)  
    } if (array.includes(false)) {
        return false;
    } else
        return true;
}