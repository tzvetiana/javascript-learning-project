// sort() sorts an array alphabetically

const fruits = ["Orange", "Banana", "Apple", "Lemon"];

console.log(fruits.sort()); // [ 'Apple', 'Banana', 'Lemon', 'Orange' ]

// reverse() reverses the order of elements

console.log(fruits.reverse()); // [ 'Orange', 'Lemon', 'Banana', 'Apple' ]

// sort() and reverse() combined can order descending

// toSorted() creates new array, while sort() updates the current one

console.log(fruits.toSorted()); // [ 'Apple', 'Banana', 'Lemon', 'Orange' ]
console.log(fruits); // [ 'Orange', 'Lemon', 'Banana', 'Apple' ]

// toReversed creates new array, reverse() updates the current one

// sort() for sorting numbers needs a function as it cannot sort them properly

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});

/* points.sort((a,b) => a - b); 
*/

console.log(points); // [ 1, 5, 10, 25, 40, 100 ]

// descending order:

points.sort(function(a, b){return b - a});

console.log(points); // [ 100, 40, 25, 10, 5, 1 ]


// Math.min() and Math.max() find the smallest and the highest numbers

const numbers = [40, 100, 1, 5, 25, 10];

console.log(Math.min(...numbers)); // 1
console.log(Math.max(...numbers)); // 100

// Sorting object arrays with sort()

const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
];

cars.sort((a, b) => a.year - b.year);
console.log(cars);


/* cars.sort(function(a, b) {
    return a.year - b.year;
}); 
*/