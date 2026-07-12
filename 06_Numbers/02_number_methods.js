// toString() method returns a number as a string

let x = 123;

console.log(x.toString()); // "123"
console.log(typeof x.toString()) // string

// toFixed(number) returns a string with the number written with a specified number of decimals

let num1 = 9.5682331;

console.log(num1.toFixed(0)); // 10
console.log(num1.toFixed(3)); // 9.568
console.log(num1.toFixed()); // 10

// Number() method is used to convert JavaScript variables to numbers

console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("10")); // 10
console.log(Number("Apple")); // NaN

// Number.parseInt() method converts strings to whole numbers. Spaces are allowed. Only the first number is returned:
// parseInt() is old style Global method and works the same

console.log(Number.parseInt("10.33")); // 10
console.log(Number.parseInt("10 years")); // 10
console.log(parseInt("-12.56")); // -12

// Number.parseFloat() method parses a string and returns a number with decimal precision. Spaces are allowed. Only the first number is returned:
// parseFloat() is old style Global method and works the same

console.log(Number.parseFloat("10.33")); // 10.33
console.log(Number.parseFloat("years 10")); // NaN
console.log(parseFloat(" 33.45 6")); // 33.45

// Number.isInteger() method belogs to the Number object. It returns true if the argument is an integer

console.log("Number 10 is integer: " + Number.isInteger(10)); // true
console.log("Number 10.5 is integer: " + Number.isInteger(10.5)); // false

// Number.isFinite() method returns true if the argument is not infinity, -ilnfinity, not NaN

console.log("Number 123 is finite: " + Number.isFinite(123)); // true

// Number.isNaN() method returns true if the argument is NaN (Not a Number)

console.log("Number 0 is NaN: " + Number.isNaN(0)); // false
console.log("String is NaN: " + Number.isNaN(Number("Apple"))); // true