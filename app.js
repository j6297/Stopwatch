const minValue = document.getElementById('min');
const secValue = document.getElementById('sec');
const milliSecValue = document.getElementById('milliSeconds');

const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const stopBtn = document.getElementById('stop');
const addlapsBtn = document.getElementById('add-laps');
const clearBtn = document.getElementById('clear');


const lapList =document.getElementById('laplist');

// stopwatch variables 

let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let interval = 0;

// button variables and functions

// for start the stopwatch 
startBtn.addEventListener('click', () => {
    interval = setInterval(updateTimer, 10);
    startBtn.disabled = true;
});
// for pause the stopwatch 
pauseBtn.addEventListener('click', () => {
    clearInterval(interval);
    startBtn.disabled = false;
});
// for reset the stopwatch 
resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    resetTimerData();
    startBtn.disabled = false;
});

// for add new lap to the stopwatch 
addlapsBtn.addEventListener('click', () => {
    addToLapList();
})

// for stop the stopwatch 
stopBtn.addEventListener('click', () => {
    clearInterval(interval);
    resetTimerData();
    startBtn.disabled = false;
});

// for clear the stopwatch 
clearBtn.addEventListener('click', () => {
    lapList.innerHTML = '';
})


function resetTimerData() {
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    displayTimer();
}

function updateTimer() {
    milliSeconds++;

    if(milliSeconds === 1000) {  // 1 seconds = 1000 milli-seconds
        milliSeconds = 0;
        seconds++;

        if(seconds === 60) { // 1 minute = 60 seconds
            seconds = 0;
            minutes++;
        }
    }

    displayTimer();
}

function displayTimer() {
    minValue.textContent = padTime(minutes);
    secValue.textContent = padTime(seconds);
    milliSecValue.textContent = padTime(Math.floor(milliSeconds/10));
}

function padTime(time) {
   return time.toString().padStart(2, '0')
}

function addToLapList() {
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(Math.floor(milliSeconds/10))}`;

    const listItem = document.createElement('li');

    listItem.innerHTML = `<span> Lap ${lapList.childElementCount + 1}: </span> ${lapTime}`;

    lapList.appendChild(listItem);
}


