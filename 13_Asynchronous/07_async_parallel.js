// An await statement waits for Promise to be fulfilled. 
// Running many standalone async operations could take more time. An alternative is to run them at the same time.

// When multiple operations depend on each other, it is better to use await statements

function myDisplayer(text) {
    console.log(text);
}

async function loadData() {
  let response1 = await fetch("https://www.w3schools.com/js/customer.json");
  let customer = await response1.json();

  let response2 = await fetch("https://www.w3schools.com/js/products.json");
  let products = await response2.json();

  let text = "";
  text += JSON.stringify(customer);
  text += "\n";
  text += JSON.stringify(products);

  myDisplayer(text); // {"id":101,"name":"John Doe","city":"New York","member":true}
                     // [{"id":1,"name":"Laptop","price":899},{"id":2,"name":"Mouse","price":29},{"id":3,"name":"Keyboard","price":79}]
}

// Call the async load function
loadData();


// response.json() is a built-in method of the Fetch API. It reads a raw HTTP response stream and parses its JSON text into a normal JavaScript object:

// Starting both fetch requests before awaiting them lets them run in parallel, which can be faster than the first example

async function loadDataParallel() {
  let customerPromise = fetch("https://www.w3schools.com/js/customer.json"); // Promise
  let productsPromise = fetch("https://www.w3schools.com/js/products.json");

  let customer = await customerPromise; // Response object
  let products = await productsPromise;

  customer = await customer.json(); // JavaScript object
  products = await products.json();


  let text = "Customer: " + customer.name + ", " + customer.city +
             "\nProducts: " + products[0].name + ", " + products[1].name + ", " + products[2].name;

  myDisplayer(text); // Customer: John Doe, New York
                     // Products: Laptop, Mouse, Keyboard
}

loadDataParallel();

/* 
fetch() returns a Promise
→ await waits for it
→ its Response object is saved
→ response.json() reads and parses the body
→ the resulting JavaScript object is saved
*/

// Promise.all() fulfills when all promises fulfill and rejects when one rejects.

async function loadDataPromises() {

  let responses = await Promise.all([
    fetch("https://www.w3schools.com/js/customer.js"),
    fetch("https://www.w3schools.com/js/products.js"),
    fetch("https://www.w3schools.com/js/news.js")
  ]);

 // myDisplayer(JSON.stringify(responses)); // [{},{},{}]

 // Parse all response bodies into JavaScript objects in parallel
    let data = await Promise.all(
    responses.map(response => response.json())
  );

    myDisplayer(JSON.stringify(data));
}

loadDataPromises();

// If one of the promises is rejected, the whole Promise.all() fails.

async function loadDataFails() {
  try {
    let data = await Promise.all([
    fetch("https://www.w3schools.com/js/missing1"),
    fetch("https://www.thiswebsitedoesnotexist.com/js/missing2"),
    fetch("https://www.w3schools.com/js/missing3")
    ]);
  }
  catch(err) {
    myDisplayer(err.name + ": " + err.message); // TypeError: fetch failed
  }
}

loadDataFails();


// fetch() does not reject a promise for HTTP errors like 404. To catch the error, a better approach is to use response.ok

async function getFile(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.status + " " + response.statusText);
  }
  return response.text();
}

async function loadDataError() {
  try {
    let data = await Promise.all([
      getFile("https://www.w3schools.com/js/missing1"),
      getFile("https://www.w3schools.com/js/missing2"),
      getFile("https://www.w3schools.com/js/missing3")
    ]);
  }
  catch(err) {
    myDisplayer(err.message); // 404 Not Found
  }
}
loadDataError();

// Promise.allSettled() waits until all promises have finished. It does not stop if one is not fulfilled.

// Promise.any() returns the first successfully fulfilled Promise.