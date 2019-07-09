
const container = document.querySelectorAll(".key");

function playNote(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
         
    if(!key) return ;
    key.classList.add("playing");
    
    audio.currentTime = 0;
    audio.play();
}


function playAudio() {
    let musick = document.querySelectorAll("audio");
    let botton = document.querySelectorAll("button");
    for(let i = 0; i < botton.length; i++){
        botton[i].addEventListener('click', event => {
            let audio = document.querySelector(`musick[i]`);
            musick[i].play();
        });
    }
}







function removeTransition(e) {
    
    this.classList.remove("playing");
  }
  container.forEach(key => key.addEventListener("transitionend",
   removeTransition));

document.addEventListener('keydown', playNote);



