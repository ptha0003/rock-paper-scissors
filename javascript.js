let humanScore = 0;
let compScore = 0;
let round = 0;
document.getElementById("playAgain").style.display = "none";


function resetGame(){
    humanScore = 0;
    compScore = 0;
    round = 0;
    document.getElementById("displayScore").innerText = "";
    document.getElementById("displayRound").innerText = "";
    document.getElementById("playAgain").style.display = "none";
}

function getCompChoice(){
    choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*3)];
}

function getHumanChoice(event){
    let choice = event.target.value;
    let compCHoice = getCompChoice();
    playGame(choice,compCHoice);
    document.getElementById("displayScore").innerText = `Your score: ${humanScore}, Computer score: ${compScore}`;
}

function playRound(humanChoice, compChoice){
    round++;
    if(humanChoice == "rock"){
        switch(compChoice){
            case "rock":
                document.getElementById("displayRound").innerText = `Round: ${round}, Computer choice: ${compChoice}, human choice: ${humanChoice}. It's a tie `;
            break;
            case "scissors":
                document.getElementById("displayRound").innerText = `Round: ${round}, Computer choice: ${compChoice}, human choice: ${humanChoice}. You win`;
                humanScore++;
            break;
            case "paper":
                document.getElementById("displayRound").innerText = `Round: ${round}, Computer choice: ${compChoice}, human choice: ${humanChoice}. You lose`;
                compScore++;
            break;
        }
    } else if(humanChoice == "scissors"){
        switch(compChoice){
            case "rock":
                document.getElementById("displayRound").innerText = `Round: ${round}, Computer choice: ${compChoice}, human choice: ${humanChoice}. You lose`;
                compScore++;
            break;
            case "scissors":
                document.getElementById("displayRound").innerText = `Round: ${round}, Computer choice: ${compChoice}, human choice: ${humanChoice}. It's a tie `;
            break;
            case "paper":
                document.getElementById("displayRound").innerText = `Round: ${round}, Computer choice: ${compChoice}, human choice: ${humanChoice}. You win`;
                humanScore++;
            break;
        }
    }   else if(humanChoice == "paper"){
        switch(compChoice){
            case "rock":
                document.getElementById("displayRound").innerText = `Round: ${round}, Computer choice: ${compChoice}, human choice: ${humanChoice}. You win`;
                humanScore++;
            break;
            case "scissors":
                document.getElementById("displayRound").innerText = `Round: ${round}, Computer choice: ${compChoice}, human choice: ${humanChoice}. You lose`;
                compScore++;
            break;
            case "paper":
                document.getElementById("displayRound").innerText = `Round: ${round}, Computer choice: ${compChoice}, human choice: ${humanChoice}. It's a tie `;
            break;
        }
    }
}


//TODO:
function playGame(humanChoice, compChoice){
    playRound(humanChoice,compChoice)
    if(humanScore == 5){
        alert("You Win!!");
        document.getElementById("playAgain").style.display = "block";
    }else if(compScore == 5){
        alert("You lost.");
        document.getElementById("playAgain").style.display = "block";
    }
    
}