// Function to generate a random number between 1 and 6
function getRandomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Function to change the image source based on a random dice number
  function changeImage(imageElement, randomNumber) {
    let randomDiceImage = "images/dice" + randomNumber + ".png";
    imageElement.setAttribute('src', randomDiceImage);
  }
  
  // Function to determine the winner and update the h1 text
  function determineWinner(randomNumber1, randomNumber2) {
    const header = document.querySelector('h1');
    if (randomNumber1 > randomNumber2) {
      header.innerHTML = 'Player 1 Wins!';
    } else if (randomNumber1 < randomNumber2) {
      header.innerHTML = 'Player 2 Wins!';
    } else {
      header.innerHTML = 'It\'s a Draw!';
    }
  }
  
  // Add event listener for DOM content loaded
  document.addEventListener('DOMContentLoaded', (event) => {
    // Select the left and right image elements
    const leftImage = document.querySelector('.img1');
    const rightImage = document.querySelector('.img2');
    
    // Generate random numbers for both dice
    let randomNumber1 = getRandomDiceNumber();
    let randomNumber2 = getRandomDiceNumber();
    
    // Initial image change for both images
    changeImage(leftImage, randomNumber1);
    changeImage(rightImage, randomNumber2);
    
    // Determine the winner based on the initial dice roll
    determineWinner(randomNumber1, randomNumber2);
    
    // Add click event listeners to both images
    leftImage.addEventListener('click', () => {
      randomNumber1 = getRandomDiceNumber();
      changeImage(leftImage, randomNumber1);
      determineWinner(randomNumber1, randomNumber2);
    });
    rightImage.addEventListener('click', () => {
      randomNumber2 = getRandomDiceNumber();
      changeImage(rightImage, randomNumber2);
      determineWinner(randomNumber1, randomNumber2);
    });
  });
  