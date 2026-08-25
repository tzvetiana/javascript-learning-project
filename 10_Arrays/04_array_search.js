// indexOf() searches an element in an array and returns its position. Shows first occurence if there are more than 1 items.

const fruits = ["Apple", "Banana", "Apple", "Lemon"];

console.log(fruits.indexOf("Apple")); // 0

// Searching for non-existing item

console.log(fruits.indexOf("Orange")); // -1

// Searching starting from position 1

console.log(fruits.indexOf("Apple", 1)); // 2


// lastIndexOf() returns last occurrence of an item

console.log(fruits.lastIndexOf("Apple")); // 2

// includes() checks if element is present in array. Returns true and false

console.log(fruits.includes("Orange")); // false

// find() searches an element which passes a function. Returns first element

const numArray = [5, 11, 19, 25, 30];
let num = numArray.find(myFunction);

function myFunction(value, index, array){
    return value > 18;
}

console.log(num); // 19

// findIndex() searches the first position of an element which passes a function

const numbers = [5, 11, 19, 25, 30];
let indexNum = numbers.findIndex(y => y > 18);

console.log(indexNum); // 2


// findLastIndex() searches the last position of an element which passes a function

const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);

console.log(pos); // 4 