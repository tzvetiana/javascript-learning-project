// Async code runs later and this makes it hard to find errors

// Debugging asynchronous fetch(): check the status, URL, and whether the server returns an error

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {
        console.log(".then() status:", response.status); // .then() status: 200
        return response.json();
    })
    .then(data => console.log(".then() data:", data)); // .then() data: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }


// async and await make asynchronous code easier to read 

async function loadData() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
    );

    console.log("async/await status:", response.status); // async/await status: 200

    const data = await response.json();
    console.log("async/await data:", data); // async/await data: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
}

loadData();


// Handling async errors

async function loadDataWithError() {
    try {
        const response = await fetch("invalid-url");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Async error caught:", error.name, error.message);    } // Async error caught: TypeError Failed to parse URL from invalid-url
}

loadDataWithError();