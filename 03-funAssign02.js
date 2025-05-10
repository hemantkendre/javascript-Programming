function bankDetails(bankName,accountNum,location,pinCode) {
    var res = bankName +" "+ accountNum +" "+ location +" "+ pinCode;
    return res;
}

firstBank = bankDetails("CITI Bank",3456782345,'pune',431202);
secondBank = bankDetails("Axis bank",7856326598,'Mumbai',441202);
thirdBank = bankDetails("HDFC bank",8956326598,'pune',631202,"Open");

console.log(" ================ Function assignment 2 ======================");
console.log("First Bank Details :",firstBank);
console.log("Second Bank Details :",secondBank);
console.log("Third Bank Details :",thirdBank);


