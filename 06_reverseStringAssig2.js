let res = function reverseString(inputString){
    let reverseString = '';
    for (let index = inputString.length-1; index >= 0; index--) {
        if(inputString.charAt(index)!=' ')
        reverseString = reverseString + inputString.charAt(index);
    }
    return reverseString;
}

let result = res('Hard work always pays back');
console.log(`Reverse of the string of 'Hard work always pays back' is : ${result}`);

result = res('Soon I will be UI IT Champ');
console.log(`Reverse of the string of 'Soon I will be UI IT Champ' is : ${result}`);