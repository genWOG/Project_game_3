var $start = document.querySelector('#start')
$start.addEventListener('click', startGame)

function startGame() {
    console.log('Begin!');
    $start.classList.add('hide');
}