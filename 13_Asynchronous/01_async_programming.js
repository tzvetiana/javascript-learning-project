// Asynchronous programming allows long-running operations to complete in the background while executing JavaScript code
// async means not at the same time. JS is synchronous executing code from top to bottom

// Functions are executed in the order they were called, not defined. This is synchronous flow

function myFirst(){
    return "Hello";
}

function mySecond(){
    return "Goodbye";
}

console.log(mySecond()); // Goodbye
console.log(myFirst()); // Hello


// JavaScript uses async programming to stay responsive. If it waits for certain tasks the program would freeze.

/* Asynchronous concepts:

 - Synchronous       JavaScript standard flow
 - Timers            Allow code to run while other is in waiting
 - Callbacks         Were the first solution for async JavaScript
 - Events            Store callback function
 - Promises          Tools for handling asynchronous operations
 - Async/await       Modern way to handle async code

*/

/* Common Asynchronous Operations:

 - Timer 	         setTimeout()
 - Network request	 fetch()
 - User interaction	 click events
 - Animation	     requestAnimationFrame()
 - Web Workers	     Background processing

*/

// Asynchronous vs Parallel - Parallel means running operations simultaneously on different processors. Asynchronous is switching between tasks