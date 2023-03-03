const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");

const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-button");

let shuffledQuestions = [],
  currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  console.log(shuffledQuestions);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
  quizScore = 0;
}

function setNextQuestion() {
  resetState();
  console.log("current question index", currentQuestionIndex);
  console.log("shuffledQuestions", shuffledQuestions[currentQuestionIndex]);

  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  console.log("showQuestion", question.question);
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

// reset
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

// q&a logic
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;

  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "restart";
    startButton.classList.remove("hide");
  }
  if ((selectedButton.dataset = correct)) {
    quizScore++;
    console.log("score", quizScore);
  }
  document.getElementById("right-answers").innerText = quizScore;
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
  console.log("class list", element.classList);
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
  console.log("class list", element.classList);
}

// question bank
const questions = [
  {
    question: "Which is not a primative data type in JavaScript?",
    answers: [
      { text: "Null", correct: false },
      { text: "String", correct: false },
      { text: "Double", correct: true },
      { text: "Boolean", correct: false },
    ],
  },
  {
    question: "What is the DOM?",
    answers: [
      { text: "Domain Orientation Management", correct: false },
      { text: "Document Object Model", correct: true },
      { text: "Dependent Object Method", correct: false },
      { text: "Dumb Old Machine", correct: false },
    ],
  },
  {
    question: "Which is not an example of dynamic typing?",
    answers: [
      { text: "Values have types", correct: false },
      { text: "Variables have no type", correct: false },
      { text: "Variables can change types", correct: false },
      { text: "Variables have types", correct: true },
    ],
  },
];
