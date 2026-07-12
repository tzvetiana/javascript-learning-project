// JavaScirpt has only one type of number. Numbers can be written with or without decimals. Numbers are stored in 64 bits.

let x = 3;
let y = 3.14;

console.log(`${x}, ${y}`);

// JavaScript uses the + operator for both addition and concatenation

let num1 = 10; // number
let num2 = 20;

console.log(num1 + num2); // 30

let str1 = "10"; // string
let str2 = "20";

console.log(str1 + str2); // 1020
console.log(num1 + str1); // 1010
console.log("Concatenation with string always results in a string: " + num1 + num2); // 1020
console.log("Parentheses force JavaScript to calculate this part first: " + (num1 + num2)); // 30
console.log(num1 + num2 + " - JavaScript calculates from left to right") // 30

// The -, *, / operators are only mathematical, so numeric strings are converted to numbers

console.log(str2 - str1); // 10

// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)

console.log(num1 / "Apple"); // Nan
console.log(num2 / str1); // 2


// == operator compares values and allows type convention. === operator compares both value and type, so number and string are not equal

console.log(num1 == str1); // true
console.log(num1 === str1); // false