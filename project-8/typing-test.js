const wording  = ["Do you like programming in the number 1 programming language (JavaScript), as much as I do?","I hope you are having fun with this game; this is a simple game that anyone who loves to code can easily make.","The source code of this project is included, so you can create your own version of this challenge."];
let startTime;
let endTime;
const message  = document.querySelector(".message");
const playText = document.querySelector("textarea");
const button   = document.querySelector("button");

button.addEventListener("click", function(){
    if(this.innerText == "Start"){
        playText.disabled = false;
        playGame();
    }else if(this.innerText == "Done"){
        playText.disabled = true;
        button.innerText = "Start";
        endPlay();
    }
});

function wordCounter(strWords){
    let response = strWords.split(" ").length;
    return response;
}

function compareWords(str1,str2){
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    words1.forEach(function(iterm){
        console.log(item);
    });
}

function endPlay(){
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);
    console.log(totalTime);
    let str = playText.value;
    let wordCount = wordCounter(str);
    let speed = Math.round((wordCount/totalTime)*60);
    let finalMessage = "You typed at " + speed + " words per minute.";
    finalMessage += "<br>" + compareWords(message.innerText, str);
    message.innerHTML = finalMessage;
    //count words
    //divide by total time words/per minute
    //output final message to player
}

function wordCounter(strWords){
    let response = strWords.split(" ").length;
    return response;
}

function compareWords(str1,str2){
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;
    words1.forEach(function(item, index){
        if(item == words2[index]){
            cnt++
        }
    });
    return ("You got " + cnt + " correct out of " +words1.length + " words.");
}



function playGame(){
    let randomNum = Math.floor(Math.random()*wording.length);
    message.innerText = wording[randomNum];
    let date = new Date();
    startTime = date.getTime();
    button.innerText = "Done";
    console.log(randomNum);
}