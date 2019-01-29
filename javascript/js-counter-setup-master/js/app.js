
(function () {
	let counterValue = 0;
	const buttons = document.querySelectorAll('.counterBtn');
	const counter = document.querySelector('#counter');
	buttons.forEach(function (btn) {
		btn.addEventListener('click',function (event) {
			const value = event.target;
			
			if(value.classList.contains('prevBtn')){
				counterValue--;
			}
			else if(value.classList.contains('nextBtn')){
				counterValue++;
			}
			counter.textContent = counterValue;
			if(counterValue === 0){
				counter.style.color= "#333333";
			}
			else if (counterValue < 0){
				counter.style.color= "#f6511d";
			}
			else if (counterValue > 0) {
				counter.style.color= "#7fb800";
			}

			// console.log(value);
		});
	});

})();


