var startButton = document.querySelector('.start-button');
var timer = document.querySelector('.timer');
var title = document.querySelector('.splash');
var welcome = document.querySelector('.welcome');
var main = document.body.children[1];
var h2El = document.createElement('h2');
var btn1 = document.createElement('button');
var btn2 = document.createElement('button');
var btn3 = document.createElement('button');
var btn4 = document.createElement('button');
var questionDiv = document.createElement('div');

var question1 = {
    question: 'How many keys does a piano have?',
    ans1: '80 keys',
    ans2: '88 keys',
    ans3: '100 keys',
    ans4: '75 keys'
}

var question2 = {
    question: 'What is the full name of the piano?',
    ans1: 'Pianissimo',
    ans2: 'Fortepiano',
    ans3: 'Pianoforte',
    ans4: 'Trick question, the full name is piano',
}


var timeLeft;

//get stats from local storage

function countdown() {
    timeLeft = 75;
    var timeInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft > 0) {
            timer.textContent = timeLeft;
            // if wrong answer
            // if you win stop timer
        } else {
            timer.textContent = 0;
            console.log('you lose');
            clearInterval(timeInterval);
        }
    }, 1000);
}

function question(quiz) {
    main.appendChild(h2El);
    main.appendChild(questionDiv);
    main.children[4].appendChild(btn1);
    main.children[4].appendChild(btn2);
    main.children[4].appendChild(btn3);
    main.children[4].appendChild(btn3);
    main.children[4].appendChild(btn4);

    h2El.textContent = quiz.question;
    btn1.textContent = quiz.ans1;
    btn2.textContent = quiz.ans2;
    btn3.textContent = quiz.ans3;
    btn4.textContent = quiz.ans4;

    // create event listener for buttons.
    //create right answer button.
}

function nextQuestion(quiz) {
    h2El.textContent = quiz.question;
    btn1.textContent = quiz.ans1;
    btn2.textContent = quiz.ans2;
    btn3.textContent = quiz.ans3;
    btn4.textContent = quiz.ans4;

}


function startQuiz() {
    timer.textContent = 75;
    countdown();
    startButton.setAttribute('style', 'display: none;');
    title.setAttribute('style', 'display: none;');
    welcome.setAttribute('style', 'display: none;');
    question(question1);
    // remove last questions
    // add next question.
    //right answer
    // wrong answer

    //total up points and send to local storage.

    //set up high score page


}




startButton.addEventListener('click', startQuiz);