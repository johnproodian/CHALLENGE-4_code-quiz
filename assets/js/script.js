// Issues:
    // (1) If there is no local storage already, then there seems to be issues
    // (2) if there is local storage, the previous initials and scores don't seem to get added to the initials and scores array in the for loop
    // (3) B/C of (2), the local storage is just replaced each time, never added to.






// // var testScores = {
//     init: "jjp",
//     sco: 10
// };
// testScores = JSON.stringify(testScores);
// localStorage.setItem("initialsAndScores", testScores);
// get the time li to be able to add the text of current time to it in the timer function
var timerEl = document.getElementById('timer');
// get the start button to be able to listen to it being clicked below
var startButtonEl = document.getElementById('start-button');
// create an array of all the questions and answers for select from below
var qBank = [
    "Arrays in JavaScript can be used to store ________.", 
    "1. numbers and strings", 
    "2. other arrays",
    "3. boolesn",
    "4. all of the above",
    "String values must be enclosed within _______ when being assigned to varables.",
    "1. commas",
    "2. curly brackets",
    "3. quotes",
    "4. parentheses",
    "A very useful tool used during development and debugging for printing content to the debugger is:", 
    "1. JavaScript", 
    "2. terminal/bash",
    "3. for loops",
    "4. console.log",
    "The condition in an if / else statement is enclosed with _______.", 
    "1. quotes", 
    "2. curly brackets",
    "3. parentheses",
    "4. square brackets",
    "A variable declared within a JavaScript function have ______ scope.",
    "1. local",
    "2. function",
    "3. global",
    "4. block",
    "Which of the following is NOT an example of a primitive JavaScript data type?",
    "1. object",
    "2. string",
    "3. boolean",
    "4. null"
    // 4, 3, 4, 3, 1, 1
]

// starting score for the user
var  score = 0;

// get the various elements that will be dynamically manipulated to go through the quiz
var quizQuestionEl = document.getElementById('quiz-question');
var pEl = document.getElementById('blank-p-element');
var startBtnLiEl = document.getElementById('start-btn-li');
var mainEl = document.getElementById('main');
var answerOptionEl = document.getElementById('answer-options');



var stopTimer = function(a) {
    clearInterval(a);
            timerEl.textContent = "Time: 0";
            quizQuestionEl.textContent = "All Done!"
            pEl.textContent = "Your final score is " + score + ".";
            var ulEl = document.getElementById('answer-options');
            ulEl.parentNode.removeChild(ulEl);
            var submitScoreBtn = document.createElement("button");
            submitScoreBtn.className = 'option form-items';
            submitScoreBtn.textContent = 'Submit';
            var initialInput = document.createElement("input");
            initialInput.type = 'text';
            initialInput.name = 'initials';
            initialInput.id = 'input';
            initialInput.className = 'form-items';
            var formPEl = document.createElement('p');
            formPEl.textContent = "Enter initials:";
            formPEl.className = "form-items";
            var scoreForm = document.createElement("form");
            scoreForm.className = 'score-form';
            scoreForm.appendChild(formPEl);
            scoreForm.appendChild(initialInput);
            scoreForm.appendChild(submitScoreBtn);
            mainEl.appendChild(scoreForm);

            

            submitScoreBtn.addEventListener("click", function(event) {
                event.preventDefault();
                var initials = document.querySelector("input[name='initials']").value;
                console.log(initials);
                // debugger;
                var initScoObj = {
                    inits: initials,
                    sco: score
                }
                // debugger;
                var previousInitialsAndScores = JSON.parse(localStorage.getItem("initialsAndScores"));
                if (previousInitialsAndScores) {
                    previousInitialsAndScores.push(initScoObj);                             // But initScoObj DOES get pushed to initialsAndScores here...
                    console.log("initialsAndScores: " + JSON.stringify(initialsAndScores));
                    localStorage.setItem("initialsAndScores", JSON.stringify(previousInitialsAndScores))

                    window.location.href = 'high-score.html';

                //     previousInitialsAndScores = JSON.parse(previousInitialsAndScores); // here is where the (or, a) problem lies --> issue was that
                //                                                                         // JSON has to parse something in object format...
                //     for (i = 0; i < previousInitialsAndScores; i++) {
                //         initialsAndScores.push(previousInitialsAndScores[i]);   // Seems here that the object that is previous initials and scores doesn't get pushed here...
                //     }
                } else {
                    var initialsAndScores = [];
                    initialsAndScores.push(initScoObj);
                    localStorage.setItem("initialsAndScores", JSON.stringify(initialsAndScores))
                    
                    window.location.href = 'high-score.html';
                }

            

                


               
    
            });
};


// define function that removes original html and starts quiz (function), including the timer
var startQuiz = function() {
    // start the timer at 75s and have it count down until it reads 0
    var timeLeft = 75;
    var timeInterval = setInterval(function() {
        console.log(timeLeft);
        timerEl.textContent = "Time: " + timeLeft;
        if (timeLeft <= 0) {
            stopTimer(timeInterval);
        }
        timeLeft = timeLeft - 1;
        
    }, 1000);

    // function to dynamically remove the p element and original start button once the quiz starts
    var rmvPandBtnEls = function() {
        pEl.textContent = "";
        startBtnLiEl.parentNode.removeChild(startBtnLiEl);
    }   
    rmvPandBtnEls();

    var questionIndex = 0;
    var correctAssignIndex = 0;

    var quiz = function(a) {
        // dynamically add HTML elements and text that replaces that of the current elements
        // edit h1 to contain the question - 0, 0+5, 0+10, etc., items in the qBank array
        quizQuestionEl.textContent = qBank[a];
            
        // // dynamically create and fill the first answer button - 0+1,0+6,0+11, etc.
        var answerLi1El = document.createElement("li");
        var answerBtn1El = document.createElement("button");
        answerBtn1El.textContent = qBank[a + 1];
        answerLi1El.appendChild(answerBtn1El);
        answerOptionEl.appendChild(answerLi1El);

        // create and fill the second answer  - - 0+2,0+7,0+12, etc.
        var answerLi2El = document.createElement("li");
        var answerBtn2El = document.createElement("button")
        answerBtn2El.textContent = qBank[a + 2];
        answerLi2El.appendChild(answerBtn2El);
        answerOptionEl.appendChild(answerLi2El);
    
        // create and fill the third answer button - 0+3,0+9,0+14, etc.
        var answerLi3El = document.createElement("li");
        var answerBtn3El = document.createElement("button");
        answerBtn3El.textContent = qBank[a + 3];
        answerLi3El.appendChild(answerBtn3El);
        answerOptionEl.appendChild(answerLi3El);

        // create and fill the fourth answer button - 0+4,0+10,0+15, etc.
        var answerLi4El = document.createElement('li')
        var answerBtn4El = document.createElement('button');
        answerBtn4El.textContent = qBank[a + 4];
        answerLi4El.appendChild(answerBtn4El);
        answerOptionEl.appendChild(answerLi4El);

        // assign 'correct' and 'wrong' classes to buttons of correct and wrong answers
        var correctAssign = [4, 3, 4, 3, 1, 1];
        var assignCorrectPicker = correctAssign[correctAssignIndex];
        

        var assignCorrect = function(c) {
            if (c === 1) {
                answerBtn1El.className = 'correct option',
                answerBtn2El.className = 'wrong option',
                answerBtn3El.className = 'wrong option',
                answerBtn4El.className = 'wrong option'
            }
            else if (c === 2) {
                answerBtn1El.className = 'wrong option',
                answerBtn2El.className = 'correct option',
                answerBtn3El.className = 'wrong option',
                answerBtn4El.className = 'wrong option'
            }
            else if (c === 3) {
                answerBtn1El.className = 'wrong option',
                answerBtn2El.className = 'wrong option',
                answerBtn3El.className = 'correct option',
                answerBtn4El.className = 'wrong option'
            }
            else if (c === 4) {
                answerBtn1El.className = 'wrong option',
                answerBtn2El.className = 'wrong option',
                answerBtn3El.className = 'wrong option',
                answerBtn4El.className = 'correct option'
            }
        }

        assignCorrect(assignCorrectPicker); 
        
        
        // listen for the different 'clicks', adjust points or time based on right or wrong answers
        var correctBtn = document.querySelector('.correct');
        var incorrectBtns = document.querySelectorAll('.wrong');
        var incorrectBtnsArr = Array.from(incorrectBtns);
        questionIndex = questionIndex + 5;

        var rmvOldQ = function() {
            answerLi1El.parentNode.removeChild(answerLi1El);
            answerLi2El.parentNode.removeChild(answerLi2El);
            answerLi3El.parentNode.removeChild(answerLi3El);
            answerLi4El.parentNode.removeChild(answerLi4El)
        }

        var incorrectClick = function() {
            timeLeft = timeLeft - 15;
            rmvOldQ();
            correctAssignIndex = correctAssignIndex +1;
            if (correctAssignIndex >= correctAssign.length) {
                stopTimer(timeInterval);
            }
            quiz(questionIndex);
            console.log("Score: " + score);
        }
        console.log(correctBtn);

        if (correctBtn) {
            correctBtn.addEventListener('click', function() {
                score = score + 5;
                rmvOldQ();
                correctAssignIndex = correctAssignIndex + 1;
                if (correctAssignIndex >= correctAssign.length) {
                    stopTimer(timeInterval);
                }
                quiz(questionIndex);
                console.log("Score: " + score);
            })
            incorrectBtnsArr[0].addEventListener('click', function() {
                incorrectClick();
            })
            incorrectBtnsArr[1].addEventListener('click', function() {
                incorrectClick();
            })
            incorrectBtnsArr[2].addEventListener('click', function() {
                incorrectClick();
            })
        }
        
    }
    quiz(questionIndex);
}

    
startButtonEl.addEventListener("click", startQuiz);


// What would the function look like to go to the HS form
var getScoreInitials = function() {
    rmvOldQ();
    quizQuestionEl.textContent = "All done!";
    pEl.textContent = "Your final score is 22."
    // look at taskinator modules to create the form here.
}

//






