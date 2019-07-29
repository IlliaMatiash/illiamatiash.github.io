    class someTimer{
        constructor(howMuchTimes, constTime, btn, interval, tablo, time_status, circles, moveAllBtn){
        this.howMuchTimes = howMuchTimes;
        this.btn = btn;
        this.interval = interval;
        this.tablo = tablo;
        this.time_status = time_status;
        this.circles = circles;
        this.constTime = constTime;
        this.moveAllBtn = moveAllBtn;
        this.btn.addEventListener("click", this.onClick.bind(this));
    }
    
    onClick(event){
        this.start_stop();
}
    start_stop() {
        if (this.time_status.value == 'START') {
                this.time_status.value = 'STOP';
                this.timer();
            } else {
                this.time_status.value = 'START';
              }
    }
        
    timer(){
        if (this.time_status.value == 'STOP') {
            this.howMuchTimes-= this.interval;
            setTimeout(() => {
                if(this.howMuchTimes > 0) {
                    this.timer();
            }}, 1000 * this.interval);
            this.some();
        }
    }
    some(){
        let minut = Math.floor(this.howMuchTimes/60);
        let second = (this.howMuchTimes) - minut * 60 ;
        const radius = this.circles.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        this.circles.style.strokeDashoffset = circumference;
        this.circles.style.strokeDasharray = `${circumference} ${circumference}`;
        let offset = (circumference - (this.howMuchTimes) / (this.constTime) * circumference);
        this.circles.style.strokeDashoffset = offset;
        this.tablo.innerHTML = minut + ":" + second;
    }
}


//let firstTimer = new someTimer(30, 30, document.querySelector(".first_timer"), 1, document.getElementById("timerLabel1"), document.getElementById("start1"), document.querySelector('.progress-ring__circle'), document.querySelectorAll(".btn"));
//let secondTimer = new someTimer(40, 40, document.querySelector(".second_timer"), 2, document.getElementById("timerLabel2"), document.getElementById("start2"), document.querySelector('.progress-ring__circle__second'), document.querySelectorAll(".btn"));

function $(elm) {
  return document.querySelector(elm);
}

let firstTimer = new someTimer(30, 30, $(".first_timer"), 1, $("#timerLabel1"), $("#start1"), $('.progress-ring__circle'), document.querySelectorAll(".btn"));
let secondTimer = new someTimer(40, 40, $(".second_timer"), 2, $("#timerLabel2"), $("#start2"), $('.progress-ring__circle__second'), document.querySelectorAll(".btn"));

firstTimer.start_stop();
secondTimer.start_stop();






































//function startTimer(howMuchTimes,timeInterval, circles) {
//    this.howMuchTimes = howMuchTimes;
//    this.timeInterval = timeInterval;
//    this.circles = circles;
//}
//let firstTimer = new startTimer(30, 1, document.querySelector('.progress-ring__circle'));
////<--------- animation for first clock-------->
//let howMuchTime =  firstTimer.howMuchTimes;
//let interval = firstTimer.timeInterval;  
//let percent = 0;
////<--------- animation for first clock-------->
//let secondTimer = new startTimer(6000, 2, document.querySelector('.progress-ring__circle__second'));
//// <--------- animation for second clock-------->
//let secondHowMuchTime = secondTimer.howMuchTimes;
//let secondInterval = secondTimer.timeInterval;
//let secondPercent = 0;
//// <--------- animation for second clock-------->
//
//let status_sw1 = 0;
//let status_sw2 = 0;
//
//let time_sw1 = firstTimer.howMuchTimes;
//let time_sw2 = secondTimer.howMuchTimes;;
//
//let startBtn1 = document.getElementById("start1");
//let startBtn2 = document.getElementById("start2");
//
//let timerLabel1 = document.getElementById("timerLabel1");
//let timerLabel2 = document.getElementById("timerLabel2");
//
//let moveAllBtn = document.getElementById("moveAllBtn");
//
//function moveAll(obj) {
//    if (obj.value == 'START') {
//        status_sw1 = 1;
//        status_sw2 = 1;
//        timer1();
//        timer2();
//        startBtn1.value = "STOP";
//
//        startBtn2.value = "STOP";
//        obj.value = "STOP";
//    } else {
//        status_sw1 = 0;
//        status_sw2 = 0;
//        startBtn1.value = "START";
//        startBtn2.value = "START";
//        obj.value = "START";
//    }
//}
//
//function start_stop(obj) {
//    let stopwatch = obj.id;
//    if (stopwatch == 'start1') {
//        if (status_sw1 == 0) {
//            status_sw1 = 1;
//
//            timer1();
//        } else {
//            status_sw1 = 0;
//        }
//    }
//
//    if (stopwatch == 'start2') {
//        if (status_sw2 == 0) {
//            status_sw2 = 1;
//            timer2();
//        } else {
//            status_sw2 = 0;
//        }
//    }
//
//    if (obj.value == "START") {
//        obj.value = "STOP";
//    } else {
//        obj.value = "START";
//    }
//}
//
//function timer1() {
//    if( time_sw1 <= 0){
//        status_sw1 = 0;
//    }
//    if (status_sw1 == 1) {
//        percent = setTimeout(timer1, 1000 * interval);
//        some(firstTimer, timerLabel1,howMuchTime);
//        time_sw1--;
//    }
//    checkAllBtn();
//}
//
//function timer2() {
//    if( time_sw2 <= 0){
//        status_sw2 = 0;
//    }
//    if (status_sw2 == 1) {
//        secondPercent = setTimeout(timer2, 1000 * secondInterval);
//        some(secondTimer, timerLabel2, secondHowMuchTime);
//    }
//    checkAllBtn();
//}
//
//function some(val, timerLabel, times){
//        if( val.howMuchTimes <= 1){
//            status = 0;
//        }
//        const radius = val.circles.r.baseVal.value;
//        const circumference = 2 * Math.PI * radius;
//        val.circles.style.strokeDashoffset = circumference;
//        val.circles.style.strokeDasharray = `${circumference} ${circumference}`;
//        val.howMuchTimes-= val.timeInterval;
//        let minut = Math.floor(val.howMuchTimes/60);
//        let second = (val.howMuchTimes) - minut * 60 ;
//        timerLabel.innerHTML = minut + ":" + second;
//        let offset = (circumference - (val.howMuchTimes) / (times) * circumference);
//        val.circles.style.strokeDashoffset = offset;
//}
//
//function checkAllBtn() {
//    if (status_sw1 == 1 || status_sw2 == 1) {
//        moveAllBtn.value = "STOP";
//    }
//
//    if (status_sw1 == 0 && status_sw2 == 0) {
//        moveAllBtn.value = "START";
//    }
//}


