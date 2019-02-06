

(function () {
	
	let letters = {};

	let input = document.querySelector(".input"),

		val,

		oldVal,
		lastChar;

		input.addEventListener('keyup',function (e) {
			// console.log(e.keyCode)
			val = this.value;

			if (e.keyCode ===8) {
				lastChar = oldVal.slice(-1).toUpperCase();
				letters[lastChar] -= 1;

				if (letters[lastChar]===0) {
					delete letters[lastChar]
				}
			}else if(e.keyCode >=65 && e.keyCode <=90){
				if (val.length) {
					strToArr(val)
				}
			}
			oldVal = val
			console.log(letters)
		});

		function strToArr(str) {
			let arr = str.split(''),
				letter = arr[arr.length-1].toUpperCase();
				// console.log(arr)
				// console.log(letter)
				if (letters[letter]) {
					letters[letter] += 1;
				}else{
					letters[letter] = 1;
				}
				// console.log(arr)
		}

})()














 
// let input = document.querySelector(".input");
 
//  input.addEventListener('keyup', function () {
//  	let obj = {};
//  	let value = input.value;
//  	let arr = value.split('');
//  	arr.forEach(function (item) {
//  		obj[item]=1;
//  	})
//  	console.log(obj)
//  })