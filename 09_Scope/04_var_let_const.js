// Main difference between var, let and const is the scope, reassignment and hoisting 

if (true) {
    var a = 10;
    let b = 20; 
    const c = 30;
}

console.log(a);
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined


var city = "Sofia";
city = "Varna";

console.log(city);

let country = "Bulgaria";
country = "Italy";

console.log(country);

const year = 2026;
// year = 2027; // TypeError: Assignment to constant variable.


console.log(product); //undefined
var product = "Laptop";

try {
    console.log(price);
    let price = 1000;
} catch (error) {
    console.log(error.name, error.message); //  ReferenceError Cannot access 'price' before initialization
}