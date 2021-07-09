const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
const message = document.querySelector(".message")
let attempts = 0;
let gamePlay = false;
button.addEventListener("click", function(){
    if(!gamePlay){
        gamePlay = true;
        attempts = 0;
        gameArea.innerHTML = "";
        maker();
        message.innerHTML = "<strong>Guess the Combo</strong";
        button.innerText = "Check Combo";
    }else{
        // console.log("checker");
        attempts++;
        message.innerHTML = `<strong>Guesses: ${attempts}</strong>`;
        const numbers = document.querySelectorAll(".numb");
        let winCondition = 0;
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i].value == numbers[i].correct){
                numbers[i].style.backgroundColor = "green";
                numbers[i].style.color = "white";
                console.log("Match");
                winCondition++;
            }else{
                let color = (numbers[i].value < numbers[i].correct)? "gold" : "red";
                numbers[i].style.backgroundColor = color;
                numbers[i].style.color = "white";
                console.log("No Match");
            }
            if(winCondition == numbers.length){
                gameEnd();
            }
        }
    }
    
});


function gameEnd(){
    message.innerHTML = `<strong>You solved the combo in ${attempts} guesses.</strong>`;
    gamePlay = false;
    button.innerHTML = "Restart Game";
}

function maker(){
    for(let i = 0; i < 4; i++){
    let el = document.createElement("input");
    el.setAttribute("type","number");
    el.max = 9;
    el.min = 0;
    el.size = 1;
    el.style.width = "50px";
    el.classList.add("numb");
    el.order = i;
    el.correct = Math.floor(Math.random()* 10);
    el.value = 0;
    gameArea.appendChild(el);
    }
    
}