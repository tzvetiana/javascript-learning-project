// Fetch API lets JavaScript download asynchronously resources from a web server
// Resources can be text files, JSON data, images, and many other types 
// fetch() method returns a Promise that resolves to a Response object

// Function to display any text
function myDisplayer(text) {
  console.log(text);
}

// Async function to download a file
async function loadText(file) {
  const response = await fetch(file);
  myDisplayer(await response.text());
}

// Call the async function
loadText("https://www.w3schools.com/js/fetch.txt");


/* The Response object contains information about the server response.

Property / Method	Description

ok	                True if the request succeeded.
status	            The HTTP status code.
statusText	        The HTTP status message.
text()	            Reads the response as text.
json()	            Reads the response as JSON.
blob()	            Reads the response as binary data.
bytes()	            Reads the response as bytes.
arrayBuffer()	    Reads the response as an ArrayBuffer

 */

async function loadText1(file) {
    const response = await fetch(file);
    myDisplayer(response.ok); // true
    myDisplayer(response.status); // 200
    myDisplayer(response.statusText); // OK
    const customer = await response.json();
    myDisplayer(customer.name); // John Doe
}

loadText1("https://www.w3schools.com/js/customer.js");


// Checking for errors
// fetch() rejects promises only on network errors. For 404 or 500 we need to manually throw the error.

async function loadTextError(file) {
  try {
    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(response.status + " " + response.statusText);
    }

    myDisplayer(await response.text());

  } catch (err) {
    myDisplayer(err.message); // 404 Not Found
  }
}

loadTextError("https://www.w3schools.com/js/customers.js");


// This simple check is enough for handling HTTP errors like 404 or 500 inside this function. For network errors we need to use try...catch.

async function loadTextSimpleError(file) {
  const response = await fetch(file);

  if (!response.ok) {
    myDisplayer(response.status + " " + response.statusText); // 404 Not Found
  }
}

loadTextSimpleError("https://www.w3schools.com/jss/customer.js");
