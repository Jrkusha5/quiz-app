const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

const myQuestions = [
  {
    question: "What is the capital of france?",
    answers: {
      a: "London",
      b: "Paris",
      c: "Berlin"
    },
    correctAnswer: "b"
  },
  {
    question: "What is 4 * 6?",
    answers: {
      a: "24",
      b: "30",
      c: "54"
    },
    correctAnswer: "a"
  },
  {
    question: "Who is the CEO of Tesla?",
    answers: {
      a: "Bill Gates",
      b: "Jeff Bezos",
      c: "Elon Musk"
    },
    correctAnswer: "c"
  },
  {
    question: "Who is the CEO of microsoft?",
    answers: {
      a: "Bill Gates",
      b: "Jeff Bezos",
      c: "Elon Musk"
    },
    correctAnswer: "a"
  }
];

function buildQuiz() {
  const output = [];

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    for (const letter in currentQuestion.answers) {
      answers.push(
        `<label>
           <input type="radio" name="question${questionNumber}" value="${letter}">
           ${letter} :
           ${currentQuestion.answers[letter]}
         </label>`
      );
    }

    output.push(
      `<div class="question">${currentQuestion.question}</div>
       <div class="answer">${answers.join('')}</div>`
    );
  });

  quizContainer.innerHTML = output.join('');
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answer');

  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainers[questionNumber].style.color = 'green';
    } else {
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  alert(`You got ${numCorrect} out of ${myQuestions.length} questions correct`);
}

buildQuiz();

submitButton.addEventListener('click', showResults);