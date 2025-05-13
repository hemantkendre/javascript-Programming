
console.log(`======== Male Marriage Eligibility ========`);

function maleMarriageEligibility(para1,para2,para3){
    var res = para1 == 'Male' && para2 >= 21 ? 'Eligible for marriage.' : 'Not eligible for marriage.';
    console.log(`Hey ${para3} you are ${res}`);
    
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Shew Jobs");

console.log(`======== female Marriage Eligibility ========`);

function femaleMarriageEligibility(para1,para2,para3){
    var res = para1 == 'Female' && para2 >=18 ? 'Eligible for marriage.' : 'Not eligible for marriage.';
    console.log(`Hey ${para3} you are ${res}`);
}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinds Gates");