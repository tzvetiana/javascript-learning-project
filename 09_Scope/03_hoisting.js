// Hoisting is moving declarations to the top

showResult();

function showResult() {
    let score = 10;
    console.log(score);
}

// Variable declared with var can be used before it is declared

total = 15;
console.log("Total is called before being declared " + total);

var total;


// Variables declared with let and const are hoisted to the top but not initialized

try {
    carName = "Audi";
    let carName = "Mercedes";
} catch (error) {
    console.log(error.name , error.message); // Cannot access 'carName' before initialization
}

try{
    catName = "Toby";
    const catName = "Tom";
} catch (error) {
    console.log(error.name , error.message); // Cannot access 'catName' before initialization
}


// Declared with var but initialized after it is used

var x = 5;
var y;

console.log("x is " +  x + " ,y is " + y); // x is 5 ,y is undefined

var y = 6;

