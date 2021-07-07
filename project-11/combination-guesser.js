const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
let gamePlay = false;
button.addEventListener("click", function(){
    if(!gamePlay){
        gamePlay = true;
        maker();
        button.innerText = "Check Combo";
    }else{
        console.log("checker");
    }
    
});

function maker(){
    for(let i = 0; i < 4; i++){
    let el = document.createElement("input");
    el.setAttribute("type","number");
    el.max = 9;
    el.min = 0;
    el.size = 1;
    el.style.width = "50px";
    el.classList.add("numb");
    el.value = 0;
    el.order = i;
    console.log(el);
    gameArea.appendChild(el);
    }
    
}