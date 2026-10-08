// Most mistakes happen because asynchronous code runs in different order
// 1. Forgetting await

function myDisplayer(text) {
    console.log(text);
}

async function loadData(file) {
    const response = fetch(file);
    myDisplayer(response); // Promise { <pending> }
}

loadData("https://www.w3schools.com/js/fetch.txt")


// 2. Using await inside a regular function causes syntax error
/*
function loadData1(file) {
    const response = await fetch(file);
    myDisplayer(response); // SyntaxError: await is only valid in async functions and the top level bodies of modules
}

loadData1("https://www.w3schools.com/js/fetch.txt")
*/

// 3. Assuming fetch will fail on HTTP error - 404, 500
// Solution: check response.ok

async function loadData2(file) {
  const response = await fetch(file);

  // if (!response.ok) {
  // myDisplayer(response.status + " " + response.statusText); // 404 Not Found
  // }

  myDisplayer(response.status + " " + response.statusText); // 404 Not Found
  }

  loadData2("https://www.w3schools.com/jss/customer.js");


// 4. Thinking a callback is asynchronous. A callback is a function passed to another function

// 5. Running independent tasks one after another
// Solution: run them together

async function loadDataTogether() {
    const responses = await Promise.all([
        fetch("https://www.w3schools.com/js/customer.js"),
        fetch("https://www.w3schools.com/js/products.js"),
        fetch("https://www.w3schools.com/js/news.js")
    ]);

    myDisplayer(responses.map(response => response.status)); // [200, 200, 200]
}

loadDataTogether();


// 6. Forgetting error handling
// Solution: use try...catch
