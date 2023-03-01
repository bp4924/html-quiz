const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");

const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-button");

let shuffledQuestions, currentQuestionIndex;
let quizScore = 0;

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
