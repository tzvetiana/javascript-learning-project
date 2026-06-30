// The variable is redeclared inside the loop using var keyword

var i = 3;
let text = "";

for(var i = 0; i < 5; i++) {
    text += "Variable is redeclared here " + i + "\n";
}

console.log(text);


// The variable declared in the loop does not redeclare the variable outside the loop using let. It creates new variable which exists only inside the loop.

let y = 2;
let text1 = "";

for(let y = 3; y < 5; y++) {
    text1 += "Variable is not redeclared here " + y + "\n";
}

console.log(text1);
console.log("The value of y is " + y);