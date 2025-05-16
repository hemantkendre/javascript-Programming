var voteEligibility = function(age){
        if(age==null || age<=0 || age >130){
            console.log(`Invalid Data ${age}`);
        }
        else{
            if(age>=18)
            {
                console.log(`You are age is ${age} and you are eligible for voting`);
            }
            else
            {
                console.log(`You are age is ${age} and you are not eligible for voting`);
            }
        }
}
voteEligibility(null);
voteEligibility(undefined);
voteEligibility(0);
voteEligibility(-10);
voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(200);