// Use the else statement to specify a block of code to be executed if a condition is false.
let hour = 18;
let greeting = "";

if (hour < 18) {
    greeting = "Good day!"; 
} else {
    greeting = "Good evening!";
}

console.log(greeting);

// Use else if statement to specify a new condition if the first is false

let time = 11;

if (time < 10) {
    greeting1 = "Good morning!";
} else if (time < 20) {
    greeting1 = "Good day!";
} else {
    greeting1 = "Good evening!";
}

console.log(greeting1);