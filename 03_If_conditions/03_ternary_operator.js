// The conditional operator is a shorthand for writing conditional if...else statements.
let age = 16;

let text = (age < 18) ? "Minor" : "Adult";

console.log(text);


// The condition can use a predefined true or false value
let price = 10;
let isMember = true;
 
let discount = isMember ? 0.2 : 0;
let total = 10 - (price * discount);

console.log("The total price is " + total);