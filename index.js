var $start = document.querySelector('#start');
var $game = document.querySelector('#game');
var square; //for quares generation 
var score = 0;
var square_size;
var game_size;
var max_top_deviation; //максималное отклонение по отношению к игровому пол
var max_left_deviation; //максималное отклонение по отношению к игровому полю

$start.addEventListener('click', startGame)
$game.addEventListener('click', square_click);

function startGame() {
    $start.classList.add('hide');
    $game.style.backgroundColor = "White";
    square_generator();
}

function square_click(event) {

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
    console.log(max_top_deviation, " ", getRand(0, max_top_deviation));
    //console.log(square.style.left);
    square.style.cursor = 'pointer';
    square.setAttribute('data-square', 'true'); //"data-" then "some text"
    //after install all the properties, create Element in the field
    $game.insertAdjacentElement('afterbegin', square);
}

function getRand(min, max) {
    return Math.floor(Math.random() * (max, min) + min); //1.9130130 -> 1
}