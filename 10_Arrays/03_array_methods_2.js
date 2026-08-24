// concat() merges existing arrays

const myGirls = ["Kate", "Lidia", "Nadya"];
const myBoys = ["John", "Peter", "Vladimir"];

console.log(myGirls.concat(myBoys)); // [ 'Kate', 'Lidia', 'Nadya', 'John', 'Peter', 'Vladimir' ]

// Multiple arrays can be concatenated

const addChild = ["Helen", "Brat"];

console.log(JSON.stringify(myGirls.concat(myBoys, addChild))); // ["Kate","Lidia","Nadya","John","Peter","Vladimir","Helen","Brat"]


// flat() concatenates sub-arrays into an array

const myArr = [[1,2],[3,4],[5,6]];

console.log(myArr.flat()); // [ 1, 2, 3, 4, 5, 6 ]

// splice() adds new elements in the array. The numbers are used for position and how many items to remove.

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let removedFruits = fruits.splice(2, 1, "Lemon", "Kiwi");

console.log(removedFruits); // [ 'Apple' ]
console.log(fruits); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ]

// using splice() without leaving empty positions

let removedAnother = fruits.splice(0, 1);

console.log(removedAnother); // [ 'Banana' ]
console.log(fruits); // [ 'Orange', 'Lemon', 'Kiwi', 'Mango' ]


// toSpliced() works as splice() but creates new array without amending the old one

const origMonths = ["Jan", "Feb", "Mar", "Apr"];

let newMonths = origMonths.toSpliced(0, 1);

console.log(origMonths); // [ 'Jan', 'Feb', 'Mar', 'Apr' ]
console.log(newMonths); // [ 'Feb', 'Mar', 'Apr' ]

// slice() copies part of an array into a new array without changing the original. The number specifies the starting index

let updatedMonths = origMonths.slice(2);

console.log(origMonths); // [ 'Jan', 'Feb', 'Mar', 'Apr' ]
console.log(updatedMonths); // [ 'Mar', 'Apr' ]

// slice() accept also two arguments to specify starting and ending index, but excluding the ending one

let anotherSlice = origMonths.slice(0, 3);

console.log(anotherSlice); // [ 'Jan', 'Feb', 'Mar' ]
