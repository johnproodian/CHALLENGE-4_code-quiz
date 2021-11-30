# Code Quiz

## Purpose
The purpose of this challenge is to create a timed quiz on JavaScript fundamentals where time runs down faster if wrong answers are given and scores are saved with initials that the user enters.

## Built With
* HTML
* CSS
* JavaScript

## Website
https://johnproodian.github.io/code-quiz-challenge/

## To Do

* Add HTML - not too much since most will be dynamically added.
* Add CSS - keep it basic (CSS isn't my strong suit)
* Javascript:
    * Timer:
        * countdown function, dynamically write the timeLeft variable--setInterval, clearInterval, .textContent, etc.
    * Quiz: 
        * Dynamically create text to ask each question:
            * standard--H1/2 is question, p is decription (only in beginning), button are the options, border w/ p (or h2?) gives 'correct!' or 'wrong!' at the bottom
            * if statements for right or wrong buttons clicked:
                * wrong --> time decreases faster, (and points are lost?), 'wrong!' is dynamically added, move to next Q (dynamically added)
                * right --? 'correct!' is dynamically added, points increase, move to next Q (dynamically added)
        * At the end (all answers completed or timer runs out):
            * announce game is over
            * announce score
            * store score on local storage (how?)
            * store it with high score (html form??)
