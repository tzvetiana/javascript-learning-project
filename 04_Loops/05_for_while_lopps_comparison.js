// While loop works like a for loop with statement 1 and 3 omitted.

let text = "";
const cats = ["grey", "white", "black", "orange"];
let i = 0;

for (; cats[i];) {
    text += cats[i] + "\n";
    i++
}

console.log(text);


let text1 = "";
let y = 0;

while (cats[y]) {
    text1 += cats[y] + "\n";
    y++;
}

console.log(text1);