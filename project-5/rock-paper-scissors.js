const message = document.querySelector(".message");
const score   = document.querySelector(".score");
const buttons = document.querySelectorAll("button");
let gameScore = [0,0];
console.log(buttons);

for(i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", shoot);
}

function shoot(e){
    let playerShoot = e.target.innerText;
    let computerShoot  = Math.random();
    if(computerShoot <= 0.33){
        computerShoot = "Rock";
    }else if(computerShoot <= 0.66){
        computerShoot = "Paper";
    }else{
        computerShoot = "Scissors";
    }

    let result = checkWinner(playerShoot,computerShoot);
    message.innerHTML = result;
    message.innerHTML += `<h1>You selected: ${playerShoot}.
    Computer selected: ${computerShoot}.</h1>`;

    if(result === "<h1>You win!</h1>"){
        gameScore[0]++;
    }else if( result === "<h1>Computer wins.</h1>"){
        gameScore[1]++
    }else{
        gameScore[0]++, gameScore[1]++;
    }

    score.innerHTML = `<h1>You [${gameScore[0]}] - 
    Computer [${gameScore[1]}]</h1>`;
}

function checkWinner(pl,co){

    if(pl === co){
        return "<h1>It's a Draw!</h1>";
    }

    if(pl === "Rock"){
        if(co === "Paper"){
            return "<h1>Computer wins.</h1>";
        }else{
            return "<h1>You win!</h1>";
        }
    }

    if(pl === "Paper"){
        if(co === "Scissors"){
            return "<h1>Computer wins.</h1>";
        }else{
            return "<h1>You Win!</h1>";
        }
    }

    if(pl === "Scissors"){
        if(co ==="Rock"){
            return "<h1>Computer wins.</h1>";
        }else{
            return "<h1>You win!</h1>";
        }
    }
}