// let x = Math.random();
// console.log(x);

// function getRandom() {
//     return Math.random();
//   }

// console.log(getRandom());

var randomNumber = Math.floor(Math.random() * 500) + 1;
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
var guessCount = 1;
var resetButton;

function checkGuess() {
  var userGuess = Number(guessField.value);

  if(guessCount===1){
    guesses.textContent = "Previous Guesses:";
  } 
  guesses.textContent += userGuess + ' ';
  guesses.style.backgroundColor = 'blue'; 
  if (userGuess===randomNumber){
    lastResult.textContent = 'Congratulations! You nailed it right!'
    lastResult.style.backgroundColor = "green"
    lowOrHi.textContent = "";
    setGameOver();
  }
  else if(guessCount===10){
    lastResult.textContent = "GAME OVER!"
    lowOrHi.textContent = '';
    setGameOver();
  }else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red'
    if (userGuess<randomNumber){
      lowOrHi.textContent = 'Last guess was too low!';
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!';
      }
    }
    guessCount++;
    guessField.value = '';
}

guessSubmit.addEventListener('click', checkGuess)

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
  }
  // function resetGame() {
  //   guessCount = 1;
  //   guessField.disabled = false;
  //   guessSubmit.disabled = false;
  //   guessField.value = '';

  //   $('.button').click(function(){
  //     var id = $(this).data("id");
  //    $("*[data-id=" + id + "]").remove();
  // });

  function resetGame() {
    guessCount = 1;
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    resetButton.parentNode.removeChild(resetButton);
}
            
  
