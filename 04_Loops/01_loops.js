// Loops can execute a block of code a number of times.

/* The For Loop. The for statement creates a loop with 3 optional expressions:

for (exp 1; exp 2; exp 3) {
  // code block to be executed
}

exp 1 is executed (one time) before the execution of the code block. - initialization
exp 2 defines the condition for executing the code block. - condition
exp 3 is executed (every time) after the code block has been executed. - increment 
*/


let text = "";

for (let i = 0; i < 5; i++) {
  text += "The for number is " + i + "\n";
}

console.log(text);

// The While Loop. The while loop loops through a block of code as long as a specified condition is true.
/* while (condition) {
  // code block to be executed
} 
*/

let text1 = "";
let y = 0;

while (y < 4) {
  text1 += "The while number is " + y + "\n";
  y++;
}

console.log(text1);

// The Do While Loop - variant of the while loop. The code runs once first, then the condition is checked.
/* do {
// code block to be executed
}
while (condition);
*/

let text2 = "";
let z = 2;

do {
  text2 += "The do while number is " + z + "\n";
  z++;
}
while (z < 6);

console.log(text2);