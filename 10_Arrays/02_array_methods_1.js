// The length property returns the size of an array

const fruits = ["Banana", "Orange", "Strawberry"];

console.log(fruits.length); // 3

// toString() method returns the elements of the array in a comma-separated string

console.log(fruits.toString()); // Banana,Orange,Strawberry

// at() method returns the element at a certain position starting from 0 index

console.log(fruits.at(2)); // Strawberry
// console.log(fruits.at(-2)); // Orange

// Array elements are accessed using their index numbers

console.log(fruits[0]); // Banana
console.log(fruits[2]); // Strawberry
// console.log(fruits[-2]); // undefined


// join() method joins all elements into a string, works as toString() but you can specify the separator

console.log(fruits.join()); // Banana,Orange,Strawberry
console.log(fruits.join(" * ")); // Banana * Orange * Strawberry


// pop() method removes the last element from an array and returns the removed element


const cats = ["Grey", "White", "Black", "Orange"];

console.log(cats.pop()); // Orange
console.log(cats); // [ 'Grey', 'White', 'Black' ]


// push() adds a new element to the end of the array and returns the new length

console.log(cats.push("Black and White")); // 4
console.log(cats); // [ 'Grey', 'White', 'Black', 'Black and White' ]

// shift() removes first element and shifts the rest of the elements to the left. It returns the removed element

console.log(cats.shift()); // Grey
console.log(cats); // [ 'White', 'Black', 'Black and White' ]

// unshift adds new element at 0 index and shifts the rest of the elements to the right. It returns the array length

console.log(cats.unshift("Siamese")); // 4
console.log(cats); // [ 'Siamese', 'White', 'Black', 'Black and White' ]

// Array.isArray() returns true if the value is an array, otherwise false

console.log(Array.isArray(cats)); // true

