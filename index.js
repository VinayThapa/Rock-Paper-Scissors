let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

userScorePara = document.querySelector("#user-score");
compScorePara = document.querySelector("#comp-score");

// Get user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// main result function
const playGame = (userChoice) => {
    let compChoice = genCompChoice();
    if(userChoice === compChoice) {
        // draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "scissors" ? true : false;
        }
        else if(userChoice === "paper") {
            // rock, scissors
            userWin = compChoice === "rock" ? true : false;
        }
        else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// Generate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let optionIdx = Math.floor(Math.random()*3);
    return options[optionIdx];
};


// condition functions

// drawGame 
const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "black";
}