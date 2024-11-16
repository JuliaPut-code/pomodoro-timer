// Базовый уровень
/*
let minutes = 25;
let seconds = 0;
let timerId;
let isRunning = false;

const pomodoroTime = document.querySelector("#pomodoro-time");
const startButton = document.querySelector("#start");

function updateTime() {
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    pomodoroTime.textContent = `${formattedMinutes}:${formattedSeconds}`;
    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        minutes--;
        seconds = 59;
    } else {
        clearInterval(timerId);
        minutes = 25;
        seconds = 0;
        updateTime();
        startButton.textContent = "start";
        isRunning = false;
    }
}

function toggleTimer() {
    if (isRunning) {
        clearInterval(timerId);
        startButton.textContent = "start";
    } else {
        timerId = setInterval(updateTime, 10);
        startButton.textContent = "stop";
    }
    isRunning = !isRunning
}

startButton.addEventListener("click", toggleTimer);
*/

// Продвинутый уровень
let minutes = 25;
let seconds = 0;
let timerId;
let isRunning = false;
let currentMode = "pomodoro";

const pomodoroTime = document.querySelector("#pomodoro-time");
const startButton = document.querySelector("#start");
const resetButton = document.querySelector("#reset");
const pomodoroButton = document.querySelector("#pomodoro");
const breakButton = document.querySelector("#break");

function updateTime() {
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    pomodoroTime.textContent = `${formattedMinutes}:${formattedSeconds}`;
    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        minutes--;
        seconds = 59;
    } else {
        clearInterval(timerId);
        if (currentMode === "pomodoro") {
            minutes = 25;
        } else {
            minutes = 5;
        }
        seconds = 0;
        updateTime();
        startButton.textContent = "start";
        isRunning = false;
    }
}

function switchMode(mode) {
    clearInterval(timerId);
    isRunning = false;
    currentMode = mode;
    if (currentMode === "pomodoro") {
        minutes = 25;
        seconds = 0;
    } else if (currentMode === "break") {
        minutes = 5;
        seconds = 0;
    }
    updateTime();
    startButton.textContent = "start";
}

function toggleTimer() {
    if (isRunning) {
        clearInterval(timerId);
        startButton.textContent = "start";
    } else {
        timerId = setInterval(updateTime, 10);
        startButton.textContent = "stop";
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timerId);
    isRunning = false;
    if (currentMode === "pomodoro") {
        minutes = 25;
        seconds = 0;
    } else {
        minutes = 5;
        seconds = 0;
    }
    updateTime();
    startButton.textContent = "start";
}

startButton.addEventListener("click", toggleTimer);
resetButton.addEventListener("click", resetTimer);
pomodoroButton.addEventListener("click", function () {
    switchMode("pomodoro");
});
breakButton.addEventListener("click", function () {
    switchMode("break");
});