
//
//const container = document.querySelectorAll(".key");
//console.log(container);
//function playNote(e){
//    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//         
//    if(!key) return ;
//    key.classList.add("playing");
//    
//    audio.currentTime = 0;
//    audio.play();
//}


//function playAudio() {
//    let musick = document.querySelectorAll("audio");
//    let botton = document.querySelectorAll("button");
//    for(let i = 0; i < botton.length; i++){
//        botton[i].addEventListener('click', event => {
//            let audio = document.querySelector(`musick[i]`);
//            musick[i].play();
//        });
//    }
//}
//
//
//
//function removeTransition(e) {
//    
//    this.classList.remove("playing");
//  }
//  container.forEach(key => key.addEventListener("transitionend",
//   removeTransition));
//
//document.addEventListener('keydown', playNote);
//
//
//


//function serchClick(){

    let pianoButtons = document.getElementById('keys');
    let audio = document.querySelectorAll('audio');
    pianoButtons.addEventListener('click', playPiano);


    
//}

    
    function playPiano(event){
        if(event.target.classList.contains("key") ){
            let x = Number(event.target.id);

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






