// Practice with Functions

// STEP 1
// Write a function called halfNumber() that accepts one argument (a number), 
// divides it by 2, and returns the result. 
// It should log a string like "Half of 5 is 2.5.".

function halfNumber(num) {
    let returnVal = num/2;
    console.log(`Half of ${num} is ${returnVal}.`);
    return returnVal;
}
halfNumber(5);

// STEP 2
// Write a function called squareNumber() that accepts one argument (a number), 
// square that number, and return the result. 
// It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(num) {
    let returnVal = num * num;
    console.log(`The results of squaring the number ${num} is ${returnVal}.`);
    return returnVal;
}
squareNumber(3);

// STEP 3
// Write a function called percentOf() that accepts two numbers, figure out what 
// percent the first number represents of the second number, and return the result. 
// It should log a string like "2 is 50% of 4."

function percentOf(num1, num2) {
    let returnVal = num1/num2 * 100;
    // Trying to round the printed result to a max of 2 digits, if needed
    console.log(`${num1} is ${+returnVal.toFixed(2)}% of ${num2}.`);                                                    
    return returnVal;
}
percentOf(4, 8);

// STEP 4
// Write a function called findModulus() that accepts two numbers. Within the 
// function write a statement that returns the modulus of the first and second 
// parameters. 
// It should log a string like "2 is the modulus of 4 and 10."

function findModulus(num1, num2) {
    let returnVal = num1%num2;
    console.log(`${returnVal} is ${num1} modulus ${num2}.`);
    return returnVal;
}
findModulus(10, 4);

// STEP 5
// It looks like this assignment has no step 5.
