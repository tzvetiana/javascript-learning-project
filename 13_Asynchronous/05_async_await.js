// async makes a function return a promise

function displayer(text) {
    console.log(text); // Hello World!
}

async function hello() {
    return "Hello World!";
}

hello().then(function(value) {
    displayer(value);
});


// await keyword can be used inside an async function or at the top level of JS module
// It pauses the async function and waits for promise to be fulfilled. Other code continues while the promise is pending.

// function to display text
function myDisplayer(text) {
    console.log(text);
}

// Create an async function
async function getData() {
  let response = await fetch("https://www.w3schools.com/js/fetch.txt");
  let text = await response.text();
  myDisplayer(text);
}

// Call the async function
getData();

/*
getData() pauses
→ getData() returns a pending Promise
→ outside code continues
→ fetch finishes
→ getData() resumes after await
*/


myDisplayer("Start");

async function showExecutionOrder() {
    await fetch("https://www.w3schools.com/js/fetch.txt");
    myDisplayer("Done");
}

showExecutionOrder();

myDisplayer("Continue");

/* Promise version does the same work but await is easier to read

fetch("https://www.w3schools.com/js/fetch.txt")
.then(function(response) {
    return response.text();
})
.then(function(text) {
    myDisplayer(text);
})
*/

// Use try...catch to handle rejected Promises as usual errors

async function requestData() {
  try {
    let response = await fetch("fetch.txt");
    let text = await response.text();
    myDisplayer(text);
  } catch(err) {
    myDisplayer(err.message); // Failed to parse URL from fetch.txt
  }
}
requestData();

/* Each await runs one after another

async function display() {
  let a = await fetch("https://www.w3schools.com/js/a.txt");
  myDisplayer(await a.text());
  let b = await fetch("https://www.w3schools.com/js/b.txt");
  myDisplayer(await b.text());
  let c = await fetch("https://www.w3schools.com/js/c.txt");
  myDisplayer(await c.text());
}
display()

*/

/* 
Summary:

----- async functions always return Promises.
----- await waits for a Promise to settle.
----- await pauses the current async function, not all of JavaScript.
----- try...catch handles Promise errors.
----- async and await make Promise-based code easier to read.
*/
