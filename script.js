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

//code to make game run//

  
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          return 'Computer won.';
          } else {
            return 'You won!';
          }
    }
  
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer won.';
        } else {
            return 'You won!';
        }
    }
  
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer won.';
        } else {
            return 'You won!';
        }
    }
  
    if (userChoice === 'bomb') {
        return 'You won!';
    }
  };
  
  const playGame = (userChoice) => {
      const computerChoice = getComputerChoice();
      console.log(`You chose: ${userChoice}.`);
      console.log(`Computer chose: ${computerChoice}.`);
     
      console.log(determineWinner(userChoice, computerChoice));
  };
  
