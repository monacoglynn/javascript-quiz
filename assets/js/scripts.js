var startButton = document.querySelector('.start-button');
var timer = document.querySelector('.timer');
var title = document.querySelector('.splash');
var infoText = document.querySelector('.info-text');
var questionDiv = document.querySelector('.quiz-box');
var visitHighScore = document.querySelector('.show-score');
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
        question: 'With all of the strings tune, how much tension weight does a typical grand piano hold?',
        choices: ['45,000 lbs', '10,000 lbs', '20,000 lbs', '8,800 lbs'],
        answer: '45,000 lbs'
    },
    {
        question: 'What instrument did piano the invention of the piano make somewhat irrelevant?',
        choices: ['Keychord', 'Harpchord', 'Harpsichord', 'Playchord'],
        answer: 'Harpsichord'
    }
]
var currentQuestion;
var highScore = [];
var timeLeft;


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
function showHighScore() {
    var initialsInput = document.querySelector('input').value;
    if (!initialsInput) {
        alert('please enter initials');
        enterNameHighScore();
    } else {
        highScore.push(initialsInput, Number(timer.textContent));
        console.log(highScore)
        questionDiv.innerHTML = '';
        var hallOfFame = document.createElement('ol');
        questionDiv.appendChild(hallOfFame);

        for (var i = 0; i < highScore.length; i += 2) {
            var newLi = document.createElement('li');
            newLi.textContent = highScore[i] + ' : ' + highScore[i + 1];
            questionDiv.appendChild(newLi);
        }
    }
    localStorage.setItem('highScore', JSON.stringify(highScore));

}


function enterNameHighScore() {
    questionDiv.innerHTML = '';
    newH2.textContent = 'Please enter your initials';
    questionDiv.appendChild(newH2);
    var highScoreForm = document.createElement('input');
    questionDiv.appendChild(highScoreForm);

    var newBtn = document.createElement('button');
    newBtn.textContent = 'Submit';
    questionDiv.appendChild(newBtn);
    newBtn.addEventListener('click', showHighScore)
}

function resolveAnswer(event) {

    var userPick = event.target.textContent
    console.log(userPick)
    // console.log(this)

    if (userPick == listOfQs[currentQuestion].answer) {
        //nice well done
        console.log("correct")

    } else {
        //decrement time remaining
        console.log("incorrect")
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
    newH2.textContent = listOfQs[currentQuestion].question;
    questionDiv.appendChild(newH2);

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
    timer.textContent = 75;
    countdown();
    // hides the first items shown on the page
    startButton.setAttribute('style', 'display: none;');
    title.setAttribute('style', 'display: none;');
    infoText.setAttribute('style', 'display: none;');
    // set the question index to 0 the first question
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