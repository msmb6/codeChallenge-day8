const randForm = document.getElementById("rand-form");
const randRange = document.getElementById("rand-range");
const userAnswer = document.getElementById("user-answer");
const checkInput = randForm.querySelector("#answer-form h4:first-child");
const checkAnswer = randForm.querySelector("#answer-form h4:last-child");

function playRand(event) {
  event.preventDefault();
  const machineAnswer = Math.floor(Math.random() * Number(randRange.value) + 1);
  checkInput.innerText = `You chose: ${userAnswer.value}, the machine chose: ${machineAnswer}.`;

  const answer = Number(userAnswer.value);
  if (answer === machineAnswer) {
    checkAnswer.innerText = "You win!";
  } else {
    checkAnswer.innerText = "You lose!";
  }
}
randForm.addEventListener("submit", playRand);
