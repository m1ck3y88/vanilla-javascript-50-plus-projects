const message = document.querySelector('.message');
const guess = document.querySelector('input');
const button = document.querySelector('button');
let inplay = false;
let scramble = "";
let scrambled = "";
let attempts = 0;
const myArray = ['javascript','website','coding' ,'document','programming'];

button.addEventListener('click', function(){
    if(!inplay){
        inplay = true;
        attempts = 0;
        button.innerHTML = 'Guess';
        guess.classList.toggle('hidden');
        scramble = createWord();
        scrambled = randomArray(scramble.split('')).join('');
        message.innerHTML = `${scrambled}`;
    }else{
        let tempGuess = guess.value;
        attempts++;
        if(tempGuess === scramble){
            inplay = false;
            message.innerHTML = `Correct! It was "${scramble}". It took you ${attempts} guesses.`;
            button.innerHTML = 'Start';
            guess.classList.toggle('hidden');
        }else{
            message.innerHTML = `That was incorrect. Try again:<br>${scrambled} | Attempts: ${attempts}`;
        }
    }
});

function createWord(){
    let randomIndex = Math.floor(Math.random()* myArray.length);
    let tempWord = myArray[randomIndex];
    return tempWord;
}

function randomArray(arr){
    for(let i = arr.length - 1; i > 0; i--){
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}