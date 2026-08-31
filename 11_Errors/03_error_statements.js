// Try statement is used for code blocks which might cause errors. If no error is caused, the catch block is skipped

// Catch block executes only if the try statement causes an error. It gives details about the error

// Finally block is executed after try and catch blocks no matter the result

// With Throw statement you can add a custom error



const statusCode = 500;

try {
    if (statusCode !== 200) {
        throw new Error("Expected status 200"); // Error Expected status 200
    }

    console.log("Test passed");
} catch (err) {
    console.log(err.name, err.message);
} finally {
    console.log("Validation finished"); // Validation finished
}