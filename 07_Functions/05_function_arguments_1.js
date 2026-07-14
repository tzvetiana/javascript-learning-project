// Arguments are the values passed and received by the function

function multiply(a, b) { // parameters in parentheses
    return a * b;
}

let result = multiply(4, 2); // arguments in parentheses

console.log(result);

// JavaScript functions have built-in object called argumetns object. It contains array of the arguments

function findMax() {
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]; 
        }
    }
    return max;
}

let result1 = findMax(4, 5, 6); // arguments object contains 4, 5, 6

console.log(result1); // 6 


// Creating a function to sum all input values

function sumAll() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

let total = sumAll(1, 123, 500, 115, 44, 88);
console.log(total);


// The order of arguments matters

function substract(x, y) {
    return x - y;
}

let x1 = substract(10, 5);
let x2 = substract(5, 10);

console.log(x1);
console.log(x2);

// Arguments can be variables too

let var1 = 5;
let var2 = 6;

function multiply(c, d) {
    return c * d;
}

let result2 = multiply(var1, var2);

console.log(result2);
