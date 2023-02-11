// var flag = 1;
// var flag_timer;
// let mypromise = new Promise(function (resolve,reject){
//     flag_timer = setTimeout(function (){
//         flag ++;
//         resolve(flag);
//     },20000)
// })

// mypromise.then(function (flag) {
//         if(flag % 4 == 1) {
//             go_right();
//             flag_timer();
//         } else if(flag % 4 == 2) {
//             go_bottom();
//             flag_timer();
//         } else if(flag % 4 == 3) {
//             go_left();
//             flag_timer();
//         } else {
//             go_top();
//             flag_timer();
//         }
//     }    
// )
// let time_right = 20; 
// let time_left  = 20+time_right; 
// let time_top = 20 + time_left;
// let time_bottom = 20 + time_top;
// var top_timer = document.getElementById('timer-top');
// var right_timer = document.getElementById('timer-right');
// var bottom_timer = document.getElementById('timer-bottom');
// var left_timer = document.getElementById('timer-left');
var go_timer, go_time = 20, total_time = 79;

let go = function(time) {
    go_timer = setInterval(function (){
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

go(total_time);

function position_timer (time,position) {
    let flag;
    // let top = 'top';
    let position1 = position;
    if (time < 0) {
        time = 80 + time;
        flag = 0;
        light_logic(time,position1,flag);
        document.getElementById('timer-'+position1).innerText = time;
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

// function top_timer(time) {
//     let flag;
//     let top = 'top';
//     if (time < 0) {
//         time = 80 + time;
//         flag = 0;
//         light_logic(time,top,flag);
//         document.getElementById('timer-top').innerText = time;
//     } else if (time < 41 && time > 20) {
//         time = time - 20;
//         flag = 1;
//         light_logic(time,top,flag);
//         document.getElementById('timer-top').innerText = time;
//     } else {
//         flag = 0;
//         light_logic(time,top,flag);
//         document.getElementById('timer-top').innerText = time; //80
//     } 
// }

// function left_timer(time) {
//     let flag;
//     let left = 'left';
//     if (time < 0) {
//         time = 80 + time;
//         flag = 0;
//         light_logic(time,left,flag);
//         document.getElementById('timer-left').innerText = time;
//     } else if (time < 41 && time > 20) {
//         time = time - 20;
//         flag = 1;
//         light_logic(time,left,flag);
//         document.getElementById('timer-left').innerText = time;
//     } else {
//         flag = 0;
//         light_logic(time,left,flag);
//         document.getElementById('timer-left').innerText = time; //60
//     }
// }

// function bottom_timer(time) {
//     let flag;
//     let bottom = 'bottom';
//     if (time < 0) {
//         time = 80 + time;
//         flag = 0;
//         light_logic(time,bottom,flag);
//         document.getElementById('timer-bottom').innerText = time;
//     } else if (time < 41 && time > 20) {
//         time = time - 20;
//         flag = 1;
//         light_logic(time,bottom,flag);
//         document.getElementById('timer-bottom').innerText = time;
//     } else {
//         flag = 0;
//         light_logic(time,bottom,flag);
//         document.getElementById('timer-bottom').innerText = time; //40
//     }
// }

// function right_timer(time) {
//     let right = 'right';
//     let flag;
//     if (time < 0) {
//         time = 80 + time;
//         console.log(time);
//         flag = 0;
//         light_logic(time,right,flag);
//         document.getElementById('timer-right').innerText = time; 
//     } else if (time < 41 && time > 20) {
//         time = time - 20;
//         flag = 1;
//         light_logic(time,right,flag);
//         document.getElementById('timer-right').innerText = time;
//     } else {
//         flag = 0;
//         light_logic(time,right,flag);
//         document.getElementById('timer-right').innerText = time; //20
//     }
// }

function light_logic(time,position,flag) {
    if (time > 0 && time < 5 && flag == 0) {
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
// setTimeout(function (){
//     clearInterval(go_timer);
//     go(total_time);
// },20000)  

