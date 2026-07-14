// Return statement is used to send a value out of a function. Function stops executing after it has reached return statement

function sayHello() {
    return "Hello World";
}

let message = sayHello(); // the variable contains "Hello World"

console.log(message);

// Most functions return a result of a calculation or an operation

function multiply(a, b) {
    return a * b;
}

let result = multiply(3, 5);

console.log(result); // 15


// Function without return keyword returns value undefined

function multiply1(c, d) {
    let x = c * d;
}

let result1 = multiply1(3, 5);

console.log(result1); // undefined

// Return can be used to stop a function early, based on condition

function checkAge(age) {
    if (age < 18) {
        return "Too young";
    }
    return "Access grated";
}

let answer = checkAge(16);

console.log(answer);