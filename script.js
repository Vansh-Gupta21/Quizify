const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = quizContainer.querySelector(".answer-options");
const nextQuestionBtn = quizContainer.querySelector(".next-question-btn");
const questionStatus = quizContainer.querySelector(".question-status");
const timerDisplay = quizContainer.querySelector(".timer-duration");
const resultContainer = document.querySelector(".result-container");

// Quiz state variables

const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let quizCategory = "programming";
let numberOfQuestions = 10;
let currentQuestion = null;
const questionsIndexHistory = [];
let correctAnswersCount = 0;
let disableSelection = false;


const showQuizResult = () => {
  clearInterval(timer);
  document.querySelector(".quiz-popup").classList.remove("active");
  document.querySelector(".result-popup").classList.add("active");
  const resultText = `You answered <b>${correctAnswersCount}</b> out of <b>${numberOfQuestions}</b> questions correctly. Great effort!`;
  resultContainer.querySelector(".result-message").innerHTML = resultText;
};


const resetTimer = () => {
  clearInterval(timer);
  currentTime = QUIZ_TIME_LIMIT;
  timerDisplay.textContent = `${currentTime}s`;
};


const startTimer = () => {
  timer = setInterval(() => {
    currentTime--;
    timerDisplay.textContent = `${currentTime}s`;
    if (currentTime <= 0) {
      clearInterval(timer);
      disableSelection = true;
      nextQuestionBtn.style.visibility = "visible";
      quizContainer.querySelector(".quiz-timer").style.background = "#c31402";
      highlightCorrectAnswer();

      answerOptions.querySelectorAll(".answer-option").forEach((option) => (option.style.pointerEvents = "none"));
    }
  }, 1000);
};


const getRandomQuestion = () => {
  const categoryQuestions = questions.find((cat) => cat.category.toLowerCase() === quizCategory.toLowerCase())?.questions || [];
  if (questionsIndexHistory.length >= Math.min(numberOfQuestions, categoryQuestions.length)) {
    return showQuizResult();
  }

  const availableQuestions = categoryQuestions.filter((_, index) => !questionsIndexHistory.includes(index));
  const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
  questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
  return randomQuestion;
};

const highlightCorrectAnswer = () => {
  const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
  correctOption.classList.add("correct");
  const iconHTML = `<span class="material-symbols-rounded"> check_circle </span>`;
  correctOption.insertAdjacentHTML("beforeend", iconHTML);
};


const handleAnswer = (option, answerIndex) => {
  if (disableSelection) return;
  clearInterval(timer);
  disableSelection = true;

  const isCorrect = currentQuestion.correctAnswer === answerIndex;
  option.classList.add(isCorrect ? "correct" : "incorrect");
  !isCorrect ? highlightCorrectAnswer() : correctAnswersCount++;

  const iconHTML = `<span class="material-symbols-rounded"> ${isCorrect ? "check_circle" : "cancel"} </span>`;
  option.insertAdjacentHTML("beforeend", iconHTML);

  answerOptions.querySelectorAll(".answer-option").forEach((option) => (option.style.pointerEvents = "none"));
  nextQuestionBtn.style.visibility = "visible";
};


// Render the current question and its options in the quiz
const renderQuestion = () => {
  currentQuestion = getRandomQuestion();
  if (!currentQuestion) return;
  disableSelection = false;
  resetTimer();
  startTimer();

  
  // Updating UI
  nextQuestionBtn.style.visibility = "hidden";
  quizContainer.querySelector(".quiz-timer").style.background = "#32313C";
  quizContainer.querySelector(".question-text").textContent = currentQuestion.question;
  questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`;
  answerOptions.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.classList.add("answer-option");
    li.textContent = option;
    answerOptions.append(li);
    li.addEventListener("click", () => handleAnswer(li, index));
  });
};


const startQuiz = () => {
  document.querySelector(".config-popup").classList.remove("active");
  document.querySelector(".quiz-popup").classList.add("active");

  quizCategory = configContainer.querySelector(".category-option.active").textContent;
  numberOfQuestions = parseInt(configContainer.querySelector(".question-option.active").textContent);
  renderQuestion();
};

configContainer.querySelectorAll(".category-option, .question-option").forEach((option) => {
  option.addEventListener("click", () => {
    option.parentNode.querySelector(".active").classList.remove("active");
    option.classList.add("active");
  });
});


const resetQuiz = () => {
  resetTimer();
  correctAnswersCount = 0;
  questionsIndexHistory.length = 0;
  document.querySelector(".config-popup").classList.add("active");
  document.querySelector(".result-popup").classList.remove("active");
};


nextQuestionBtn.addEventListener("click", renderQuestion);
resultContainer.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
configContainer.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);