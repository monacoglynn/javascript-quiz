var startButton = document.querySelector('.start-button');
var timer = document.querySelector('.timer');
var title = document.querySelector('.splash');
var infoText = document.querySelector('.info-text');
var questionDiv = document.querySelector('.quiz-box');
var main = document.body.children[1];
var newH2 = document.createElement('h2');



var listOfQs = [{
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
        question: ''
    }
]
var currentQuestion;
var highScore = [];
var timeLeft;

//get stats from local storage
function init() {
    var storedHighScore = JSON.parse(localStorage.getItem('highScore'))
    // localStorage.setItem("saveHighscore", JSON.stringify(array))
    if (storedHighScore !== null) {
        highScore = storedHighScore;
    }
}

init();



function countdown() {
    timeLeft = 75;
    var timeInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft > 0 && currentQuestion < listOfQs.length) {
            timer.textContent = timeLeft;
            // if wrong answer
            // if you win stop timer
        } else if (timeLeft = 0) {
            timer.textContent = 0;
            console.log('you lose');
            clearInterval(timeInterval);
        } else {
            console.log('you win!')
            clearInterval(timeInterval);

        }
    }, 1000);
}

//write function to display high scores after quiz is finished.
// function showHighScore() {}

function enterNameHighScore() {
    questionDiv.innerHTML = '';
    newH2.textContent = 'Please enter your initials';
    questionDiv.appendChild(newH2);
    var highScoreForm = document.createElement('input');
    questionDiv.appendChild(highScoreForm);
    var newBtn = document.createElement('button')
    newBtn.textContent = 'Submit'
    newBtn.addEventListener('click', showHighScore)
    questionDiv.appendChild(newBtn);

}

function resolveAnswer(event) {

    var userPick = event.target.textContent
    console.log(userPick)
    // console.log(this)

    if (userPick == listOfQs[currentQuestion].answer) {
        //nice well done
        console.log("correct")
        timeLeft += 4;
    } else {
        //decrement time remaining
        console.log("incorrect")
        timeLeft -= 5;
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

    newH2.textContent = listOfQs[currentQuestion].question;
    questionDiv.appendChild(newH2);

    for (i = 0; i < listOfQs[currentQuestion].choices.length; i++) {
        var newBtn = document.createElement("button");
        newBtn.textContent = listOfQs[currentQuestion].choices[i];
        newBtn.addEventListener('click', resolveAnswer);
        questionDiv.appendChild(newBtn)
    }
}


function startQuiz() {
    timer.textContent = 75;
    countdown();
    startButton.setAttribute('style', 'display: none;');
    title.setAttribute('style', 'display: none;');
    infoText.setAttribute('style', 'display: none;');
    currentQuestion = 0;
    showQuestion();
    // remove last questions
    // add next question.
    //right answer
    // wrong answer

    //total up points and send to local storage.

    //set up high score page


}




startButton.addEventListener('click', startQuiz);