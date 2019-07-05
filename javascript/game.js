
//Total Guesses left
var totalGuess = 9;

// Wins
var win = 0;

//Lose
var lose = 0;


//Random choice of computer choice

//Computer's Option
var cOptions = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

// Makes a random index
var cRandom = Math.floor(Math.random()*cOptions.length)

// Chooses a random letter from cOptions
var cChoice = cOptions[cRandom];

//Checking random letter
// console.log(cChoice);

//conditions to see if

if (cChoice.includes(event.key)){
    console.log(true);
} else{
    console.log(false);
}



//Your guesses so far. This area of the code will display what letter the user is typing

// var userLetter = "";
var guessKey = document.querySelector(".userInputs");

function userKey(){
    //this event object available to us
    //event.key gives you the key pressed
    var guessKey = document.querySelector(".userInputs");
    var userLetter = [];
    guessKey.innerText = event.key;
}

document.onkeyup = userKey;

//empty array
//