function firstFunction() {
    console.log("Hi, How are you ?");
}

function secondFunction() {
    console.log("Hi, I am Fine.");
}
console.log(" ================ Function with no arguments and no return type ======================");
firstFunction();
secondFunction();

console.log(" ================ Function with arguments but no return type ======================");
function personalDetails(firstName,lastName,lastName) {
    console.log("First Name is : ",firstName);
    console.log("Last Name is : ",lastName);
    console.log("College Name is : ",lastName);
}
personalDetails('Hemant','Kendre','Modern College');

console.log(" ================ Function with arguments and return type ======================");
function addThreeValues(param1,param2,param3){
    var res = param1 + param2 + param3;
    return res;
}

functionRes = addThreeValues(10.23,600,40);
console.log("Addition is ",functionRes);
console.log(" ================ Invoke same function ======================");
functionRes1 = addThreeValues("Hello"," Good", " Morning");
console.log(functionRes1);
