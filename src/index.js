const randForm = document.getElementById("rand-form");
const randRange = document.getElementById("rand-range");
const userAnswer = document.getElementById("user-answer");
const checkInput = randForm.querySelector("#answer-form p:first-child");
const checkAnswer = randForm.querySelector("#answer-form p:last-child");

function playRand(event) {
  event.preventDefault();
  const machineAnswer = Math.ceil(
    Math.random() * parseInt(randRange.value, 10)
  );
  checkInput.innerText = `You chose: ${userAnswer.value}, the machine chose: ${machineAnswer}.`;

  const answer = parseInt(userAnswer.value, 10);
  if (answer === machineAnswer) {
    checkAnswer.innerHTML = "<strong>You win!</strong>";
  } else {
    checkAnswer.innerHTML = "<strong>You lose!</strong>";
  }
}
randForm.addEventListener("submit", playRand);
