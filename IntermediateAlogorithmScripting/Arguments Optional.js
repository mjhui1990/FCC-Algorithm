function addTogether() {
    //collections the parameters and puts it into params variable
    var params = [...arguments];
    //checks every param if params typeof does not equal number return undefined
    if (!params.every(function (param) {
        return typeof param === 'number';
    })) {
        return undefined;
    }
    //checks if both params are numbers if they are return sum of params
    if (typeof params[0] == "number" && typeof params[1] == "number") {
        return params[0] + params[1];
    }
    //using recursive save first param as param 0 and add together second param if its a number
    else {
        var firstParam = params[0];

        return function (secondParam) {
            return addTogether(firstParam, secondParam);
        };

    }
}