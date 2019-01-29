
const form = document.querySelector('#input-form');
const input = document.querySelector('#input-value');
const feedback = document.querySelector('.feedback');
const listItems = document.querySelector('.list-items');
const clearBtn = document.querySelector('.clearBtn');

form.addEventListener('submit', function(e){
	e.preventDefault();
	const value = input.value;
	if (value==='') {
		showFeedback(feedback,'cannot add empty value',"alert-danger");
	}
	else{
		addItem(value);
		addStorage(value);
	}
});
// show feedback
function showFeedback(element,text,result) {
	element.classList.add('showItem',`${result}`);
	element.innerHTML = `<p>${text}<p>`;
	setTimeout(function () {
		element.classList.remove('showItem',`${result}`);
	},3000)
}
// add item
function addItem(value) {
	const div = document.createElement('div');
	div.classList.add('item', 'my-3', 'd-flex', 'justify-content-between', 'p-2');
	div.innerHTML= `
	<h5 class="item-title text-capitalize">${value}</h5>
       <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>`
   	listItems.appendChild(div);
   	input.value = '';
   	showFeedback(feedback,'item added to the list','alert-success');

};
clearBtn.addEventListener('click',function (e) {
	e.preventDefault();
	while(listItems.children.length>0){
		listItems.removeChild(listItems.children[0]);
		// clear storage
		clearStorage();
	}
})
// delete one item
listItems.addEventListener('click',function (e) {
	e.preventDefault();
	if(e.target.parentElement.classList.contains('remove-icon')){
		let parent = e.target.parentElement.parentElement;
		listItems.removeChild(parent);
		let text = e.target.parentElement.previousElementSibling.textContent;
		clearSingle(text);
	}
});
// dom content loaded

document.addEventListener('DOMContentLoaded',function () {
	loadItems();
})


// add to local storage

function addStorage(value) {
	let items;
	// console.log(localStorage.getItem('grocery-list'))
	if(localStorage.getItem('grocery-list')){
		items = JSON.parse(localStorage.getItem('grocery-list'));
	}
	else{
		items= [
		]
	}
	items.push(value);
	localStorage.setItem('grocery-list',JSON.stringify(items));
}
// clear local storage
function clearStorage() {
	localStorage.removeItem('grocery-list');
}
// clear single item in LS

function clearSingle(value){
	const tempItems = JSON.parse(localStorage.getItem('grocery-list'));
	console.log(tempItems);
	const items = tempItems.filter(function (item) {
		return item !== value
	});
	localStorage.removeItem('grocery-list');
	localStorage.setItem('grocery-list',JSON.stringify(items));
}
function loadItems() {
	if (localStorage.getItem('grocery-list')) {
		const items = JSON.parse(localStorage.getItem('grocery-list'));
		items.forEach(function (item) {
			const div = document.createElement('div');
			div.classList.add('item', 'my-3', 'd-flex', 'justify-content-between', 'p-2');
			div.innerHTML= `
			<h5 class="item-title text-capitalize">${item}</h5>
	       <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>`
		   	listItems.appendChild(div);
		});
	}
}