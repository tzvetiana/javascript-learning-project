// catch() method registers a function that handles a rejected promise

// .ok is a Boolean property of the Response object
// .statusText is another built-in property of the Response object, containing short description of HTTP status


fetch("https://www.w3schools.com/js/missing.txt")
.then(function(response) {
  if (!response.ok) {                  // 
    throw new Error(response.statusText);
  }

  return response.text();
})
.then(function(text) {
  myDisplayer(text);
})
.catch(function(error) {
    console.log(error.message);
});

function myDisplayer(data) {
    console.log(data); // Not Found
}

// finally() methods registers a function that runs after a Promise is fulfilled or rejected

fetch("https://www.w3schools.com/js/fetch.txt")
.then(function(response){
    return response.text();
})
.then(function(data1){
    myDisplayer1(data1);
})
.catch(function(error){
    myDisplayer1(error);
})
.finally(function() {
    myDisplayer1("Finished!");
});

function myDisplayer1(text1){
    console.log(text1); // Finished!
}


// Common Promise mistake: forgetting to return a Promise

function step1() {
    return Promise.resolve("A");
}

function step2(value) {
    return Promise.resolve(value + "B");
}

function myDisplayer2(value) {
    console.log(value);
}

// Incorrect: step2() runs, but its Promise is not returned to the chain
step1()
.then(function(value) {
    step2(value); // Creates a Promise containing "AB", but its result is lost
})
.then(function(value) {
    // The previous callback returned nothing, so value is undefined
    myDisplayer2(value); // undefined
});

// Correct: returning the Promise connects step2() to the chain
step1()
.then(function(value) {
    return step2(value); // The next then() waits and receives "AB"
})
.then(function(value) {
    myDisplayer2(value); // AB
});