var wins = 0;
var loses = 0;
var userChoices = [];
var computerChoices = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

var guess = 9;



function selectHTMLID(){
    document.querySelector("#loses").innerText = loses;
    document.querySelector("#wins").innerText = wins;
    document.querySelector("#guess").innerText = guess;
    document.querySelector("#userChoices").innerText = userChoices;
}

//Random Choice

var randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];


//overall gameplay
selectHTMLID();


// check random guess

console.log(randomChoice);

function gameplay(){

    var user_input = event.key;
    userChoices.push(user_input);
    selectHTMLID();
    
    if (userChoices == randomChoice){

        wins++;
        
        guess= 9;
        
        userChoices = [];

        randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        
        selectHTMLID();

            //check for computer's choice
            console.log(randomChoice);

    } else {

        console.log(randomChoice);
        guess--;

        if(guess == 0){

            loses++;
            
            guess = 9;
            
            selectHTMLID();
            
            userChoices = [];
            
            randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    
            //check for computer's choice
            console.log(randomChoice);
        }
    }

}

document.onkeypress = gameplay;
