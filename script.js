// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById("guessInput");
const guessSubmit = document.getElementById("guessSubmit");
const message = document.getElementById("message");

let attempts = 0;
let isGameOver = false;

guessSubmit.addEventListener("click", function () {
    if (isGameOver) {
        return;
    }

    const guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
    }
    else {
        attempts++;

        if (guess < targetNumber) {
            message.textContent = "Guess Higher!";
        }
        else if (guess > targetNumber) {
            message.textContent = "Guess Lower!";
        }
        else {
            message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
            isGameOver = true;
        }
    }
});