var startButton = document.querySelector('.start-button');
var timer = document.querySelector('.timer');
var title = document.querySelector('.splash');
var infoText = document.querySelector('.info-text');
var questionDiv = document.querySelector('.quiz-box');
var visitHighScore = document.querySelector('.show-score');
var main = document.body.children[1];
var newH2 = document.createElement('h2');
var header = document.querySelector('.navbar');
var playAgain = document.createElement('a');

function init() {



    var previousHighScore = JSON.parse(localStorage.getItem('highScore'));
    if (previousHighScore == null) {
        console.log('No scores');
    } else {
        highScore = previousHighScore;
        var hallOfFame = document.createElement('ol');
        questionDiv.appendChild(hallOfFame);

        for (var i = 0; i < highScore.length; i += 2) {
            var newLi = document.createElement('li');
            newLi.textContent = highScore[i] + ' : ' + highScore[i + 1];
            questionDiv.appendChild(newLi);

        }
    }
}

init();