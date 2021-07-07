const answerArray = ["It will work","Maybe, maybe not","Probably not","Highly likely","I don't know"]
const message  = document.querySelector(".message");
const question = document.querySelector("input");
const button   = document.querySelector("button");

button.addEventListener("click", function(){
    // console.log(question.value);
    let res = Math.floor(Math.random()*answerArray.length);
    // console.log(answerArray[res]);
    message.innerHTML = `<strong>${answerArray[res]}.</strong>`;

});