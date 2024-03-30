// Timer variables
let timerId = null;
let secondsLeft = 0;

// Update Timer Display
function updateTimerDisplay(minutes, seconds) {
    const timeLeft = document.getElementById('time-left');
    timeLeft.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Countdown Function
function startTimer(duration) {
    clearInterval(timerId);  // Clear any existing timers to avoid overlapping timers
    secondsLeft = duration;

    timerId = setInterval(() => {
        let minutes = Math.floor(secondsLeft / 60);
        let seconds = secondsLeft % 60;

        updateTimerDisplay(minutes, seconds);

        if (secondsLeft <= 0) clearInterval(timerId);
        else secondsLeft--;
    }, 1000);
}

// Start Study Session
function startStudySession() {
    startTimer(25 * 60);  // 25 minutes

    // Increment study session count
    const studyCount = document.getElementById('study-count');
    studyCount.textContent = parseInt(studyCount.textContent) + 1;
}

// Start Break Session
function startBreakSession() {
    startTimer(5 * 60);  // 5 minutes

    // Increment break session count
    const breakCount = document.getElementById('break-count');
    breakCount.textContent = parseInt(breakCount.textContent) + 1;
}

// Event Listeners
document.getElementById('study-btn').addEventListener('click', startStudySession);
document.getElementById('break-btn').addEventListener('click', startBreakSession);
