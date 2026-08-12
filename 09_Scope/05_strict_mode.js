// Strict mode prevents assigning values to variables that were not declared.

"use strict";

// All examples below run in strict mode

try {
    p = 3.14;
} catch (error){
    console.log(error.name, error.message); // ReferenceError p is not defined
}


function myFunction() {
    x = 5;
}

try {
    myFunction();
} catch (error){
    console.log(error.name, error.message); // ReferenceError x is not defined
}


// Using an undeclared object is not allowed

try {
    h = {p1: 10, p2:20};
} catch (error){
    console.log(error.name, error.message); // ReferenceError h is not defined
}


// Deleting a variable or function is not allowed
/*
    a = 5;
    delete a; // SyntaxError: Delete of an unqualified identifier in strict mode.


function x(p1, p2) {}; 
delete x;   // SyntaxError: Delete of an unqualified identifier in strict mode.

*/


