window.onload = function () {

var seconds = 00;
var tenths = 00;
var minutes = 00;
var hours = 00;
var secondsHTML = document.getElementById("seconds");
var tenthsHTML = document.getElementById("tens");
var minutesHTML = document.getElementById("minutes");
var hoursHTML = document.getElementById("hours");
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset"); 
var alreadyStarted = 1; 
    
startButton.onclick = function () {
    if(Boolean(alreadyStarted)){
        begin = setInterval(function(){ startTimer() }, 10);
        alreadyStarted = -0;
    }
}

function startTimer() {
    tenths++;
    
    
    if( tenths > 99) {
            seconds++;
            secondsHTML.innerHTML = seconds;
            tenths = 00;
            tenthsHTML.innerHTML = tenths;
        }  
    
    if( seconds >= 60) {
            minutes++;
            minutesHTML.innerHTML = minutes;
            seconds = 00;
            secondsHTML.innerHTML ="00";
        } 
    
        if( minutes >= 60) {
            hours++;
            hoursHTML.innerHTML = hours;
            minutes = 00;
            minutesHTML.innerHTML ="00";
        } 
    
        if (tenths <= 9){
            tenthsHTML.innerHTML = ("0" + tenths);
            tenths = "0" + tenths;
        } else { 
            tenthsHTML.innerHTML = tenths;
        }
    
    tenthsHTML.innerHTML = tenths;    
}
    
stopButton.onclick = function () {
    console.log("hello1");
    clearInterval(begin);
    console.log("hello");
    alreadyStarted = 1;
}

resetButton.onclick = function () {
    clearInterval(begin);
    hoursHTML.innerHTML = "00";
    minutesHTML.innerHTML = "00"; 
    tenthsHTML.innerHTML = "00"; 
    secondsHTML.innerHTML = "00";
    seconds = 00;
    tenths = 00;
    minutes = 00;
    hours = 00;
    alreadyStarted = 1;
}
    
        
}

function drag(event) { 
    event.dataTransfer.setData("Text", event.target.id); 
} 

function permitDrop(event) { 
    event.preventDefault(); 
}

function drop(event) { 
    event.preventDefault(); 
    var data=event.dataTransfer.getData("Text"); 
    event.target.appendChild(document.getElementById(data));
}