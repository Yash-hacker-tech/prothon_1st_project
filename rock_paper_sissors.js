const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector("#resultDisplay");

const playGame = (playerChoice) => 
{
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(`Computer chose: ${computerChoice}`);
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    if (playerChoice === computerChoice) 
    {
        resultDisplay.textContent = "IT'S A TIE! Try Again!";
        resultDisplay.style.textShadow = "1px 1px 10px #1F51FF,2px 2px 15px #1F51FF,3px 3px 20px #1F51FF";
        computerDisplay.style.textShadow = "1px 1px 10px #1F51FF,2px 2px 15px #1F51FF,3px 3px 20px #1F51FF";
        playerDisplay.style.textShadow = "1px 1px 10px #1F51FF,2px 2px 15px #1F51FF,3px 3px 20px #1F51FF";
    } else if 
        (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) 
    {
        resultDisplay.textContent = "YOU WIN!";
        resultDisplay.style.textShadow = "1px 1px 10px #39FF14,2px 2px 15px #39FF14,3px 3px 20px #39FF14";
        computerDisplay.style.textShadow = "1px 1px 10px #39FF14,2px 2px 15px #39FF14,3px 3px 20px #39FF14";
        playerDisplay.style.textShadow = "1px 1px 10px #39FF14,2px 2px 15px #39FF14,3px 3px 20px #39FF14";
    }   
    else 
    {
        resultDisplay.textContent = "YOU LOSE!";
        resultDisplay.style.textShadow = "1px 1px 10px #FF3131,2px 2px 15px #FF3131,3px 3px 20px #FF3131";
        computerDisplay.style.textShadow = "1px 1px 10px #FF3131,2px 2px 15px #FF3131,3px 3px 20px #FF3131";
        playerDisplay.style.textShadow = "1px 1px 10px #FF3131,2px 2px 15px #FF3131,3px 3px 20px #FF3131";
    }
};