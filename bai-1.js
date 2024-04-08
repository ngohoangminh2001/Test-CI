var input = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"];
function allLongestStrings(inputArray) {
    var maxSize = inputArray[0].length;
    for (var i = 1; i < inputArray.length; i++)
        if (inputArray[i].length > maxSize)
            maxSize = inputArray[i].length;
    var returnArray = [];
    for (var i = 0; i < inputArray.length; i++)
        if (inputArray[i].length == maxSize)
            returnArray.push(inputArray[i]);
    return returnArray;
}
console.log(allLongestStrings(input));