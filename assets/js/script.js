// variables for functions once quiz starts
var startBtn = document.getElementById("start");
var timerEl = document.getElementById("timer");

// variables for functions once quiz ends
var inputEl = document.getElementById("initials");
var scoreEl = document.getElementById("score");
var submitEl = document.getElementById("submission");
var formEl = document.getElementById("form");
var finishBtn = document.getElementById("finish");

// variables for functions as quiz continues
var questionEl = document.getElementById("question");
var firstAnswer = document.querySelector(".firstAnswer")
var secondAnswer = document.querySelector(".secondAnswer");
var thirdAnswer = document.querySelector(".thirdAnswer");
var fourthAnswer = document.querySelector(".fourthAnswer")
var nextBtn = document.getElementById("next");

// variables containing my questions and answers
var questions = [
  {
    question: "What is 4 + 2?",
    answer1: "8",
    answer2: "24",
    answer3: "6",
    answer4: "42",
    answer: 3,
    },
  {
    question: "What is 4 x 2?",
    answer1: "10", 
    answer2: "24",
    answer3: "8", 
    answer4: "22",
    answer: 3,
  },
  {
    question: "What is 4 squared?",
    answer1: "16",
    answer2: "4",
    answer3: "2",
    answer4: "44",
    answer: 1,
  },
  {
    question: "What is the permutation of (4, 2)?",
    answer1: "12",
    answer2: "63",
    answer3: "34",
    answer4: "24",
    answer: 1,
  },
  {
    question: "What is the combinatoric of (4, 2)?",
    answer1: "43",
    answer2: "6",
    answer3: "39",
    answer4: "20",
  },
];

// variables for clicker events
var timeCounter = 0;
var questionNumber = 0;
var timeLeft = 60;
var timerInterval;
var score;


// functions for start events
startBtn.addEventListener('click', startQuiz);

function start() {
// Sets interval in variable
startBtn.classList.add("hide");

timerInterval = setInterval(function() {
  timeLeft--;
  timerEl.textContent = timeLeft + " second(s) left";

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      timerEl.textContent = "TIME'S UP!"
      scoreEl.textContent = "Score: 0";
    }
  }, 1000);
}

function startQuiz() {
  
  startBtn.classList.add("hide");
  nextBtn.classList.remove("hide");

  start();
  showFirstQuestion();
}

function showFirstQuestion() {
  questionEl.innerText = questions[questionNumber].question;
  firstAnswer.innerText = questions[questionNumber].answer1;
  secondAnswer.innerText = questions[questionNumber].answer2;
  thirdAnswer.innerText = questions[questionNumber].answer3;
  fourthAnswer.innerText = questions[questionNumber].answer4;
}

// functions for continuous events
nextBtn.addEventListener("click", showNextQuestion);

function showNextQuestion() {
  questionNumber++;
  questionEl.innerText = questions[questionNumber].question;
  firstAnswer.innerText = questions[questionNumber].answer1;
  secondAnswer.innerText = questions[questionNumber].answer2;
  thirdAnswer.innerText = questions[questionNumber].answer3;
  fourthAnswer.innerText = questions[questionNumber].answer4;

  if (questionNumber === questions.length - 1) {
    finishBtn.classList.remove("hide");
    nextBtn.classList.add("hide");
  } else {
    questionEl.innerText = questions[questionNumber].question;
  };

  if (firstAnswer.style.background-color === "green") {
    firstAnswer.style.background-color === "blue";
  };
};

firstAnswer.addEventListener("click", function() {
  firstAnswer.setAttribute("style", "background-color: green");
});

// functions for finish events
finishBtn.addEventListener('click', stop)

function stop() {  
  clearInterval(timerInterval);
  scoreEl.textContent = "Score: " + timeLeft;
}

/* var myQuestions = [
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
    answer: [
      {text: "10", correct: false},
      {text: "24", correct: false},
      {text: "8", correct: true},
      {text: "22", correct: false}
    ]
    },
  {
    question: "What is 4 squared?",
    answer: [
      {text: "16", correct: true},
      {text: "4", correct: false},
      {text: "2", correct: false},
      {text: "44", correct: false}
    ]
    },
  {
    question: "What is the permutation of (4, 2)?",
    answer: [
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
]; */

