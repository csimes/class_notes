// Quick string question answer about back ticks:

// let name = 'Kate';
// console.log(`This can interpolate as well as print any symbol ' " [] ${name}`)
// console.log('This will print like a string but our symbols need help can "quote" ')


// Conditional Statements - if, if else/else if, switch, ternary

// IF STATEMENTS
// Checks for a boolean value, if something is true it is truthy(a truthy statement), or falsy
// Truthy - if condition is or can be true
// Falsy - if condition is false or can be false
// Some falsy expressions are: null, NaN(not a number), 0, an empty string (" "), and undefined

// If a condition is true, then JS will execute(perform) the code block
// If checks one, singular, condition

// Declare a variable
let isOpen = true;

// The condition to check is held in our ( )
if (isOpen === true) {
// The code we perform if the condition is met is held in { }
console.log("The door is open");
};

// // Same as above statement, checks if the value in parentheses is true
if (isOpen){
console.log('The door is open');
}

// // Can test false values
if (isOpen === false) {
console.log('The door is shut');
}


// IF ELSE
// If else is used to check a condition, but run a code block for either the met condition or a separate code block if it does not meet the condition

let isOpen = false;

if (isOpen === true) {
    console.log('You can go inside, the door is open');
} else {
    console.log('The door is not open to enter');
};

let temp = 70 ;
if (temp >= 65) {
    console.log('Wow, what a nice day.');
} else {
    console.log('I need a sweater');
};

// ELSE IF
// Else if is used to allow us to check more than two conditions
// Examples: Day 2 Challenge, Fizz Buzz Challenge

let temp = 48;
if (temp >= 80) {
    console.log('I know people are wearing shorts');
} else if (temp >= 65) {
    console.log('This is t-shirt weather for most folks');
} else if (temp >= 50) {
    console.log("You're going to need a sweater");
} else {
    console.log('I am not leaving my house and you cannot make me.');
}

let userName = "myUserName";
let password = "myPassword";

if(userName === "myUsername" && password === "Password") {
    console.log(`Welcome back, ${userName}. You're logged in`);
} else if (userName === "myUsername") {
    console.log('Your username is correct, but you have the wrong password.');
} else {
    console.log('You are not in our database. Would you like to sign up?');
}

// SWITCH STATEMENTS
// Execute a block of code depending on the "cases"; condition met? check against cases
// use case (condition): - starts code block
// break - to end the code block
// Example: Fizz Buzz
// Default - code to be ran if no cases are met, good practice to have

let favColor = 'green';
switch (favColor) {
    case 'blue':
        console.log('Blue like the sky');
        break;
    case 'red':
        console.log('Red like a rose');
        break;
    default: 
    console.log(`${favColor} is beautiful too`)
}

let doYouLikePizza = 'Heck yeah!'

switch(doYouLikePizza) {
    case 'Heck yeah!':
    case 'yeah':
    case 'duh':
        console.log('Me too! I love pizza')
        break;
    case 'no':
    case 'nope':
    case 'nah':
        console.log('Ohh...I will order something else for dinner')
        break;
    default:
        console.log('I cannot tell if that is a yes or no...')
};

// TERNARY
// Concise way to check two(or more) conditions using the syntax of ? and :
// Structure:
// (condition) ? (codeToRunIfTrue/Truthy) : (codeToRunIfFalse/Falsy)

let temp = 70;

// Ternary
(temp > 75) ? console.log('Indiana summer temps') : console.log('Indiana spring temperatures');

// Instead of:
if (temp > 75) {
    console.log('Summer');
} else {
    console.log('Spring');
};

let num = -55;

(num > 0) ? console.log('Positive number') : 
   (num < 0) ? console.log ('Negative number') :
   console.log('Number is 0, neutral');



// LOOPS
// For loop - a quick and easy way to iterate or "loop" over something, to do it repeatedly
// Infinite loops are possible (best to avoid): ctrl + C, or close VSC
// Loops take in three parameters, each separated by a semicolon:
// 1. initial expression
// 2. condition
// 3. increment (or decrement) expression
//   (1)  ;   (2)  ;  (3)
for(i = 0; i <= 10; i++) {
    console.log(i);
};

//To decrease by 1 we use i--
for(i = 10; i >= 0; i--) {
    console.log(i);
};

// Challenge: use a for loop to count to 20, but by 2's
// Decrease by 2 with i -= 2
for (i = 0; i <= 20; i += 2) {
    console.log(i);
}

// Printing each letter with a loop
let word = "Fantastic";

for (let i = 0; i < word.length; i++) {
    // console.log(i); //printing the numerical index of the string's letter
    console.log(word[i]); // square brackets are used to get the letter itself (value of index)
}