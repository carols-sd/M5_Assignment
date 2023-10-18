// The Basic Calculator 

// You will build a simple calculator using the skills you’ve acquired in
// regards to functions. You will ask the user for a number, a second number,
// and then finally ask them what kind of operation they want to perform,
// either add, subtract, multiply, or divide. Depending on what they select,
// you will perform that operation.

// ADD A FUNCTION CALLED CALCULATE
// This function accepts three parameters: x, y, and operation.
// You need a switch statement to evaluate the operation and perform
// the appropriate calculation on the x and y numbers. 
function calculate(x, y, op) {
    switch (op) {
        case '+':
            console.log("case +");
            return x + y; 
        case '-':
            console.log("case -");
            return x - y; 
        case '*':
            console.log("case *");
            return x * y; 
        case '/':
            console.log("case /");
            return x / y; 
        default:
            console.log("case default");
            return null;
    }
}

// Rerun the application so that it asks the user for the numbers and operation
// until the user enters a valid operation.
// (User is allowed to enter invalid numbers, which are treated as NaN.)
// Add this functionality within a do-while loop.
let x, y, op, result;
do {

    // COLLECT FIRST NUMBER FROM USER
    // Prompt the user for a number and store it in a variable.
    // Convert that to a number.
    x = Number(prompt("Please enter the first number:"));
    console.log(x);

    // COLLECT SECOND NUMBER FROM USER
    // Then, prompt the user for a second number and store it in a variable.
    // Convert that to a number.
    y = Number(prompt("Please enter the second number:"));
    console.log(y);

    // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    // Next, prompt the user for the operation they would like to perform (add,
    // subtract, multiply, divide) and store that in a variable.
    op = prompt("Please enter the operation to perform (+ - * /):");
    console.log(op);

    // CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    // Finally, pass the three parameters into the calculate function to return
    // the result of the calculation.
    result = calculate(x, y, op);
    console.log("result='" + result + "'");

    // If the user doesn’t enter either add, subtract, multiply, or divide,
    // display an alert message telling them that.
    if (result == null) {
        alert("You must enter a valid operation (+ - * /).");
    }
}
while (result == null);

// Display the result of the calculation within an alert.
alert(`${x} ${op} ${y} = ${+result.toFixed(2)}`);  // Trying to round the result to
                                                   // a max of 2 decimals, if needed





