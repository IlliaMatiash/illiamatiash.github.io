function startTimer(howMuchTimes,timeInterval, circles) {
    this.howMuchTimes = howMuchTimes;
    this.timeInterval = timeInterval;
    this.circles = circles;
}


let firstTimer = new startTimer(30, 1, document.querySelector('.progress-ring__circle'));
// <--------- animation for first clock-------->
let howMuchTime =  firstTimer.howMuchTimes;
let interval = firstTimer.timeInterval;  
const circle = firstTimer.circles;
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDashoffset = circumference;
circle.style.strokeDasharray = `${circumference} ${circumference}`;
let percent = 0;
//<--------- animation for first clock-------->

let secondTimer = new startTimer(6000, 2, document.querySelector('.progress-ring__circle__second'));
// <--------- animation for second clock-------->
let secondHowMuchTime = secondTimer.howMuchTimes;
let secondInterval = secondTimer.timeInterval;
const secondCircle = secondTimer.circles;
const secondRadius = secondCircle.r.baseVal.value;
const secondCircumference = 2 * Math.PI * secondRadius;
secondCircle.style.strokeDashoffset = secondCircumference;
secondCircle.style.strokeDasharray = `${secondCircumference} ${secondCircumference}`;
let secondPercent = 0;
// <--------- animation for second clock-------->

let status_sw1 = 0;
let status_sw2 = 0;


let time_sw1 = 0;
let time_sw2 = 0;


let startBtn1 = document.getElementById("start1");
let startBtn2 = document.getElementById("start2");

let timerLabel1 = document.getElementById("timerLabel1");
let timerLabel2 = document.getElementById("timerLabel2");

let moveAllBtn = document.getElementById("moveAllBtn");

function moveAll(obj) {
    if (obj.value == 'START') {
        status_sw1 = 1;
        status_sw2 = 1;
        timer1();
        timer2();
//        document.getElementsByClassName(first_timer).innerText = STOP;
        startBtn1.value = "STOP";
//        
        startBtn2.value = "STOP";
        obj.value = "STOP";
    } else {
        status_sw1 = 0;
        status_sw2 = 0;
        startBtn1.value = "START";
        startBtn2.value = "START";
        obj.value = "START";
    }
}


function start_stop(obj) {
    let stopwatch = obj.id;
    if (stopwatch == 'start1') {
        if (status_sw1 == 0) {
            status_sw1 = 1;
            timer1();
        } else {
            status_sw1 = 0;
        }
    }

    if (stopwatch == 'start2') {
        if (status_sw2 == 0) {
            status_sw2 = 1;
            timer2();
        } else {
            status_sw2 = 0;
        }
    }

    if (obj.value == "START") {
        obj.value = "STOP";
    } else {
        obj.value = "START";
    }
}

function timer1() {
    if(howMuchTime <= 0){
        status_sw1 = 0;
    }

    if (status_sw1 == 1) {
        percent = setTimeout(timer1, 1000 * interval);
        howMuchTime-= interval;
        let minut = Math.floor(howMuchTime/60);
        let second = (howMuchTime) - minut*60 ;
        timerLabel1.innerHTML = minut + ":" + second;
        let offset = (circumference - (howMuchTime) / (firstTimer.howMuchTimes) * circumference);
        circle.style.strokeDashoffset = offset;  
    }
    checkAllBtn();
}

function timer2() {
    if(secondHowMuchTime <= 0){
        status_sw2 = 0;
    }
    if (status_sw2 == 1) {
        secondPercent = setTimeout(timer2, 1000 * secondInterval);
        secondHowMuchTime-= secondInterval;
        time_sw2++;
        let minut = Math.floor(secondHowMuchTime/60);
        let second = (secondHowMuchTime) - minut*60 ;
        timerLabel2.innerHTML = minut + ":" + second;
        let secondOffset = (secondCircumference - (secondHowMuchTime) / (secondTimer.howMuchTimes) * secondCircumference);
        secondCircle.style.strokeDashoffset = secondOffset;
    }
    checkAllBtn();
}
function checkAllBtn() {
    if (status_sw1 == 1 || status_sw2 == 1) {
        moveAllBtn.value = "STOP";
    }

    if (status_sw1 == 0 && status_sw2 == 0) {
        moveAllBtn.value = "START";
    }
}



         














//const circle = document.querySelector('.progress-ring__circle');
//
//const radius = circle.r.baseVal.value;
//
//const circumference = 2 * Math.PI * radius;
//
//let percent;
//
//let second = 60;
//
//let minut = 0.1 * second;
//
//let timeReset = 1;
//
//circle.style.strokeDasharray = `${circumference} ${circumference}`;
//
//circle.style.strokeDashoffset = circumference; 
//
//
//document.querySelector('.start').onclick = function() {
//    window.clearTimeout(percent);
//    percent = 0;
//    setProgress();
//}
//
//function setProgress(){
//    
//    percent = setTimeout("setProgress()", timeReset*1000);
//    
//    console.log(percent);
//    if(minut - percent * timeReset <= 0){
//        percent = 0;
//        clearTimeout();
//    }
//    let offset = (circumference - (percent * timeReset) / minut * circumference);
//    circle.style.strokeDashoffset = -offset;
//    document.querySelector('.table').innerHTML = minut - (percent * timeReset) + " second";
//    document.querySelector('.stop').onclick = function() {
//        clearTimeout(percent);
//    }
//}
//
//
//
//
//
////////////////////////////////////////////////////
////timeFrom - час з якого йде відрахунок, задаю в хвилинах
////timeInterval - інтервал
//function setTimer(timeFrom, timeInterval, circles){
//    this.timeFrom = timeFrom;
//    this.timeInterval = timeInterval;
//    this.circles = circles;
//    let minut = this.timeFrom * 60;
//    let interval = this.timeInterval;
//    const circle = this.circles;
//    const radius = circle.r.baseVal.value;
//    const circumference = 2 * Math.PI * radius;
//    circle.style.strokeDasharray = `${circumference} ${circumference}`;
//    circle.style.strokeDashoffset = circumference;
//}
//
//let firstTimer = new setTimer(0.1, 1, document.querySelector('.progress-ring__circle'));
//let secondTimer = new setTimer(0.5, 2, document.querySelector('.progress-ring__circle__two') )
//
//let percent;
////let minut = firstTimer.timeFrom * 60;
////let interval = firstTimer.timeInterval;
////const circle = firstTimer.circles;
////const radius = circle.r.baseVal.value;
////const circumference = 2 * Math.PI * radius;
////circle.style.strokeDasharray = `${circumference} ${circumference}`;
////
////circle.style.strokeDashoffset = circumference; 
//document.querySelector('.start').onclick = function() {
//    
//    setProgress(firstTimer);
//
//}
//
//
//function setProgress(element){
//   percent = setTimeout(setProgress, 1000);
//    
//    if(element.minut - percent * element.interval <= 0){
//        clearTimeout(percent);
//    }
//    let offset = (element.circumference - (element.percent * element.interval) / element.minut * element.circumference);
//    console.log(offset);
//    
//    element.circle.style.strokeDashoffset= -offset;
//    document.querySelector('.table').innerHTML = element.minut - (element.percent * element.interval) + " second";
//    document.querySelector('.stop').onclick = function() {
//        clearTimeout(percent);
//    
//    }
//}
//
//
//
/////////////////////////////
//
////function startTimer(someTime,timeInterval) {
////    this.someTime = someTime;
////    this.timeInterval = timeInterval;
////}
////
////let firstTimer = new startTimer(0.1, 1);
////
////
////document.querySelector('.start').onclick = function() {
////    
////    const circle = document.querySelector('.progress-ring__circle');
////
////    const radius = circle.r.baseVal.value;
////
////    const circumference = 2 * Math.PI * radius;
////
////    let percent;
////
//////    let second = 60;
////
////    let minut = firstTimer.someTime * 60;
////    
////    let intervals = firstTimer.timeInterval;
////    
////    circle.style.strokeDasharray = `${circumference} ${circumference}`;
////
////    circle.style.strokeDashoffset = circumference;
////    setProgress(intervals);
////    }
////
////
////
////
////function setProgress(inteval){
////    console.log(interval);
////    percent = setTimeout("setProgress()", interval * 1000);
////    console.log(percent);
////    if(minut - percent * interval <= 0){
////        clearTimeout(percent);
////    }
////    let offset = (circumference - (percent * interval) / minut * circumference);
////    circle.style.strokeDashoffset = -offset;
////    document.querySelector('.table').innerHTML = minut - (percent * interval) + " second";
////    document.querySelector('.stop').onclick = function() {
////        clearTimeout(percent);
////    }
////}
//
//
//
