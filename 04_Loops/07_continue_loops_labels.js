// The continue statement skips an iteration in a loop and processing moves to next iteration

let text = "";

for (let i = 1; i < 10; i++){
    if (i === 3) {continue}
    text += "The number is " + i + "\n";
}

console.log(text);

// A labels provides a name for a statement, allowing statements to be referenced to, for program flow control

let text1 = "";

loop1: for (let x = 1; x < 5; x++){
    loop2: for (let y = 1; y < 5; y++){
        if (y === 3) {continue loop2;}
        text1 += "Nested loop with continue statement " + y + "\n";
    }
}

console.log(text1);