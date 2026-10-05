let randomNumber = parseInt(Math.random()*100+1);

const sumit = document.querySelector("#subt");
const userInput = document.querySelector("#guessFild");
const guessSlot = document.querySelector(".guesses");
const renaming = document.querySelector(".lastresult");
const loeOrhi = document.querySelector(".lowOrhi");
const startOver = document.querySelector(".resultpara");
const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    sumit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        vaildGuess(guess);
    })
}

function vaildGuess(guess){
    if (isNaN(guess)) {
        alert("Please guess a valid number ");
    }
    else if(guess < 1){
        alert("please enter a number more than 1");
    }
    else if(guess > 100){
        alert("please enter a number less than 100");
    }else{
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over Rendom number was ${randomNumber}`);
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Number is Too low`);
    }
    else if(guess > randomNumber){
        displayMessage(`Number is Too High`);
    }
}

function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}   `;
    numGuess++ ;
    renaming.innerHTML = `${11 - numGuess}`
}
function displayMessage(message){
    loeOrhi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Dame</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        renaming.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p)
        playGame = true;
    })
}