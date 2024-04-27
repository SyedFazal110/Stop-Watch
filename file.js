let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let startbtn = document.querySelector("#startbtn")


let interval;
let second = 0;
let minute = 0;
let hour = 0;


function startWatch(){
    console.log("Watch Started")
    interval =  setInterval (function (){
        second += 1
        if(second === 60 ){
            second = 0
            minute += 1
            if(minute === 60){
                minute = 0;
                hour += 1
                if (hour === 24){
                    hour = 0
                }
            }
        }
        seconds.innerHTML = second;
        minutes.innerHTML = minute;
        hours.innerHTML = hour;
    } , 1000)
    startbtn.disabled = true;

}

function stopWatch(){
    console.log("Watch Stoped")
    clearInterval(interval)
    startbtn.disabled = false;
}

function resetWatch(){
    console.log("Watch Reset")
    clearInterval(interval)
    startbtn.disabled = false;
    second = 0;
    minute = 0;
    hour = 0;

    seconds.innerHTML = second;
    minutes.innerHTML = minute;
    hours.innerHTML = hour;
}