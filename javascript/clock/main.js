// let seconds = document.querySelector(".second-hand"),
// 	minutes = document.querySelector(".min-hand"),
// 	hours = document.querySelector(".hour-hand"),
// 	dHours = document.querySelector(".clock-hours"),
// 	dMins = document.querySelector(".clock-mins"),
// 	dSecs = document.querySelector(".clock-secs");



// function setDate(argument) {
// 	const now = new Date();
// 	let second = now.getSeconds();
// 		const secondDegrees = (second/60)*360+90;
// 	seconds.style.transform= `rotate(${secondDegrees}deg)`
// 	let min = now.getMinutes();
// 	let hour = now.getHours();
// 	console.log(min)
	
// 	const minsDegrees = (min/60)*360+90;
// 	minutes.style.transform= `rotate(${minsDegrees}deg)`

// 	const hoursDegrees = (hour/12)*360+90;
// 	hours.style.transform= `rotate(${hoursDegrees}deg)`
// }

// setInterval(setDate, 1000);




let seconds = document.querySelector(".second-hand"),
	minutes = document.querySelector(".min-hand"),
	hours = document.querySelector(".hour-hand"),
	dHours = document.querySelector(".clock-hours"),
	dMins = document.querySelector(".clock-mins"),
	dSecs = document.querySelector(".clock-secs");

let clock = setInterval(function () {
	let date = new Date
	let second = date.getSeconds();
	let min = date.getMinutes();
	let hour = date.getHours();
	if (hour>12) {
		hour-=12
	}
	// console.log(dHours)
	// console.log(min)
	seconds.style.transform =  "rotate("+(second*6+90)+"deg)"
	minutes.style.transform =  "rotate("+(min*6+90)+"deg)"
	hours.style.transform =  "rotate("+(hour*360/12+90)+"deg)"

	dHours.innerHTML = hour+":";
	dMins.innerHTML = min<10?`0${min}:`:`${min}:`;
	dSecs.innerHTML = second<10?`0${second}`:`${second}`;
},1000)

