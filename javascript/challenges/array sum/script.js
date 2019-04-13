
function ArraySum (arr) {
	let sortedArr = arr.sort((a,b)=>{
		return a-b
	})

	let largest = sortedArr.pop()

	let sum = 0

	sortedArr.forEach(item=> sum += item)

	return sum===largest
}



console.log(ArraySum([1,6,4,2,13]))

console.log(ArraySum([1,2,4,34,22]))