const animals = document.querySelectorAll(".animal");

for(let i = 0; i < animals.length; i++){
    animals[i].addEventListener("click", function(){
        let animal = this.innerText;
        let lcAnimal = animal.toLowerCase();
        // makeSound(lcAnimal);
        // addStyle(lcAnimal);
        playIt(lcAnimal);
    });
}

function playIt(name){
    let activeEl = document.querySelector("." + name);
    let sound1 = new Audio("sound/" + name + ".mp3");
    sound1.play();
    activeEl.classList.add("active");
    setTimeout(function(){
        activeEl.classList.remove("active");
    }, 200);
}

// function addStyle(name){
    // let activeEl = document.querySelector("." + name);
    // activeEl.classList.add("active");
    // setTimeout(function(){
    //     activeEl.classList.remove("active");
    // }, 200);
// }

// function makeSound(name){
    
//     switch(name){
//         case "lion":
//             let sound1 = new Audio("sound/lion.mp3");
//             sound1.play();
//             break;
//         case "cougar":
//             let sound2 = new Audio("sound/cougar.mp3");
//             sound2.play();
//             break;
//         case "dog":
//             let sound3 = new Audio("sound/dog.mp3");
//             sound3.play();
//             break;
//     }
// }