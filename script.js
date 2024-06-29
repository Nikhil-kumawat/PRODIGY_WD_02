let timer; // variable to hold the interval

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function startStopwatch() {
    clearInterval(timer);
    timer = setInterval(updateStopwatch, 10); // update every 10 milliseconds
}

function pauseStopwatch() {
    clearInterval(timer);
}

function resetStopwatch() {
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("laps").innerHTML = "";
}

function updateStopwatch() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    displayTime();
}

function displayTime() {
    let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    let displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    let displayMilliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    document.getElementById("display").innerText = `${displayMinutes}:${displaySeconds}:${displayMilliseconds}`;
}

function recordLap() {
    let currentTime = document.getElementById("display").innerText;
    let lapItem = document.createElement("li");
    lapItem.innerText = currentTime;
    document.getElementById("laps").appendChild(lapItem);
}
