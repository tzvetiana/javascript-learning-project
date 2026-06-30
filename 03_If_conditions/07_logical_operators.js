// Logical operators are used to combine boolean expressions. They determine the logic between variables or values
// Logical AND operator "&&" returns true if both expressions are true, otherwise false:

let x = 7;
let y = 5;

let z = (x < 10 && y > 1);
let c = (x > 10 && y > 3);

console.log("Result when both expressions are true with Logical &&: "+ z);
console.log("Result when only one expression is true with Logical &&: " + c);

// Logical OR operator "||" returns true if one or both expressions are true, otherwise false:

let h = ( x > 6 || y < -1);

console.log("Result when one expression is true with Logical ||: " + h);

// Logical NOT operator "!" returns true for false expressions and false for true expressions:

let i = !( y == x);

console.log("Result when the expression is false, Logical ! returns: " + i);

// Nullish coalescing operator "??" returns right operand when the left operand is nullish (null or undefined), otherwise it returns the left operand:

let name = null;
let text = "missing";

let result = name ?? text;
console.log("Result when left operand is nullish with Logical ??: " + result);