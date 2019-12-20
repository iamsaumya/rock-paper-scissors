function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper") {
        return 0;
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        return 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return 1;
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        return 0;
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        return 1;
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        return 0;
    }

    return;
}

let user = 0;
let computer = 0;
const btns = document.querySelectorAll(".youbtn");
btns.forEach(youbtn => youbtn.addEventListener("click", checkAfterClick));

function checkAfterClick(e) {

    const status = document.getElementById("status");
    const playerSelection = this.getAttribute("id");
    const computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection)
    if (result == 1) {
        user++;
        status.textContent = "You Win!";
    } else if (result == 0) {
        computer++;
        status.textContent = "You Lose!";
    } else {
        status.textContent = "It is a Draw";
    }

    const youcounter = document.getElementById("youcounter");
    youcounter.textContent = `${user}`;
    const machinecounter = document.getElementById("machinecounter");
    machinecounter.textContent = `${computer}`;

    if (user === 5 || computer === 5) {
        if (user === 5) {
            status.textContent = "You won the Championship <3";
        } else {
            status.textContent = "Better luck next time!";
        }
    }
}

function reset() {
    user = 0;
    computer = 0;
    const youcounter = document.getElementById("youcounter");
    youcounter.textContent = "0";
    const machinecounter = document.getElementById("machinecounter");
    machinecounter.textContent = "0";
    const status = document.getElementById("status");
    status.textContent = "";
}

function computerPlay() {
    let randomnumber = Math.floor(Math.random() * 3);
    var choices = ['rock', 'paper', 'scissor'];
    return choices[randomnumber];
}
