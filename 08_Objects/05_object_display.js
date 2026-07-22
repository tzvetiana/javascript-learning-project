// When an object is converted to a string, the result is [object Object]

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(String(person)); // [object Object]
console.log(person); // { name: 'John', age: 30, city: 'New York' }

// Displaying object properties

console.log(person.name + ", " + person.age + ", " + person.city); // // John, 30, New York

// Properties of an objet can be collected in a loop

let text = "";

for (let x in person) {
    text += person[x] + " "; 
};

console.log(text); // John 30 New York

// Object.values() creates an array of property values

const myArray = Object.values(person);  

console.log(myArray.toString()); // John,30,New York

// Object.entries() help for using object in loops

const fruits = {Bananas:200, Oranges:300, Apples: 500};

let text1 = ""; 

for (let [fruit, value] of Object.entries(fruits)) {
    text1 += fruit + ": " + value + "\n";
}

console.log(text1);

// JS objects can be converted to string with JSON method JSON.stringify()

console.log(JSON.stringify(fruits));