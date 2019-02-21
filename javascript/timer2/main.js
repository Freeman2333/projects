
var log = console.log;


let hoursLeft = document.getElementById('timer-v-hours'),
    minutesLeft = document.getElementById('timer-v-minutes'),
    secLeft = document.getElementById('timer-v-seconds'),
    endTime = document.getElementById('end_time'),
     countdown;

function timer(seconds) {


    const now = Date.now();
    const then = now + seconds*1000;
    displayTimeLeft(seconds);
    displayEndTime(then)

    countdown = setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now())/1000);

        if (secondsLeft <=0){
            clearInterval(countdown);
            return
        }
        displayTimeLeft(secondsLeft)
        
    },1000)
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds % 3600/60) /*Math.floor(seconds / 60)*/; 
    const remainderSecond = seconds % 60;
    const remainderHours = Math.floor(seconds / 3600);
    // log({minutes,remainderSecond})

    hoursLeft.textContent = `${remainderHours}`

    minutesLeft.textContent = `${minutes}`<10 ?  `0${minutes}` : `${minutes}`;

    secLeft.textContent = `${remainderSecond< 10 ? 0 : '' }${remainderSecond}`
    
    document.title=`${minutes}:${remainderSecond}`
}

// timer(20)

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent= `be back at ${hour > 12 ? hour - 12: hour}:${minutes<10? 0: ''}${minutes}`
}