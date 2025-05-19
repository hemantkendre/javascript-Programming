console.log(`======== Print number from 5 to 15 by incrementing 1 =============`);

for (let index = 5; index <= 15; index++) {
    console.log(index);
}

console.log(`======== Print number from 50 to 40 by decrementing by 1 =============`);
for (let index = 50; index >=40; index--) {
  console.log(index);  
}

console.log(`======== First 15 odd number =============`);
for (let index = 1; index <=30; index++) {
    if(index%2!=0)
        console.log(index);  
}

console.log(`======== First 10 even number =============`);
for (let index = 1; index <=20; index++) {
    if(index%2==0)
        console.log(index);  
}

console.log(`======== Print table of 5 =============`);
for (let index = 1; index <=10; index++) {
    console.log(index * 5);  
}

console.log(`======== Print table of 10 =============`);
for (let index = 1; index <=10; index++) {
    console.log(index * 10);  
}

console.log(`======== Print table of 10 in reverse order =============`);
for (let index = 10; index >=1; index--) {
    console.log(index * 10);  
}