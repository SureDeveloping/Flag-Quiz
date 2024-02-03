
let flagNumber = 0;

/** Function starts the quiz by clicking on the corresponding button
 */
function startQuiz(link) {
    location.href = "game.html";
    loadflags(flagNumber);
    loadanswers(flagNumber);
}

/** Function starts the next question, loads a flag and answers by clicking on the corresponding button
 */
function nextFlag() {
    loadflags(flagNumber);
    loadanswers(flagNumber);
}

/** Function opens the rules page by clicking on the corresponding button
 */
function rules(link) {
    location.href = "rules.html";
}

/** Function opens the homepage, index.html by clicking on the corresponding button
 */
function home(link) {
    location.href = "index.html";
}

// Flags with answer Options
const flags = [
    {
    "flag": "assets/images/great-britain-flag.webp",
    "answers": [
        "Spain", "Belgium", "Great Britain"
    ],
    "correct": 3
    },

    {
    "flag": "assets/images/germany-flag.webp",
    "answers": [
        "Germany", "Spain", "Sweden"
    ],
    "correct": 1
    },

    {
    "flag": "assets/images/netherlands-flag.webp",
    "answers": [
        "France", "Netherlands", "Great Britain"
    ],
    "correct": 2
    } 
]

const quizLength = flags.length;

/**
 * This function loads flags option, questions 
 * @param {int} flagNumber
 */
function loadFlags(flagNumber) {
  question.innerText = questions[flagNumber].question;
}

/**
 * This function loads answers options into the answer buttons
 * @param {int} flagNumber
 */
function loadAnswers(flagNumber) {
    answer1.innerText = flags[flagNumber].answers[0];
    answer2.innerText = flags[flagNumber].answers[1];
    answer3.innerText = flags[flagNumber].answers[2];
  }
