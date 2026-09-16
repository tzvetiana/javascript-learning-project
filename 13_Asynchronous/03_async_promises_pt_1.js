// A promise represents a future result of asynchronous operation
// Promises provide cleaner way to organize asynchronous code
// States - Pending (not finished) / Fulfilled (completed) / Rejected (failed)

// fetch() method returns promises. Each call to then() returns a promise. 

fetch("https://www.w3schools.com/js/fetch.txt")
.then(function(response) {
    return response.text();
})
.then(function(data) {
    myDisplayer(data);
})
.catch(function(error) {
    myDisplayer(error);
});

// Function to display any text
function myDisplayer(text) {
    console.log(text);
}

// fetch() starts immediately and returns Promise 1 in the pending state.
// then() immediately registers its callback and returns pending Promise 2; when Promise 1 fulfills, the callback runs and its result fulfills Promise 2.
// If an earlier Promise rejects or a callback throws an error, the remaining then() callbacks are skipped and catch() receives the error.


// The callback passed to .then() receives the promise fulfilled value from fetch() - a Response object

let promise = fetch("https://www.w3schools.com/js/fetch.txt");

promise.then(function(response) {
    return response.text();
});

myDisplayerFlow("JavaScript continues...");

// Function to display any text
function myDisplayerFlow(text) {
    console.log(text);
}


// Promise can be created with Promise() constructor

/* 
const newPromise1 = new Promise(function(resolve, reject) {
  // Asynchronous work could be placed here

  if (success) {
    resolve(value);
  } else {
    reject(error);
  }
});
*/


const newPromise = new Promise(function(resolve, reject) {
  const success = true;

 if (success) {
    resolve("Operation completed");
 } else {
    reject("Operation failed");
  }
});

newPromise.then(function(value) {
  myDisplayer1(value);
})
.catch(function(error) {
  myDisplayer1(error);
});

function myDisplayer1 (text){
    console.log(text); // Operation completed
}

// The then() registers a function which handles a fulfilled promise

fetch("https://www.w3schools.com/js/fetch.txt")

.then(function(response1){
    return response1.text();
})
.then(function(data1){
    myDisplayer2(data1);
})

function myDisplayer2 (text1){
    console.log(text1);
}

