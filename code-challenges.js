// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:
// Using given variables
// Declare a function called stringCombo
// Set parameters (string1, string2)
// Use a conditional statement to compare passed in strings
    // if string1 is greater than string2 -- we will return string 1
    // use else or else if to evaluate the opposite and return the other string
    // worked through this problem in class
// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

const stringCombo = (string1, string2) => {
    if(string1.length > string2.length) {
        return string1
    } else if(string1.length < string2.length) {
        return string2
    } else {
        return "Oops, neither are greater"
    }
}

console.log(stringCombo(fruit1, fruit2)) // returned banana
console.log(stringCombo(fruit3, fruit4)) // returned cherry


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code: 
// Declare a function called boilingPoint
// Set parameter of temp to pass through the function for evaluation
// Write conditional statements to compare parameter to argument and return a value
    //These statements will compare the parameter of temperature to the arguement or arguments it is passed through until it meets the correct criteria and returns the appropriate response.
    // I will start with an if statement, then else if, then move to an else statement.
    // Use string interpolation to recall the const for the return the const value plus a string
// After the function is working properly, I will invoke it and pass the 3 const variables as parameters and log the returned value/ response.
//

const temp1 = 42
const temp2 = 350
const temp3 = 212

const boilingPoint = (temp) => {
    if(temp < 212) {
        return `${temp1}` + " is below boiling point"
    } else if(temp === 212) {
        return `${temp2}` + " at boiling point"
    } else(temp > 212) 
        return `${temp3}` + " above boiling point"
 } 

console.log(boilingPoint(temp1)) // returned "42 below boiling point"
console.log(boilingPoint(temp2))// returned "350 above boiling point"
console.log(boilingPoint(temp3))// returned "212 at boiling point"

// I ended up getting a missing Initializer declaration for boilingPoint because I didn't put an = after boilingPoint to give it meaning with the function

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
// Start by concating the 2 arrays together wrapped in a console.log
// Next, create a new const variable for the new array that was concacted of myNumbers1 and myNumbers2.
// Then, console.log new const to check the output.
// For final step, console.log new array with the .push setter for arrays.

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

console.log(myNumbers1.concat(myNumbers2))// output [3, 7, 0, 36, -9, 8, -7, 42, 9, 13
const myNumbers3 = myNumbers1.concat(myNumbers2) 
console.log(myNumbers3) // output [3, 7, 0, 36, -9, 8, -7, 42, 9, 13]
console.log(myNumbers3.length) // output 10

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// Pseudo code:
// Create a new a variable set equal to the variable name .reverse
    // Console.log new variable
    // The output produced an error stating .reverse is not a function
    //Back to the pseudo coding drawing board.
// Attempt #2 in the form of a function expression.
    // Declare a function with the parameter of split to pass currentCohort through.
    // Use the return with the parameter of string.split("") to turn the currentCohort string into an array of letters.
    // Create a variable equal to the output of function
    // Console.log the new variable to get the output
    // Create a variable equal to the previous variable .reverse
    // Console.log this new variable with the .reverse
    // Then, I was going to use the .join method to put it all back together, but this isn't working.
    // const split = (string) => {
    //     return string.split("")
    //  }
    // console.log(split(currentCohort)) // Output ["D", "e", "l", "t", "a", " ", "2", "0", "2", "2"]
    // // Now we have an array of elements instead of a string
    
    // var array = console.log(split(currentCohort))
    // console.log(array) // // Output ["D", "e", "l", "t", "a", " ", "2", "0", "2", "2"]
    // var reverseArray = array.reverse()
    // console.log(reverseArray) // TypeError: Cannot read properties of undefined (reading 'reversed')
//Attempt #3
// Research new approaches to the problem
// Between the syllabus notes and some other reseaarch, I am finding I need to write a function using the keyword function. Can you explain more about this syntax and the difference between a function expression and function declaration? Is the keyword function being used to define an expression here? Just trying to grasp the theory.
// Write a function, then name, then parameter, and curly brackets.
// Set parameter to (string)
// Return the parameter with chained methods starting with the .split("") to create an array, then the .reverse method to reverse the elements of an array, and finally the .join method to join the reversed elements of the array back together.
// Lastly console.log the name of the function expression with the parameter of currentCohort.
// 
const currentCohort = "Delta 2022"

function reverseString(string) {
    return string.split("").reverse().join("")
}
console.log(reverseString(currentCohort))

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
// Create a for loop to iterate through the array to evaluate whether each element is odd or even.
// After let, state where the index starts, then we iterate through the length of the array, and what to do after each loop (increments).
// Filter the array using if else statements to check if conditions are met and console.log those results
// Final step, console.log(myArray) for output.

 const myArray = [13, 34, 5, 10, 27, 42]

for(i=0; i<myArray.length; i++) {
    if(myArray[i] % 2 === 0) {
        console.log("even")
    } else
        console.log("odd")
}

console.log(myArray) // my output was: odd, even, odd, odd, even, odd, odd, even, odd, odd, even, odd
// not understanding what went wrong here and why I have more outputs than elements in the array
//apparently else statements do not need a condition, so my odd numbers were essentially being evaluated twice.
//This had my wanting to bang my head against the wall, so shoutout to Corey for reiterating this concept!

// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
// Declare a function.
// Set parameter (num1, num2).
// Write conditional statements to evaluate if num1 is greater than or less than num2
// return the subtractions value of the larger number from the smaller number
//Finally, console.log the function in the terminal for outout

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

function diff (num1, num2) {
    if( num1 > num2) {
        return num1 - num2
    } else
        return num2 - num1
}

console.log(diff(number1, number2)) 
console.log(diff(number3, number4))
//Always remember to console.log the name of the function with the parameters, so your terminal isn't spitting out paraneters while you sit there for 30ish minutes looking at a beautiful function. Please do laugh at my pain.
