// Main difference between var, let and const is the scope, reassignment and hoisting 


// var is function scope, when let and const are block scoped

if (true) {
    var a = 10;
    let b = 20; 
    const c = 30;
}

console.log(a);
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined



// Variables declared with var and let can be reassigned, but const cannot.

var city = "Sofia";
city = "Varna";

console.log(city); // Varna

let country = "Bulgaria";
country = "Italy";

console.log(country); // Italy

const year = 2026;
// year = 2027; // TypeError: Assignment to constant variable.


// var is hoisted and initialized with undefined, while let is hoisted but cannot be accessed before its declaration.

console.log(product); //undefined
var product = "Laptop";

try {
    console.log(price);
    let price = 1000;
} catch (error) {
    console.log(error.name, error.message); //  ReferenceError Cannot access 'price' before initialization
}


// Best practice is to use const by default, let when reassignment is needed, and avoid using var


// You cannot reassign a variable declared with const, but you can change its object properties.

const user = { name: "Alice" };

user.name = "Bob"; // Works: changing a property

console.log(user);

try {
    user = { name: "Charlie"}; // Fails: reassigning the const variable
} catch (error) {
    console.log(error.name, error.message); // TypeError Assignment to constant variable.
}