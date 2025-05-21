console.log(`========= To count the total Vowels ============`);

let str = "I am very good IT Developer";
let count = 0;
let vowels = "aeiouAEIOU";
for (let index = 0; index < str.length-1; index++) {
    if(str.charAt(index)!=' ' && vowels.includes(str.charAt(index)))
        count++;
}
console.log(`Total vowels count is ${count}`);

console.log(`========= To get the sum of cube of numbers from 1 to 5 ============`);
let sum = 0;
for (let index = 1; index <= 5; index++) {
    sum = sum + (index*index*index);
}
console.log(`sum of cube of numbers from 1 to 5 is ${sum}`);

console.log(`========= To get the odd position characters ============`);
let res = function oddPositionedChars(inputString){
    let result = '';
    for (let index = 0; index <= inputString.length-1; index++) {
        if(inputString.charAt(index)!=" " && (index%2 ==1)){
            result = result+inputString.charAt(index);
        }
    }
     return result;
    //return inputString;
}
let result = res('Hard work always pays back');
console.log(`Input string is 'Hard work always pays back' and odd position characters are :  ${result}`);
result = res('Soon I will be UI IT Champ');
console.log(`Input string is 'Soon I will be UI IT Champ' and odd position characters are :  ${result}`);
