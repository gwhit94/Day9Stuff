// Step One: Getting the Buttons to work:

//     Select all three buttons and using any sort of selection method you prefer.
//     Attach event listeners to each of them and make sure those are working. This can be done with a simple function that just does a console log on click.


var choiceButtons = document.querySelectorAll(".choice");
var computerSelection = document.getElementById("computerSelection");
var userSelection = document.getElementById("userSelection");
var versusSelection = document.getElementById("versusSelection");
var winCount = document.getElementById("winCounter");
var lossCount = document.getElementById("lossCounter");
var tieCount = document.getElementById("tieCounter");

choiceButtons.forEach(function(button){
    button.addEventListener("click", buttonClicked)
});

function buttonClicked(){
    userChoice = this.innerText;
    userSelection.innerText = `You clicked ${userChoice}!`;
    computerSelect();
}

// Step Two: Have the computer randomly select one

//     Build a function that that randomly selects a value [1, 2, 3] or [rock, paper scissors]. Either one of those is (or another option) is fine but explain why you chose the one you wanted to.
//     Return that value from the function


function computerSelect(){
    switch (Math.floor(Math.random() * 3)){
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
    }
    computerSelection.innerText = `Computer selected ${computerChoice}`;
    winnerCheck();
    
}

var computerChoice = "";
var userChoice = "";
var result = "";

function winnerCheck(){
    if (userChoice === computerChoice){
        resultsTracker(2);
    }
    switch (computerChoice){
        // Computer picks Rock
        case "Rock":
            switch (userChoice){
                case "Paper":
                    resultsTracker(0, "covers");
                    break;
                case "Scissors":
                    resultsTracker(1, "crushes");
            }
            break;
        // Computer picks Paper
        case "Paper":
            switch (userChoice){
                case "Rock":
                    resultsTracker(1, "covers");
                    break;
                case "Scissors":
                    resultsTracker(0, "cuts");
            }
            break;
        // Computer picks Scissors
        case "Scissors":
            switch (userChoice){
                case "Rock":
                    flavorText = "crushes";
                    resultsTracker(0, "crushes");
                    break;
                case "Paper":
                    flavorText = "cuts";
                    resultsTracker(1, "cuts");
            }
    }
    document.querySelector("#playAgain").innerText = "Pick again to start a new game!";
}
var wins = 0;
var losses = 0;
var ties = 0;
function resultsTracker(resultCode, flavor){
    var userWin = `${userChoice} ${flavor} ${computerChoice}! You WIN!`;
    var userLoss = `${computerChoice} ${flavor} ${userChoice}. You lose.`;
    var tie = `You both threw ${userChoice}. Tie game.`;
    switch (resultCode){
        case 0:
            wins++;
            winCount.innerText = `Wins: ${wins}`;
            result = userWin;
            break;
        case 1: 
            losses++;
            lossCount.innerText = `Losses: ${losses}`;
            result = userLoss;
            break;
        case 2:
            ties++;
            tieCount.innerText = `Ties: ${ties}`;
            result = tie;
            break;
    }
    versusSelection.innerText = result;
    document.querySelector(".game").innerText = `Game: ${wins+losses+ties+1}`;
}




// Step Three: Make the buttons do different things

//     Refactor the event listeners for the buttons to pass in a variable (or pull the value from elsewhere in the html).
//     Based off the button clicked put a message in the page as to which button you clicked. This can be a div somewhere saying: "You chose rock!" or whatever other thing you prefer.
//     Take the value returned from the AI rock paper scissors function and log that onto the screen as well.

// Step Four: Finishing Touches

//     Now you have a working version of Rock Paper Scissors for selecting items but you have to visually check to see who won.
//     Compare your choice to the computers choice and add a message of who won the game or if it was a tie.
//     Add code to keep track of not only which game it is: this will show the current game so it will start at 1 as it's game 1 at the beginning, but also what your current wins losses and ties are.
//     Also add a message for the player to pick again to start a new game.



