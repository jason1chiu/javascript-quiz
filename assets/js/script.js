// variables for functions once quiz starts
var startBtn = document.getElementById("start");
var timerEl = document.getElementById("timer");

// variables for functions once quiz ends
var inputEl = document.getElementById("initials");
var scoreEl = document.getElementById("finalscore");
var submissionInfo = document.getElementById("submissionInfo");
var submitBtn = document.getElementById("submit");

// variables for functions as quiz continues
var questionsEl = document.getElementById("questions")
var questionEl = document.getElementById("question");
var firstAnswer = document.querySelector(".firstAnswer")
var secondAnswer = document.querySelector(".secondAnswer");
var thirdAnswer = document.querySelector(".thirdAnswer");
var fourthAnswer = document.querySelector(".fourthAnswer");
var check = document.querySelector(".check");

// variables containing my questions and answers
var questions = [
  {
    question: "What is 4 + 2?",
    answer1: "8",
    answer2: "24",
    answer3: "6",
    answer4: "42",
    answer: "c",
    },
  {
    question: "What is 4 x 2?",
    answer1: "10", 
    answer2: "24",
    answer3: "8", 
    answer4: "22",
    answer: "c",
  },
  {
    question: "What is 4 squared?",
    answer1: "16",
    answer2: "4",
    answer3: "2",
    answer4: "44",
    answer: "a",
  },
  {
    question: "What is the permutation of (4, 2)?",
    answer1: "12",
    answer2: "63",
    answer3: "34",
    answer4: "24",
    answer: "a",
  },
  {
    question: "What is the combinatoric of (4, 2)?",
    answer1: "43",
    answer2: "6",
    answer3: "39",
    answer4: "20",
    answer: "b",
  },
];

// variables for clicker events
var timeCounter = 0;
var questionNumber = 0;
var timeLeft = 60;
var timerInterval;
var score;

// button to click to start quiz
startBtn.addEventListener('click', startQuiz);

// function to start timer for quiz
function start() {
// Sets interval in variable
startBtn.classList.add("hide");
questionsEl.classList.remove("hide");

timerInterval = setInterval(function() {
  timeLeft--;
  timerEl.textContent = timeLeft + " second(s) left";

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      submissionInfo.classList.remove("hide");
      timerEl.textContent = "TIME'S UP!"
      scoreEl.textContent = "0";
    }
  }, 1000);
}

// function to hide start button, start timer and show first question
function startQuiz() {

  startBtn.classList.add("hide");

  start();
  showFirstQuestion();
}

// function to show first question using index of 0 from questionNumber
function showFirstQuestion() {
  questionEl.innerText = questions[questionNumber].question;
  firstAnswer.innerText = questions[questionNumber].answer1;
  secondAnswer.innerText = questions[questionNumber].answer2;
  thirdAnswer.innerText = questions[questionNumber].answer3;
  fourthAnswer.innerText = questions[questionNumber].answer4;
}

// variable to store an expression for checkAnswer()
var expression = "";

// function to check answer and deduct score
function checkAnswer(answerPick) {
  
  expression = questions[questionNumber].answer;

  if (expression !== answerPick) {
    timeLeft = Math.floor(timeLeft * 0.9);
    check.textContent = "Wrong!";
    check.style.color = "red";
  } else {
    check.textContent = "Correct!";
    check.style.color = "green";
  }

  setTimeout(function() {
    check.textContent = "";
  }, 1000);

  showNextQuestion();
}

// function to show next question, and disable answer buttons, show submission form and submit button after answer five questions
function showNextQuestion() {

  questionNumber++;
  if (questionNumber === questions.length) {
    stop();
    firstAnswer.disabled = true;
    secondAnswer.disabled = true;
    thirdAnswer.disabled = true;
    fourthAnswer.disabled = true;
    submissionInfo.classList.remove("hide");
    submitBtn.classList.remove("hide");
  } else {
    questionEl.innerText = questions[questionNumber].question;
    firstAnswer.innerText = questions[questionNumber].answer1;
    secondAnswer.innerText = questions[questionNumber].answer2;
    thirdAnswer.innerText = questions[questionNumber].answer3;
    fourthAnswer.innerText = questions[questionNumber].answer4;
  };
};

// function to stop timer and show score after answering 5 questions before timer reach 0.
function stop() {  
  clearInterval(timerInterval);
  scoreEl.textContent = timeLeft;
}

// event listener to submit initials and scores using function saveScores
submitBtn.addEventListener('click', saveScores);

// create an array for high scores
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// function to store scores, and sort them in descending order
function saveScores() {
  var records = {
    initials: inputEl.value,
    score: timeLeft,
  }

  highScores.push(records);

  highScores.sort(function (x, y) {
    return y.score - x.score
  });

  localStorage.setItem("highScores", JSON.stringify(highScores));
}

var highScoreEl = document.getElementById("highScore");

// event listener to view high scores using function showScores
highScoreEl.addEventListener('click', showScores);

// function to create a table with the headers Initials and Scores, and cells containing the initials and scores
function showScores() {
  var thead = document.querySelector("#table thead");
  thead.innerHTML = "";
  var headers = ["Initials", "Scores"];
    headers.forEach( function(item) {
    var th = document.createElement("th");
    th.innerText = item;
    thead.append(th);
  })

  var tbody = document.querySelector("#table tbody");
  tbody.innerHTML = ""
  highScores.forEach( function(item) {
    var row = document.createElement("tr");
    var initials = document.createElement("td");
    var scores = document.createElement("td");
    initials.innerText =  item.initials || "unknown";
    scores.innerText = item.score;
    row.append(initials, scores);
    tbody.append(row);
  })
}

