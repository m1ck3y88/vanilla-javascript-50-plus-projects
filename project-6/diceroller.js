const button   = document.querySelector("button");
const player   = document.querySelector("#player");
const computer = document.querySelector("#computer");
const output   = document.querySelector(".output");
const score    = document.querySelector(".score");
let scoreArray = [0,0];
const dice = [[5], [1,9], [1,5,9], [1,3,7,9],
 [1,3,5,7,9], [1,3,4,6,7,9]];

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
    updateOutput(player, rolls[0]);
    updateOutput(computer, rolls[1]);
    output.innerHTML = temp;
    score.innerHTML = `You: ${scoreArray[0]} -
    Computer: ${scoreArray[1]}`;

});

function updateOutput(el, num){
    let holder = builder(num);
    console.log(output.children[0]);
    if(el.children[0]) el.children[0].remove();
    el.appendChild(holder);
}

function builder(num){
    let div = document.createElement("div");
    let dieArray = dice[num -1];
    console.log(dieArray);
    for(let i = 1; i < 10; i++){
        let div2 = document.createElement("div");
        div2.setAttribute("class", "dot");
        if(dieArray.includes(i)){
            div2.classList.add("black");
        }
        div.appendChild(div2);
    }
    div.setAttribute("class", "dicer");
    return div;
}

function roll(num){
    let rNumber = Math.floor(Math.random()*num) + 1;
    // let n = 9855 + rNumber;
    // let char = "&#"+n+";";
    // return char;
    return rNumber;
}