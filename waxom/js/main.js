

// Event after click on Burger
const body = document.querySelector('body');
// const burger = document.querySelector('.header-burger');
// const menu = document.querySelector('.menu');

// burger.addEventListener('click', ()=>{
//     burger.classList.toggle('active');
//     menu.classList.toggle('active');
//     body.classList.toggle('lock');
// });


// Slider

slider('.main', '.slide');
slider('.resent', '.slide');


function slider(section, div){
const slides = document.querySelectorAll(`${section} ${div}`);
const indicator = document.querySelector(`${section} .indicator`);
const prev = document.querySelector(`${section} .prev`);
const next = document.querySelector(`${section} .next`);

let index = 0;

prev.addEventListener('click', function(){
    prevSlide();
    updateCircleIndicator();
    // resetTimer();
});
next.addEventListener('click', function(){
    nextSlide();
    updateCircleIndicator();
    // resetTimer();
});

circleIndicator(slides, indicator);
function indicateSlide(){
    let indicatorDiv = document.querySelectorAll('.indicator div');
    for(let i = 0; i < indicatorDiv.length; i++){
        indicatorDiv[i].addEventListener('click', 
        function(){
            index = indicatorDiv[i].id;
            changeSlide();
            updateCircleIndicator();
            // resetTimer();
        });
    }
}
indicateSlide();

function updateCircleIndicator(){
    for(let i = 0; i < indicator.children.length; i++ ){
        indicator.children[i].classList.remove('active');
    }
    indicator.children[index].classList.add('active');
};

function prevSlide(){
    if(index == 0){
        index = slides.length-1;
    }else{
        index--;
    }
    changeSlide();
}

function nextSlide(){
    if(index == slides.length-1){
        index = 0;
    }else{
        index++;
    }
    changeSlide();
}

function changeSlide(){
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}

// function resetTimer(){
//     clearInterval(timer);
//     timer = setInterval(autoPlay,4000);
// }

// function autoPlay(){
//     nextSlide();
//     updateCircleIndicator();

// }
// let timer = setInterval(autoPlay,4000);
}

// create circle indicators
function circleIndicator(elementForLnegth, elementForAppend){
    for(let i = 0; i < elementForLnegth.length; i++){
        const div = document.createElement('div');
        div.id = i;
        if(i == 0){
            div.className = "active";
        }
        elementForAppend.appendChild(div);
    }
};
// End slider

// Event after click on Burger
const burger = document.querySelector('.burger');
const fullNav = document.querySelector('.full-nav');
const navClose = document.querySelector('.nav-close');


burger.addEventListener('click', ()=>{
    fullNav.classList.add('open');
    body.classList.add('lock');
});

navClose.addEventListener('click', ()=>{
    fullNav.classList.remove('open');
    body.classList.remove('lock');
});


// video play
let videoDescription = document.querySelector(".video-description");
let videoWrokSpace = document.querySelector('.videoWrokSpace');

function playVideo() {
    if (videoWrokSpace.paused) {
        videoWrokSpace.play();
        videoDescription.style.opacity = ("0");
    } else {
        videoWrokSpace.pause();
        videoDescription.style.opacity = ("1");
    }
  }
// End video play


// counters
const counters = document.querySelectorAll('.counter');
const speed = 200;
const positionCounters =  document.querySelector('.counters').getBoundingClientRect().top;


window.addEventListener('scroll', function onScroll(){


    if(window.pageYOffset > positionCounters) {
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');        
                    const count = +counter.innerText;
            
                    const inc = Math.ceil(target / speed);
                    if(count < target){
                        counter.innerText = count + inc;
                        setTimeout(updateCount, 50);
                    }else{
                        counter.innerText = target;
                    }
                }
                updateCount();
            });

        }

    
});

// counters.forEach(counter => {
//     const updateCount = () => {
//         const target = +counter.getAttribute('data-target');        
//         const count = +counter.innerText;

//         const inc = Math.ceil(target / speed);
//         if(count < target){
//             counter.innerText = count + inc;
//             setTimeout(updateCount, 1);
//         }else{
//             counter.innerText = target;
//         }
//     }
//     updateCount();
// });

// End counters

  






