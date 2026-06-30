// Use if to specify a code block to be executed, if a specified condition is true
let cost = 20;

if (cost <= 20) {
    console.log("Buy!");
}

// Use else to specify a code block to be executed, if the same condition is false
if (cost <= 19) {
    console.log("Buy!");
} else {
    console.log("Too expensive.");
}

// Use else if to specify a new condition to test, if the first condition is false
if (cost <= 19) {
    console.log("Buy!");
} else if (cost === 20) {
    console.log("Maybe buy.");
} else {
    console.log("Too expensive");
}

// Use switch to specify many alternative code blocks to be executed
let day = 3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Unknown day");
}

// The ternary operator (? :) is used as a shorthand of if...else
let height = 170;

height >= 170 ? 
    console.log("tall") : 
    console.log("average");