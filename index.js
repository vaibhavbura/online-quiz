const quizData = [
  {
    question: "Who is known as father of Artificial Intelligence?",
    options: [
      "Charles Babbage",
      "Alan Turing",
      "John McCarthy",
      "James Gosling",
    ],
    correct: 2,
  },
  {
    question:
      "Who amongst the following has called Rabindranath Tagore THE GREAT SENTINEL?",
    options: ["Abdul Kalam", "Mahatma Gandhi", "Dr.Rajendra Prasad", "Subash Chandra Bose"],
    correct: 1,
  },
  {
    question:
      "What is the JavaScript function used to select an HTML element by its id?",
    options: [
      "document.query",
      "getElementById",
      "selectElement",
      "findElementById",
    ],
    correct: 1,
  },
  {
    question:
      "Who is known for the theory of relativity?",
    options: ["Issac Newton", " Galileo Galilei", "Albert Einstein", "Stephen Hawking"],
    correct: 2,
  },
  {
    question: 
    "_____are attempts by individuals to obtain confidential information from you by falsifying their identity?",
    options: ["Phishing trips", "Computer Viruses", "Phishing scams", "Spyware Scams"],
    correct: 2,
  },
];



const answersElem = document.querySelectorAll(".answer");
console.log(answersElem);
const [questionElem, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, #option_1, #option_2, #option_3, #option_4"
  );

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];

  questionElem.innerText = `${currentQuiz + 1}: ${question}`;
  
  options.forEach((curOption, index) => {
    
    return (window[`option_${index + 1}`].innerText = curOption);
  });
};

loadQuiz();



const getSelected = () => {
  const answerElement = Array.from(answersElem);
  return answerElement.findIndex((curOption) => curOption.checked);
};

const deselectAnswers = () => {
  answersElem.forEach((curElem) => (curElem.checked = false));
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getSelected();
  console.log(selectedOptionIndex);

  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score = score + 1;
  }

  
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    deselectAnswers();
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <div class="result">
    <h2>🏆 Your Score: ${score}/${quizData.length} Correct Answers</h2>
    <p>Congratulations on completing the quiz! 🎉</p>
    <button class="reload-button" onclick="location.reload()">Play Again 🔄</button>
    </div>
  `;
  }
});
