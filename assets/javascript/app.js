$(document).ready(function(){

// Declare global variables
var counter = 15; // Timer for questions
var startingHTML; // Screen upon initially loading page
var triviaHTML; // HTML for the page, changes with situation
var scoreHTML; // HTML for score and play again button
var questionArray = ["What 2008 film officially kicked off the Marvel Cinematic Universe?", "In which Bond movie does Javier Bardem play the villain?",
    "Who was the first female director to win an Oscar for Best Director?", "Which of the following films was NOT directed by David F. Sandberg?",
    "Who played Faramir in the live action Lord of the Rings movies?"]; // Questions

var optionArray = [["Hulk", "Iron Man", "Captain America", "Batman Begins"], ["Quantum of Solace", "Casino Royale", "Skyfall", "Tomorrow Never Dies"],
    ["Kathryn Bigelow", "Sofia Coppola", "Patty Jenkins", "Ava DuVernay"], ["Lights Out", "Annabelle: Creation", "Shazam!", "In the Dark"],
    ["Sean Bean", "David Wenham", "Hugo Weaving", "Karl Urban"]]; // A, B, C, D, answers
var correctArray = ["Iron Man", "Skyfall", "Kathryn Bigelow", "In the Dark", "David Wenham"]; // Correct answer
var imageArray = ["<img src='assets/images/iron_man.gif'>", "<img src='assets/images/bardem.gif'>", "<img src='assets/images/bigelow.gif'>",
    "<img src='assets/images/shazam.gif'>", "<img src='assets/images/faramir.gif'>"]; // Images associated with question
var questionCounter = 0; // Position of index in questionArray
var userAnswer; // User's guess
var timeCLock; // Timer for each question
var winTally = 0; // Number of correct answers
var lossTally = 0; // Number of incorrect answers
var noAnswerTally = 0; // Number of unanswered questions


// Page should call a Start button function that adds the start button to the HTML
function startScreen() {
    startingHTML = "<div class='container justify-content-center' id='startScreen'> <div class='row justify-content-center'> <span class='icon'><i class='fas fa-7x fa-film'></i></span> </div> <div class='row justify-content-center'> <button class='btn btn-lg btn-outline-primary play-round' id='start'>Let's Play!</button> </div>";
    $("#mainContent").html(startingHTML);
}

startScreen();

$(document).on("click", ".play-round", function(){
    playTrivia();
    timerControls();
    winTally = 0;
    lossTally = 0;
    noAnswerTally = 0;
})

// On click function should tell a user if they guessed correct or wrong
$(document).on("click", ".choice-text", function(){
    userAnswer = $(this).text();
    if (userAnswer === correctArray[questionCounter]){
        clearInterval(timeCLock);
        correctAnswer();
    } else {
        clearInterval(timeCLock);
        wrongAnswer();
    }
})
// Play function should:
function playTrivia() {
    triviaHTML = "<div class='container' id='timeContainer'> <div class='row justify-content-center text-center'> <p class='timer-text text-center'><span class='timer'>" + counter + "</span>sec</p> </div> <div class='row justify-content-center text-center'> <p class='question text-center'>" + questionArray[questionCounter] + "</p></div> <div class='row justify-content-center text-center'> <div class='col-sm-12 col-md-8'> <p class='choice-text text-center'>" + optionArray[questionCounter][0] + "</p> <p class='choice-text text-center'>" + optionArray[questionCounter][1] + "</p> <p class='choice-text text-center'>" + optionArray[questionCounter][2] + "</p> <p class='choice-text text-center'>" + optionArray[questionCounter][3] + "</p> </div> </div>";
    $("#mainContent").html(triviaHTML);
}

// Call the timer function to start a 15 sec countdown
function timerControls(){
    timeCLock = setInterval(questionTime, 1000);
        function questionTime(){
            if (counter === 0) {
                clearInterval(timeCLock);
                timeOutAnswer();
            } else if (counter > 0) {
                counter--;
            }
            $(".timer").text(counter);
        }
}

// Generate win function 
function correctAnswer() {
    winTally++;
    triviaHTML = "<div class='container' id='timeContainer'> <div class='row justify-content-center text-center'> <p class='timer-text text-center'><span class='timer'>" + counter + "</span>sec</p> </div> <div class='row justify-content-center text-center'> <p class='correct text-center'>Correct!</p></div> <div class='row justify-content-center text-center'> <div class='col-sm-12 col-md-8'>" + imageArray[questionCounter] + "</div> </div>";
    $("#mainContent").html(triviaHTML);
    setTimeout(hold, 5000);
}

// Generate lose function
function wrongAnswer() {
    lossTally++;
    triviaHTML = "<div class='container' id='timeContainer'> <div class='row justify-content-center text-center'> <p class='timer-text text-center'><span class='timer'>" + counter + "</span>sec</p> </div> <div class='row justify-content-center text-center'> <p class='incorrect text-center'>Incorrect! The right answer is " + correctArray[questionCounter] + "</p> </div> <div class='row justify-content-center text-center'> <div class='col-sm-12 col-md-8'>" + imageArray[questionCounter] + "</div> </div>";
    $("#mainContent").html(triviaHTML);
    setTimeout(hold, 5000);
}

// Generate timeout loss function
function timeOutAnswer() {
    noAnswerTally++;
    triviaHTML = "<div class='container' id='timeContainer'> <div class='row justify-content-center text-center'> <p class='timer-text text-center'><span class='timer'>" + counter + "</span>sec</p> </div> <div class='row justify-content-center text-center'> <p class='timeout text-center'>Time's up! The right answer is " + correctArray[questionCounter] + "</p> </div> <div class='row justify-content-center text-center'> <div class='col-sm-12 col-md-8'>" + imageArray[questionCounter] + "</div> </div>";
    $("#mainContent").html(triviaHTML);
    setTimeout(hold, 5000);
}

function gameOver() {
    scoreHTML = "<div class='row justify-content-center'> <h1 class='text-center gameover-text'>Game Over!</h1></div> <div class='row justify-content-center' id='score-row'> <div class='col-lg-3 col-md-6 col-sm-12 justify-content-center' id='score-col'><p class='score-p' id='win-tally'>Correct: " + winTally + "</p> <p class='score-p' id='loss-tally'>Incorrect: " + lossTally + "</p> <p class='score-p' id='timeout-tally'>Unanswered: " + noAnswerTally + "</p></div></div> <div class='row justify-content-center'><button class='btn btn-lg btn-outline-primary play-round' id='play-again'>Play Again?</button></div>";
    $("#mainContent").html(scoreHTML);
    questionCounter = 0;
}

// Function to check if the game is over and to pause on the answer and image
function hold() {
    if (questionCounter < questionArray.length - 1) {
        questionCounter++;
        playTrivia();
        counter = 15;
        timerControls();
    }  else {
         gameOver();
    }
}


});