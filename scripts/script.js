function game(){
    for (let i = 1; i <= 5; i++){
        const playerSelection = prompt("Choose: rock, paper or scissors.");
        const computerSelection = getComputerChoice();

        console.log("Game "+i+": you " + evaluate(playerSelection, computerSelection));
    }
}

function getComputerChoice(){
    rand = Math.floor(Math.random() * 3);
    let choice = '';

    switch(rand){
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors';
            break;
        default:
            choice = 'error';
            break;
    }
    return rand;
}

function evaluate(player, computer){
    let won_or_lost = '';

    if (player === 'rock'){
        if (computer === 'rock') won_or_lost = 'got a tie';
        if (computer === 'paper') won_or_lost = 'lost';
        else won_or_lost = 'won';
    }
    else if(player === 'paper'){
        if (computer === 'rock') won_or_lost = 'won';
        if (computer === 'paper') won_or_lost = 'got a tie';
        else won_or_lost = 'lost';
    }
    else if (player === 'scissors'){
        if (computer === 'rock') won_or_lost = 'lost';
        if (computer === 'paper') won_or_lost = 'won';
        else won_or_lost = 'got a tie';
    }
    else{
        won_or_lost = 'Choose a valid option: "rock", "paper" or "scissors".';
    }

    return won_or_lost;
}

console.log(game());