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
console.log(playRound("rock", 3))