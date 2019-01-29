//get elements
const itemList = document.querySelector(".items");
const httpForm = document.getElementById("httpForm");
const itemInput = document.getElementById("itemInput");
const imageInput = document.getElementById("imageInput");
const feedback = document.querySelector(".feedback");
const items = document.querySelector(".items");
const submitBtn = document.getElementById("submitBtn");
let editedItemID = 0;

const url = 'https://5c28c831dc7d0a00144c2e49.mockapi.io/items'

httpForm.addEventListener('submit', submitItem);
function submitItem(e) {
	e.preventDefault();
	let itemValue = itemInput.value;
	let imageValue = imageInput.value;
	if (itemValue.length===0 || imageValue.length===0) {
		showFeedback("please enter valid value");
	}
	else{
		postItemApi(imageValue,itemValue);
		itemInput.value = '';
		imageInput.value = '';
	}
}
// load items
document.addEventListener('DOMContentLoaded', function () {
	getItemsApi(showItems);
});

// show feedback

function showFeedback(text){
	feedback.classList.add('showItem');
	feedback.innerHTML = `<p>${text}<p>`;
	setTimeout(()=>{
		feedback.classList.remove('showItem');
	},3000)
}

// get items
function getItemsApi(cb) {
	const url = 'https://5c28c831dc7d0a00144c2e49.mockapi.io/items'
	const ajax = new XMLHttpRequest();
	ajax.open('GET', url,true);

	ajax.onload = function () {
		if (this.status===200) {
			cb(this.responseText);
		}
		else{
			alert('smth is wrong');
		}
	}


	ajax.onerror = function () {
		alert('error');
	}
	ajax.send()
}


// show items
function showItems(data) {
	const items = JSON.parse(data);
	// console.log(items)
	let info = '';
	items.forEach(item=>{
		info+= `
	<li class="list-group-item d-flex align-items-center justify-content-between flex-wrap item my-2">
       <img src="${item.avatar}" id='itemImage' class='itemImage img-thumbnail' alt="">
       <h6 id="itemName" class="text-capitalize itemName">${item.name}</h6>
       <div class="icons">
        <a href='#' class="itemIcon mx-2 edit-icon" data-id='${item.id}'>
         <i class="fas fa-edit"></i>
        </a>
        <a href='#' class="itemIcon mx-2 delete-icon" data-id='${item.id}'>
         <i class="fas fa-trash"></i>
        </a>
       </div>
  	</li>`
  	itemList.innerHTML = info;
  	// get icons
  	getIcons();
	})
}
// post items

function postItemApi(img,itemName) {
	const avatar = `img/${img}.jpeg`;
	const name = itemName;

	const url = 'https://5c28c831dc7d0a00144c2e49.mockapi.io/items'
	const ajax = new XMLHttpRequest();
	ajax.open('POST', url,true);
	ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	ajax.onload = function () {
			// console.log(this.responseText);
			getItemsApi(showItems);
	}
	ajax.onerror = function () {
		alert('error');
	}
	ajax.send(`avatar=${avatar}&name=${name}`);
}
function getIcons(argument) {
	const editIcon = document.querySelectorAll('.edit-icon');
	const deleteIcon = document.querySelectorAll('.delete-icon');
	deleteIcon.forEach(icon=>{
		const itemId = icon.dataset.id;
		icon.addEventListener('click',function (e) {
			e.preventDefault();
			deleteItemApi(itemId);
		})
	})
	editIcon.forEach(icon=>{
		const itemId = icon.dataset.id;
		icon.addEventListener('click', function (e) {
			e.preventDefault();
			const parent = e.target.parentElement.parentElement.parentElement;
			const img = parent.querySelector('.itemImage').src;
			const name = parent.querySelector('.itemName').textContent;
			// console.log(parent,img,name,itemId);
			editItemUI(parent,img,name,itemId);
		})
	})
}
function deleteItemApi(id) {
	const url = `https://5c28c831dc7d0a00144c2e49.mockapi.io/items/${id}`
	const ajax = new XMLHttpRequest();
	ajax.open('DELETE', url,true);

	ajax.onload = function () {
		if (this.status===200) {
			console.log(this.responseText);
			getItemsApi(showItems);
		}
		else{
			alert('smth is wrong');
		}
	}


	ajax.onerror = function () {
		alert('error');
	}
	ajax.send()
}
function editItemUI(parent,itemImg,name,itemId) {
	event.preventDefault();
	itemList.removeChild(parent);
	const imgIndex = itemImg.indexOf('img/');
	const jpegIndex = itemImg.indexOf('.jpeg');
	const img = itemImg.slice(imgIndex+4,jpegIndex);
	// console.log(img)
	itemInput.value = name.trim();
	imageInput.value = img;
	editedItemID = itemId;
	submitBtn.innerHTML= 'edit item';
	httpForm.removeEventListener('submit', submitItem);
	httpForm.addEventListener('submit', editItemApi);
}

function editItemApi(argument) {
	event.preventDefault();
	const id = editedItemID;
	let itemValue = itemInput.value;
	let imageValue = imageInput.value;
	if (itemValue.length===0 || imageValue.length===0) {
		showFeedback("please enter valid value");
	}
	else{
		const img = `img/${imageValue}.jpeg`;
		const name = itemValue;
		const url = `https://5c28c831dc7d0a00144c2e49.mockapi.io/items/${id}`
		const ajax = new XMLHttpRequest();
		ajax.open('PUT', url,true);
		ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		ajax.onload = function () {
				console.log(this.responseText);
				reverseForm()
		}
		ajax.onerror = function () {
			alert('error');
		}
		ajax.send(`avatar=${img}&name=${name}`);

	}
}
function reverseForm() {
	itemInput.value = '';
	imageInput.value = '';
	submitBtn.innerHTML = 'add item';
	httpForm.removeEventListener('submit', editItemApi);
	httpForm.addEventListener('submit', submitItem);
	getItemsApi(showItems);
}