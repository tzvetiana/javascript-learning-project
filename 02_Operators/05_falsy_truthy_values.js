// Falsy values

let falseValue = false;
let zero = 0;
let negativeZero = -0;
let emptyString = "";
let noValue = null;
let notAssigned;
let invalidNumber = NaN;

console.log("false:", Boolean(falseValue));
console.log("0:", Boolean(zero));
console.log("-0:", Boolean(negativeZero));
console.log("\"\":", Boolean(emptyString));
console.log("null:", Boolean(noValue));
console.log("undefined:", Boolean(notAssigned));
console.log("NaN:", Boolean(NaN));

// Truthy value
let stringZero = "0";
let stringFalse = "false";
let emptyArray = "[]";
let emptyObject = "{}";

console.log("\"0\":", Boolean(stringZero));
console.log("\"false\":", Boolean(stringFalse));
console.log("\"[]\":", Boolean(emptyArray));
console.log("\"{}\":", Boolean(emptyObject));