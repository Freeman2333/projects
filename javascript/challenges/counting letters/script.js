

// function countLetters(str) {
// 	let arr = str.split(' ')
// 	let repeatedChars = arr.map(((item)=>{
// 		let set = new Set(item)
// 		let repeatedWords = item.length-set.size
// 		return repeatedWords
// 	}))

// 	let maxNumberChars = Math.max.apply(null,repeatedChars)

// 	let mostRepeatedIndex = repeatedChars.indexOf(maxNumberChars)

// 	return arr[mostRepeatedIndex]
// }

function countLetters(str) {
	let tempArr = str.split(' ');
	tempArr = tempArr.map(item=>{
		let tempItem = item.toLowerCase().split('');

		return tempItem.reduce((acc,curr)=>{
			// console.log(acc,curr,acc[curr]);
				acc[curr]= acc[curr] ? acc[curr]+1 : 1;
					if(acc[curr]>acc.max){
						acc.max = acc[curr]
					}
				return acc			
				},
				{max: 1, word: item}
			);

		});

	let amount = 1
	let word = '';
	for(let item of tempArr){
		if (item.max>amount) {
			amount = item.max
			word = item.word
		}
	}

	if (amount>1) {
		return word
	}

	return -1
}



console.log(countLetters('Javascript is the best programming language'))

