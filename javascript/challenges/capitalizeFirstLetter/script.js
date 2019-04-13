
function capitalize (str) {
	let words = str.split(' ').map(word=>word.charAt(0).toUpperCase()+ word.slice(1))

	return words.join(' ')
}



console.log(capitalize('I got up early today'))

console.log(capitalize('I walked straight to the beach'))