// Template strings use back-ticks to define a string. They allow single and double quotes within a string

let text1 = `Hello world!`;
let text2 = `He's often called "Johnny"`;
let text3 = 
`Text which
goes on
different lines`

console.log(text1);
console.log(text2);
console.log(text3);

// Template strings provide an easy way to interpolate variables in strings

let firstName = "John";
let lastName = "Doe";
let interpolatedText = `Welcome ${firstName}, ${lastName}!`;

console.log(interpolatedText);

let price = 10;
let VAT = 0.20;
let total = `Total: ${price * (1 + VAT)} `;

console.log(total);