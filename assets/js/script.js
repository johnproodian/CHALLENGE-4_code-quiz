var timerEl = document.querySelector("#timer");
var buttonEl = document.querySelector("#start-button");

var timer = function() {
    var timeLeft = 75;
    var timeInterval = setInterval(function(
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft = timeLeft - 1;
    ), 1000)
}

timerEl.addEventListener("click", timer());