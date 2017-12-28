var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  //check if value is empty if it delete the key & return the object
  if (value == "") {
   delete collectionCopy[id][prop];
   return collectionCopy;
 //check if property is tracks if it has the property if not create array and push   array
}if (prop == "tracks" && collectionCopy[id].hasOwnProperty(prop) == false) {
  collectionCopy[id][prop] = [];
  collectionCopy[id][prop].unshift(value);
  //check if it's tracks and if it exist push it in and sort array 
}if (prop == "tracks" && collectionCopy[id].hasOwnProperty(prop)) {
  collectionCopy[id][prop].unshift(value);
  collectionCopy[id][prop].sort(); 
}else{
  //set id.property value to value
  collectionCopy[id][prop] = value;
}
  //return collection
 return collectionCopy; 
}