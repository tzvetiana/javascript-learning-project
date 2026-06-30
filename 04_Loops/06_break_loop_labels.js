// The break statement jumps out of loops and switches. It terminates the execution of loop or switch.

let text = "";

for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "\n";
}

console.log(text);


// A label provides a name for a statement, or a block of statements, allowing statements to be referenced to, for program flow control
// A label is an identifier followed by a colon ":"
// The break statement is particularly useful for breaking out of a nested loop

let text1 = "";

loop1: for (let j = 1; j < 5; j++) {
    loop2: for (let y = 1; y < 5; y++) {
        if (y === 3) { break loop1; }
        text1 += "Loop1 count is "+ j + " Loop2 count is " + y + ". \n";
    }
}

console.log(text1);

// Loop 1 ran just once while loop 2 ran twice, then the break stopped both loops.


const cats = ["black","white","orange","grey"];
let text2 = "";

list: {
    text2 += cats[0] + "\n";
    text2 += cats[1] + "\n";
    break list;
    text2 += cats[2] + "\n";
    text2 += cats[3] + "\n"; 
}

console.log(text2);