// let time_right = 20; 
// let time_left  = 20+time_right; 
// let time_top = 20 + time_left;
// let time_bottom = 20 + time_top;

let top_timer = document.getElementById('timer_top');
let right_timer = document.getElementById('timer_right');
let bottom_timer = document.getElementById('timer_bottom');
let left_timer = document.getElementById('timer_left');

var GoTimer_top = function (timeleft) {
    let go_timer = setInterval(function(){
        if(timeleft == -1){
            clearInterval(go_timer);
            StopTimer_top(79);
        } else if (timeleft <= 4) {   
            document.getElementById('timer-top').style.color = 'red';
            document.getElementById('top-yellow').style.opacity = '100%';
            document.getElementById('top-green').style.opacity = '20%';
            document.getElementById('top-red').style.opacity = '20%';
            document.getElementById('timer-top').innerHTML = timeleft;
        } else {
            document.getElementById('timer-top').innerHTML = timeleft;
            document.getElementById('timer-top').style.color = 'green';
            document.getElementById('top-green').style.opacity = '100%';
            document.getElementById('top-red').style.opacity = '20%';
            document.getElementById('top-yellow').style.opacity = '20%';
        }
        timeleft -= 1;
    }, 1000);
}

var StopTimer_top = function (timeleft) {
    let stop_timer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(stop_timer);
            GoTimer_top(19);
        } else if (timeleft >= 0){
            // return timeleft;
            document.getElementById('top-red').style.opacity = '100%';
            document.getElementById('timer-top').innerHTML = timeleft;
            document.getElementById('top-yellow').style.opacity = '20%';
            document.getElementById('top-green').style.opacity = '20%';
        }
        timeleft -= 1;
        }, 1000);
}

// right
var GoTimer_right = function (timeleft) {
    let go_timer = setInterval(function(){
        if(timeleft == -1){
            clearInterval(go_timer);
            StopTimer_right(79);
        } else if (timeleft <= 4) {   
            document.getElementById('timer-right').style.color = 'red';
            document.getElementById('right-yellow').style.opacity = '100%';
            document.getElementById('right-green').style.opacity = '20%';
            document.getElementById('timer-right').innerHTML = timeleft;
        } else {
            document.getElementById('timer-right').innerHTML = timeleft;
            document.getElementById('timer-right').style.color = 'green';
            document.getElementById('right-green').style.opacity = '100%';
            document.getElementById('right-red').style.opacity = '20%';
            document.getElementById('right-yellow').style.opacity = '20%';
        }
        timeleft -= 1;
    }, 1000);
}

var StopTimer_right = function (timeleft) {
    let stop_timer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(stop_timer);
            GoTimer_right(19);
        } else if (timeleft >= 0){
            // return timeleft;
            document.getElementById('right-red').style.opacity = '100%';
            document.getElementById('timer-right').innerHTML = timeleft;
            document.getElementById('right-yellow').style.opacity = '20%';
            document.getElementById('right-green').style.opacity = '20%';
        }
        timeleft -= 1;
        }, 1000);
}

// bottom
var GoTimer_bottom = function (timeleft) {
    let go_timer = setInterval(function(){
        if(timeleft == -1){
            clearInterval(go_timer);
            StopTimer_bottom(79);
        }  else if (timeleft <= 4) {   
            document.getElementById('timer-bottom').style.color = 'red';
            document.getElementById('bottom-yellow').style.opacity = '100%';
            document.getElementById('bottom-red').style.opacity = '20%';
            document.getElementById('bottom-green').style.opacity = '20%';
            document.getElementById('timer-bottom').innerHTML = timeleft;
        } else {
            document.getElementById('timer-bottom').innerHTML = timeleft;
            document.getElementById('timer-bottom').style.color = 'green';
            document.getElementById('bottom-green').style.opacity = '100%';
            document.getElementById('bottom-red').style.opacity = '20%';
            document.getElementById('bottom-yellow').style.opacity = '20%';
        }
        timeleft -= 1;
    }, 1000);
}

var StopTimer_bottom = function (timeleft) {
    let stop_timer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(stop_timer);
            GoTimer_bottom(19);
        } else if (timeleft >= 0){
            // return timeleft;
            document.getElementById('bottom-red').style.opacity = '100%';
            document.getElementById('timer-bottom').innerHTML = timeleft;
            document.getElementById('bottom-yellow').style.opacity = '20%';
            document.getElementById('bottom-green').style.opacity = '20%';
        }
        timeleft -= 1;
        }, 1000);
}

// left
var GoTimer_left = function (timeleft) {
    let go_timer = setInterval(function(){
        if(timeleft == -1){
            clearInterval(go_timer);
            StopTimer_left(79);
        }  else if (timeleft <= 4) {   
            document.getElementById('timer-left').style.color = 'red';
            document.getElementById('left-yellow').style.opacity = '100%';
            document.getElementById('left-green').style.opacity = '20%';
            document.getElementById('left-red').style.opacity = '20%';
            document.getElementById('timer-left').innerHTML = timeleft;
        } else {
            document.getElementById('timer-left').innerHTML = timeleft;
            document.getElementById('timer-left').style.color = 'green';
            document.getElementById('left-green').style.opacity = '100%';
            document.getElementById('left-red').style.opacity = '20%';
            document.getElementById('left-green').style.opacity = '20%';
        }
        timeleft -= 1;
    }, 1000);
}

var StopTimer_left = function (timeleft) {
    let stop_timer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(stop_timer);
            GoTimer_left(19);
        } else if (timeleft >= 0){
            // return timeleft;
            document.getElementById('left-red').style.opacity = '100%';
            document.getElementById('timer-left').innerHTML = timeleft;
            document.getElementById('left-yellow').style.opacity = '20%';
            document.getElementById('left-green').style.opacity = '20%';
        }
        timeleft -= 1;
        }, 1000);
}

GoTimer_top(19);
StopTimer_right(19);
StopTimer_bottom(40);
StopTimer_left(60);