
//Total Guesses left

var totalGuess = 9;


var grabGuess = document.querySelector(".guesses");

// grabGuess.innerText = totalGuess;

// Wins
var win = 0;

var grabWin = document.querySelector(".wins");

// grabWin.innerText = win;

//Lose
var lose = 0;

var grabLosses = document.querySelector(".loses");

// grabLosses.innerText = lose;


//Random choice of computer choice

//Computer's Option
var cOptions = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

// Makes a random index
var cRandom = Math.floor(Math.random()*cOptions.length)

// Chooses a random letter from cOptions
var cChoice = cOptions[cRandom];


//Your guesses so far. This area of the code will display what letter the user is typing

// var userLetter = "";
var guessKey = document.querySelector(".userInputs");

function userKey(){
    //this event object available to us
    //event.key gives you the key pressed
    var guessKey = document.querySelector(".userInputs");
    
    guessKey.innerText = event.key;
}

var userLetter = [];

document.onkeyup = userKey;

function gameFunction(event) {

    var user_input = event.key;

    if (user_input == cChoice) {

        win++;
        totalGuess = 9;

        
    }


}