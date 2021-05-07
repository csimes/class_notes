// Array Destructuring & Spread Operator
/*
Ability to unpack values from arrays, or properties from objects into distinct variables while using the spread operator (...)

Spread operator pulls out all array elements and returns as a standalone list of elements.
*/

let fullName = ["Paul", "Niemcyzk"];

let unpackedFullName = [...fullName];

// for (name of fullName) {
//     let nameNew = []
//     nameNew.push(name)
//     return nameNew
// }

// console.log(unpackedFullName);

// let editedFullName = [fullName];
// console.log(editedFullName);

fullName.unshift("Mr.")

console.log(fullName, unpackedFullName);

// console.log(Math.min(1, 5, -3));

let prices = [10.99, 5.99, 22.99, 6.88]
// console.log(Math.min(prices));
// console.log(typeof prices);
console.log(Math.min(prices));// errors out because Math.min requires integers to function
console.log(Math.min(...prices)); // unpacks our array values

// Primitive data types stored inside memory as a variable and a value
let x = 10;
let y = "abc";
let a = x;
let b = y; 
console.log(x, y, a, b);

// JS has 3 data types that are objects which reference to a value:
/*
    - array
    - function
    - object    
*/

let arr = [ ]