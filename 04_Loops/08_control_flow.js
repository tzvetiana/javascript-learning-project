// Control flow is the order to execute statements in program. JS runs code from top to bottop and left to right.
// Conditional control flow - conditions let you make decisions - through if, if else, switch, ternary (? :)

let text = "Unknown";
let age = 18;

if (age => 18) {
    text = "Adult";
} else {
    text = "Minor";
}

console.log(text);


// Repetition Control Flow - loops let you run code multiple times - through for, while, do while

text1 = "";

for (let i = 0; i < 5; i++) {
    text1 += "The number is " + i + "\n";
}

console.log(text1);

// Jump statements let you change the flow - through break, continue, return, throw

text2 = "";

for (let y = 0; y < 10; y++) {
    if (y === 3) { break; }
    text2 += "Loop with break number is " + y + "\n";
}

console.log(text2);

// Function flow. Functions are callable and reusable code blocks. They will run when they are called

function myFunction(p1, p2) {
    return p1 * p2;
}

let result = myFunction(4, 3);
console.log(result);