let newCurrent;
let holdScore;
let current;
let num;
document.querySelector('.btn--roll').addEventListener('click', function(){
    let randomNumber = Math.trunc(Math.random()* 6) + 1;
    document.querySelector('.dice').src = `dice-${randomNumber}.png`;
    current = document.querySelector('.current-score').textContent;
    if(randomNumber > 1){
        newCurrent = randomNumber +=  Number(current);
        document.querySelector('.current-score').textContent = newCurrent;
    }else{
        document.querySelector('.current-score').textContent = 0;
    }
    currentPlayer = 1 - currentPlayer;
    
});

document.querySelector('.btn--hold').addEventListener('click', function(){
    holdScore = Number(document.querySelector('.score').textContent);
    let newHoldScore = holdScore + newCurrent;
    document.querySelector('.score').textContent = newHoldScore;
    newCurrent = 0;
    document.querySelector('.current-score').textContent = 0;
    if(newHoldScore >= 100){
        let background = document.querySelector('.background').innerHTML;
        background.style.backgroundColor = "green";

    }
    let playerScoreElement = document.querySelector(`#score--${currentPlayer}`);
    let playerCurrentElement = document.querySelector(`#current--${currentPlayer}`);
    playerScoreElement.textContent = newHoldScore;
	playerCurrentElement.textContent = 0;
      
})

document.querySelector('.btn--new').addEventListener('click', function(){
    location.reload()
    return false
})