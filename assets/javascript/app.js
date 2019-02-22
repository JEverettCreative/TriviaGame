$(document).ready(function(){
// Entirety of app.js loads after page loads

// Declare global variables
var counter = 15; // Timer for questions
var startingHTML; // Screen upon initially loading page
var triviaHTML; // HTML for the page, changes with situation
var questionArray = []; // Questions
var optionArray = []; // A, B, C, D, answers
var correctArray = []; // Correct answer
var imageArray = []; // Images associated with question
var questionCounter = 0; // Position of index in questionArray
var userAnswer; // User's guess
var timeCLock; // Timer for each question
var winTally = 0; // Number of correct answers
var lossTally = 0; // Number of incorrect answers
var noAnswerTally = 0; // Number of unanswered questions


// Page should call a Start button function that adds the start button to the HTML
    // Clicking Start should call the function to Play
function startScreen() {
    startingHTML = "<div class='container justify-content-center' id='startScreen'> <div class='row justify-content-center'> <span class='icon'><i class='fas fa-7x fa-film'></i></span> </div> <div class='row justify-content-center'> <button class='btn btn-lg btn-outline-primary' id='start'>Let's Play!</button> </div>";
    $("#mainContent").html(startingHTML);
}

startScreen();

$(document).on("click", "#start", function(){
    playTrivia();
})

function playTrivia(){
    triviaHTML = "<div class='container' id='timeContainer'> <div class='row justify-content-center text-center'> <p class='timer-text text-center'><span class='timer'>" + counter + "</span>sec</p> </div> <div class='row justify-content-center text-center'> <p class='question text-center'>" + questionArray[questionCounter] + "</p></div> <div class='row justify-content-center text-center'> <div class='col-sm-12 col-md-8'> <p class='choice-text text-center'>" + optionArray[questionCounter] + "</p> <p class='choice-text text-center'>" + optionArray[questionCounter] + "</p> <p class='choice-text text-center'>" + optionArray[questionCounter] + "</p> <p class='choice-text text-center'>" + optionArray[questionCounter] + "</p> </div> </div>";
    $("#mainContent").html(triviaHTML);
}

// Play function should:
    // Generate new HTML that includes: Row w/ Timer, Time remaining; Row w/ Question; Stack of answers.
    // Fill the text of the above HTML with elements from the questionArray, possibleArray (possible answers)
    
    // Call the timer function to start a 15 sec countdown
        // Timer function should check if the counter variable (time remaining) is 0
            // If so, it generates a loss due to TimeOut and runs that function
            // Else if its greater than 0, it should decrement by 1
            // In either case, it should update the HTML with the counter text

// On click function should tell a user if they guessed correct or wrong
    // Use if/else to either generateWin or generateLoss and clear the timer
    
// Generate win function should do the following when called:
    // Increase the winTally
    // Display new HTML that says "Correct!" and includes a relevant image
    // Increase the question counter to move it along the array of questions
    // Waits 5 seconds before starting the counter again

// Generate lose function should do the following when called:
    // Increase the lossTally
    // Display new HTML that says "Incorrect. The correct answer is " + answerArray[i] and includes a relevant image
    // Increase the question counter to move it along the array of questions
    // Waits 5 seconds before starting the counter again

// Create a wait function that evaluates if the questionCounter has hit 5 (higher later)
    // If it has, it changes the HTML to display the user score tallies and a button to play again
    // If not, add to the questionCounter, generate new HTML and question, set the counter to 15, then run the countdown

});