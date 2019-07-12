let pianoButtons = document.getElementById('keys');
let audio = document.querySelectorAll('audio');
let listKeyPiano = document.querySelectorAll('.key');

pianoButtons.addEventListener('click', playPiano);
function playPiano(event){
    if(event.target.classList.contains("key") ){
        let x = Number(event.target.id);
        listKeyPiano[x-1].classList.add('animation');
        audio[x-1].currentTime = 0;
        audio[x-1].play();
    }
}


let keyBoards = [65, 83, 68, 70, 71, 72, 74, 75];
addEventListener('keydown', playing);




function playing(event){
    for(let i = 0; i <= keyBoards.length; i++){
        let keyBoarDown = event.keyCode;
        const repeat = event.repeat;
        if (repeat === true) return ;
        if(keyBoarDown == keyBoards[i-1]){
                
                listKeyPiano[i-1].classList.add('animation');
                audio[i-1].currentTime = 0;
                audio[i-1].play();
                break;
        }
    }
}






function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("animation");
}
  listKeyPiano.forEach(key => key.addEventListener("transitionend",
   removeTransition));