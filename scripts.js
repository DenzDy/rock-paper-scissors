var points = [0,0];

function getComputerChoice(){
    var choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection){
    var loweredSelection = playerSelection.toLowerCase();
    var computerSelection = getComputerChoice()
    if(loweredSelection != computerSelection){
        if(computerSelection == "rock" && loweredSelection == "scissors"){
            console.log(`You lose! Computer:${computerSelection} beats You:${loweredSelection}!\n`);
            return updateScore(1);       
        }
        else if(computerSelection == "paper" && loweredSelection == "rock"){
            console.log(`You lose! Computer:${computerSelection} beats You:${loweredSelection}!\n`);
            return updateScore(1);       
        }
        else if(computerSelection == "scissors" && loweredSelection == "paper"){
            console.log(`You lose! Computer:${computerSelection} beats You:${loweredSelection}!\n`);
            return updateScore(1);       
        }
        console.log(`You win! You:${loweredSelection} beats Computer:${computerSelection}!\n`);
        return updateScore(2);
        
    }
    console.log(`Tie! ${computerSelection} ties with ${loweredSelection}\n`);
    return updateScore(0);
}

function updateScore(scorer){
    switch (scorer){
        case 0:
            break;
        case 1:
            points[1] += 1;
            break;
        case 2:
            points[0] += 1;
            break;
    }
    if(points[0] < 5 && points[1] < 5){
        div = document.querySelector("#score");
        div.innerHTML = `<h3>Current scores <br> You: ${points[0]}    -------    Computer: ${points[1]}\n</h3>`;
    }
    else{
        console.log("hello")
        document.body.innerHTML = ""
        points[0] > points[1] ? document.body.innerHTML = `<h1 id="game-over-screen">You win! Reload to play again!\n</h1>` : document.body.innerHTML =`<h1 id="game-over-screen">You lose! Reload to play again!\n</h1>`;
    }

}

function playGame(){
    var points = [0, 0];
    
    /*while(points[0] < 5 && points[1] < 5){
        var input = prompt("Enter rock, paper, or scissors: ");
        var computerChoice = getComputerChoice();
        var roundResult = playRound(input, computerChoice);
        if(roundResult == 1){
            points[1]++;
        }
        else if(roundResult == 2){
            points[0]++;
        }
        console.log(`Current scores: \n You: ${points[0]}    -------    Computer: ${points[1]}\n`);
    }
    points[0] > points[1] ? console.log(`You win! Reload to play again!\n`) : console.log(`You lose! Reload to play again!\n`);*/
}

playGame();
