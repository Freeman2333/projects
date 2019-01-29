const mainBtn = document.querySelector('.btn');
const result = document.querySelector('#result');
const img = document.querySelector('img');

mainBtn.addEventListener("click", function () {
	const ajax = new XMLHttpRequest();
	const url = "https://api.chucknorris.io/jokes/random"
	ajax.open('GET',url,true);
	ajax.onload= function () {
		if (this.status ===200) {
			const data = JSON.parse(this.responseText)
			console.log(data)
			const {icon_url:img1,value:joke} = data;
			result.textContent = joke;
			img.src = img1;
		}
	}
	ajax.onerror = function () {
		alert('error')
	}
	ajax.send();
})

