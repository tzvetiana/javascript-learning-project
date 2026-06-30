//Reassignment - changing the value of variable
let age = 18;
age = 19;

console.log("Updated age:", age);

//Redeclaration is allowed only with var
var userName = "John";
var userName = "Peter";

console.log("Redeclared var:", userName);

//Redeclaration with let is NOT allowed
//let city = "London";
//let city = "Paris"; //Error

//Reassignment with const is NOT allowed
//const price = 10;
//price = 20; //Error