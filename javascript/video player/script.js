


const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".player__slider");


function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
	// if(video.paused){
	// 	video.play()
	// }else{
	// 	video.pause()
	// }
};

function updateButton(argument) {
	const icon = this.paused ? '►': '▋'
	toggle.textContent = icon
	
}

function skip() {
	// console.log(this.dataset.skip)
	video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
	// console.log(this.value);
	video[this.name]= this.value;
}

function handleProgress() {
	const percent = (video.currentTime/video.duration)*100;
	progressBar.style.flexBasis = `${percent}%`

}

function scrub(e) {
	const scrubTime = (e.offsetX / progress.offsetWidth)* video.duration;
	video.currentTime = scrubTime
	// console.log(scrubTime)
}


video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleProgress);

video.addEventListener('click',togglePlay);
toggle.addEventListener('click',togglePlay);

skipButtons.forEach(btn=>btn.addEventListener('click',skip));

ranges.forEach(range=> range.addEventListener('change',handleRangeUpdate))

let mousedown = false;

progress.addEventListener('click',scrub);
progress.addEventListener('mousemove', ()=> mousedown&&scrub(e));
progress.addEventListener('mousedown',()=> mousedown= true);
progress.addEventListener('mouseup',()=> mouseup= false);
