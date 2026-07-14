// Parameters allow you to send values to a function. Functions can have 1 or more parameters

function sayHello(name) {
    return "Hello " + name;
}

let greeting = sayHello("John");

console.log(greeting);


// Function with multiple parameters

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}

let name = fullName("John", "Doe");

console.log(name);

// Accessing a function with incorrrect parameter returns incorrect answer

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius();

console.log(value); // NaN

// Default parameter value is used if no argument is provided

function myFunction(x, y = 10) { // x has no default value; y has default value 10
    return x + y;
}

let result = myFunction(5); // first argument goes to first parameter

console.log(result); // 15


