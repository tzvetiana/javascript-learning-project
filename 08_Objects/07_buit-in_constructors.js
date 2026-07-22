// JS has built-in constructions for all native objects

console.log(typeof new Object()); // object
console.log(typeof new Array()); // object
console.log(typeof new Map()); // object
console.log(typeof new Set()); // object
console.log(typeof new Date()); // object
console.log(typeof new RegExp()); // object
console.log(typeof new Function()); // function

// Object literal {} used instead of new Object()
// Array literals [] used instead of new Array()
// Function expressions () {} used instead of new Function()


console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function(){}); // function