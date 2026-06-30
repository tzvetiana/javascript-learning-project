// Everything with value is true

console.log("3.14 is " + Boolean(3.14));
console.log("-18 is " + Boolean(-18));
console.log("true is " + Boolean(true));
console.log("\"string is\" " + Boolean("string"));

// Both an empty array [ ] and an empty object { } are truthy because they are objects.

console.log("[] is " + Boolean([]));
console.log("{} is " + Boolean({}));

// Everything without a value is false

console.log("0 is " + Boolean(0));
console.log("\"\" is " + Boolean(""));

let x;
console.log("undefined is " + Boolean(x));

console.log("null is " + Boolean(null));
console.log("NaN is " + Boolean(NaN));

// Booleans and Boolean objects cannot be safely compared
let booleanValue = false;
let booleanObject = new Boolean(false);

console.log("booleanValue is " + typeof(booleanValue));
console.log("booleanObject is " + typeof(booleanObject));


// Comparing only the values and not the type
console.log("booleanValue and booleanObject values are " + (booleanValue == booleanObject));

// Strict comparison checks both value and type
console.log("But boolean value and boolean object Comparison is always " + (booleanValue === booleanObject));