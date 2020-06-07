const startBtn = document.querySelector('#wc-start');
const wcGame = document.querySelector('#wc-game');
const startScreen = document.querySelector('#display-start')


startBtn.onclick = function (){
    startScreen.style.display = "none";
    wcGame.style.display = "block";
}