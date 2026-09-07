// A ReferenceError means a variable or function name does not exist

// console.log(myValue); // ReferenceError: myValue is not defined


// A TypeError means value is used in an invalid way

/* let x;

console.log(x.length); // TypeError: Cannot read properties of undefined (reading 'length') */ 

// A SyntaxError means JavaScript does not understand the code
// Example: The closing parenthesis is missing:

/* if (x == 5 {
    console.log("Hello!"); // SyntaxError: Unexpected token '{'
} */


// NaN is returned when JavaScript cannot perform math correctly

let result = "abc" * 5;
console.log(result); // NaN


// Cannot read properties of undefined means a property is being accessed on an undefined value

/* let user;
console.log(user.name); // TypeError: Cannot read properties of undefined (reading 'name') */