// Use if statement to execute a block of code when a condition is true
let greeting = "Good night!";
let hour = 14;

if (hour < 18) {
    greeting = "Good day!";
}


let age = 16
let text = "You cannot drive";

if (age >= 18) {
    text = "You can drive";
}

console.log(greeting);
console.log(text);

// Nested if - you can use an if statement inside another if statement
let age1 = 16;
let country = "USA";
let text1 = "You cannot drive";

if (country == "USA") {
    if (age1 >= 16) {
        text1 = "You can drive"; 
    }
}

console.log(text1);

// Use logical AND operator for cleaner code:
let age2 = 16;
let country1 = "USA";
let text2 = "You cannot drive";

if (country = "USA" && age2 >= 16) {
    text2 = "You can drive";
}

console.log(text2);