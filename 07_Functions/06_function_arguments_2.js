// Incorrect arguments return incorrect answers

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius("John");

console.log(value); // NaN

// If a function is called with less arguments than parameters, the missing values become undefined


function multiply(a, b, c) {
    return a * b * c; // 1 * undefined * undefined
}

let result = multiply(1);

console.log(result); // NaN


// Better to assign a value then leaving an argument undefined

function myFunction(x, y) {
    if (y === undefined) {
        y = 2;
    }
    return x * y;
}

let result1 = myFunction(5);
console.log(result1);

// If param2 is not passed / undefined, then = 10

function myFunction1(param1, param2 = 10) {
    return param1 + param2;
}

let total = myFunction1(3);
console.log(total);

// Rest parameter (...) allow a function to cover an indefinite number or arguments in an array

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}

let z = sum (5, 9, 14, 121, 435, 535, 37);
console.log(z);

