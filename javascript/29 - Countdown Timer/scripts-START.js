
let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');


function displayTimeLeft (seconds) {
	let mins = Math.floor(seconds/60)
	let secs = seconds%60

	timerDisplay.textContent = `${mins}:${secs<10? "0":""}${secs}`
	document.title = `${mins}:${secs<10? "0":""}${secs}`

}

function displayEndTime (then) {
	let end = new Date(then)
	let hours = end.getHours()

	let americanHours = hours>12? hours-12:hours
	let minutes = end.getMinutes()

	endTime.textContent = `Be back At ${americanHours}:${minutes<10?'0':''}${minutes}`
	console.log(minutes);
}

function countTimeLeft(seconds) {

	clearInterval(countdown)
	
	displayTimeLeft(seconds)

	let now = Date.now()
	let then = now + seconds*1000

	displayEndTime(then)

	countdown = setInterval(() => {
	  let secs = Math.round((then - Date.now())/1000)
	  // console.log(then,Date.now());
	  if(secs<0){
	  	clearInterval(countdown);
	  	 return}
	  displayTimeLeft(secs)	
	}, 1000)

}

function showBtnTime () {
	secs = parseInt(this.dataset.time)

	countTimeLeft(secs)
	// console.log(secs)
}

buttons.forEach((btn) => btn.addEventListener("click",showBtnTime));

document.customForm.addEventListener('submit',function(e) {
  e.preventDefault();
  let minutes = this.minutes.value;
  countTimeLeft(minutes*60)
  this.reset()
});