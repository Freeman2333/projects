const btn = document.querySelector('#btn');
btn.addEventListener('click',function () {
	getPerson(getData);
	alert('HELO');
})
function getPerson(cb) {
	const url = `https://randomuser.me/api/`;
	const ajax = new XMLHttpRequest();
	ajax.open("GET", url, true);
	ajax.onload = function () {
		if (this.status===200) {
			// console.log(JSON.parse(this.responseText))
			cb(this.responseText, showData)
		}
		else{
			alert(this.statusText)
		}
	};
	ajax.onerror = function () {
		alert('error');
	}
	ajax.send()
}
function getData(response, cb) {
	const data = JSON.parse(response);
	console.log(data)
	const {name:{first},name:{last},picture:{large},location:{street},phone,email} = data.results[0];
	cb(first,last,large,street,phone,email);
}
function showData(first,last,large,street,phone,email) {
	document.querySelector('#first').textContent = first;
	document.querySelector('#last').textContent = last;
	document.querySelector('#street').textContent = street;
	document.querySelector('#phone').textContent = phone;
	document.querySelector('#email').textContent = email;
	document.querySelector('#photo').src = large;
}