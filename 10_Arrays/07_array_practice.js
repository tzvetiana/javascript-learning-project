// Practical array examples using QA test data

const testResults = [
    { name: "Login test", duration: 1200 },
    { name: "Checkout test", duration: 3500 },
    { name: "Search test", duration: 800 },
    { name: "Logout test", duration: 2100 }
];

/*
Task:
Get the name of the first test using its array index.

Expected result: "Login test"
*/
const firstTestName = testResults[0].name;
console.log(firstTestName); // Login test

/*
Task:
Copy the first two tests into smokeTests without changing testResults.

Expected result: the Login test and Checkout test objects
*/
const smokeTests = testResults.slice(0, 2);
console.log(smokeTests);

/*
Task:
Find the position of the object whose name is "Search test".

Expected result: 2
*/
const searchTestPosition = testResults.findIndex(findSearchTest);

function findSearchTest(value) {
    return value.name === "Search test";
}

console.log(searchTestPosition); // 2

/*
Task:
Check whether at least one test lasts longer than 3000 ms.
Check whether every test lasts less than 4000 ms.

Expected results: true and true
*/
const hasVerySlowTest = testResults.some(isVerySlow);
const allTestsBelowLimit = testResults.every(isBelowLimit);

function isVerySlow(value) {
    return value.duration > 3000;
}

function isBelowLimit(value) {
    return value.duration < 4000;
}

console.log(hasVerySlowTest); // true
console.log(allTestsBelowLimit); // true

/*
Task:
Create an array of tests lasting longer than 2000 ms.
Create a separate array containing only the test names.

Expected results:
Checkout test and Logout test objects
["Login test", "Checkout test", "Search test", "Logout test"]
*/
const slowTests = testResults.filter(isSlow);
const testNames = testResults.map(getTestName);

function isSlow(value) {
    return value.duration > 2000;
}

function getTestName(value) {
    return value.name;
}

console.log(slowTests);
console.log(testNames);

/*
Task:
Create testsByDuration with the tests ordered from shortest to longest.
Do not change testResults.

Expected duration order: 800, 1200, 2100, 3500
*/
const testsByDuration = testResults.toSorted(compareDuration);

function compareDuration(a, b) {
    return a.duration - b.duration;
}

console.log(testsByDuration);

/*
Task:
Calculate the total duration of all tests.

Expected result: 7600
Note: Start with 0 when reducing object properties into a numeric total.
*/
const totalDuration = testResults.reduce(calculateDuration, 0);

function calculateDuration(total, value) {
    return total + value.duration;
}

console.log(totalDuration); // 7600

/*
Task:
Use a for...of loop to collect every test name in one string.

Expected result: each test name on a separate line
*/
let testNameList = "";

for (const test of testResults) {
    testNameList += test.name + "\n";
}

console.log(testNameList);

/*
Task:
Check whether "REVIEWED" exists in allowedStatuses.

Expected result: false
*/
const allowedStatuses = ["PENDING", "APPROVED", "DECLINED"];
const isStatusAllowed = allowedStatuses.includes("REVIEWED");
console.log(isStatusAllowed); // false

/*
Task:
Combine testResults and additionalTests into allTests.
Do not change either original array.

Expected result: one array containing all six test objects
*/
const additionalTests = [
    { name: "Payment test", duration: 1800 },
    { name: "Profile test", duration: 1400 }
];

const allTests = [...testResults, ...additionalTests];
console.log(allTests);

/*
Task:
Convert the nested testGroups array into one array containing all four names.

Expected result:
["Login test", "Logout test", "Checkout test", "Payment test"]
*/
const testGroups = [
    ["Login test", "Logout test"],
    ["Checkout test", "Payment test"]
];

const allTestNames = testGroups.flat();
console.log(allTestNames);

/*
Task:
Insert "Checkout test" between "Login test" and "Search test" by changing
testQueue. Do not remove any existing element.

Expected result:
["Login test", "Checkout test", "Search test", "Logout test"]
*/
const testQueue = ["Login test", "Search test", "Logout test"];
testQueue.splice(1, 0, "Checkout test");
console.log(testQueue);
