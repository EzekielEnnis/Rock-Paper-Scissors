const getComputerChoice = () => {

    switch(Math.ceil(Math.random()*3)) {
        case(1): return "rock";
        case(2): return "paper";
        case(3): return "scissors";
    }
}

function playRound(playerSelect, computerSelect){
    playerSelect = playerSelect.toLowerCase;
}