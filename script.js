function rockSelect() {
    let myElem = document.querySelector("#Rock");
    myElem.classList.add("selectedRock");
    let otherButton1 = document.querySelector("#Paper");
    let otherButton2 = document.querySelector("#Scissors");
    otherButton1.classList.remove("selectedPaper");
    otherButton2.classList.remove("selectedScissors");
}

function paperSelect() {
    let myElem = document.querySelector("#Paper");
    myElem.classList.add("selectedPaper");
    let otherButton1 = document.querySelector("#Rock");
    let otherButton2 = document.querySelector("#Scissors");
    otherButton1.classList.remove("selectedRock");
    otherButton2.classList.remove("selectedScissors");
}

function scissorsSelect() {
    let myElem = document.querySelector("#Scissors");
    myElem.classList.add("selectedScissors");
    let otherButton1 = document.querySelector("#Paper");
    let otherButton2 = document.querySelector("#Rock");
    otherButton1.classList.remove("selectedPaper");
    otherButton2.classList.remove("selectedRock");
}
