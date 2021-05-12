const button = document.querySelector("button");
const output = document.querySelector(".output");
const cost   = document.querySelector("input");
console.log(button);
button.addEventListener("click", function(){
    console.log(cost.value *0.15);
    let tip    = (cost.value*0.15).toFixed(2);
    let templt = `<h2>You should tip &dollar;${tip} on &dollar;${cost.value}</h2>`;
    output.innerHTML = templt;
});