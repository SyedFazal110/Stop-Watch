let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

let interval;
let second = 0;

function startWatch(){
    console.log("Watch Started")
    interval =  setInterval (function (){
        second += 1
        seconds.innerHTML = second;
    } , 1000)

}

function stopWatch(){
    console.log("Watch Stoped")
    clearInterval(interval)
}

function resetWatch(){
    console.log("Watch Reset")
}