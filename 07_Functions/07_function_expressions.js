// Function expression is a function stored in a variable
// Standard Function

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 5));

// Functions expressions is a JS statement and this is why it ends with semicolon
// Anonymous Function Expression

const multiply1 = function (c, d) { 
    return c * d;
};


console.log(multiply1); // Function: multiply1
console.log(multiply1(4, 5));

// Function expression with a name

const add = function add(e, f) {
    return e + f;
}; 

console.log(add (3, 2));

// A function can be passed to another function

function run(fn) {
    return fn();
}

const sayHello = function() {
    return "Hello";
};

console.log(run(sayHello));


// Function declarations can be called before defining

console.log(add1(1, 2)); // 3

function add1(g, h) {
    return g + h;
}

// Function expressions cannot be called before they are defined

/* 
console.log(add2(1,2)); // ReferenceError: Cannot access 'add2' before initialization

const add2 = function (i, j) {
    return i + j;
}; 
*/