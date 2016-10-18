document.getElementById("start-game").onclick = playTournament;

// user select rocks, paper or scissors
function getUserChoice(){
    var userSelection = prompt("Do you choose rock, paper or scissors?");
    if(userSelection === ('rock'||'rocks'||'Rock'||'Rocks'||'scissors'||'Scissors'||'scissor'||'Scissor'||'paper'||'Paper'||'papers'||'Papers')){
		return userSelection;
	} else {
		var userSelection = prompt("Invalid entry. Do you choose rock, paper or scissors?");
		getUserChoice();
	}
}

// get computer choice
function getComputerChoice(){
    var computerSelection = Math.random();
    if (computerSelection < 0.34) {
        computerSelection = "rock";
    } else if(computerSelection <= 0.67) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
    alert("Computer chose " + computerSelection);
    return computerSelection;
}

// Get winner
function getWinner(computer, user){
    if (computer === user ) {
        return "Tie";
    } else if ( (computer === "rock" && user == "scissors"||"scissor") || (computer === "paper" && user == "rock"||"rocks") || (computer === "scissors" && user == "paper"||"papers") ){
        return "Computer";
    }else {
        return("User");
    }
}

function runProgram(){
        var userSelection = getUserChoice();
        var computerSelection = getComputerChoice();
        var winner = getWinner(computerSelection, userSelection);
        alert("Winner is "+ winner);
        return winner;
}

function playTournament(){
    var userScore = 0;
    var computerScore = 0;
    var winningScore = prompt("How many games until you win?")
    while (userScore < winningScore && computerScore < winningScore){
        var gameWinner = runProgram();

        if (gameWinner === "Computer"){
            computerScore++;
            alert("Computer won round");
        } else if (gameWinner === "User"){
            userScore++;
            alert("User won round");
        }  else {
            alert("Round was tie");
        }
    }

    if (userScore > computerScore){
        alert("User won game.  Score: Computer-" + computerScore + " User-" + userScore); 
    } else{
        alert("Computer wons game.  Score: Computer-" + computerScore + " User-" + userScore);
    }

}