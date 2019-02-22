$(document).ready(function(){
// Entirety of app.js loads after page loads

// Declare global variables

// Page should call a Start button function that adds the start button to the HTML
    // Clicking Start should call the function to Play

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