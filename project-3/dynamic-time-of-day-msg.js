const output = document.querySelector(".output");
const button = document.querySelector("button");

button.addEventListener("click", showOutput);

function showOutput(){
    const date  = new Date();
    let current = date.getHours();
    let message;
    
    if(current > 16){
        message = "It's evening";
        output.style.backgroundColor = "black";
    } else if(current >= 12){
        message = "It's afternoon";
        output.style.backgroundColor = "orange";
    } else if(current >= 0){
        message = "It's morning";
        output.style.backgroundColor = "blue";
    } else {
        message = "Oops! Something went wrong... Please try again.";
        output.style.backgroundColor = "red";
    }

    output.innerHTML = `<h1>${message}</h1>`;
}