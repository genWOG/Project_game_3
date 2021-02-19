var $start = document.querySelector('#start');
var $game = document.querySelector('#game');
var $time = document.querySelector('#time');
var $game_record = document.querySelector('#result');
var $timeHeader = document.querySelector('#time-header')
var $resultHeader = document.querySelector('#result-header')

var time_minus;
var square; //for quares generation 
var score = 0;
var square_size;
var game_size;
var max_top_deviation; //максималное отклонение по отношению к игровому пол
var max_left_deviation; //максималное отклонение по отношению к игровому полю
var GamePlay = false; //If game has begun


$start.addEventListener('click', startGame)
$game.addEventListener('click', square_click);


function startGame() {
    score = 0;
    $timeHeader.classList.remove('hide');
    $resultHeader.classList.add('hide');
    GamePlay = true;
    $start.classList.add('hide');
    $game.style.backgroundColor = "White";

    var game_interval = setInterval(function() {
            time_minus = parseFloat($time.textContent);
            //console.log('int', $time.textContent);
            if (time_minus <= 0) { //game_Over
                clearInterval(game_interval) //clear memory and stop the interval
                gameOver();
            } else {
                $time.textContent = (time_minus - 0.1).toFixed(1); //countdown timer
            }
        },
        100)

    square_generator();
}

function gameOver() {
    GamePlay = false;
    $start.classList.remove('hide'); //return the button
    $game.innerHTML = '';
    $game.style.backgroundColor = "Grey";
    $timeHeader.classList.add('hide');
    $resultHeader.classList.remove('hide');
    game_rec();
}

function set_countdownTimer() {

}

function game_rec() {
    $game_record.textContent = score.toString();

}

function square_click(event) {
    if (!GamePlay) {
        return;
    }
    if (event.target.dataset.square) {
        score++;
        console.log(score);
        square_generator();
    }
}

//generate random wquares in the gameField
function square_generator() {
    $game.innerHTML = ''; //disallow the game to duplicate square if we already have a square
    square = document.createElement('div');
    square_size = getRand(20, 100);
    game_size = $game.getBoundingClientRect();
    max_top_deviation = game_size.height - square_size;
    max_left_deviation = game_size.width - square_size;

    square.style.height = square.style.width = square_size + 'px';
    square.style.position = 'absolute'; //temporary
    square.style.backgroundColor = 'Pink';
    square.style.top = getRand(0, max_top_deviation) + 'px';
    square.style.left = getRand(0, max_left_deviation) + 'px';
    square.style.cursor = 'pointer';
    square.setAttribute('data-square', 'true'); //"data-" then "some text"
    //after install all the properties, create Element in the field
    $game.insertAdjacentElement('afterbegin', square);
}

function getRand(min, max) {
    return Math.floor(Math.random() * (max - min) + min); //1.9130130 -> 1
}