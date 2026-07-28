// Scope determines the accessability of the variables
// Global variables are declare outside a block or function. They can be accessed from anywhere in JS program

var x = 5;
let y = 3;
const z = 2;

// A variable declared outside a function becomes Global

let carName = "BMW";

function myFunction() {
    return "I can display " + carName;
}

console.log(myFunction());

// Function scope. Variables declared within a function have Local scope

function myFunction1() {
    let funcCarName = "Audi";
    console.log(typeof funcCarName, funcCarName); // string Audi
}


myFunction1();
console.log(typeof funcCarName); // undefined


// Variables declared with let and const inside a code block are "block-scoped". Variables with var cannot have block scope

{
    let p = 3.14;
}
// p cannot be used here 

{
    var q = 356;
}
// q can be used here


// If you assign value to a variable which was not declared, it becomes Global

myfunction2();
console.log("I can display " + newCarName);

function myfunction2() {
    newCarName = "Mercedes";
}
