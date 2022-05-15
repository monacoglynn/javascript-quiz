const startButton = document.querySelector('.start-button');
const timer = document.querySelector('.timer');
const title = document.querySelector('.splash');
const infoText = document.querySelector('.info-text');
const questionDiv = document.querySelector('.quiz-box');
const isRight = document.querySelector('.is-right');
const visitHighScore = document.querySelector('.show-score');
const newH2 = document.createElement('h2');
const header = document.querySelector('.navbar');





const listOfQs = [{
        question: 'How many keys does a piano have?',
        choices: ['80 keys', '88 keys', '100 keys', '75 keys'],
        answer: '88 keys'
    },
    {
        question: 'What is the full name of the piano?',
        choices: ['Pianissimo', 'Fortepiano', 'Pianoforte', 'Trick question, the full name is piano'],
        answer: 'Pianoforte'
    },
    {
        question: 'What time period was the piano invented?',
        choices: ['1500s', '1600s', '1700s', '1800s', ],
        answer: '1700s'
    },
    {
        question: 'With all of the strings tune, how much tension weight does a typical grand piano hold?',
        choices: ['45,000 lbs', '10,000 lbs', '20,000 lbs', '8,800 lbs'],
        answer: '45,000 lbs'
    },
    {
        question: 'What instrument did piano the invention of the piano make somewhat irrelevant?',
        choices: ['Keychord', 'Harpchord', 'Harpsichord', 'Playchord'],
        answer: 'Harpsichord'
    },
    {
        question: 'Sound on the piano is produced when _____ hit the strings',
        choices: ['Keys', 'Fingers', 'Guitar picks', 'Hammers'],
        answer: 'Hammers'
    },
    {
        question: 'Which ones of these is NOT a keyboard instrument?',
        choices: ['Organ', 'Rhodes', 'Celeste', 'Theremin'],
        answer: 'Theremin'
    }
]
let currentQuestion;
let highScore = [];
let timeLeft;

function init() {
    let previousHighScore = JSON.parse(localStorage.getItem('highScore'));
    if (previousHighScore == null) {
        console.log('No scores');
    } else {
        highScore = previousHighScore;
    }

}

init();


//write function to display high scores after quiz is finished.
function showHighScore() {
    let initialsInput = document.querySelector('input').value;
    // check if the form has text in it
    if (!initialsInput) {
        alert('please enter initials');
        // if not, alert and stay on page
        enterNameHighScore();
    } else {
        // if yes, add entered text and score to highScore array.
        highScore.push(initialsInput, Number(timer.textContent));
        console.log(highScore);
        localStorage.setItem('highScore', JSON.stringify(highScore));
        location.href = './highScore.html';

    }
}


function enterNameHighScore() {
    // clear the question box
    questionDiv.innerHTML = '';
    // add text and a form to enter initials for high score.
    newH2.textContent = 'Please enter your initials';
    questionDiv.appendChild(newH2);
    const highScoreForm = document.createElement('input');
    questionDiv.appendChild(highScoreForm);

    // create a submit button to submit score
    const newBtn = document.createElement('button');
    newBtn.textContent = 'Submit';
    questionDiv.appendChild(newBtn);
    newBtn.addEventListener('click', showHighScore);
}

function countdown() {
    timeLeft = 60;
    let timeInterval = setInterval(() => {
        timeLeft--;
        console.log(timeLeft);
        if (timeLeft > 0 && currentQuestion < listOfQs.length) {
            timer.textContent = timeLeft;
            // if wrong answer
            // if you win stop timer
        } else if (timeLeft == 0) {
            timer.textContent = 0;
            console.log('you lose');
            clearInterval(timeInterval);
            enterNameHighScore();
        } else {
            console.log('you finished!');
            clearInterval(timeInterval);

        }
    }, 1000);
}

function resolveAnswer(event) {

    let userPick = event.target.textContent
    console.log(userPick)
    // console.log(this)
    let newP = document.createElement('p');
    isRight.textContent = '';

    if (userPick == listOfQs[currentQuestion].answer) {
        //nice well done
        console.log("correct")
        newP.textContent = 'YOU GOT IT RIGHT!'
        isRight.appendChild(newP);
        setTimeout(() => isRight.innerHTML = '', 1000)
    } else {
        //decrement time remaining
        console.log("incorrect")
        newP.textContent = 'BUMMER! THAT WAS INCORRECT!';
        isRight.appendChild(newP);
        setTimeout(() => isRight.innerHTML = '', 1000)
        timeLeft -= 7;
    }
    currentQuestion++;
    if (currentQuestion < listOfQs.length) {
        showQuestion()
    } // show high score entry screen
    else {
        enterNameHighScore();

    }
}

function showQuestion() {
    // questionDiv
    questionDiv.innerHTML = '';
    // this generates the h2 that contains the question for the quiz.
    questionDiv.innerHTML = `<h2 style="width: 100%">${listOfQs[currentQuestion].question}</h2>`
    // this loop creates all the question buttons
    for (i = 0; i < listOfQs[currentQuestion].choices.length; i++) {
        console.log()
        var newBtn = document.createElement("button");
        newBtn.textContent = listOfQs[currentQuestion].choices[i];
        newBtn.addEventListener('click', resolveAnswer);
        questionDiv.appendChild(newBtn)
    }
}


function startQuiz() {
    // sets the timer and starts the countdown.
    timer.textContent = 60;
    countdown();
    // set the question index to 0 the first question
    currentQuestion = 0;
    showQuestion();
}



startButton.addEventListener('click', startQuiz);