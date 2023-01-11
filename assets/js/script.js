var startEl = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var inputEl = document.getElementById("initials");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer");
var nextEl = document.getElementById("next");
var timerEl = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var submitEl = document.getElementById("submission");
var formEl = document.getElementById("form");
var finishEl = document.getElementById("finish");

startEl.addEventListener('click', startQuiz);
nextEl.addEventListener('click', showQuestion);
finishEl.addEventListener('click', stop)

var i = 0;
var timeLeft = 60;
var timerInterval;

function start() {
// Sets interval in variable
timerInterval = setInterval(function() {
  timeLeft--;
  timerEl.textContent = timeLeft + " second(s) left";

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      timerEl.textContent = "TIME'S UP!"
      questionsEl.classList.add("hide");
      scoreEl.textContent = "Score: 0";
      nextEl.classList.add("hide");
    }
  }, 1000);
}

function stop() {
  clearInterval(timerInterval);

  nextEl.classList.add("hide");
  formEl.classList.remove("hide");
  submitEl.classList.remove("hide");
  scoreEl.textContent = "Score: " + timeLeft;
}

function startQuiz() {
  startEl.classList.add("hide");
  questionsEl.classList.remove("hide");
  nextEl.classList.remove("hide");
  finishEl.classList.remove("hide");
  
  start();
  showQuestion();

  if (i === myQuestions.length) {
    nextEl.classList.add("hide");
  }
}

function showQuestion() {
  questionEl.innerText = myQuestions[i].question;
  i++;
}

answerEl.addEventListener('click', function() {
  if (myQuestions.answers.correct === true) {
    answerEl.setAttribute("style", "background-color: green");
  } else {
    answerEl.setAttribute("style", "background-color: red");
  }
});

var myQuestions = [
  {
    question: "What is 4 + 2?",
    answer: [
      {text: "2", correct: false},
      {text: "6", correct: true},
      {text: "42", correct: false},
      {text: "8", correct: false}
    ]
    },
  {
    question: "What is 4 x 2?",
    answers: [
      {text: "10", correct: false},
      {text: "24", correct: false},
      {text: "8", correct: true},
      {text: "22", correct: false}
    ]
    },
  {
    question: "What is 4 squared?",
    answers: [
      {text: "16", correct: true},
      {text: "4", correct: false},
      {text: "2", correct: false},
      {text: "44", correct: false}
    ]
    },
  {
    question: "What is the permutation of (4, 2)?",
    answers: [
      {text: "12", correct: true},
      {text: "63", correct: false},
      {text: "34", correct: false},
      {text: "24", correct: false}
    ]
    },
  {
    question: "What is the combinatoric of (4, 2)?",
    answers: [
      {text: "43", correct: false},
      {text: "6", correct: true},
      {text: "39", correct: false},
      {text: "20", correct: false}
    ]
    },
];
