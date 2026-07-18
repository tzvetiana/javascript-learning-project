// Arrow functions is short syntax for function expressions. You can skip function, return keyword and skip {}

const multiply = (a, b) => a * b;
let result = multiply(4, 5);

console.log(result);

// Arrow function is written as a function expression

const add = (x, y) => {
    return x + y;
};

let result1 = add(2, 3);

console.log(result1);

// Before Arrow

const hello = function() {
    return "Hello World!";
};

let greeting = hello();

console.log(greeting);

// After Arrow

const hello1 = () => "Arrow Hello World!";
let greeting1 = hello1();

console.log(greeting1);

// If a function has only one parameter, you can omit the parentheses

// const square = (z) => z * z;

const square = z => z * z;

console.log("The square of 2 is: "+ square(2));

// With parantheses

// const hello2 = (value) => "Hello " + value;

const hello2 = value => "Hello " + value; 

console.log(hello2("Universe!")); // Hello Universe!


// Keyword "this" work with Function expressions but does not work with Arrow Functions

const person = {
    name: "John",
    greet: function() {    
        return this.name;
    }
}

console.log(person.greet()); // John


const person1 = {
    name: "John",
    greet1: () => {    
        return this.name;
    }
}

console.log(person1.greet1()); // undefined