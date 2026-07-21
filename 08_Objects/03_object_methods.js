// Object methods are functions stored as property values

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 45,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName()); // John Doe

// In an object method, this keyword refers to the object

const cat = {
    petFirstName: "Toby",
    petLastName: "Meow",
    id: 2143,
    getId: function() {
        return this.id;
    }
};

// To call an object method, add parentheses ()

console.log(cat.getId()); // 2143

// If you can a method without parentheses, it returns the function definition

console.log(cat.getId); // [Function: getId]

// Method can be added to object by assigning a function to property

cat.name = function() {
    return this.petFirstName + " " + this.petLastName;
};

console.log(cat.name()); // Toby Meow

// Adding a JavaScript method

cat.nameUp = function() {
    return (this.petFirstName + " " + this.petLastName).toUpperCase();
}

console.log(cat.nameUp()); // TOBY MEOW

