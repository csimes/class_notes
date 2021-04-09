// Arrays & Objects

// Array
/* High-level, list-like object used to be traversed and mutated.
    - uses integers as element index
    - can be accessed by a bracket notation [index] or dot notation (method)
    - arrays are zero index
        - first object at zero (0)
        - last object at array (object.length - 1)
*/

// Create an array

let british = ["Rolls Royce", "Bentley", "Caterham", "Aston Martin"];
console.log(british);
console.log(british[0]); // logs first element, "Rolls Royce"
console.log(british[1]); // logs second element, "Bentley"
console.log(british[british.length-1]); // logs last element, "Aston Martin"

// Array Methods

console.log(british.length); // returns length of an array

british.push("MINI") // appends element to the end of an array
// console.log(british);

british.splice(0, 2, "Jaguar", "Rolls Royce"); // index to start, how many to remove, what to replace item(s) with
console.log(british);

let bReturn = british.pop(); // removes the last index of an array, "MINI", and returns it for a brief moment
console.log(bReturn); // shows .pop() holding onto that item
// console.log(british);

console.log(british.unshift("Bentley", "Land Rover")); // adds elements to array s tart and returns array length
// console.log(british);

console.log(british.shift()); // removes start element of an array
console.log(british);

console.log(british.indexOf("Land Rover, 1")); // searches an array for an index of element. Can add second param to select start index

console.log(british.includes("Land Rover")) // determines whether array has specific element. Can add second param to select start index. Returns true/false
console.log("---------------------------");
// Advanced array manipulations

let german = ["BMW", "Mercedes", "Audi", "Porsche", "Alpina", "VW"]

// for(cars of german) {
//     console.log(cars);
// }

// array.forEach() runs a function for each element in the array
// takes a callback function inside as one of its parameters

german.forEach(car => console.log(car))
// same as (function(car) {console.log(car)})

// array.map () --> transforms elements in original array by callback function and returns a new, modified function

let germanUpperCase = german.map(car => car.toUpperCase());
console.log(germanUpperCase);

// array.filter() --> creates a new array with elements that pass the test in a given function
console.log(german.filter(car => car.startsWith("A") || car.startsWith("B")));

// Objects
/*
Containers for values in JSON format (Javascript Object Notation).
    -exists as a string
    -has properties and methods
    - .property
    - .method()
    - associative arrays (each property is associated with a string value)
*/

// define JS object with an object literal
let car = {
    // key : value pair (properties) that are comma separated
    make: "Porsche",
    model: "911",
    country: "Germany",
    driver: "Walter Rohl",
    association: {
        name: "Jeff",
        lastname: "Adams"
    }
}

// Accessing object values

console.log(car.make); // access using key
console.log(car["model"]); // access using object key
let returnKeys = Object.keys(car); // returns keys in an array
console.log(returnKeys);
console.table(car); // console logs table of an object

// Object property reassignment
car.make = "Maserati"; 
car["model"] = "GranTurismo S";
console.log(car);
console.log(car.association.name); // to access nested objects within an object (think of a ladder)

// Object Constructor

let client = new Object; // creates an empty object
console.log(client);

client.firstName = "Paul";
client.lastName = "Niemcyzk"
client.birthYear = 1990;
console.log(client);

let manager = {
    firstName: "Brad",
    lastName: "Titus",
    birthYear: 1980,
    // First way requires parameter of birthYear from outside
    // setAge: function(birthYear) {
    //     return 2021 - birthYear // don't use dot notation (manager.birthYear)
    // }
    // Second way takes property from this.birthYear
    // setAge: function() {
    //     return 2021 - this.birthYear
    // }
    setAge: function() {  // turns into age: "calculated age or 41 in this case"
        this.age = 2021 - this.birthYear // creates new age property with value of function calculation once it has been called
    }
}

console.log("_____________________");
// console.log(manager.setAge(1990));
// console.log(manager.setAge());
console.log(this); // this is a global object
manager.setAge();
console.log(manager.age);

