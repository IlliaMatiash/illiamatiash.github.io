

let pianoButtons = document.getElementById('keys');
let audio = document.querySelectorAll('audio');
pianoButtons.addEventListener('click', playPiano);
function playPiano(event){
    if(event.target.classList.contains("key") ){
        let x = Number(event.target.id);
        audio[x-1].currentTime = 0;
        audio[x-1].play();
    }
}


let keyBoards = [65, 83, 68, 70, 71, 72, 74, 75];
addEventListener('keydown', playing);

function playing(event){
    let keyBoard = event.keyCode;
    for(let i = 0; i <= keyBoards.length; i++){
        if(keyBoard == keyBoards[i-1]){
            audio[i-1].currentTime = 0;
            audio[i-1].play();
            break;
        }
    }
}


    


 


        







//function playAudio(event){
//    let x = event.target.classList.contains;
//    if(event.target.classList.contains('1')) return;
//    event.target.play();
//    
//    }

//let buttonPiano = document.querySelectorAll('.key');
//console.log(buttonPiano);

//buttonPiano[0].addEventListener('mousemove', rotate);
//
//
//function rotate(event){
//    const this.
//}






