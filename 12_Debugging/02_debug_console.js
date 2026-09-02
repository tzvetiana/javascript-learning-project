// The console is the most important debugging tool for JavaScript developers

let userName = "John";
let age = 25;

console.log(userName); // John
console.log(age); // 25

// console.warn can be used for warnings and something suspicious in the program

console.warn("This is a warning!"); // This is a warning!

// console.error can be used for errors

console.error("Something went wrong!"); // Something went wrong!

// Logging multiple values

let x = 5;
let y = 10;

console.log("x is:", x, "y is:", y); // x is: 5 y is: 10

// Inspecting objects

let person = {name: "John", age: 45};

console.log(person); // { name: 'John', age: 45 }


// console.table prints arrays and objects in a table format

let users = [
  {name: "John", age: 25},
  {name: "Anna", age: 30}
];

console.table(users);