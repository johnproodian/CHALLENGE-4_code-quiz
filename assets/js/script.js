var timerEl = document.getElementById('timer');
var startButtonEl = document.getElementById('start-button');

var timer = function() {
    // start the timer at 75s and have it count down until it reads 0
    var timeLeft = 5;
    var timeInterval = setInterval(function() {
        timerEl.textContent = "Time: " + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
        }
        timeLeft = timeLeft - 1;
        
    }, 1000);
 
    // present the first question and listen for a click of the right answer
    var quizQuestionEl = document.getElementById('quiz-question');
    var blankPEl = document.getElementById('blank-p-element');
    var startBtnLiEl = document.getElementById('start-btn-li');
    var mainEl = document.getElementById('main');
    var answerOptionEl = document.getElementById('answer-options');
    var startQuiz = function() {
        // dynamically edit HTML text that replaces that of the current elements
        // edit h1 to contain the question
        quizQuestionEl.textContent = "This is the 1st question?";
        
        // remove the p element and original start button
        blankPEl.parentNode.removeChild(blankPEl);
        startBtnLiEl.parentNode.removeChild(startBtnLiEl);
        
        // create and fill the first answer button
        var answerLiEl = document.createElement("li");
        answerLiEl.className = 'option';
        var answerBtn1El = document.createElement("button");
        answerBtn1El.textContent = "This is the first answer option.";
        answerLiEl.appendChild(answerBtn1El);
        answerOptionEl.appendChild(answerLiEl);

        // create and fill the second answer button
        var answerLi2El = document.createElement("li");
        answerLi2El.className = 'option'
        var answerBtn2El = document.createElement("button")
        answerBtn2El.textContent = "This is the second answer option.";
        answerLi2El.appendChild(answerBtn2El);
        answerOptionEl.appendChild(answerLi2El);
        
        // create and fill the third answer button
        var answerLi3El = document.createElement("li");
        answerLi3El.className = 'option';
        var answerBtn3El = document.createElement("button");
        answerBtn3El.textContent = 'This is the third answer option';
        answerLi3El.appendChild(answerBtn3El);
        answerOptionEl.appendChild(answerLi3El);

        // create and fill the fourth answer button
        var answerLi4El = document.createElement('li')
        answerLi4El.className = 'option';
        var answerBtn4El = document.createElement('button');
        answerBtn4El.textContent = "This is the fourth answer option.";
        answerLi4El.appendChild(answerBtn4El);
        answerOptionEl.appendChild(answerLi4El);
    }

    startQuiz();
    
}

startButtonEl.addEventListener("click", timer);

