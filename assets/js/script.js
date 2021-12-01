var timerEl = document.getElementById('timer');
var buttonEl = document.getElementById('start-button');

var timer = function() {
    var timeLeft = 10;
    var timeInterval = setInterval(function() {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft = timeLeft - 1;
        console.log(timeLeft);
        if (timeLeft < 0) {
            clearInterval(timeInterval);
        }
    }, 1000);
    
}

buttonEl.addEventListener("click", timer);