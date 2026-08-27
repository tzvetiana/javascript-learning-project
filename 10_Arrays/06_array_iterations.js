// for...of loops through array items

const cars = ["Audi", "BMW", "Kia"];
let text = "";

for(let x of cars){
    text += x + "\n";
}

console.log(text);

// for...in returns the indexes of items

let indexText = "";

for(let x in cars){
    indexText += x + "\n";
}

console.log(indexText);

// forEach() calls a function for each element, does not create a new array. Only value argument is used.

const numbers = [45, 4, 9, 16, 25];
let arrayNum = [];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  arrayNum.push(value);
}

console.log(arrayNum); // [ 45, 4, 9, 16, 25 ]


// map() transforms each element through a function and creates a new array

const num = [45, 4, 9, 16, 25];
const numMulti = num.map(multiFunction);

function multiFunction(value) {
    return value * 2;
}

console.log(numMulti); // [ 90, 8, 18, 32, 50 ]

// filter() creates a new array with elements that pass a test (true/false)

const nums = [45, 4, 9, 16, 25];
const over18 = nums.filter(newFunction);

function newFunction(value) {
  return value > 18;
}

console.log(over18); // [ 45, 25 ]


// reduce() combines all array elements into a single value. Accepts 4 arguments

const num1 = [45, 4, 9, 16, 25];
const sum = num1.reduce(reduceFunction);

function reduceFunction(total, value, index, array){
    return total + value;
}

console.log(sum); // 99


// Without an initial value, the first array element becomes total. Use 0 when reducing an array of objects into a numeric total.

const testResults = [
    { name: "Login test", duration: 1200 },
    { name: "Checkout test", duration: 3500 },
    { name: "Search test", duration: 800 },
    { name: "Logout test", duration: 2100 }
];

const totalDuration = testResults.reduce(calculateDuration, 0); 

function calculateDuration(total, value) {
    return total + value.duration;
}

console.log(totalDuration); // 7600

// every() checks if all elements pass a test (true/false)

const nums1 = [45, 4, 9, 16, 25];

let allOver18 = nums1.every(everyFunction);

function everyFunction(value, index, array) {
  return value > 18;
}

console.log(allOver18); // false

// some() checks if at least 1 element pass a test

let someOver18 = nums1.some(someFunction);

function someFunction(value, index, array) {
  return value > 18;
}

console.log(someOver18); // true


// Array.from() returns array from any iterable object with length

let alph = "ABDCDE";

console.log(Array.from(alph)); // [ 'A', 'B', 'D', 'C', 'D', 'E' ]

// Spread (...) combines elements from multiple arrays into a new array

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "Dec"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(year);

// Spread (...) can be used to copy an array

const arr1 = [1, 2, 3];
const arr2 = [...arr1];

console.log(arr2); // [ 1, 2, 3 ]

// Rest (...) collects the remaining array elements into a new array

const arr = [1, 2, 3, 4, 5];
const [a, b, ...rest] = arr;

console.log(rest); // [ 3, 4, 5 ]

