// A string is zero or more characters written inside quotes. You can use single or double quotes.

let cat1 = "siamese";
let cat2 = 'persian';

console.log(cat1);
console.log(cat2);


// Quotes can be use inside a string as long as they do not match the surrounding string quotes.

let answer1 = "Today's Monday";
let answer2 = 'He is called "Johnny"';
let answer3 = "He is called 'Johnny'";

console.log(answer1);
console.log(answer2);
console.log(answer3);

// Template strings `` allow single and double quotes inside a string. Also you can put text on several lines

let templateText1 = `He's often called "Johnny"`;
let templateText2 = 
`This template text
goes into
new lines`;

console.log(templateText1);
console.log(templateText2);

// To find the length of a string, you can use built-in length property

let alphabetText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let alphabetLength = alphabetText.length;

console.log(alphabetText);
console.log(alphabetLength);

// Escape characters

let escapeText1 = "We are the so-called \"Vikings\" from the north.";
let escapeText2 = 'Let\'s go!';
let backlashText = "The character \\ is called backlash.";
let newLineText = "The text \ngoes on new line";

console.log(escapeText1);
console.log(escapeText2);
console.log(backlashText);
console.log(newLineText);

// Use addition operator to concatenate strings

let str1 = "Hello ";
let str2 = "Dolly!";

console.log(str1 + str2);