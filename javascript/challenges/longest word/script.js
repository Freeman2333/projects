

function longestWord(str) {
	let arr = str.split(' ');
	let maxLetters = '';
	let longestWords = [];

	for(i=0; i<arr.length; i++){
		if(arr[i].length>maxLetters.length){
			maxLetters = arr[i]
		}
	}
	longestWords.push(maxLetters)

	for(i=0; i<arr.length; i++){
		if(arr[i].length==maxLetters.length&arr[i]!==maxLetters){
			longestWords.push(arr[i])
		}
	}

	return longestWords
}



console.log(longestWord('I woke up early today'))
console.log(longestWord('I went straight to the beach'))

