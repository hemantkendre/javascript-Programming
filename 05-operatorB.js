
console.log(`========= Greater Number ============`);

function greaterNumber(para1,para2) {
    var res = para1 > para2 ? para1 : para2;
    console.log(`Greater Number from ${para1} and ${para2} is : ${res}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`========= Even or Odd Number ============`);

function isEvenOrOddNum(para1){
    var res = para1 % 2 ? 'odd':'even';
    console.log(`Given number is ${para1} and it is a ${res} number`);
    
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`========= Word Leng ============`);
function wordLength(para1){
    var res = para1.length % 2 ? 'Odd': 'even';
    console.log(`Total length of ${para1} is ${para1.length} and it's a ${res} `);
}
wordLength('javaScript');
wordLength('Developer');
wordLength('Google');