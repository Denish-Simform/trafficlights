let time_right, time_left, time_top, time_bottom;
const time_sequence = [time_right, time_bottom, time_left, time_top];

let timeCount = function (time, lightposition) {
    var timeleft = time;
    var downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            time = time_sequence.reduce(function (acc, curr) {
                acc += curr;
            }, 0)
            document.getElementById(lightposition).innerHTML = "0";
        } else {
            document.getElementById(lightposition).innerHTML = timeleft;
        }
        timeleft -= 1;
    }, 1000);
}



timeCount(20, "timer-right");
timeCount(40, "timer-bottom");
timeCount(60, "timer-left");
timeCount(80, "timer-top");

