const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const milliseconds = document.getElementById("milli-sec");

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const lapBtn = document.getElementById("lap");
const resetBtn = document.getElementById("reset");

const lapContainer = document.getElementById("lap-container");

let minute = 0;
let second = 0;
let millisecond = 0;
let isRunning = false;
let interval;

function updateTime() {
  millisecond++;

  if (millisecond === 100) {
    millisecond = 0;
    second++;
  } else if (second === 60) {
    second = 0;
    minute++;
  }

  minutes.innerText = minute < 10 ? "0" + minute + " : " : minute + " : ";
  seconds.innerText = second < 10 ? "0" + second + " : " : second + " : ";
  milliseconds.innerText = millisecond;
}

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    interval = setInterval(updateTime, 10);
    isRunning = true;
  }
});

function stop() {
  clearInterval(interval);
  isRunning = false;
}

stopBtn.addEventListener("click", () => {
  stop();
});

lapBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerHTML = `${minutes.innerHTML} ${seconds.innerHTML} ${milliseconds.innerHTML}`;
  lapContainer.appendChild(li);
});

resetBtn.addEventListener("click", () => {
  stop();
  isRunning = false;
  millisecond = 0;
  minute = 0;
  second = 0;

  minutes.innerText = "00 : ";
  seconds.innerText = "00 : ";
  milliseconds.innerText = "00";
  lapContainer.innerText = "";
});
