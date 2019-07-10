
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
//let button = document.querySelectorAll('button');
//console.log(button);
//
//button[0].addEventListener('mousemove', rotate);
//
//
//function rotate(event){
//    this.querySelector
//    console.log("нажатие");
//}




    let button = document.getElementById('keys');
    let audio = document.querySelector('audio');
   
    button.onclick = function (event){
    
//        if (!event.target.classList.contains('key')) return;
//        button.getElementsByClassName('.key');
        
//        console.log("hello");
        audio.play();
    
    }
        



//function playAudio(event){
//    let x = event.target.classList.contains;
//    if(event.target.classList.contains('1')) return;
//    event.target.play();
//    
//    }





