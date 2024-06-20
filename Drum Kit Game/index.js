// Function to handle button click
function handleClick(event) {
  const buttonInnerHTML = event.target.innerHTML;
  playSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

// Function to animate button press
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 200);
}

// Function to play sound based on the button inner HTML
function playSound(key) {
  let audio;
  switch (key) {
    case 'w':
      audio = new Audio('sounds/tom-1.mp3');
      break;
    case 'a':
      audio = new Audio('sounds/tom-2.mp3');
      break;
    case 's':
      audio = new Audio('sounds/tom-3.mp3');
      break;
    case 'd':
      audio = new Audio('sounds/tom-4.mp3');
      break;
    case 'j':
      audio = new Audio('sounds/snare.mp3');
      break;
    case 'k':
      audio = new Audio('sounds/crash.mp3');
      break;
    case 'l':
      audio = new Audio('sounds/kick-bass.mp3');
      break;
    default:
      console.log(key);
  }
  if (audio) {
    audio.play();
  }
}

// Add event listener to all buttons
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", handleClick);
});
