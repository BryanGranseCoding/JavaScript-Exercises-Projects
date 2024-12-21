const btn = document.querySelector('#submit');
// Define the quiz questions and answers
const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Madrid", "Rome"],
    answer: 0
  },
  {
    question: "What is the largest country in the world?",
    choices: ["USA", "Russia", "Canada", "China"],
    answer: 1
  },
  {
    question: "What is the currency of Japan?",
    choices: ["Yen", "Dollar", "Euro", "Pound"],
    answer: 0
  }
];

// Set the quiz duration (in seconds)
const quizDuration = 30;

// Initialize the quiz and timer
let currentQuestion = 0;
let score = 0;
let timer = quizDuration;
let intervalId;

// Display the current question and choices
function displayQuestion() {
  btn.classList.add('hidden'); // once click this button will be hidden
  const question = questions[currentQuestion];
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");

  questionElement.textContent = question.question;
  choicesElement.innerHTML = "";

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => {
      selectAnswer(index);
    });
    choicesElement.appendChild(button);
  });
}

// Select the answer and move to the next question
function selectAnswer(index) {
  const question = questions[currentQuestion];

  if (index === question.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

// Start the quiz and timer
function startQuiz() {
  displayQuestion();
  intervalId = setInterval(() => {
    timer--;
    document.getElementById("timer").textContent = `Time remaining: ${timer}`;

    if (timer <= 0) {
      endQuiz();
    }
  }, 1000);
}

// End the quiz and display the results
function endQuiz() {
  clearInterval(intervalId);
  document.getElementById("question").textContent = `You scored ${score} out of ${questions.length}!`;
  document.getElementById("choices").innerHTML = "";
  document.getElementById("timer").textContent = "";
  document.getElementById("submit").disabled = true;
}

// Add a click event listener to the submit button to start the quiz
btn.addEventListener("click", () => {
  startQuiz();
});
