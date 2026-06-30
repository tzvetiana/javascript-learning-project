// String
let color = "Yellow";
let firstName = "Peter";

// Number
let height = 168.00;
let weight = 60.50;

// BigInt
let bigInt1 = 1234567890123456789012345n;
let bigInt2 = BigInt(1234567890123456789012345);

// Boolean
let boolean1 = true;
let boolean2 = false;

// Object
person = {firstName:"Michael", lastName:"Jackson"};

// Array object
const cats = ["grey", "white", "orange"];

// Date object
const date = new Date("2025-06-10");

// Undefined
let k;
let l;

//Null
let x = null;
let y = null;

//Symbol
const symbol1 = Symbol();
const symbol2 = Symbol();

//Examples types
console.log("String example:", firstName);
console.log("Number example:", height);
console.log("BigInt example:", bigInt1);
console.log("Boolean example:", boolean1);
console.log("Object example:", person);
console.log("Array object example:", cats);
console.log("Date object example:", date);
console.log("Undefined example:", k);
console.log("Null example:", y);
console.log("Symbol example:", symbol1);

//Use of typeof operator to find the type of a JavaScript variable 
console.log("Type of string:", typeof color);
console.log("Type of number:", typeof weight);
console.log("Type of boolean:", typeof boolean2);
console.log("Type of object:", typeof person);
console.log("Type of undefined:", typeof k);
console.log("Type of symbol:", typeof symbol2);