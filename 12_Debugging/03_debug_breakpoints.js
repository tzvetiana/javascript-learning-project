// A breakpoint pauses JavaScript execution on a specific line to examine variables values


function add(a, b) {
    // debugger;
    let result = a + b;
    return result;
}

console.log(add(10, 5));
console.log(add(10, 50));
console.log(add(10, 500));

// The debugger keyword works the same way as breakpoint and stops the execution of the code

// Step Over runs the next line
// Step Into enters a function
// Step Out exits the current function

// The Scope panel shows local variables under Local and variables declared outside the function under Closure.


let x = 10;

function test() {
  let y = 5;
  console.log(x + y);
}

test();

// The Watch panel monitors selected variables or expressions and updates their values while execution is paused.