// The code inside a function will be exeted once invoked (called)

function sayHello() {
    return "Hello World";
}

// sayHello(); // function is called without using the result

let greeting = sayHello(); // function called and stored in variable

console.log(greeting);

// Same function can be called multiple times

let greeting1 = sayHello();
let greeting2 = sayHello();

console.log(greeting1);
console.log(greeting2);

// The () operator invokes a function. Accessing a function without () returns the function itself

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

// let value = toCelsius(77); // toCelsius() invokes the toCelsius function
let value = toCelsius;


console.log(value); // Function: toCelsius


// A function can be called from other functions

function sayHey() {
    return "Hey World";
}

function showHey() {
    return sayHey(); // calls sayHey
}

console.log(showHey());