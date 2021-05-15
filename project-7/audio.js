var bark = new Audio('sound/bark.mp3');
bark.addEventListener('loadeddata', function(){
    let duration = bark.duration;
    let muted = bark.muted;
    console.log(duration, muted);
})