// The while loop loops through a block of code as long as a specified condition is true.
// If you forget to increment the variable used in the condition, the loop will never end.

let text = "";
let i = 5

while (i < 10){
    text += "Printed number in while loop is " + i + "\n" ; 
    i++;

}

console.log(text);

// The do while loop will execute the code once, before checking if the condition is true. Then it will repeat the loop as long as the condition is true.

let text1 = "";
let y = 0

do {
    text1 += "Printed number in do while loop is " + y + "\n";
    y++;
} while (y < 5);

console.log(text1);