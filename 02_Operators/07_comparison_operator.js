text = "";
let age = 17;
if (age < 18) text = "Too young for alcohol";

console.log(text);


let num1 = 20;
let num2 = 5;
let result = num1 < num2;

console.log(result);

// Strings are compared alphabetically
let string1 = "A";
let string2 = "B";
let result1 = string1 < string2;

console.log(result1);

// When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison
let num3 = 3;
let string3 = "32";
let result2 = num3 == string3;

console.log(result2);