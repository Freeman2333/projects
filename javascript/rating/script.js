
var rating = document.querySelector(".rating"),
	ratingItem = document.querySelectorAll(".rating-item");

rating.onclick = function (e) {
	var target = e.target;
	if(target.classList.contains("rating-item")){
		removeClass(ratingItem, "current-active");
		target.classList.add("current-active", "active")
	}
}

rating.onmouseover = function (e) {
	var target = e.target;
	if(target.classList.contains("rating-item")){
		removeClass(ratingItem, "active");
		target.classList.add("active");
		mouseOverActiveClass(ratingItem);
	}
}

rating.onmouseout = function (e) {
	addClass(ratingItem,'active');
	mouseOutActiveClass(ratingItem);
}


function removeClass(arr) {

	for(var i=0, iLen = arr.length;i<iLen;i++){
		for(j=1;j<arguments.length;j++){
			ratingItem[i].classList.remove(arguments[j]);
		}
	}
}

function addClass(arr) {

	for(var i=0, iLen = arr.length;i<iLen;i++){
		for(j=1;j<arguments.length;j++){
			ratingItem[i].classList.add(arguments[j]);
		}
	}
}

function mouseOverActiveClass(arr) {
	for(var i = 0, iLen = arr.length; i<iLen;i++){
		if(arr[i].classList.contains("active")){
			break;
		}
		else{
			arr[i].classList.add('active')
		}
	}
}

function mouseOutActiveClass(arr){
	for(i=arr.length-1;i>=1;i--){
		if(arr[i].classList.contains("current-active")){
			break;
		}
		else{
			arr[i].classList.remove("active")
		}
	}
}









// let ratingItems = document.querySelectorAll(".rating-item"),
// 	starsNumber;

// ratingItems.forEach(function (item) {
	
// 	item.addEventListener("click", function(){
// 		activeItem = document.querySelectorAll(".active");
// 		activeItem.forEach(function (item) {
// 			item.classList.remove("active")
// 		});
// 		let itemIndex = this.dataset.rate;
// 		for(i=0; i<itemIndex; i++){
// 			ratingItems[i].classList.add("active")
// 		}
// 	});

// });

