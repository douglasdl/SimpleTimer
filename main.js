var timerId = NaN;
var count = 0;
var isCounting = false;

function startTimer() {
    // START
    if(!isCounting && count == 0) {
        timerId = setInterval(tick, 1000);
        isCounting = true;
        document.getElementById("startBtn").textContent = "RESTART";
        document.getElementById("stopBtn").textContent = "STOP";
    } else if(!isCounting && count > 0) {
        // CONTINUE
        timerId = setInterval(tick, 1000);
        isCounting = true;
        document.getElementById("startBtn").textContent = "RESTART";
        document.getElementById("stopBtn").textContent = "STOP";
        
    } else {
        // RESTART
        isCounting = false;
        clearInterval(timerId);
        count = 0;
        document.getElementById("counter").textContent = count;
        startTimer();
    }
}

function stopTimer() {
    // STOP
    if(isCounting) {
        clearInterval(timerId);
        isCounting = false;
        document.getElementById("startBtn").textContent = "CONTINUE";
        document.getElementById("stopBtn").textContent = "RESET";
    } else {
        // RESET
        count = 0;
        document.getElementById("counter").textContent = count;
        document.getElementById("startBtn").textContent = "START";
        document.getElementById("stopBtn").textContent = "STOP";
    }
}

function tick() {
    count++;
    document.getElementById("counter").textContent = count;
}