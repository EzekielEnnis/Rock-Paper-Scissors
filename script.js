/* Get number 1-3 to use as computers hand */
const getComputerChoice = () => {
    return Math.ceil(Math.random()*3)
}

/* Logic of win conditions for one round, using a object as dictionary of hands */
function playRound(playerSelect, computerSelect){
    const gameRules = {
        rock: 1,
        paper: 2,
        scissors: 3
    }
    /* Uses player input to get the hand from gameRules for simplicity later on */
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

 /* Main game loop, keep score to play to best of 5 */
 function game(roundResult){
    const winTotal = 3;
    const score = document.querySelector(".score") // Get scoreboard
    
    // Splits score element instead of keeping global variable
    let playerWins = +score.textContent.split(" - ")[0];
    let computerWins = +score.textContent.split(" - ")[1];

    let result = roundResult.split("!")[0];
    result = result.split("!")[0]; // Find win or lose result
    if(result === "You Win") playerWins += 1; // +1 player score
    else if (result === "You Lose") computerWins += 1; // +1 cpu score
        score.textContent = `${playerWins} - ${computerWins}`

    if (playerWins === winTotal || computerWins === winTotal) setTimeout(() =>{
        // Tells player overall result of the game and reloads page
        if (playerWins > computerWins) {
            if(alert("You Win!"));
            else window.location.reload();
        }
        else {
            if(alert("You Lose!"));
            else window.location.reload();
        }
        }, 250);
 };


 const btn = document.querySelectorAll(".hand-btn");
 
 btn.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.currentTarget.className.split(" ")[2] === "cpu") return;
        const handClicked = e.currentTarget.className.split(" ")[1];
        const cpu = getComputerChoice();
        const roundResult = playRound(handClicked, cpu);

        const txtRoundResult = document.querySelector(".round-results");
        txtRoundResult.textContent = roundResult;
        game(roundResult);
    });
});









/*
    function game(){
    let playerWins = 0;
    let computerWins = 0;
    while(true){
        let playerSelect = prompt("Rock, Paper, Scissors, Shoot!") // User input
        let result = playRound(playerSelect, getComputerChoice())
        console.log(result)
        result = result.split("!")[0]; // Find win or lose result
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
*/