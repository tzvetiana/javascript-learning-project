function myDisplayer(text) {
    console.log(text);
}

// async automatically wraps "Hello" in a Promise
async function myFunction() {
  return "Hello";
}

// The Promise is created manually
function myOtherFunction() {
  return Promise.resolve("Another Hello");
}

myFunction()
.then(function (value) {
  myDisplayer(value); // Hello
});

myOtherFunction()
.then(function (value) {
  myDisplayer(value); // Another Hello
});



// Three functions to run in steps
function step1() {
  return Promise.resolve("A");
}

function step2(value) {
  return Promise.resolve(value + "B");
}

function step3(value) {
  return Promise.resolve(value + "C");
}


// VERSION 1: Promises with .then()

step1()
  .then(function(value) {
    return step2(value);
  })
  .then(function(value) {
    return step3(value);
  })
  .then(function(value) {
    myDisplayer(value);
  });


// VERSION 2: async and await improve readability

async function run() {
  let v1 = await step1();
  let v2 = await step2(v1);
  let v3 = await step3(v2);

  myDisplayer(v3);
}

run();

// Common errors: Using await outside an async function causes an error.
// Forgetting try...catch can hide async errors