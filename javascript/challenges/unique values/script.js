

// function unique(str) {
// 	let values = []
// 	for(let letter of str){
// 		if (values.indexOf(letter)!==-1) {
// 			return false
// 		}
// 		// console.log(obj);
// 		values.push(letter)
// 	}


// 	return true
// }


// function unique(str) {
// 	let values = {}
// 	for(let letter of str){
// 		if (values[letter]) {
// 			return false
// 		}
// 		values[letter] = 'exists'
// 	}
// 	return true
// }

// function unique(str) {
// 	for(let i=0; i<str.length; i++){
// 		if(str.lastIndexOf(str[i])!== i){
// 			return false
// 		}
// 	}
// 	return true
// }

// function unique(str) {
	
// 	tempStr = new Set();

// 	for(let letter of str){
// 		if (tempStr.has(letter)) {
// 			return false
// 		}
// 		tempStr.add(letter)
// 	}
// 	return true
// }

function unique(str) {

	return new Set(str).size === str.length
	
	// tempStr = new Set(str);

	// if (tempStr.size!==str.length) {
	// 	return false
	// }

	// return true
}


console.log(unique('abcde'))

console.log(unique('abacdefb'))