document.addEventListener("DOMContentLoaded", () => {
    const choices = document.querySelectorAll(".choice");
    const resultText = document.getElementById("result-text");
    const resetBtn = document.getElementById("reset-btn");

    const choicesArray = ["rock", "paper", "scissors"];

    choices.forEach(choice => {
        choice.addEventListener("click", () => {
            const playerChoice = choice.getAttribute("data-choice");
            const computerChoice = choicesArray[Math.floor(Math.random() * 3)];
            const result = determineWinner(playerChoice, computerChoice);

            resultText.textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
        });
    });

    resetBtn.addEventListener("click", () => {
        resultText.textContent = "";
    });

    function determineWinner(player, computer) {
        if (player === computer) {
            return "It's a draw!";
        }

        if (
            (player === "rock" && computer === "scissors") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper")
        ) {
            return "You win!";
        } else {
            return "Computer wins!";
        }
    }
});