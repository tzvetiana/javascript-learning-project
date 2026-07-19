// Objects are variables that can store both values and functions

// Object example with properties with different values

const car = {
    type: "Fiat",
    model: "500",
    color: "white",
};

console.log("The car type is: "+ car.type);

// Object literal describes an object using syntax with zero or more key:value pairs inside curly braces
// Object literal is the simplest and most common way to define a JS object

const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};

console.log(person.firstName + " is " + person.age + " years old.");

// Object literal can be written in multiple lines. Spaces are not important.

/* const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
*/

// You can create empty object and add properties to it

const person1 = {};

person1.fullName = "John Doe";
person1.weight = 78;
person1.height = 175;

console.log(person1.fullName + " is " + person1.height + " tall.");

// Objects can be accessed with Dot Notation and Bracket Notation

console.log(person1["fullName"] + " weights " + person1["weight"] + " kg.");


// Object methods are function definitions stored as property values

const cat = {
    petName: "Toby",
    breed: "siamese",
    petAge: 5,
    fullDescription: function() {
        return this.petName + " is " + this.petAge + " years old " + this.breed;
    }
}

console.log(cat.fullDescription());

// All JS values except of primitives are objects. Primitives:

const primitiveData = {
    typeString: "Hello",
    typeNumber: 3.14,
    typeBoolean: true,
    typeBigInt: 12345678901234n,
    typeNull: null,
    typeUndefined: undefined,
    typeSymbol: Symbol("example")
}

console.log("Primitive data which are not objects: " + primitiveData.typeString, primitiveData.typeNumber, primitiveData.typeBoolean, primitiveData.typeBigInt, primitiveData.typeNull, primitiveData.typeUndefined, primitiveData.typeSymbol);