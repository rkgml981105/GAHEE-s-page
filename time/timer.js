const startbtn = document.querySelector('#start');
const resetbtn = document.querySelector('#reset');


let timerFunction = function(){
    let minutes = document.querySelector("#m_timer").value;
    let seconds = document.querySelector("#s_timer").value;
    seconds--;
    if(seconds < 0) {
        minutes--;
    }
    
    if(minutes < 10) minutes = '0' + minutes;
    if(seconds < 10) seconds = '0' + seconds;
    let timenow = minutes + ':' +seconds;

    let timeshown = document.querySelector('#w_timer h1');
    timeshown.textContent = timenow;

    if(minutes < 0 && seconds < 0){
        clearInterval(timerFunction);
        document.querySelector('#w_timer h1').textContent = 'TIME OVER';
        
    }
}

let a;
startbtn.onclick = function(){

    let curState = document.querySelector('#start').textContent;
    if(curState === 'start'){
        document.querySelector('#start').textContent = 'pause';
        a = setInterval(timerFunction, 1000)
    } else {
        document.querySelector('#start').textContent = 'start';
        clearInterval(a);
    }
}

resetbtn.onclick = function(){
    minutes = 0;
    seconds = 0;
    let timeshown = document.querySelector('#w_timer h1');
    timeshown.textContent = '00:00';
}

