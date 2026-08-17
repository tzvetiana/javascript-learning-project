// Аrray is object type designed for storing data collection

const cars = ["Volvo", "BMW", "Audi"];

// Spaces are ignored

const cars1 = [
  "Saab",
  "Volvo",
  "BMW"
];

// Array can be created empty. Values can be assigned later

const cats = [];

cats[0] = "orange";
cats[1] = "grey";
cats[2] = "white";

console.log(cats); // [ 'orange', 'grey', 'white' ]

// Array is a list of elements. Ordering is based on index, starting from 0.

console.log(cats[0]);

// Statement changing array element

cats[1] = ["yellow"];

console.log(cats[1]);

// Converting array to string of values separates by commas

const fruits = ["Banana", "Apple", "Orange", "Mango"];

console.log(fruits.toString()); // Banana,Apple,Orange,Mango

// Displaying an array

console.log(fruits);

console.log(JSON.stringify(fruits));


// Arrays are special type of object.

console.log(typeof(fruits)); // object

// Array elements are accessed through numbers

const person = ["John", "Doe", 35];

console.log(person[0]);

// Objects parameters are accessed by property names

const person1 = {firstName: "Joe", secondName: "Doe", age: "35"};

console.log(person1.firstName); // Joe

// The length property returns the number of elements in the array

console.log(person.length); // 3



// Looping array elements

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// Using forEach function

let text = "";

fruits.forEach(myFunction);

function myFunction(value) {
    text += value + "\n";
}

console.log(text);

// Adding array elements

fruits.push("Lemon");

console.log(fruits);


// Different ways to create an array

const points = new Array(40, 100, 1, 5, 25, 10);
const points1 = [40, 100, 1, 5, 25, 10];

console.log(JSON.stringify(points));
console.log(points1);

// Method Array.isArray shows whether an array is an array

console.log(Array.isArray(person)); // true
console.log(Array.isArray(person1)); // false

// Objects can contain arrays and arrays can contain objects

const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

console.log(myObj.cars[0].name); // Ford
console.log(myObj.cars[0].models[1]); // Focus