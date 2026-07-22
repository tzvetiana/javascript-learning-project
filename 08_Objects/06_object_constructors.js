// Object constructor is used to create object type

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColour = eye;
    this.nationality = "English"; // default value
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Anna", "Smith", 48, "green");

console.log(JSON.stringify(myFather)); // {"firstName":"John","lastName":"Doe","age":50,"eyeColour":"blue"}
console.log(JSON.stringify(myMother)); // {"firstName":"Anna","lastName":"Smith","age":48,"eyeColour":"green"}

console.log("My mother is " + myMother.nationality); // My mother is English


// New property cannot be added to an object contructor

Person.hairColour = "brown";

console.log("My father's hair is " + myFather.hairColour); // My father's hair is undefined

// New property can be added to the constructor function prorotype

Person.prototype.hairColour = "brown";

console.log("My father's hair is " + myFather.hairColour); // My father's hair is brown


// A constructor function can also have methods. Adding a method to a created object

 myMother.changeName = function(name) {
    this.lastName = name;
}
 myMother.changeName("Doe");

 console.log("My mother updated her name to " + myMother.lastName);


// New method cannot be added to an object construction function

/* 
Person.changeName = function(name) {
    this.lastName = name;
}

myMother.changeName("Doe");

console.log(myMother.lastName); //  TypeError: myMother.changeName is not a function
*/

// New method can be added to a constructor with the constructor function protorype

Person.prototype.changeAge = function (age) {
    this.age = age;
}

myMother.changeAge(49);

console.log("My mother just turned " + myMother.age);