// Use for loop to collect the car names from the cars array

const cars = ["BMW", "Mercedes", "Audi", "Kia"];
let len = cars.length;
let text = "";

for (let i = 0; i < len; i++) {
    text += cars[i] + "\n";
}

console.log(text);

// Expression 1, 2 and 3 are optional in the loop header. If you omit exp 2, you must provide a break inside the loop body.
// You can omit exp 1 if the value is set before the loop starts. Exp 3 can be omitted if the increment is inside the code block.


let text1 = "";
const banana = "banana";
let len1 = banana.length;
let y = 0

for(; y < len1; ) {
    text1 += "One more " + banana[y] + "\n"; 
    y++;
}

console.log(text1);



// Expression 3 can also be a negative increment

const singers = ["Michael Jackson", "Britney Spears", "Beyonce", "Freddy Mercury"];
//let len = singers.length;
let text2 = "";

for (let z = 3; z > -1; z--){
    text2 += singers[z] + "\n";
}

console.log(text2);