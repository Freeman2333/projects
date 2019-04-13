

// function testRepeat(arr) {

// 	let obj = {}

// 	let instance = 1

// 	let number

// 	for(i=0;i<arr.length;i++){
// 		if (obj[arr[i]]) {
// 			obj[arr[i]] ++
// 		}
// 		else{
// 			obj[arr[i]] = 1
// 		}
// 	}

// 	for(let item in obj){
// 		if(obj[item] > instance){
// 			instance = obj[item]
// 			number = item
// 		}
// 	}
	
// 	if (number) {
// 		return number
// 	}
// 	else{
// 		return -1
// 	}

// }




function testRepeat(arr) {

	let max = 1;
	let position = 0;
	let value = -1;

	let tempNumbers = arr.reduce((acc,curr,index)=>{
		// acc[curr] = acc[curr] + 1 || 1;
		acc[curr] = acc[curr] ? {...acc[curr],amount:acc[curr]['amount'] + 1} : {amount:1,index}

		let amount = acc[curr].amount;
		let place = acc[curr].index;
		if (amount>max || amount===max && place<= position&&amount >1) {
			max = amount;
			value =  curr
			position = place
		}

		return acc
	},{})

	return value
}

// testRepeat([5,2,2,1,5])


console.log(testRepeat([5,2,2,1,5]))
// return 5

console.log(testRepeat([6,5,5,10,10,10]))
// return 10

console.log(testRepeat([3,4,1,6,10]))
// -1


