
var log = console.log;

// var decCache = [],
//     decCases = [2,0,1,1,1,2];

//     function decOfNum(argument) {
//         // body...
//     }

function timerLeft(year,month,day) {
    setInterval(function() {
        var hoursLeft = document.getElementById('timer-v-hours'),
            hoursText = document.getElementById('timer-v-hours__text'),
            minutesLeft = document.getElementById('timer-v-minutes'),
            minutesText = document.getElementById('timer-v-minutes__text'),
            secLeft = document.getElementById('timer-v-seconds'),
            secText = document.getElementById('timer-v-seconds__text'),
            dateNow = new Date().getTime(),
            dateFinish = new Date(2020,11,31),
            sec = Math.floor((dateFinish-dateNow)/1000),
            secToMinutes = sec % 3600,
            hoursNumber = Math.floor(sec / 3600),
            minutesNumber = Math.floor(secToMinutes / 60),
            secondsNumber = secToMinutes % 60;

            hoursLeft.innerHTML = hoursNumber;
            minutesLeft.innerHTML = minutesNumber;
            secLeft.innerHTML = secondsNumber;
            
    },1000)
}

timerLeft()


// dateNow = new Date().getTime()
// dateFinish = new Date(2020,12,31)
// sec = Math.floor((dateFinish-dateNow)/1000)
// secToMinutes = sec % 3600,
// hoursNumber = Math.floor(sec / 3600),
// log(18%5)