let flagNumber = 0;

/** Function starts the quiz by clicking on the corresponding button
 */
function startQuiz() {
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
        document.getElementById("last-flag").style.visibility = "visible";
        document.getElementById("button-general").style.visibility = "hidden";
        document.getElementById("button-answers").style.visibility = "hidden";
        document.getElementById("flag").style.visibility = "hidden";
        document.getElementById("question-headline").style.visibility = "hidden";
}
}

/** Function opens the rules page by clicking on the corresponding button
 */
function rules() {
    location.href = "rules.html";
}
/** Function opens the homepage, index.html by clicking on the corresponding button
 */
function home() {
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
    }, 
    {
    "flag": "assets/images/belgium-flag.webp",
    "answers": [
        "Poland", "Greece", "Belgium"
    ],
    "correct": 3
    }, 

    {
    "flag": "assets/images/bulgaria-flag.webp",
    "answers": [
        "Bulgaria", "Germany", "Albania"
    ],
    "correct": 1
    },

    {
    "flag": "assets/images/swiss-flag.webp",
    "answers": [
        "Poland", "Swiss", "Romania"
    ],
    "correct": 2
    }, 

    {
    "flag": "assets/images/ireland-flag.webp",
    "answers": [
        "Poland", "Ireland", "Swiss"
    ],
    "correct": 2
    }, 

    {
    "flag": "assets/images/slovenia-flag.webp",
    "answers": [
        "Slovenia", "Greece", "Slovakia"
    ],
    "correct": 3
    }, 

    {
    "flag": "assets/images/slovakia-flag.webp",
    "answers": [
        "Slovenia", "Slovakia", "Spain"
    ],
    "correct": 2
    }, 
    
    {
    "flag": "assets/images/romania-flag.webp",
    "answers": [
        "Slovenia", "Slovakia", "Romania"
    ],
    "correct": 3
    }, 
       
    {
    "flag": "assets/images/montenegro-flag.webp",
    "answers": [
        "Slovenia", "Slovakia", "Montenegro"
    ],
    "correct": 3
    }, 

    {
    "flag": "assets/images/czech-flag.webp",
    "answers": [
        "Slovenia", "Czech", "Montenegro"
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
    // make sure background colour is #0B34DE
    answer1.style.backgroundColor = '#0B34DE';
    answer2.style.backgroundColor = '#0B34DE';
    answer3.style.backgroundColor = '#0B34DE';

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
       // if the user clicks the right answer, score up and change color of the buttons
        console.log("correctAnswer");
        scoreCount++;
        score.innerText = scoreCount;

        if (correctAnswer === 0) {
          answer1.style.backgroundColor = '#F0c808'
        }
        if (correctAnswer === 1) {
          answer2.style.backgroundColor = '#F0c808'
        }
        if (correctAnswer === 2) {
          answer3.style.backgroundColor = '#F0c808'
        }

    } else {
        // if the user clicks the wrong answer, change color of the buttons
        if (answerNumber === 0) {
          answer1.style.backgroundColor = '#DD1C1a'
        }
        if (answerNumber === 1) {
          answer2.style.backgroundColor = '#DD1C1a'
        }
        if (answerNumber === 2) {
          answer3.style.backgroundColor = '#DD1C1a'
        }
        // change color of the buttons to show the correct answer
        if (correctAnswer === 0) {
          answer1.style.backgroundColor = '#F0c808'
        }
        if (correctAnswer === 1) {
          answer2.style.backgroundColor = '#F0c808'
        }
        if (correctAnswer === 2) {
          answer3.style.backgroundColor = '#F0c808'
        }
    }

    flagNumber++;
    if (flagNumber < quizLength) {
        // Timeout Function to give the user time to see the right or wrong answer
        setTimeout(function() {
            loadFlags(flagNumber);
            loadAnswers(flagNumber);
        }, 1000);
                  
    } else {
        document.getElementById("last-flag").style.visibility = "visible";
        document.getElementById("button-general").style.visibility = "hidden";
        document.getElementById("button-answers").style.visibility = "hidden";
        document.getElementById("flag").style.visibility = "hidden";
        document.getElementById("question-headline").style.visibility = "hidden";
    }
} 
  startQuiz();