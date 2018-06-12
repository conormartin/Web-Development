var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.getElementById("p2Display");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function() {
    if(!gameOver) {
    p1Score++;
    if(p1Score === winningScore) {
        p1Display.classList.add("winner");
        gameOver = true;
    }
    p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
        }
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
}

resetButton.addEventListener("click", function() {
    reset();
})

// change event runs any time the value changes
numInput.addEventListener("change", function() {
    // this works on the event being listened on (numInput)
    winningScoreDisplay.textContent = this.value;
    // numInput.value stores a string so need to convert to number
    winningScore = Number(this.value);
    // resets game whenever winning score is changed
    reset();
})