var global_timer, total_time = 60, go = 1;

let global = function(time) {
    global_timer = setInterval(function (){
        if(time == -20) {
            time = total_time;
        }
        position_timer(time,'top');
        position_timer(time-20,'left');
        position_timer(time-40,'bottom');
        position_timer(time-60,'right');
        time --;
    },1000)
}

function position_timer (time,position) {
    let flag;
    let position1 = position;
    if (time <= 0 && time > -21) {
        time = 20 + time;
        flag = 1;
        light_logic(time,position1,flag);
        document.getElementById('timer-'+position1).innerText = time;
    } else if (time <= -21) {
        time = 80 + time;
        flag = 0;
        light_logic(time,position1,flag);
        document.getElementById('timer-'+position1).innerText = time;
    } 
    else {
        flag = 0;
        light_logic(time,position1,flag);
        document.getElementById('timer-'+position1).innerText = time;
    }
}

function light_logic(time,position,flag) {
    if (time < 5 && flag == 1 && time > 0) {
        document.getElementById(position+"-yellow").style.backgroundColor = 'orange';
        document.getElementById(position+"-green").style.backgroundColor = 'black';
        document.getElementById(position+"-red").style.backgroundColor = 'black';
    } else if (flag == 1) {
        document.getElementById(position+"-yellow").style.backgroundColor = 'black';
        document.getElementById(position+"-green").style.backgroundColor = 'green';
        document.getElementById(position+"-red").style.backgroundColor = 'black';
    } else {
        document.getElementById(position+"-red").style.backgroundColor = 'red';
        document.getElementById(position+"-yellow").style.backgroundColor = 'black';
        document.getElementById(position+"-green").style.backgroundColor = 'black';
    }
} 

global(total_time);
