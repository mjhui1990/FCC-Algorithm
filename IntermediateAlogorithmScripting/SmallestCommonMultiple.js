function smallestCommons(arr) {
    //sort array from smallest to largest
    arr.sort(function (a, b) {
        return a - b;
    });
    //declare empty arrays
    var numbers = [];
    var container = [];
    //loop through arr thats sorted and push the numbers range in
    for (var i = arr[0]; i <= arr[1]; i++) {
        numbers.push(i);
    }
    //declare the largest number in the array this will save some time because we know that
    //the number has to be atleast the largest number
    var largest = numbers[numbers.length - 1];
    //compare the length of container and the numbers container(which contains the original numbers)
    //if the length does not equal then loop continues
    while (container.length != numbers.length) {
        //reset container array at the beginning of ever loop
        container = [];
        //increases largest by 1;
        largest++;
        //loop through the numbers array
        for (var j = 0; j <= numbers.length; j++) {
            //check if the number largest is divisble by numbers[j] if it is push it to array
            if (largest % numbers[j] == 0) {
                container.push(numbers[j]);
            }

        }

    }
    return largest;
}