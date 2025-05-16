console.log(` ============ Even OR Odd Number ============ `);

var result = function isEvenOrOddNum(num1){
    if(num1 % 2 ==0){
        return "Even";
    }
    else{
        return "Odd";
    }
        
}
var res = result(45); 
console.log(`The number 45 is ${res}`);
var res = result(70); 
console.log(`The number 70 is ${res}`);
var res = result(67); 
console.log(`The number 67 is ${res}`);
var res = result(98); 
console.log(`The number 98 is ${res}`);

console.log(` ============ Vote Eligibility ============ `);

var voteEligibility = function isEligibility(num2){
    if(num2 >= 18)
        return 'Eligible';
    else
        return 'Not Eligible'
}
var res1 = voteEligibility(18);
console.log(`Your age is 18 and you are ${res1} for vote`);
var res1 = voteEligibility(20);
console.log(`Your age is 20 and you are ${res1} for vote`);
var res1 = voteEligibility(17);
console.log(`Your age is 17 and you are ${res1} for vote`);
var res1 = voteEligibility(40);
console.log(`Your age is 40 and you are ${res1} for vote`);

console.log(` ============ String length checking ============ `);
var strLength = function verifyLength(str){
    if(str.length >10)
        return 'more than 10';
    else
        return 'less than 10';
}
var inputStringLength = strLength('Javascript - ES6');
console.log(`The string length is ${inputStringLength}`);

console.log(` ============ String start with ============ `);
var strStartwidth = function strStartCheck(str){
    if(str.startsWith("Java"))
        return `String "${str}" starts with Java`;
    else
        return `String "${str}" not starts with Java`;
}
var strResult = strStartwidth('Javascript Language');
console.log(strResult);
var strResult = strStartwidth('Programming Language');
console.log(strResult);




