// Try statement allows defining the code block to be checked for errors
// Catch statement allows defining the code block to be executed if an error is found

// ReferenceError occurs when you try to access a variable which is not declared or is used before initialization

let x = 5;

try {
    x = y;
} catch (err) {
    console.log(err.name, err.message); // ReferenceError y is not defined
}


try {
    let a = b;
    let b = 10;
} catch (err) {
    console.log(err.name, err.message); // ReferenceError Cannot access 'b' before initialization
}


// TypeError occurs when a value exists but is used in a way its type does not support.

let anna = 5;

try
{
    anna(5);
} catch(err) {
    console.log(err.name, err.message); // TypeError anna is not a function
}


let num = 3;

try
{
    num.toUpperCase();
} catch(err) {
    console.log(err.name, err.message); // TypeError num.toUpperCase is not a function
}


// RangeError occurs when value is out of its valid range

let tests = ["Login test", "Checkout test"];

try
{
    tests.length = -1;
} catch(err) {
    console.log(err.name, err.message); // RangeError Invalid array length
}


// SyntaxError occurs when a code is not written properly according to JavaScript rules

// let fName = "John); // SyntaxError: Invalid or unexpected token

