

// function mathSequences(arr) {

// 	let arithmetic = new Set()
// 	let geometric = new Set()

// 	for(i=1; i<arr.length; i++){

// 		let difference = arr[i]-arr[i-1]
// 		arithmetic.add(difference)

// 		let division = arr[i]/arr[i-1]
// 		geometric.add(division)
// 	}


// 	if (arithmetic.size ==1) {
// 		return 'arithmetic'
// 	}
// 	else if (geometric.size ==1) {
// 		return 'geometric'
// 	}
// 	else {
// 		return -1
// 	}
	
// }

function mathSequences(arr) {

	let arith = new Set();
	let geo = new Set();

	for(let i = 1; i< arr.length; i++){
		let number1 =arr[i] - arr[i-1];
		arith.add(number1)

		let number2 =arr[i] / arr[i-1];
		geo.add(number2)
	}

	if (arith.size ===1) {
		return 'arithmetic'
	}
	if (geo.size ===1) {
		return 'geometric'
	}

	return -1

}
console.log(mathSequences([2,4,6,8]))
// arithmetic

console.log(mathSequences([3,9,27]))
// geometric

console.log(mathSequences([2,5,14,89]))
// -1


console.log(mathSequences([6,8,10,12]))
// arithmetic
