function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paperm") {
        return 0;
    } else if (playerSelection === "rock" && computerSelection === "scissorm") {
        return 1;
    } else if (playerSelection === "paper" && computerSelection === "rockm") {
        return 1;
    } else if (playerSelection === "paper" && computerSelection === "scissorm") {
        return 0;
    } else if (playerSelection === "scissor" && computerSelection === "paperm") {
        return 1;
    } else if (playerSelection === "scissor" && computerSelection === "rockm") {
        return 0;
    }

    return;
}

let user = 0;
let computer = 0;
const youbtns = document.querySelectorAll(".youbtn");
const btn = document.querySelectorAll(".btn");
youbtns.forEach(youbtn => youbtn.addEventListener("click", checkAfterClick));


function checkAfterClick(e) {

    const status = document.getElementById("status");
    const playerSelection = this.getAttribute("id");
    const computerSelection = computerPlay();
    const computerbtn = document.getElementById(`${computerSelection}`);
    computerbtn.classList.add("selected");
    this.classList.add("selected");
    btn.forEach(bt => bt.addEventListener("transitionend", removeTransition));

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
        const playagain = document.querySelector("#playagain");
        playagain.addEventListener("click", reset);
        if (user === 5) {
            status.textContent = "You won the Championship <3";
        } else {
            status.textContent = "Better luck next time!";
        }
        btn.forEach(bt => {
            bt.style.visibility = "hidden"
        });
        playagain.style.visibility = "visible";
    }

}

function removeTransition(e) {
    this.classList.remove("selected");
}

function reset(e) {
    user = 0;
    computer = 0;
    const youcounter = document.getElementById("youcounter");
    youcounter.textContent = "0";
    const machinecounter = document.getElementById("machinecounter");
    machinecounter.textContent = "0";
    const status = document.getElementById("status");
    status.textContent = "";
    btn.forEach(bt => {
        bt.style.visibility = "visible"
    });
    this.hide;
    this.style.visibility = "hidden";
}

function computerPlay() {
    let randomnumber = Math.floor(Math.random() * 3);
    var choices = ['paperm', 'rockm', 'scissorm'];
    return choices[randomnumber];
}
