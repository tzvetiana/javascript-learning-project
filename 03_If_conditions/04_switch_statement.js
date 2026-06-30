// Based on a condition, switch selects one or more code blocks to be executed
// The break keyword is crucial for preventing a "fall-through". Without break, the code will continue to execute the next case blocks

let day;
let date = new Date().getDay();

switch (date) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
    }

    console.log(day);


// The default keyword specifies a block of code to run if there is no case match

let text;

switch (new Date().getDay()) {
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to the Weekend";
}

console.log(text);


// Different switch cases can share a code block

let sharedText;

switch (new Date().getDay()) {
    case 4:
    case 5:
        sharedText = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        sharedText = "It is Weekend";
        break;
    default:
        sharedText = "Looking forward to the Weekend";
}

console.log(sharedText);


// Switch uses strict comparison (===) - the values must be of the same type to match

let x = "0";
let value;

switch (x) {
    case 0:
        value = "Off";
        break;
    case 1:
        value = "On";
        break;
    default:
        value = "No value found";
}

console.log(value);