
class AjaxWheather{
	constructor(){
		this.apiKey = 'c46cbb289f1f9faff2288b5ee3565ed8';
	}
	async getWheather(city){
		const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.apiKey}&units=metric`;
		const wheatherData = await fetch(url);
		const wheather = await wheatherData.json();
		return wheather
	}
}

class Display{
	constructor(){
		this.results = document.querySelector('.results');
		this.cityName = document.querySelector('#cityName');
		this.cityCountry = document.querySelector('#cityCountry');
		this.cityIcon = document.querySelector('#cityIcon');
		this.cityTemp = document.querySelector('#cityTemp');
		this.cityHumidity = document.querySelector('#cityHumidity');
	}
	showWheather(data){
		// console.log(data);
		const {name,sys:{country},main:{temp,humidity}} = data;
		const {icon} = data.weather[0];
		this.results.classList.add('showItem');
		this.cityName.textContent = name;
		this.cityCountry.textContent = country;
		this.cityTemp.textContent = temp;
		this.cityHumidity.textContent = humidity;
		this.cityIcon.src = `http://openweathermap.org/img/w/${icon}.png`;
	}
}


(function (argument) {
	const form = document.querySelector('#wheatherForm');
	const cityInput = document.querySelector('#cityInput');
	const feedback = document.querySelector('.feedback');

// class
	const ajax = new AjaxWheather();
	const display = new Display();
form.addEventListener('submit', event=> {
	event.preventDefault()
	const city = cityInput.value;
	if (city.length === 0) {
		showFeedback('name the city');
		setTimeout(()=>{
			feedback.classList.remove("showItem");
		},3000)
	}
	else{

		ajax.getWheather(city).then(data=>{
			if(data.message === 'city not found'){
				showFeedback(data.message)
			}
			else{
				display.showWheather(data);
			}
		});
	}

})


function showFeedback(text){
	feedback.classList.add("showItem");
	feedback.innerHTML = `<p>${text}</p>`
}



})();






