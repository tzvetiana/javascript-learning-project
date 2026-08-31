// Silent errors cause unexpected values without throwing an error or stopping execution.

let c = 1 / 0;

console.log(c); // Infinity

const tests1 = ["Login test", "Checkout test"];

console.log(tests1[10]); // undefined

// Type coercion is automatic JavaScript conversion from one type to another

// String coercion converts all values to strings through concatenation (+)

let result = ("5" + 2);

console.log(result); // "52"

// Number coercion converts to numbers through other arithmetic operators

let result1 = ("5" - "3");
let result2 = ("4" * 2);

console.log(result1); // 2
console.log(result2); // 8

// Loose Equality (==) converts values before comparing them

let x = ("5" == 5); 

console.log(x); // true

// Use Strict Equality (===) to check both value and type without coercion

