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
var fourthAnswer = document.querySelector(".fourthAnswer");
var answerBtn = document.querySelectorAll(".answer");

// variables containing my questions and answers
var questions = [
  {
    question: "What is 4 + 2?",
    answer1: "8",
    answer2: "24",
    answer3: "6",
    answer4: "42",
    answer: "6",
    },
  {
    question: "What is 4 x 2?",
    answer1: "10", 
    answer2: "24",
    answer3: "8", 
    answer4: "22",
    answer: "8",
  },
  {
    question: "What is 4 squared?",
    answer1: "16",
    answer2: "4",
    answer3: "2",
    answer4: "44",
    answer: "16",
  },
  {
    question: "What is the permutation of (4, 2)?",
    answer1: "12",
    answer2: "63",
    answer3: "34",
    answer4: "24",
    answer: "12",
  },
  {
    question: "What is the combinatoric of (4, 2)?",
    answer1: "43",
    answer2: "6",
    answer3: "39",
    answer4: "20",
    answer: "6",
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

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerEl.textContent = "TIME'S UP!"
      scoreEl.textContent = "Score: 0";
    }
  }, 1000);
}

function startQuiz() {
  
  startBtn.classList.add("hide");

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
firstAnswer.addEventListener('click', checkFirstAnswer);

function checkFirstAnswer() {
  var expression = questions[questionNumber].answer;
  var expression1 = questions[questionNumber].answer1;

  if (expression !== expression1) {
    timeLeft = Math.floor(timeLeft*0.95);
  } 

  showNextQuestion();
}

secondAnswer.addEventListener('click', checkSecondAnswer);

function checkSecondAnswer() {
  var expression = questions[questionNumber].answer;
  var expression2 = questions[questionNumber].answer2;

  if (expression !== expression2) {
    timeLeft = Math.floor(timeLeft*0.95);
  } 

  showNextQuestion();
}

thirdAnswer.addEventListener('click', checkThirdAnswer);

function checkThirdAnswer() {
  var expression = questions[questionNumber].answer;
  var expression3 = questions[questionNumber].answer3;

  if (expression !== expression3) {
    timeLeft = Math.floor(timeLeft*0.95);
  } 

  showNextQuestion();
}

fourthAnswer.addEventListener('click', checkFourthAnswer);

function checkFourthAnswer() {
  var expression = questions[questionNumber].answer;
  var expression4 = questions[questionNumber].answer4;

  if (expression !== expression4) {
    timeLeft = Math.floor(timeLeft*0.95);
  } 

  showNextQuestion();
}

function showNextQuestion() {
  questionNumber++;
  if (questionNumber === questions.length) {
    finishBtn.classList.remove("hide");
  } else {
    questionEl.innerText = questions[questionNumber].question;
    firstAnswer.innerText = questions[questionNumber].answer1;
    secondAnswer.innerText = questions[questionNumber].answer2;
    thirdAnswer.innerText = questions[questionNumber].answer3;
    fourthAnswer.innerText = questions[questionNumber].answer4;
  };
};

// functions for finish events
finishBtn.addEventListener('click', stop)

function stop() {  
  clearInterval(timerInterval);
  scoreEl.textContent = "Score: " + timeLeft;
}