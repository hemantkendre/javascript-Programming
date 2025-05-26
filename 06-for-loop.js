for (let index = 1; index <= 10; index++) {
    console.log(index); 
}
console.log(`======= Print the table of 2 =======`);
for (let index = 2; index <= 20 ; index=index+2) {
    console.log(index);  
}
for (let index = 1; index <=10; index++) {
    var result = index*2;
    console.log(result);
}

console.log(` ===== Print table of 7 =======`);

for (let index = 1; index <= 10; index++) {
    var result = index*7;
    console.log(result);
    
}

console.log(` ===== Print value from 10 - 1`);
for (let index = 10; index >=1; index--) {
    console.log(index);
}

console.log(` ===== Print tabe of 11 in revers order`);
for (let index = 10; index >=1; index--) {
    console.log(index * 11);
    
    
}


console.log(`======= Table of 10 ========`);
var index =1;
while (index<=10) {
    console.log(index*10);
    index++;
}

console.log(`=== do while loop =======`);
var index = 1;
do {
    console.log(index);
    index++;
} while (index<=10);