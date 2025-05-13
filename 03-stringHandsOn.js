function stringHandsOn(){
    var inputString = "   Hey you are doing good, Keep it up   ";

    console.log(`Input string is : ${inputString}`);
    console.log(`Length of the string is : ${inputString.length} `);

    var trimString = inputString.trim();
    console.log(`After trim string is : ${trimString}`);
    console.log(`After trim length is : ${trimString.length}`);
    
    var emptySpaces = inputString.length - trimString.length;
    console.log(`Extra space count is : ${emptySpaces}`);
    console.log(`First character is : ${trimString.charAt(0)} and Last character is ${trimString.charAt(trimString.length-1)}`);

    var words = trimString.split(' ');
    console.log(`Total words are : ${words.length}`);
    console.log(`Index of word "good" is : ${trimString.indexOf("good")}`);
    console.log(`Substring from index from 22 is : ${trimString.substring(22)}`);
    console.log(`String ends with word "up" : ${trimString.endsWith("up")}`);
    console.log(`String starts with word "Hey" : ${trimString.startsWith("Hey")}`);

    var string1 = "abc";
    var string2 = "pqr";
    var string3 = "xyz";
    console.log(`Contacted string is ${string1.concat(" ",string2).concat(" ",string3)}`)

    let str = "JavaScript";
    console.log(str.substring(4, 6));
    console.log(str.substr(4, 6));

}
stringHandsOn();