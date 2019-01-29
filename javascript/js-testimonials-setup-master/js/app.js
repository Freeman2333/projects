
(function () {
	
	let customers = [];
	let index = 0;
	//object constructor function

	function Customer(name, img, text) {
		this.name = name;
		this.img = img;
		this.text= text;
	}
	// create customer function

	function createCustomer(name, img, text) {
		// full img
		let fullImg = `img/customer-${img}.jpg`;

		// create a new customer instance
		const customer = new Customer(name, fullImg, text);
		// add to all customers
		customers.push(customer);
	}

	createCustomer('john',1,`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit aliquid nulla cumque ab ex eius, nostrum beatae soluta perspiciatis!`);
	createCustomer('bob',2,`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit aliquid nulla cumque ab ex eius, nostrum beatae soluta perspiciatis!`);
	createCustomer('peter',3,`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit aliquid nulla cumque ab ex eius, nostrum beatae soluta perspiciatis!`);
	createCustomer('arnold',4,`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit aliquid nulla cumque ab ex eius, nostrum beatae soluta perspiciatis!`);

	// console.log(customers);
	document.querySelectorAll('.btn').forEach(function (item) {
		item.addEventListener('click', function (event) {
			event.preventDefault();
			// console.log(event.target)
			if(event.target.parentElement.classList.contains('prevBtn')){
				if( index===0){
					index = customers.length;
				}
				index--;
				document.querySelector("#customer-img").src = customers[index].img;
				document.querySelector("#customer-name").textContent = customers[index].name;
				document.querySelector("#customer-text").textContent = customers[index].text;
			} else if (event.target.parentElement.classList.contains("nextBtn")){
				if (index === customers.length-1) {
					index = -1;
				} 
				index++;
				console.log(index)
				document.querySelector("#customer-img").src = customers[index].img;
				document.querySelector("#customer-name").textContent = customers[index].name;
				document.querySelector("#customer-text").textContent = customers[index].text;
			}
		})
	})

})();





