function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Choose: rock, paper or scissors.");
        const computerSelection = getComputerChoice();

        return "Game "+i+": you " + evaluate(playerSelection, computerSelection);
    }
}

function getComputerChoice(){

}

function evaluate(player, computer){
    let won_or_lost = '';

    if (player === 'rock'){

    }
    else if(player === 'paper'){

    }
    else if (player === 'scissors'){
        
    }


    return won_or_lost;
}
