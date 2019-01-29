// select elements

const loading = document.querySelector('.loading');
const searchForm = document.querySelector('#searchForm');
const output = document.querySelector('.output');
const search = document.querySelector('#search');
const feedback = document.querySelector('.feedback');

const base = 'http://en.wikipedia.org/w/api.php';
const url = '?action=query&format=json&origin=*&list=search&srsearch=';

searchForm.addEventListener('submit',function (event) {
	event.preventDefault();
	// console.log('helo')
	const value = search.value;
	if (value==='') {
		showFeedback('please enter a value')
	}
	else{
		search.value = '';
		// ajax
		ajaxWiki(value);
	}
})
// showfeedback

function showFeedback(text) {
	feedback.classList.add('showItem');
	feedback.innerHTML = ` <p>${text}</p>`
	setTimeout(()=>feedback.classList.remove('showItem'),3000);
}

function ajaxWiki(search) {
	output.innerHTML = '';
	loading.classList.add('showItem');
	// console.log(search);
	const wikiUrl = `${base}${url}${search}`;
	fetch(wikiUrl)
	.then(data=>data.json())
	.then(data => displayData(data))
	.catch(e=>console.log(e));
}
function displayData(data){
	// console.log(data)
	loading.classList.remove('showItem');
	const {search:results} = data.query;
	// console.log(results)
	let info = '';
	results.forEach( result => {
		const pageId = 'http://en.wikipedia.org/?curid='
		const {title,snippet,pageid:link}=result;
		// console.log(title)
		// console.log(snippet)
		// console.log(pageId)
		// console.log(link)
		info +=	`<div class="col-10 mx-auto col-md-6 col-lg-4 my-3">
			    <div class="card card-body">
			     <h1 class="card-title blueText">${title}</h1>
			     <p>${snippet}</p>
			     <a href="${pageId}${link}" target="_blank" class="my-2 text-capitalize">read
			      more...</a>
			    </div>
			   </div>`
	})
	// console.log(info)
	output.innerHTML = info;
}