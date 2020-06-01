const startbutton = document.querySelector('#timer_start');
const resetbutton = document.querySelector('#timer_reset');

let minutes = document.querySelector("#m_timer").value;
let seconds = document.querySelector("#s_timer").value;

let timerFunction = function(){
    
    if(seconds == 0) {
        minutes -= 1;
        seconds = 59;
    } else {
        seconds -= 1;
    }
    
    if(String(minutes).length < 2) minutes = '0' + minutes;
    if(String(seconds).length < 2) seconds = '0' + seconds;
    let timenow = minutes + ':' +seconds;

    let timeshown = document.querySelector('#w_timer h1');
    timeshown.textContent = timenow;

    if(minutes < 1 && seconds < 1){
        clearInterval(timerFunction);
        document.querySelector('#w_timer h1').textContent = 'TIME OVER';
        
    }
}

let b;
startbutton.onclick = function(){

    let curState = document.querySelector('#timer_start').textContent;
    minutes = document.querySelector("#m_timer").value;
    seconds = document.querySelector("#s_timer").value;

    if(curState === 'start'){
        document.querySelector('#timer_start').textContent = 'pause';
        b = setInterval(timerFunction, 1000)
    } else {
        document.querySelector('#timer_start').textContent = 'start';
        clearInterval(b);
    }
}

resetbutton.onclick = function(){
    minutes = 0;
    seconds = 0;
    let timeshown = document.querySelector('#w_timer h1');
    timeshown.textContent = '00:00';
}
