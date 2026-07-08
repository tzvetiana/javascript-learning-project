// The lenght propery returns the length of a string

let text = "123456789";

console.log(text.length);

// charAt() method returns the character at specified index (position) in a string

let text1 = "JavaScript";

console.log(text1.charAt(0));
console.log(text1.charAt(4));

// at() method returns character at specified index in a string but it can also be used with negative indexes too
// Propery Access []

let text3 = "ABCDE";

console.log(text3.at(1));
console.log(text3[1]);
console.log("You can call a negative index using at() method: ", text3.at(-4));
console.log("Calling a negative index with square brackets returns: ", text3[-4]); // underfined

// slice() extracts from start index to end index (without including it)

let text4 = "Apple, Banana, Kiwi";

console.log(text4.slice(7, 13));
console.log(text4.slice(7)); // By omitting the second parameter, the method slices everything after the start index
console.log(text4.slice(-12,)); // If a parameter is negative, the position is counted from end of the string
console.log(text4.slice(-12, -6));


// A string is converted to upper case with toUpperCase() and to lower case with toLowerCare()

let text5 = "Hello World!";

console.log(text5.toUpperCase());
console.log(text5.toLowerCase());

// trim() method removes whitespace from both sides of a string

let text6 = "     Hello World!     ";

console.log(text6.trim());

// repeat() method returns a string with a number of copies of a string

let text7 = "Hello World! ";

console.log(text7.repeat(4));

// replace() method replaces a specified value with another value in a string. By default it replaces only the first match and it is case sensitive

let text8 = "Learning Java";

console.log(text8.replace("Java", "JavaScript"));

// split() method converts a string to an array

let text9 = "Hi, red fox!";

console.log(text9.split("")); // splits string to characters
console.log(JSON.stringify(text9.split(""))); // string version of the array

console.log(text9.split(",")) // splits wherever there is a comma
console.log(text9.split(" ")); // splits wherever there is a space

