// The this keyword refers to an object when used inside an object method

const greeting = {
    partOne: "Hello",
    partTwo: "World!",
    fullGreeting: function() {
        return this.partOne + " " + this.partTwo;
    }
};

console.log(greeting.fullGreeting());


// This keyword makes it possible to use the same method with different objects

const person1 = {
    name: "John",
    hello: function() {
        return "Hello " + this.name;
    }
};

const person2 = {
    name: "Anna",
    hello: function() {
        return "Hello " + this.name;
    }
};

console.log(person1.hello()); // Hello John
