// Number.MAX_VALUE is a constant representing the largest positive number in JavaScript.
// Number properties belong to JS Number Object. They cannot be used on variables.

let x = 6;

console.log("Largest number is: " + Number.MAX_VALUE);
console.log(x.MAX_VALUE); // undefined

// Number.MIN_VALUE is a contant representing the smallest positive number in JavaScript.

console.log("Smallest number is: " + Number.MIN_VALUE);

// Number.POSITIVE_INFINITY represents infinity

console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(1 / 0); // Infinity

console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(-1 / 0); // -Infinity

// NaN is a JavaScript resevered word for a number that is not a legal number

console.log(Number("Apple")); // NaN