const coinArray = ["Heads","Tails"];
let score       = [0,0];  
const message   = document.querySelector(".message");
const buttons   = document.querySelectorAll("button");

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", coinToss);
}

function coinToss(e){
    message.innerHTML = `<h1>You selected ${e.target.innerText}.</h1>`;
    let playerGuess   = e.target.innerText;
    let computerToss  = Math.floor(Math.random()*2);
    let computerGuess = coinArray[computerToss];

    if(playerGuess === computerGuess){
        //win
        score[0]++;
        message.innerHTML += `<h3>You win! The score is now - 
        You: ${score[0]} | Computer: ${score[1]}.<br><br> 
        Select either Heads or Tails to play again.</h3>`;
    }else{
        //loss
        score[1]++; 
        message.innerHTML += `<h3>Computer wins. The score is now - 
        You: ${score[0]} | Computer: ${score[1]}.<br><br> 
        Select either Heads or Tails to play again.</h3>`;
    }
    
}