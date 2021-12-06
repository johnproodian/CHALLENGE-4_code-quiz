// get the time li to be able to add the text of current time to it in the timer function
var timerEl = document.getElementById('timer');
// get the start button to be able to listen to it being clicked below
var startButtonEl = document.getElementById('start-button');
// create an array of all the questions and answers for select from below
var qBank = [
    "This is the first question?", 
    "This is the 1-first answer.", 
    "This is the 1-second answer.",
    "This is the 1-third answer.",
    "-This is the 1-fourth answer.",
    "This is the second question?",
    "-This is the 2-first answer.",
    "This is the 2-second answer.",
    "This is the 2-third answer.",
    "This is the 2-fourth answer.",
    "This is the third question?", 
    "This is the 3-first answer.", 
    "-This is the 3-second answer.",
    "This is the 3-third answer.",
    "This is the 3-fourth answer.",
    "This is the fourth question?", 
    "This is the 4-first answer.", 
    "-This is the 4-second answer.",
    "This is the 4-third answer.",
    "This is the 4-fourth answer."
    // 4, 1, 2, 2
]

// starting score for the user
var  score = 0;

// get the various elements that will be dynamically manipulated to go through the quiz
var quizQuestionEl = document.getElementById('quiz-question');
var PEl = document.getElementById('blank-p-element');
var startBtnLiEl = document.getElementById('start-btn-li');
// Do I need this main element?
var mainEl = document.getElementById('main');
var answerOptionEl = document.getElementById('answer-options');

// define the timer function which will start the timer when the start button is clicked
var timer = function() {
    // start the timer at 75s and have it count down until it reads 0
    // var endGame = function() {
    //     quizQuestionEl.textContent = "All Done!";


    // }
    var timeLeft = 5;
    var timeInterval = setInterval(function() {
        timerEl.textContent = "Time: " + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
            timerEl.textContent = "Time: 0";
            quizQuestionEl.textContent = "All Done!"
            PEl.textContent = "Your final score is " + score + ".";
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
                var initials = document.querySelector("input[name='initials']");
                console.log(initials);
                var initialsAndScore = [initials.value, score]
                localStorage.setItem("initials and score", initialsAndScore);
                
            })




            // Create a function that brings them to a page that says:
                // H1: All Done!
                // p: Your final score is 'score'.
                // Text before form: Enter initials [form] [submit btn]
            // Create an event listener (below?) to send them to a new page with submit

        }
        timeLeft = timeLeft - 1;
        
    }, 1000);
 
    
    
     
    // define function that removes original html and starts quiz (function)
    var startQuiz = function() {
        // function to dynamically remove the p element and original start button once the quiz starts
        var rmvPandBtnEls = function() {
            PEl.textContent = "";
            startBtnLiEl.parentNode.removeChild(startBtnLiEl);
        }   
        rmvPandBtnEls();

        var questionIndex = 0;
        var classPicker = 0;

        var quiz = function(a) {
            // dynamically add HTML elements and text that replaces that of the current elements
            // edit h1 to contain the question - 0, 0+5, 0+10, etc., items in the qBank array
            quizQuestionEl.textContent = qBank[a];

        
            // // ***Create a function with a for loop that can iterate through the next four groups of things
            // var createAnsOptions = function() {
            //     for (i = 0; i < 4; i++) {
            //         var answerLiEl = document.createElement("li");
            //         answerLiEl.className = 'option';
            //         var answerBtnEl = document.createElement("button");
            //         answerBtnEl.textContent = qBank[a + 1]
            //         answerLiEl.appendChild(answerBtnEl);
            //         answerOptionEl.appendChild(answerLiEl);
            //         questionIndex = questionIndex + 1;
            //     }
            // }
            // createAnsOptions();
                
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
            var classAssign = [4, 1, 2, 2];
            var assignClassPicker = classAssign[classPicker];
            

            var assignClass = function(c) {
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

            assignClass(assignClassPicker); 
            
            
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

            correctBtn.addEventListener('click', function() {
                score = score + 5;
                rmvOldQ();
                classPicker = classPicker + 1;
                quiz(questionIndex);
                console.log("Score: " + score);
            })
            incorrectBtnsArr[0].addEventListener('click', function() {
                timeLeft = timeLeft - 15;
                rmvOldQ();
                classPicker = classPicker + 1;
                quiz(questionIndex);
                console.log("Score: " + score);
            })
            incorrectBtnsArr[1].addEventListener('click', function() {
                timeLeft = timeLeft - 15;
                rmvOldQ();
                classPicker = classPicker +1;
                quiz(questionIndex);
                console.log("Score: " + score);
            })
            incorrectBtnsArr[2].addEventListener('click', function() {
                timeLeft = timeLeft - 15;
                rmvOldQ();
                classPicker = classPicker +1;
                quiz(questionIndex);
                console.log("Score: " + score);
            })
        }
        quiz(questionIndex);
    }

    startQuiz();
}
    
startButtonEl.addEventListener("click", timer);


// What would the function look like to go to the HS form
var getScoreInitials = function() {
    rmvOldQ();
    quizQuestionEl.textContent = "All done!";
    PEl.textContent = "Your final score is 22."
    // look at taskinator modules to create the form here.
}


// ==========

// So, what is supposed to happen w/ keeping track of scores, local storage, etc.?
    // Games ends--run out of Q's, run out of time [if statement for both?]
    // Take value of score variable at that point and display a message (confirm) that says the quiz is over and your final score is 'score'; do you want to save it?
    // If no, display message to come back or ask to try again.
    // If yes, take user to screen where they can create a high score item just like a taskinator to-do
        // Dynamically change html/css to something more like taskinator:
            // h1 (stay), p (add back? don't remeove it in the first place but make it blank?), form (new element), submit btn (redo it or don't get rid of it in the first place?)
        // Get initials with form
        // Store initials in a variable and make an object w/ the score variable?
        // Then store them together (as a string) in localStorage
    // Then, take them to the high score page; two options:
        // (1) create a new html page for the high scores
        // (2) dynamically remove and add the html and css to present high score; have an event listener for coming home and restarting...??
            // I say stick with the first one...
        // MOdel the new high scores page on the taskinator page






//==========

// So far, so good. 
// Classes change. Wooooo!

// Next:
    // Figure out local storage and adding a form that collects high scores and initials to store there.
    // Figure out end-game things: what happens when time runs out, when questions are done (how about a bonus for finishing early?)
    // Add the JS questions--maybe 10?
    // Add adjustments from lessons I've completed since starting the challenge--to make code a lot cleaner, to have better solutions 
    




//===========

// ---

// var question;
// var ans1;
// var ans2;
// var ans3;
// var ans4;

// var qBank = [ 
//     {
//         question = "This is the first question?",
//         ans1 = "This is the first answer.",
//         ans2 ="This is the second answer.",
//         ans3 = "This is the third answer.",
//         ans4 = "This is the fourth question."
//     },
//     {
//         question: "This is the second question?",
//         ans1: "This is the first answer.",
//         ans2: "This is the second answer.",
//         ans3: "This is the third answer.",
//         ans4: "This is the fourth question."
//     },
//     {
//         question: "This is the third question?",
//         ans1: "This is the first answer.",
//         ans2: "This is the second answer.",
//         ans3: "This is the third answer.",
//         ans4: "This is the fourth question."
//     },
//     {
//         question: "This is the fourth question?",
//         ans1: "This is the first answer.",
//         ans2: "This is the second answer.",
//         ans3: "This is the third answer.",
//         ans4: "This is the fourth question."
//     }
    
// ]