
import reddit from './redditApi.js';

const searchForm = document.querySelector('#search-form');
const searchBtn = document.querySelector('#search-btn');
const searchInput = document.querySelector('#search-input');

searchForm.addEventListener("submit", e=>{

	const sortBy = document.querySelector('input[name="sortby"]:checked').value;

	const searchLimit = document.querySelector("#limit").value;

	const searchTerm = searchInput.value;

	if (searchTerm =='') {
		showMessage("Please add a search term","alert-danger");
	}

	searchInput.value = '';

	reddit.search(searchTerm, searchLimit, sortBy)
	.then(results =>{
		let output =`<div class="card-columns">`;
		// console.log(results)
		results.forEach(post=>{
			let image = post.preview ? post.preview.images[0].source.url : 'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg';

			output += `
			<div class="card mb-2">
		      <img class="card-img-top" src="${image}" alt="Card image cap">
		      <div class="card-body">
		        <h5 class="card-title">${post.title}</h5>
		        <p class="card-text">${truncateString(post.selftext, 100)}</p>
		        <a href="${post.url}" target="_blank
		        " class="btn btn-primary">Read More</a>
		        <hr>
		        <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span> 
		        <span class="badge badge-dark">Score: ${post.score}</span>
		      </div>
		    </div>
			`;
		});
		output += '</div>';
		document.querySelector('#results').innerHTML = output;
	});


	e.preventDefault();
});


function showMessage(message, className) {
	const div = document.createElement('div');

	div.className = `alert ${className}`;

	div.appendChild(document.createTextNode(message));

	const searchContainer = document.querySelector("#search-container");

	const search = document.querySelector("#search");

	searchContainer.insertBefore(div,search);

	setTimeout(function () {
		document.querySelector('.alert').remove()
	},3000)
}


function truncateString(myString, limit){
	const shortened = myString.indexOf('',limit);
	if (shortened == -1) return myString;
	return myString.substring(0,shortened);
}