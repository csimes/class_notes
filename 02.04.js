// Day 04; Functions; Scope; Hoisting

// Literals
// They represent values in JS that have been hardcoded

let butlerMascot = 'Bulldog'
let myAge = 30 // this value is hardcoded
let arr = [] // this value is not hardcoded

//Hoisting
/*
- General way of thinking about how code creation and execution works in JS
- JS puts [var]iable declarations and function declarations into memory during 
compile phase of the code. This makes it feel that those are "on top"  or
loaded first.
*/

console.log(myName)
// variable declaration = variable value
var myName = "Paul" // let or const are NOT hoisted, only functions and var[iables]

sayHello();

function sayHello() { // function declaration is hoisted
    console.log("This is a function declaration")
}

// func () // cannot access func() before initialization

let func = function () { // function expression is NOT hoisted
    console.log("This is a function expression")
}

// Scope
// Hierarchy of variables in our code - commonly referred to as global scope, local scope, parent scope, and child scope.

let coffeeOrigin = 'Ethopia' // global scope

function exampleFunction() {
    let x = 'declared inside function' // local scope
    console.log(x)
    coffeeOrigin = "Ethiopia"
    console.log(coffeeOrigin)
}

exampleFunction();
console.log(x)
// Global scope can be access by local function scope
// Local scope cannot be accessed by global scope
// MDN Docs: https://developer.mozilla.org/en-US/docs/Glossary/Scope





//Functions 
// Block of code designed to perform a particular task
// TBD

// let addNums = function (x, y) {
//     let result = x + y;
//     return result
// }

                                            // these are the same thing

function addNums(x, y) {
    let result = x + y
    return result
}

let mystuff = addNums(5, 6) // let mystuff = 11 <<-- inside memory location

console.log(mystuff + 4)