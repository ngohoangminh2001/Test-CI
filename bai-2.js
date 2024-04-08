var input = [60, 40, 55, 75, 64];
function alternatingSums(inputArray) {
    var countEven = 0, countOdd = 0;
    for (var i = 0; i < inputArray.length; i++)
    {
        if (i % 2 == 0)
            countOdd += inputArray[i];
        else
            countEven += inputArray[i];
    }
    var returnArray = [];
    returnArray.push(countOdd);
    returnArray.push(countEven);
    return returnArray;
}
console.log(alternatingSums(input));