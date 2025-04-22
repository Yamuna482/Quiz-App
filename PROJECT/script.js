const quizcontainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionscontainer = document.getElementById("options-container");
const submitbtn = document.getElementById("submit");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

const quizQuestions = [
  {
    question: "What is the capital of Telangana?",
    options: ["Hyderabad", "Andhra Pradesh", "Kurnool", "Vijayawada"],
    correctAnswer: "Hyderabad",
  },
  {
    question: "Which year did you pass out?",
    options: [2023, 2024, 2022, 2021],
    correctAnswer: 2023,
  },
  {
    question: "Which branch are you from?",
    options: ["ECE", "CSE", "EEE", "MECH"],
    correctAnswer: "CSE",
  },
];

function loadquestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionscontainer.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;

    optionButton.onclick = function () {
      selectAnswer(option, currentQuestion.correctAnswer);
    };
    optionscontainer.appendChild(optionButton);
  });
}

function selectAnswer(selected, correct) {
  if (selected === correct) {
    feedbackElement.textContent = "Correct Answer!";
    score++;
  } else {
    feedbackElement.textContent =
      "Incorrect. The correct answer is: " + correct;
  }
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    loadquestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  quizcontainer.innerHTML = "<h2>Quiz Completed!</h2>";
  scoreElement.textContent =
    "Final Score: " + score + " out of " + quizQuestions.length;
}

function submitAnswer() {
  const selected = document.querySelector('input[name=option"]checked"');
  if (selected) {
    selectAnswer(selected.value);
  }
}

loadquestion();
