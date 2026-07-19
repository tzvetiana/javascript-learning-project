// Properties are key:value pairs. An object is a collection of properties.
// Accessing object through Dot and Bracket Notation

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 45
};

console.log(person.firstName + " is " + person.age);
console.log(person["firstName"] + " is " + person.age);

// Bracket notation is useful when the property name is stored in a variable

let n1 = "firstName";
let n2 = "lastName";

console.log(person[n1] + " " + person[n2]);

// Changing properties

person.age = 30;

console.log("Updated age is: " + person.age);

// Adding new properties

person.nationality = "English";

console.log("We know now that John is " + person.nationality);

//  Deleting  properties with delete keyword

delete person.age;
// delete person["age"];

console.log("John's age is " + person.age); // undefined


// Use in operator to check if a property exists in an object

console.log("age" in person); // false
console.log("firstName" in person); // true


// Property values in an object can be other objects

const cat = {
    name: "Toby",
    age: 5,
    breed: "siamese",
    childKittens: {
        cat1: "Katie",
        cat2: "Billy"
    }
}

console.log("One of Tobie's kittens is " + cat.childKittens.cat2);
console.log("Another of Tobbie's kittens is " + cat["childKittens"]["cat1"]);

let p1 = "childKittens";
let p2 = "cat2";

console.log("An example of kitten name is " + cat[p1][p2]);