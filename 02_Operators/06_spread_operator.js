// Spread operator splits iterables into individual elements

let  text = "12345";

let min = Math.min(...text);
let max = Math.max(...text);

// Spread operator separates an array into individual values
let numbers = [10, 5, 30, 2];

let smallest = Math.min(...numbers);
let biggest = Math.max(...numbers);


console.log(min);
console.log(max);
console.log(smallest);
console.log(biggest);