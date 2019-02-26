

const triggers = document.querySelectorAll("a");
const highlight = document.createElement('span');
highlight.classList.add("highlight");

document.body.append(highlight);

function highLightLink() {
	const linkCoords = this.getBoundingClientRect();
	const coords ={
		width : linkCoords.width,
		height : linkCoords.height,
		top : linkCoords.top+window.scrollY,
		left : linkCoords.left+window.scrollX
	}
	highlight.style.width = `${coords.width}px`
	highlight.style.height = `${coords.height}px`
	highlight.style.transform = `translate(${coords.left}px,${coords.top}px)`
}

triggers.forEach(a=>a.addEventListener("mouseenter", highLightLink))



// function highLightLink() {
// 	const linkCoords = this.getBoundingClientRect();
// 	highlight.style.width = `${linkCoords.width}px`
// 	highlight.style.height = `${linkCoords.height}px`
// 	// console.log(`${linkCoords.x},${linkCoords.y}`)
// 	let windowHegiht = window.scrollY
// 	console.log(windowHegiht)
// 	highlight.style.transform = `translate(${linkCoords.left}px,${linkCoords.top+windowHegiht}px)`
// 	// highlight.style.transform = `translate(474.8125px,266px)`
// }