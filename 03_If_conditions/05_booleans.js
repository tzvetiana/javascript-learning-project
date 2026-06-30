// Boolean is a primitive data type that can only have one of two values
// All JavaScript comparison operators (like ==, !=, <, >) return true or false from the comparison.

let x = 5;

console.log(x == 8);


// Booleans are used in if statements to determine the code blocks to execute based on the logic.

let hour = 15;
let text;

if (hour < 21) {
    text = "It's bright outside";
} else {
    text = "It's dark outside";
}

console.log(text);


// Booleans are used in loops to determine conditions for looping

let i = 0;
let printI = "";

while (i < 10) {
    printI += i;
    i++;
}

console.log(printI);


// You can use the Boolean() function to find out if an expression (or a variable) is true

let result;

result = Boolean(100 == 2 * 50);
console.log(result);

// Boolean() is not needed because comparison already returns true or false

console.log(100 < 50);