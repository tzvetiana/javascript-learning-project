// A callback is a function passed as an argument to another function

// A Greet Function
function greet(name, callback) {
    callback("Hello " + name);
}

// A Display Function
function display(message) {
    console.log(message); // Hello John
}

// Call greet() with display as the callback
greet("John", display);


// Synchronous callback is when the callback is executed immediately

// Calculate Function
function calculate(x, y, operation) {
  return operation(x, y);
}

// Add Function
function add(a, b) {
  return a + b;
}

// Call calculate() with add as callback
let result = calculate(5, 3, add);

console.log(result); // 8


// Timing problem: asynchronous code runs later, so reading result1 immediately gives undefined.

let result1;

setTimeout(function() {
    result1 = 5;
}, 1000);

console.log(result1); // undefined


// Solution: setTimeout runs the callback asynchronously, and the value is displayed inside it when ready.

function myDisplayer(value) {
    console.log(value + " is printed after 1 second"); // 5 is printed after 1 second
}

function done(value) {
    myDisplayer(value);
}

setTimeout(function() {
    done(5);
}, 1000);


// Asynchronous callbacks - the callback runs after the asynchronous operation has completed

// prints "Finished!" after about 3 seconds

setTimeout(function () {
    displayFinished("Finished after three seconds!");
}, 3000);

function displayFinished(text) {
    console.log(text); // Finished after three seconds!
}

// Event handling: an event listener calls a callback when an event occurs, such as a button click.

// Sequence control: calculate the sum first, then display the returned result.
// Function to display something

function myDisplayer2(some) {
    console.log(some);
}

// Defining function to calculate a sum
function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

// Calling the calculator function and storing value
let result2 = myCalculator(5, 5);

// Call the displayer function to display already calculated value
myDisplayer2(result2); // 10


// Adding a callback function

function myDisplayer3(some) { // callback function
  console.log(some); // 11
}

function myCalculator1(x, y, myCallback) {
  let sum = x + y;
  myCallback(sum);
}

myCalculator1(5, 6, myDisplayer3);


// Callback chains - one callback leads to operation with another callback

/* 

step1(function(test1) {
  step2(test1, function(test2) {
    step3(test2, function(test3) {
      display(test3);
    });
  });
});

*/