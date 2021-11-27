var hoursPara = document.getElementById("hours");
var minutesPara = document.getElementById("minutes");
var secondsPara = document.getElementById("sec");
var msecPara = document.getElementById("msec");

var hours = 0;
var min = 0;
var sec = 0;
var msec = 0;

var interval;

function timer() {
    msec++
    msecPara.innerHTML=msec;
    if(msec == 100){
        ++sec;
        secondsPara.innerHTML=sec;
        msec = 0;
    }
    else if(sec==60){
        min++;
        minutesPara.innerHTML=min;
        sec = 0;
    }
    else if(min == 60){
        hours++;
        hoursPara.innerHTML=hours;
        min = 0;
        sec = 0;
    }
}

function play() {
    var playBtn = document.getElementById("playBtn");
    interval = setInterval(timer, 10);
    playBtn.disabled=true;
}

function pause() {
    clearInterval(interval);
    var playBtn = document.getElementById("playBtn");
    playBtn.disabled=false;
}

function reset() {
    clearInterval(interval);
    msec = 0;
    sec = 0;
    min = 0;
    hours = 0;
    msecPara.innerHTML = "00";
    secondsPara.innerHTML = "00";
    minutesPara.innerHTML = "00";
    hoursPara.innerHTML = "00";
    var playBtn = document.getElementById("playBtn");
    playBtn.disabled=false;
}