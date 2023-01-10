var startEl = document.getElementById("start");
var timerEl = document.getElementById("timer")
var questionsEl = document.getElementById("questions");
var inputEl = document.getElementById("initials")

startEl.addEventListener('click', setTime);
startEl.addEventListener('click', startQuiz);

var timeLeft = 60;

function setTime() {
// Sets interval in variable
var timerInterval = setInterval(function() {
  timeLeft--;
  startEl.textContent = timeLeft + " second(s) left";

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      startEl.textContent = "TIME'S UP!"
      questionsEl.classList.add("hide");
      inputEl.classList.remove("hide");
    }
  }, 1000);

}

function startQuiz() {
  timerEl.classList.remove("hide");
  questionsEl.classList.remove("hide");

}

function nextQuestion() {

}

function selectAnswer() {

}


