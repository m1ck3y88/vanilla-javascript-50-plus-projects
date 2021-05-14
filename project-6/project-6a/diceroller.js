const button   = document.querySelector("button");
const player   = document.querySelector("#player");
const computer = document.querySelector("#computer");
const output   = document.querySelector("#output");
const score    = document.querySelector("#score");
let scoreArray = [0,0];

button.addEventListener("click", function(){
    let rolls = [roll(6), roll(6)];
    let temp;
    if(rolls[0] == rolls[1]){
        temp = "It's a draw.";
        scoreArray[0]++, scoreArray[1]++;
    }
    else if(rolls[0] > rolls[1]){
        temp = "You win!";
        scoreArray[0]++;
    }
    else{
        temp = "Computer wins.";
        scoreArray[1]++;
    }
    output.innerHTML = temp;
    player.innerHTML = rolls[0];
    computer.innerHTML = rolls[1];
    score.innerHTML = `You: ${scoreArray[0]} -
    Computer: ${scoreArray[1]}`;
});

function roll(num){
    let rNumber = Math.floor(Math.random()*num) + 1;
    let n = 9855 + rNumber;
    let char = "&#"+n+";";
    return char;
}