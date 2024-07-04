// Create an array of button colors
var buttonColours = ["red", "blue", "green", "yellow"];

// Create an empty array for the game pattern
var gamePattern = [];

// Create an empty array for the user clicked pattern
var userClickedPattern = [];

// Track whether the game has started
var started = false;

// Track the current level
var level = 0;

// Detect when a keyboard key has been pressed
$(document).keydown(function() {
  if (!started) {
    // Update the h1 to show the current level
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// Detect when a button is clicked
$(".btn").click(function() {
  // Get the id of the button that got clicked
  var userChosenColour = $(this).attr("id");
  
  // Add the user's chosen color to the userClickedPattern array
  userClickedPattern.push(userChosenColour);

  // Play sound for the selected button
  playSound(userChosenColour);
  animatePress(userChosenColour);

  // Check the user's answer
  checkAnswer(userClickedPattern.length - 1);
});

// Function to generate the next sequence
function nextSequence() {
  // Reset the user clicked pattern
  userClickedPattern = [];

  // Increment the level
  level++;

  // Update the h1 to show the current level
  $("#level-title").text("Level " + level);

  // Generate a random number between 0 and 3
  var randomNumber = Math.floor(Math.random() * 4);

  // Select a random color based on the random number
  var randomChosenColour = buttonColours[randomNumber];

  // Add the random color to the game pattern
  gamePattern.push(randomChosenColour);

  // Flash the button to indicate the sequence
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  // Play sound for the selected button
  playSound(randomChosenColour);
}

// Function to check the user's answer
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // Check if the user has finished their sequence
    if (userClickedPattern.length === gamePattern.length) {
      // Call nextSequence after a delay
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    // Play the wrong sound
    playSound("wrong");

    // Apply the game-over CSS class to the body
    $("body").addClass("game-over");

    // Update the h1 to show the game over message
    $("#level-title").text("Game Over, Press Any Key to Restart");

    // Remove the game-over CSS class after a delay
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);

    // Restart the game
    startOver();
  }
}

// Function to play sound for a given color
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Function to animate a button press
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// Function to restart the game
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
