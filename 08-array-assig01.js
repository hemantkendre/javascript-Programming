let fruitArray = ['Banana','Orange','Apple','Mango','Water Melon'];
console.log(`Original Array is : ${fruitArray}`);

console.log(`======= First Element =======`);
console.log(fruitArray[0]);

console.log(`======= Last Element =======`);
console.log(fruitArray[fruitArray.length-1]);

console.log(`======= Add Element 'Papaya' before 'Banana' =======`);
fruitArray.unshift('Papaya');
console.log(fruitArray);

console.log(`======= Remove Element 'Mango' from Array =======`);
fruitArray.splice(4,1);
console.log(fruitArray);

console.log(`======= Add Element 'pineapple' at the last position =======`);
fruitArray.push('pineapple');
console.log(fruitArray);

console.log(`======= Add Element 'Dragon Fruit' before 'Water Melon' =======`);
fruitArray.splice(4,0,'Dragon Fruit');
console.log(fruitArray);

console.log(`======= Replace 'Orange' with 'Kiwi' =======`);
fruitArray.splice(2,1,'Kiwi');
console.log(fruitArray);

console.log(`======= Log elements starting from index 1 to 4 =======`);
const sliceArray = fruitArray.slice(1,5);
console.log(sliceArray);

console.log(`======= Log last 3 elements =======`);
const sliceArray1 = fruitArray.slice(fruitArray.length-3);
console.log(sliceArray1);
