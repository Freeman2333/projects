


const container = document.querySelector(".container");
const text = container.querySelector(".text span");
const walk = 100;

function shadow(e) {
	// const width = container.offsetWidth;
	// const height = container.offsetHeight;
	const{offsetWidth: width , offsetHeight: height} = container;
	

	let{ offsetX: x, offsetY:y} = e;
	// console.log(x,y)
	if (this !== e.target) {
		x = x+ e.target.offsetLeft;
		y = y+ e.target.offsetTop;
	}
	
	const xWalk = Math.round((x/width*walk)-(walk/2));
	const yWalk = Math.round((y/height*walk)-(walk/2));
	// console.log(text)
	text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`

	// console.log(xWalk,yWalk)
}

container.addEventListener('mousemove',shadow);








