var global_timer, total_time = 79;

let global = function(time) {
    global_timer = setInterval(function (){
        if(time == 0) {
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
    if (time < 0) {
        time = 80 + time;
        if (time < 41 && time > 20) {
            time = time - 20;
            flag = 1;
            light_logic(time,position1,flag);
            document.getElementById('timer-'+position1).innerText = time;
        } else {
            flag = 0;
            light_logic(time,position1,flag);
            document.getElementById('timer-'+position1).innerText = time;
        }
    } else if (time < 41 && time > 20) {
        time = time - 20;
        flag = 1;
        light_logic(time,position1,flag);
        document.getElementById('timer-'+position1).innerText = time;
    } else {
        flag = 0;
        light_logic(time,position1,flag);
        document.getElementById('timer-'+position1).innerText = time; //80
    }
}

function light_logic(time,position,flag) {
    if (time < 5 && flag == 0) {
        document.getElementById(position+"-yellow").style.backgroundColor = 'yellow';
        document.getElementById(position+"-green").style.backgroundColor = 'black';
        document.getElementById(position+"-red").style.backgroundColor = 'black';
    } else if(time < 21 && time > 4 && flag == 0) {
        document.getElementById(position+"-green").style.backgroundColor = 'green';
        document.getElementById(position+"-yellow").style.backgroundColor = 'black';
        document.getElementById(position+"-red").style.backgroundColor = 'black';
    } else if(time < 21 && time > 4 && flag == 1) {
        document.getElementById(position+"-green").style.backgroundColor = 'black';
        document.getElementById(position+"-yellow").style.backgroundColor = 'black';
        document.getElementById(position+"-red").style.backgroundColor = 'red';
    } else {
        document.getElementById(position+"-red").style.backgroundColor = 'red';
        document.getElementById(position+"-yellow").style.backgroundColor = 'black';
        document.getElementById(position+"-green").style.backgroundColor = 'black';
    }
} 

global(total_time);
