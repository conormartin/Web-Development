var numSquares = 6;
var colours = [];
var pickedColour;

var squares = document.querySelectorAll(".square")
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

// init function runs core code needed to start game at beginning
function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    // mode button event listeners
    // swaps 'selected' class between both buttons changes their colour through css
    for(var i=0; i<modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            // reset both to ensure neither button has the class
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            // this refers to the button the event listened on
            this.classList.add("selected");
            // ternary operator, if modeButton = 'easy', set numSquares to 3, else set to 6
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    // sets up squares for new game
    for(var i=0; i<squares.length; i++) {
        // add click listeners to squares
        squares[i].addEventListener("click", function() {
            // grab colour of clicked square
            var clickedColour = (this.style.backgroundColor);
            // compare colour to pickedColour
            if(clickedColour === pickedColour) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                // call function to change all colours
                changeColours(clickedColour);
                // change h1 colour to match correct colour
                h1.style.backgroundColor = clickedColour;
            }
            else {
                // changes div colour to background so fades out when wrong square clicked
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    // generate all new colours
    colours = generateRandomColours(numSquares);
    // pick a new random colour from array
    pickedColour = pickColour();
    // change colourDisplay to match picked colour
    colourDisplay.textContent = pickedColour;
    // changes reset button back to 'New Colours' from 'Play Again'
    resetButton.textContent = "New Colours";
    // clears 'correct!' text when new game button clicked
    messageDisplay.textContent = "";
    // change colours of squares
    for(var i=0; i<squares.length; i++) {
        // if there is a colours, change background to that colour
        if(colours[i]) {
            // setting display to 'block' ensures squares are visible
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colours[i];
        }
        // else change display to 'none' which hides the square
        else {
            squares[i].style.display = "none";
        }
        // add initial colours to squares
        squares[i].style.backgroundColor = colours[i];
    }
    h1.style.backgroundColor = "steelblue";
}

// resets game with new random colours when 'new colours' button clicked
resetButton.addEventListener("click", function() {
    reset();
});

function changeColours(colour) {
    // loop through all squares
    for(var i=0; i<squares.length; i++) {
        squares[i].style.backgroundColor = colour;
    }
}

function pickColour() {
    // math.floor doesnt count decimals, always rounds to lower number
    var random = Math.floor(Math.random() * colours.length );
    // returns random number between 1 & amount of squares remaining
    return colours[random];
}

function generateRandomColours(num) {
    // make an array
    var arr = [];
    // add num random colours to the array
    for(var i=0; i<num; i++) {
        // get random colour & push into array by calling function
        arr.push(randomColour());
    }
    // returm the array
    return arr;
}

function randomColour() {
    // pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);
    // make sure to have spaces after comma to make sure it matches css rgb formatting
    return "rgb("+r+", "+g+", "+b+")";
}