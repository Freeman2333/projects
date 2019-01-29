const btn = document.querySelector('#btn');
btn.addEventListener('click',function () {
	fetch(`https://randomuser.me/api/`)
	.then(data=>data.json())
	.then(data=>showData(data))
	.catch(error => console.log(error));

})

// const ajax = new Promise((resolve,reject)=>{

// 	const xhr = new XMLHttpRequest();
// 	const url = `https://randomuser.me/api/`;
// 	xhr.open("GET", url,true);
// 	xhr.onload = () =>{
// 		if (xhr.status ===200) {
			
// 			resolve(xhr.responseText);
// 		}
// 		else{
			
// 			reject(Error(xhr.statusText))
// 		}
// 	}

// 	xhr.onerror = () =>{
		
// 		reject(Error('there was an error'))
// 	}

// 	xhr.send();
// })

// function getData(cb) {
// 	const url = `https://randomuser.me/api/`;
// 	const ajax = new XMLHttpRequest();
// 	ajax.open("GET", url, true);
// 	ajax.onload = function () {
// 		if (this.status===200) {
// 			// console.log(JSON.parse(this.responseText))
// 			cb(this.responseText)
// 		}
// 		else{
// 			alert(this.statusText)
// 		}
// 	};
// 	ajax.onerror = function () {
// 		alert('error');
// 	}
// 	ajax.send()
// }

	
	
function showData(data) {
	// const response = JSON.parse(data);
	const {name:{first}, dob:{age}} = /*response*/data.results[0];
	document.querySelector('#first').textContent = first;
	document.querySelector('#age').textContent = age;
}

// function externalData(url) {
// 		return new Promise(function (resolve, reject) {
// 			if (url.length>0) {
// 				resolve("response data")
// 			}
// 			else  {
// 				reject("there was an error")
// 			}
// 		})
// 	}	
	// externalData("dd")
	// .then(data=>console.log(data))
	// .catch(error=>console.log(error));
// console.log(fetch(`https://randomuser.me/api/`))
// fetch(`https://randomuser.me/api/`)
// .then(data=>data.json())
// .then(data=>console.log(data)).catch(error=> console.log(error))