let flagNumber = 0;

/** Function starts the quiz by clicking on the corresponding button
 */
function startQuiz(link) {
    loadFlags(flagNumber);
    loadAnswers(flagNumber);
}

/** Function starts the next question, loads a flag and answers by clicking on the corresponding button
 */
function nextFlag() {
    flagNumber++;
    if (flagNumber < quizLength) {
        loadFlags(flagNumber);
        loadAnswers(flagNumber);
    } else {
        alert('That was the last Question. If you would like to Play Again, press Quit and then Start the Quiz again.');
}
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
    }, 

    {
    "flag": "assets/images/albania-flag.webp",
    "answers": [
        "Great Britain", "Albania", "Spain"
    ],   
    "correct": 2
    },

    {
    "flag": "assets/images/austria-flag.webp",
    "answers": [
            "Austria","Netherlands", "Spain"
    ],
    "correct": 1
    },
    
    {
    "flag": "assets/images/croatia-flag.webp",
    "answers": [
        "France", "Croatia", "Great Britain"
    ],
    "correct": 2
    }, 

    {
    "flag": "assets/images/denmark-flag.webp",
    "answers": [
        "Denmark", "Spain", "Great Britain"
    ],
    "correct": 1
    }, 

    {
    "flag": "assets/images/finland-flag.webp",
    "answers": [
        "France", "Netherlands", "Finland"
    ],
    "correct": 3
    }, 

    {
    "flag": "assets/images/greece-flag.webp",
    "answers": [
        "France", "Greece", "Great Britain"
    ],
    "correct": 2
    }, 

    {
    "flag": "assets/images/iceland-flag.webp",
    "answers": [
        "France", "Netherlands", "Iceland"
    ],
    "correct": 3
    }, 

    {
    "flag": "assets/images/luxembourg-flag.webp",
    "answers": [
        "Malta", "luxembourg", "Iceland"
    ],
    "correct": 2
    }, 

    {
    "flag": "assets/images/malta-flag.webp",
    "answers": [
        "Malta", "Greece", "Finland"
    ],
    "correct": 1
    }, 

    {
    "flag": "assets/images/poland-flag.webp",
    "answers": [
        "Greece", "Poland", "Iceland"
    ],
    "correct": 2
    }, 

    {
    "flag": "assets/images/sweden-flag.webp",
    "answers": [
        "Sweden", "Netherlands", "Spain"
    ],
    "correct": 3
    } 
];

const quizLength = flags.length;

/**
 * This function loads flags option, questions 
 * @param {int} flagNumber
 */
function loadFlags(flagNumber) {
    document.getElementById("flag").src = flags[flagNumber].flag;
}

/**
 * This function loads answers options into the answer buttons
 * @param {int} flagNumber
 */
function loadAnswers(flagNumber) {
    answer1.innerText = `A:  ${flags[flagNumber].answers[0]}`;
    answer2.innerText = `B:  ${flags[flagNumber].answers[1]}`;
    answer3.innerText = `C:  ${flags[flagNumber].answers[2]}`;
  }

  const answer1 = document.getElementById('answer1');
  const answer2 = document.getElementById('answer2');
  const answer3 = document.getElementById('answer3');
  const score = document.getElementById('score');
  let scoreCount = 0;

/**Function to check the clicked answer
 * @param {*} answerNumber 
 */
function checkAnswer(answerNumber) {
    console.log('answer number chosen: ', answerNumber);
 
    let correctAnswer = flags[flagNumber].correct -1;
    if (answerNumber === correctAnswer) {
       // if correct 
        alert("Thats right!");
        console.log("correctAnswer");
        scoreCount++;
        score.innerText = scoreCount;

    } else {
        alert("Thats wrong");
        console.log("Incorrect answer");
    }

    flagNumber++;
    if (flagNumber < quizLength) {
        loadFlags(flagNumber);
        loadAnswers(flagNumber);
    } else {
        alert('That was the last Question. If you would like to Play Again, press Quit and then Start the Quiz again.');
    }
} 

  startQuiz();