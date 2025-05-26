const array = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`============ Input array is ${array} ==============`);
console.log(`============ Length of array ======================`);
console.log(array.length);
console.log(`============ First and Last element of array ======================`);
console.log(array[0]);
console.log(array[array.length-1]);
console.log(`============ Log third last element of array ======================`);
console.log(array[array.length-3]);
console.log(`============ Log all even numbers of array ======================`);
const evenArray = [];
for (let index = 0; index < array.length; index++) {
    if(array[index]%2==0)
        evenArray.push(array[index]);
}
console.log(evenArray);

console.log(`============ Log all odd numbers of array ======================`);
const oddArray = [];
for (let index = 0; index < array.length; index++) {
    if(array[index]%2!=0)
    oddArray.push(array[index]);
}
console.log(oddArray);

console.log(`============ Log all even positioned numbers of array ======================`);
const evenPosition = [];
let evenPositionSum = 0;
for (let index = 0; index < array.length; index++) {
    if(index%2==0){
        evenPosition.push(array[index]);
        evenPositionSum = evenPositionSum+array[index];
    }
}
console.log(evenPosition);
console.log(`============ Log all even positioned numbers sum of array ======================`);
console.log(evenPositionSum);

console.log(`============ Log all odd positioned numbers of array ======================`);
const oddPosition = [];
let oddPositionSum = 0;
for (let index = 0; index < array.length; index++) {
    if(index%2!=0){
        oddPosition.push(array[index]);
        oddPositionSum = evenPositionSum+array[index];
    }
}
console.log(oddPosition);
console.log(`============ Log all odd positioned numbers sum of array ======================`);
console.log(oddPositionSum);

console.log(`============ Log sum of all elements of array ======================`);
let sumOfAll = 0;
for (const element of array) {
    sumOfAll = sumOfAll+element;
}
console.log(sumOfAll);

console.log(`============ Log the numbers which are multiple of 5 ======================`);
let numberMultipleOf5 = [];
for (const element of array) {
    if(element%5==0)
    numberMultipleOf5.push(element);
}
console.log(numberMultipleOf5);

console.log(`============ Is 115 available in array ======================`);
let isAvailibale = array.includes(115);
console.log(`115 is ${isAvailibale}`);

console.log(`============ Is 23 available in array ======================`);
isAvailibale = array.includes(23);
console.log(`23 is ${isAvailibale}`);

console.log(`============ Insert number (55,56) at index 3 ======================`);
array.splice(3,0,55,56);
console.log(array);

console.log(`============ Delete 3 elements from index 4 ======================`);
array.splice(4,3);
console.log(array);


