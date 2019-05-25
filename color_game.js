var numSquares = 6;
var colors = [];
var goalColor;

var sq = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#playAgain");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
    //setting mode buttons
    setUpModeButtons();

    //setting squares
    setUpSquares();

    //assigning colors
    reset();
}

function setUpModeButtons(){
    for(let i = 0; i < modeBtn.length ; i++){
        modeBtn[i].addEventListener("click",function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            //figure out how many squares to show
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            //pick new colors     
            //pick a new goalColor
            //update page to reflect changes
            reset();
        });
    }
}

function setUpSquares(){
    for ( let i = 0; i < sq.length; i++) {
    //add Listeners
        sq[i].addEventListener("click",function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare to goalColor
            if(clickedColor === goalColor){
                messageDisplay.textContent = "Correct!";
                resetBtn.textContent = "Play Again?";
                h1.style.backgroundColor = clickedColor;
                changeColors(clickedColor);
            }else{
                messageDisplay.textContent = "Try Again..";
                this.style.backgroundColor = "black";
            }     
        }); 
    }
}

function reset(){
    //generate new colors
    colors = generateRandomColors(numSquares);
    //pick a new goalColor
    goalColor = _goalColor();
    //change colorDisplay
    colorDisplay.textContent = goalColor;
    resetBtn.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for(let i = 0 ; i < sq.length ; i++){
        if (colors[i]) {
            sq[i].style.display = "block";
            sq[i].style.backgroundColor = colors[i];           
        } else {
            sq[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

resetBtn.addEventListener("click",function(){
    reset();
});


//color related functions

function changeColors(color){
    for (let i = 0; i < sq.length; i++) {
        sq[i].style.backgroundColor = color;
    }
}

function _goalColor(){
    var random =  Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var array = [];
    //add num colors to array
    for(let i = 0; i < num ; i++){
        array.push(randomColor());
    }
    //return array
    return array;
}

function randomColor(){
    //pick a red
    var r = Math.floor(Math.random()*256);
    //pick a green
    var g = Math.floor(Math.random()*256);
    //pick a blue
    var b =Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}