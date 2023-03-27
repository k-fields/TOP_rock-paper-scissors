var playerSelection = '';

document.addEventListener('click', (e) => {
    if(e.target.localName === 'button'){
        if (e.target.classList[0] === 'play-button') {
            let result = game(playerSelection);

            if (result){
                console.log(result)
                addHistory(result);
                playerSelection = '';
                return;
            }
        }
        playerSelection = e.target.classList[0];
    }

}, true);

function addHistory(result){
    const resultPanel = document.getElementsByClassName('previous-games');
    const latestResult = document.createElement('span');
    latestResult.setAttribute('class','game-result');
    latestResult.innerText = result;
    resultPanel[0].appendChild(latestResult);
    resultPanel[0].scrollTop = resultPanel[0].scrollHeight;
}

function game(playerSelection){
    if (!playerSelection) 
    {
        console.log("You have to choose an option.");
        return;
    }
        
    const computerSelection = getComputerChoice();
    const result = evaluate
    return "You: "+playerSelection+ " | Computer: "+computerSelection+" | Result: you " + evaluate(playerSelection, computerSelection);
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
    return choice;
}

function evaluate(player, computer){
    let won_or_lost = '';

    if (player === 'rock'){
        if (computer === 'rock') won_or_lost = 'got a tie';
        else if (computer === 'paper') won_or_lost = 'lost';
        else won_or_lost = 'won';
    }
    else if(player === 'paper'){
        if (computer === 'rock') won_or_lost = 'won';
        else if (computer === 'paper') won_or_lost = 'got a tie';
        else won_or_lost = 'lost';
    }
    else if (player === 'scissors'){
        if (computer === 'rock') won_or_lost = 'lost';
        else if (computer === 'paper') won_or_lost = 'won';
        else won_or_lost = 'got a tie';
    }
    else{
        won_or_lost = null;
    }

    return won_or_lost;
}