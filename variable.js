//Comments make code readable.
//Welcome to 30DaysOfJavaScript
/* comments can make code readable, easy to reuse and informative*/

/*Create a variable.js file and declare variables and assign string, boolean, undefined and null data types.*/

var myName = "Ruth";
var num = 30;
var num1 = true ;
var num2;
var num3 = null;

let challenge = "30 Days of JavaScript"

console.log(challenge);
// to check the length string
console.log(challenge.length);

// changing words to uppercase
console.log(challenge.toUpperCase());

// changing words toLowerCase
console.log(challenge.toLowerCase());

// slicing the the first word with string
// Cut (slice) out the first word of the string using substr() or substring() method
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
// Check if the string contains a word Script using includes() method

let myLearning = "JavaScript";
console.log(myLearning.substr(1, 9));
