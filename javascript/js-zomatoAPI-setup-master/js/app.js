
class ZOMATO {
	constructor(){
		this.api = '73097d85a76731ae2506dc7cd7dd091b';
		this.header = {
			method: 'GET',
			headers:{
				'user-key': this.api,
				'Content-Type': 'application/json'
			},
			credentials: 'same-origin'
		}
	}
	async searchApi(city,categoryId){
		const categoryUrl= `https://developers.zomato.com/api/v2.1/categories`;
		const cityUrl = `https://developers.zomato.com/api/v2.1/cities?q=${city}`

		// category DATA
		const categoryInfo = await fetch(categoryUrl,this.header);
		const categoryJSON = await categoryInfo.json();
		const categories = await categoryJSON.categories;

		// search city
		const cityInfo = await fetch(cityUrl, this.header);
		const cityJSON = await cityInfo.json();
		const cityLocation = await cityJSON.location_suggestions;
		let cityId = 0;
		if (cityLocation.length>0) {
			cityId = await cityLocation[0].id
		}

		// search reastaurant
		const restUrl= `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&category=${categoryId}&sort=rating`;
		const restInfo = await fetch(restUrl, this.header);
		const restJSON = await restInfo.json();
		const rests = await restJSON.restaurants;

		return{
			categories,
			cityId,
			rests
		};
	}
}

class UI {
	constructor(){
		this.loader = document.querySelector('.loader');
		this.restaurantList = document.querySelector('#restaurant-list');
	}
	addSelectOptions(categories){
		const search = document.querySelector('#searchCategory');
		let output = `<option value='0' selected>select category</option>`;
		categories.forEach(category =>{
			output += `<option value='${category.categories.id}'>${category.categories.name}</option>`
		})
		search.innerHTML = output;
	}
	showFeedback(text){
		const feedback= document.querySelector('.feedback');
		feedback.classList.add('showItem');
		feedback.innerHTML = `<p>${text}</p>`
		setTimeout(()=>{
			feedback.classList.remove('showItem');
		},3000)
	}
	showLoader(){
		this.loader.classList.add('showItem');
	}
	hideLoader(){
		this.loader.classList.remove('showItem');
	}
	getRests(rests){
		this.hideLoader();
		if (rests.length===0) {
			this.showFeedback('no such categories in the city')
		}
		else{
			// console.log(rests)
			this.restaurantList.innerHTML = '';
			rests.forEach(rest=>{
				// console.log(rest.restaurant)
				const{thumb:img,name,location:{address}, user_rating:{aggregate_rating}, cuisines, average_cost_for_two:cost, menu_url,url } = rest.restaurant;

				if (img !=='') {
					this.showRest(img,name,address,aggregate_rating,cuisines, cost, menu_url,url);
				}
			})
		}
	}
	showRest(img,name,address,aggregate_rating,cuisines, cost, menu_url,url){
		const div = document.createElement('div');
		div.classList.add('col-11','mx-auto','my-3','col-md-4');
		div.innerHTML = `<div class="card">
      <div class="card">
       <div class="row p-3">
        <div class="col-5">
         <img src="${img}" class="img-fluid img-thumbnail" alt="">
        </div>
        <div class="col-5 text-capitalize">
         <h6 class="text-uppercase pt-2 redText">${name}</h6>
         <p>${address}</p>
        </div>
        <div class="col-1">
         <div class="badge badge-success">
          ${aggregate_rating}
         </div>
        </div>
       </div>
       <hr>
       <div class="row py-3 ml-1">
        <div class="col-5 text-uppercase ">
         <p>cousines :</p>
         <p>cost for two :</p>
        </div>
        <div class="col-7 text-uppercase">
         <p>${cuisines}</p>
         <p>${cost}</p>
        </div>
       </div>
       <hr>
       <div class="row text-center no-gutters pb-3">
        <div class="col-6">
         <a href="${menu_url}" target="_blank" class="btn redBtn  text-uppercase"><i class="fas fa-book"></i> menu</a>
        </div>
        <div class="col-6">
         <a href="${url}" target="_blank" class="btn redBtn  text-uppercase"><i class="fas fa-book"></i> website</a>
        </div>
       </div>
      </div>
     </div>`;
		this.restaurantList.appendChild(div)
	}
}
(function () {
	const searchForm = document.querySelector('#searchForm');
	const searchCity = document.querySelector('#searchCity');
	const searchCategory = document.querySelector('#searchCategory');
	const zomato = new ZOMATO();
	const ui = new UI();
// add select options
document.addEventListener('DOMContentLoaded',()=>{
	zomato.searchApi().then(data=>ui.addSelectOptions(data.categories))
});

searchForm.addEventListener('submit',event=>{
	event.preventDefault();
	const city = searchCity.value.toLowerCase();
	const categoryId = parseInt(searchCategory.value);
	if (city === ''|| categoryId===0) {
		ui.showFeedback('please enter a city and select category')
		}
		else{
			//  logic goes here
			zomato.searchApi(city).then(cityData =>{
				if(cityData.cityId===0){
					ui.showFeedback('please enter a valid city!')
				}
				else{
					ui.showLoader();
					zomato.searchApi(city,categoryId).then(data=>{
						// console.log(data)
						ui.getRests(data.rests);
					})
				};
			})
		}
	});
})();

