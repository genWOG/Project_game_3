var $start = document.querySelector('#start');
var $game = document.querySelector('#game');
var square; //for quares generation 
var score;

$start.addEventListener('click', startGame)
$game.addEventListener('click', square_click);

function startGame() {
    console.log('Begin!');
    $start.classList.add('hide');
    $game.style.backgroundColor = "White";
    square_generator();
}

function square_click(event) {
    $game.innerHTML = ''; //disallow the game to duplicate square if we already have a square
    if (event.target.dataset) {
        score++;
        square_generator();
    }
}

//generate random wquares in the gameField
function square_generator() {
    square = document.createElement('div');
    square.style.height = square.style.width = '50px';
    square.style.position = 'absolute'; //temporary
    square.style.backgroundColor = 'Pink';
    square.style.cursor = 'pointer';
    square.style.top = '50px';
    square.style.left = '50px';
    square.setAttribute('data-square', 'true'); //"data-" then "some text"
    //after install all the properties, create Element in the field
    $game.insertAdjacentElement('afterbegin', square);
}

function getRand() {

}