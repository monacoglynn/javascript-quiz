var startButton = document.querySelector('.start-button');
var timer = document.querySelector('.timer');
var title = document.querySelector('.splash');
var welcome = document.querySelector('.welcome');


var timeLeft;


function countdown() {
    timeLeft = 75;
    var timeInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft > 0) {
            timer.textContent = timeLeft;
        } else {
            timer.textContent = 0;
            console.log('you lose');
            clearInterval(timeInterval);
        }
    }, 1000);
}

function startQuiz() {
    timer.textContent = 75;
    countdown();
    startButton.setAttribute('style', 'display: none;');
    title.setAttribute('style', 'display: none;');
    welcome.setAttribute('style', 'display: none;');

}

function question1() {

}


startButton.addEventListener('click', startQuiz);