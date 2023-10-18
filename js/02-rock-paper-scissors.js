
// The Rock, Paper, Scissors Game 

// Rock, paper, scissors is a classic 2 player game. 
// Each player chooses rock, paper or scissors. The possible outcomes include:
// Rock destroys scissors.
// Scissors cut paper.
// Paper covers rock.

// Our code will break the game into 3 phases:
// 1. User makes a choice. How will we collect the user’s choice?
// 2. Computer makes a choice. How will we collect the computer’s choice?
// 3. A conditional that determines who wins.

// Begin by prompting the user for their choice.
// Reprompt until they enter a valid choice.
let yourChoice, computerChoice, winner;
let returnStr = "";
let validChoices = ['rock', 'paper', 'scissors'];

do {
    yourChoice = prompt("Rock, paper, or scissors?").toLowerCase();
}
while (!validChoices.includes(yourChoice));

// Create computer’s choice. Generated it similarly to the coin flip in the last
// assignment. Remember that there will be 3 options here.
//coinFlip = Math.round(Math.random());
computerChoice = Math.floor(Math.random() * 3);

// Depending on what the numeric value of the computer’s choice is, reset it to
// a string value of rock, paper, or scissors instead.
computerChoice = validChoices[computerChoice];

// Create a conditional statement that checks the user’s choice in relation to
// the computer’s choice. Once a winner is defined, display a message within an
// alert box indicating who the winner is.
returnStr += "You chose " + yourChoice + ".\n";
returnStr += "Computer chooses " + computerChoice + ".\n";

if (yourChoice == computerChoice) { 
    returnStr += "It's a tie!";
}
else if ((yourChoice == 'rock' && computerChoice == 'scissors') ||
         (yourChoice == 'scissors' && computerChoice == 'paper') ||
         (yourChoice == 'paper' && computerChoice == 'rock')) { 
    returnStr += "You win!";
}
else {
    returnStr += "Computer wins.";
}

alert(returnStr);

