// A code block / block statement is a group of statements within curly braces {}

function myFunction(p1, p2){
    return p1 * p2;
}

console.log(myFunction(4, 2));


// Code blocks are important for if statements

const hour = new Date().getHours();

if (hour < 18) {
    greeting = "Good day!";
} else {
    greetign = "Good evening!";
}

console.log(greeting);


// Code blocks are important for loops

let text = "";

for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "\n";
}

console.log(text);


let text1 = "";
let x = 4;

while(x < 10) {
    text1 += "The number is " + x + "\n";
    x++;
}

console.log(text1);


// Variables declared with const and let are block scoped

{
    let y = 10;
}

console.log(typeof y); // undefined


// Code blocks can exist independently. This can be used to create scope for variables

{
    let x = 5;
    let y = 6;
    let total = x + y;
    console.log("Sum is " + total);
}


