const output = document.querySelector(".output");
const button = document.querySelector("button");
const myName = document.querySelector("input");
console.log(button);

button.addEventListener("click", showMessage);

function showMessage(){
    output.innerHTML = `<h2>Hello and welcome, ${myName.value}!</h2>`;
}