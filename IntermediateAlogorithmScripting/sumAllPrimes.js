function sumPrimes(num) {
    //create a sum  
    var sum = 0;
    //loop through the from 2 to num;
    for (var i = 2; i <= num; i++) {
        //check if number is prime if it is prime add it to sum
        if (isPrime(i)) {
            sum += i;
        }
    }
    //return sum
    return sum;
}

//this function test if number is prime 
function isPrime(test) {
    //does a for loop where j is less than test
    for (var j = 2; j < test; j++) {
        //if test cant be divided by anything by itself and 1
        if (test % j == 0)
            return false;
    }
    return true;
}