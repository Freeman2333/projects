const btn = document.querySelector('#btn');
btn.addEventListener('click',function () {
	getData().then(data=>showData(data))
	.catch(error=> console.log(error));

})

const getData = async function getData(argument) {
	const url = `https://randomuser.me/api/`;
	const result = await fetch(url);
	const response = await result.json();
	return response;
}

	
	
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