// the indexOf() method returns the index (position) of the first occurrence of a string

let text = "Please locate where 'locate' occurs!";

console.log(text.indexOf("locate"));
console.log(text.indexOf("dislocate")); // returns -1 if not found

// lastIndexOf() method returns the index of the last occurrence of a specified text in a string

console.log(text.lastIndexOf("locate"));

// includes() method returns true if a string contains a specified value. The method can also take a second parameter for start position 

let text1 = "Hello world, welcome to the universe.";

console.log(text1.includes("universe"));

// startsWith() method returns true if a string begins with a specified value

console.log(text1.startsWith("Hello"));
console.log(text1.startsWith("universe")); // returns false if not true

// endsWith() method returns true if a string ends with a specified value

console.log(text1.endsWith("universe."));