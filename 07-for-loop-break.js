var sum = 0;
for (var i = 1; i<=10; i++) {
    sum = sum + i;   
}
console.log(sum);

var sum = 0;
for (var i = 1; i<=10; i++) {
    sum = sum + i*i*i;   
}
console.log(sum);

var str = "I am good Programmer";
for(var i=0; i<=str.length-1; i++)
{
    if(i%2!=0 && str.charAt(i)!=' '){
        console.log(str.charAt(i)); 
    }
}

var str = "Hello Buddy";
var strRev = '';
for (let index = str.length-1; index >=0; index--) {
    if (str.charAt(index)!=" ") {
        strRev = strRev + str.charAt(index);
    }
}
console.log(strRev);

