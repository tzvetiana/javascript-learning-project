// Debugging means finding and fixing mistakes (bugs) in the code

// console.log() prints values to the console

let price = 50;
let quantity = 3;
let total = price * quantity;

console.log("Total:", total);


// When running JavaScript with Node.js, errors and console messages appear in the terminal.

// console.log(myValue); // ReferenceError: myValue is not defined

/* let x;
console.log(x.length); // TypeError: Cannot read properties of undefined (reading 'length') */

// Errors show the file and line number, while the ^ marker points to the exact location where the problem was detected.


// Common beginner mistakes - using = instead of == or ===

let x = 10;
if (x = 5) {
  console.log("This runs"); // This runs
}

let a = 10;
if (a === 5) {
    console.log("This runs only if a is 5");
}