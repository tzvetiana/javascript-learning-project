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
