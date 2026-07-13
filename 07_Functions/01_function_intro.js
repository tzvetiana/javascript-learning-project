// Functions are reusable code blocks designed for particular tasks. You call a function by adding parentheses to its name: name()

function sayHello() {       // creates/defines function
    return "Hello World";
}

let greeting = sayHello(); // calls the function and stores its returned value

console.log(greeting);


// Optional parameters are listed insed parentheses (p1, p2, ...)

function multiply(a, b) { // local variables are declared for the function call
    return a * b;
}

let result = multiply(4, 3); // Arguments are values which are passed to function parameters when function is called 

console.log(result);

// Function can be called many times

function add(x, y){
    return x + y;
}

let sum1 = add(5, 5);
let sum2 = add(25, 25);

console.log(sum1);
console.log(sum2);

// Local variables can only be accessed from within function

function myFunction(){
    let carName = "Audi";
}

console.log(typeof carName); // undefined


// Any calculations can be used in functions

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
} 

let temperature = toCelsius(77);

console.log(`The temperature is ${temperature} Celsius.`);
