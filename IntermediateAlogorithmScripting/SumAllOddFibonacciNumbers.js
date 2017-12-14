function sumFibs(num) {
    //declare variables
    var previousNum = 0;
    var currentNum = 1;
    var container = [];
    //while loop stops when currentnum is > num
    while (currentNum <= num) {
        //check if theres a remainder
        if (currentNum % 2 != 0) {
            //if has remainder push number into container
            container.push(currentNum);
        }
        //increases current number
        currentNum += previousNum;
        //changes previous number to old current number
        previousNum = currentNum - previousNum;
    }
    //sums up container and returns the sum of the values
    return container.reduce(function (a, b) {
        return a + b;
    }, 0);
}


