var timerEl = document.getElementById('timer');
var startButtonEl = document.getElementById('start-button');

var timer = function() {
    // start the timer at 75s and have it count down until it reads 0
    var timeLeft = 75;
    var timeInterval = setInterval(function() {
        timerEl.textContent = "Time: " + timeLeft;
        timeLeft = timeLeft - 1;
        console.log(timeLeft);
        if (timeLeft < 0) {
            clearInterval(timeInterval);
        }
    }, 1000);

    // present the first question and listen for a click of the right answer
    var quizQuestionEl = document.getElementById('quiz-question');
    var blankPEl = document.getElementById('blank-p-element');
    var startBtnLiEl = document.getElementById('start-btn-li');
    var startQuiz = function() {
        // dynamically create HTML text that replaces that of the current elements
        quizQuestionEl.textContent = "This is the 1st question?";
        blankPEl.textContent = "";
        startButtonLiEl = // use removeChild() here, but might be for parent, not this element

    }

    startQuiz();
    
}

startButtonEl.addEventListener("click", timer);

