function getComputerChoice(){
    var choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    var loweredSelection = playerSelection.tolowerCase();
    if(loweredSelection != computerSelection){
        if(computerSelection == "rock" && loweredSelection == "scissors"){
            console.log(`You lose! ${computerSelection} beats ${loweredSelection}!\n`);
            return 1;       
        }
        else if(computerSelection == "paper" && loweredSelection == "rock"){
            console.log(`You lose! ${computerSelection} beats ${loweredSelection}!\n`);
            return 1;       
        }
        else if(computerSelection == "scissors" && loweredSelection == "paper"){
            console.log(`You lose! ${computerSelection} beats ${loweredSelection}!\n`);
            return 1;       
        }
        console.log(`You win! ${loweredSelection} beats ${computerSelection}!\n`);
        return 2;
        
    }
    console.log(`Tie! ${computerSelection} ties with ${loweredSelection}\n`);
    return 0;
}

function playGame(){
    var points = [0, 0];
    while(points[0] < 5 || points[1] < 5){
        var input = prompt("Enter rock, paper, or scissors: ");
        var computerChoice = getComputerChoice();
        if(playRound(input, computerChoice) == 1){
            ++points[1];
        }
        else if(playRound(input, computerChoice) == 2){
            ++points[0];
        }
        console.log(`Current scores: \n You: ${points[0]}    -------    Computer: ${points[1]}\n`);
    }
    points[0] > points[1] ? console.log(`You win! Reload to play again!\n`) : console.log(`You lose! Reload to play again!\n`);
}

playGame();
