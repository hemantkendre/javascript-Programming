function Bank(bankName, location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    console.log(`Bank Details are : ${bankName}, ${location}, ${ifscCode}, ${branchCode}`);
    
}
const yesBankRes = new Bank('Yes Bank','Pune','YES001','Yesbank001');
yesBankRes;
const sbiBankRes = new Bank('SBI Bank','Pimpri','SBI001','SBIbank001');
sbiBankRes;
const mhaBankRes = new Bank('Bank of Maharashtra','Chinchwad','BOM001','BOMbank001');
mhaBankRes;
const axisBankRes = new Bank('AXIS Bank','Mumbai','AXIS001','AXISbank001');
axisBankRes;
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
console.log(`SBI bank timing are : Opening Time is : ${sbiBankRes.openTime} and closing time is : ${sbiBankRes.closeTime}`);
console.log(`Axis bank timing are : Opening Time is : ${axisBankRes.openTime} and closing time is : ${axisBankRes.closeTime}`);
console.log(`Yes Bank details are : ${yesBankRes.bankName}, ${yesBankRes.branchCode} and opening time is ${yesBankRes.closeTime}`);



//console.log(yesBankRes.openTime);
//console.log(yesBankRes.closeTime);



