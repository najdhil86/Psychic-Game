var win = 0;
var lose = 0;

var totalGuesses = 9;

var cOptions = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

var cRandom = Math.floor(Math.random()*cOptions.length);

// Chooses a random letter from cOptions
var cChoice = cOptions[cRandom];

var userChoice = "d";


if (userChoice == cChoice){
    win++;
    console.log(win);
} else {
    lose++;
    totalGuesses--;
    
    console.log(lose);
    console.log(totalGuesses);
}