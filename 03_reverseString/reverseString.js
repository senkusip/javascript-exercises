const reverseString = function(string) {
    const stringArray = string.split("");
    const reversedStringArray = [];
        for (let i = stringArray.length; i >= 0; i--){
            reversedStringArray.push(stringArray[i]);
        }
    let reversedString = reversedStringArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
