// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// // a) Your answer: "tangerine", "magenta", "lilac", "daffodil, "indigo"
// // b) Verify and explain: 5 was the return which is the modified length of the array not the elements of the array.
// The .push method adds an item to the end of an array modifying the lenth of the array and returns the length of the array. 

// // --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// // a) Your answer: 9
// // b) Verify and explain: The return was 10, because the .length property counts all the characters in a string including blank spaces. This makes sense, because if you turned "LEARN 2022" into an array, there would be an empty element for the space between LEARN and 2022. An interesting fact in my research that I came across is that the .length property has a positive value that is less than 2^32 power.


// // --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// // a) Your answer: o
// // b) Verify and explain: The return was "o", because of 0-based indexing, which is when you start with 0 instead of 1. Using 0-based indexing is very popular in computer science. 0 is where the first element is in an array for example.


// // --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// // a) Your answer: Ruby
// // b) Verify and explain: The return was Ruby. Here, console.log is wrapped around languages the array with bracket notation following, which means we are looking for the element at a particular index, and in the brackets is the word index which is set equal to 1. This ends up returning the element in the array of languages at index, which is "Ruby". You can also reassign an element by using the array name with brackets after and an index number.

// // --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// // a) Your answer: SATURDAY, SUNDAY
// // b) Verify and explain: The return is a TypeError that says .toUpperCase is not a function. You would need to create a for loop to iterate through the array in order to Capitalize the elements, which is why .toUpperCase() did not work. It is a method to be used in a function that could then loop, but its not going to work outside of that environment. The .toUpperCase() method is used to return a string to upper case not an array.


// // --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// // a) Your answer: 3
// // b) Verify and explain: The return was number. In console.log, the typeof deciphers what type of data something is and data.length returns the number of elements in an array, which typeof classifies as numbers. This is why number was returned instead of 3. 
