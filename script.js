const getComputerChoice = () => {
    return Math.ceil(Math.random()*3)
}

function playRound(playerSelect, computerSelect){
    const gameRules = {
        rock: 1,
        paper: 2,
        scissors: 3
    }
    playerSelect = gameRules[playerSelect.toLowerCase()];

    switch(playerSelect){
        case(1): {
            if(computerSelect === 2){
                return "You Lose! Paper beats Rock";
            }
            else if(computerSelect === 3){
                return "You Win! Rock beats Scissors";
            }
            else{
                return "Draw!";
            }
        }
        case(2): {
            if(computerSelect === 1){
                return "You Win! Paper beats Rock";
            }
            else if(computerSelect === 3){
                return "You Lose! Scissors beats Paper";
            }
            else{
                return "Draw!";
            }            
        }
        case(3): {
            if(computerSelect === 2){
                return "You Win! Scissors beats Paper";
            }
            else if(computerSelect === 1){
                return "You Lose! Rock beats Scissors";
            }
            else{
                return "Draw!";
            }            
        }
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    while(true){
        let playerSelect = prompt("Rock, Paper, Scissors, Shoot!")
        let result = playRound(playerSelect, getComputerChoice())
        console.log(result)
        result = result.split("!")[0];
        if(result === "You Win"){playerWins += 1;}
        else if (result === "You Lose"){computerWins += 1;}
        if(playerWins ===  3){
            console.log(`Player Wins! ${playerWins} - ${computerWins}`)
            break;
        }
        else if(computerWins ===  3){
            console.log(`Computer Wins! ${playerWins} - ${computerWins}`)
            break;
        }
    }
}

game();