

document.querySelector("#myForm").addEventListener("submit", saveBookmark);

function saveBookmark(e) {
	e.preventDefault();

	var siteName = document.querySelector("#siteName").value;
	var siteUrl = document.querySelector("#siteUrl").value;
	// console.log(validateForm(siteName,siteUrl))
	if (!validateForm(siteName,siteUrl)) {
		return false
	}
	
	var bookmark = {
		name: siteName,
		url: siteUrl
	}
	// localStorage.setItem('')

	if (localStorage.getItem('bookmarks')=== null) {

		var bookmarks = [];

		bookmarks.push(bookmark);

		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}else{
		var bookmarks0 = localStorage.getItem('bookmarks');
		var bookmarks = JSON.parse(bookmarks0);

		bookmarks.push(bookmark);

		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}

	document.querySelector("#myForm").reset()

	fetchBookmarks()

}

function deleteBookmarks(url) {

	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	for (var i = 0; i < bookmarks.length; i++) {
		if (bookmarks[i].url==url) {
			bookmarks.splice(i,1);
		}
	}
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	fetchBookmarks()
	
}

function fetchBookmarks(argument) {
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		
		var bookmarksResults = document.querySelector("#bookmarksResults");

		bookmarksResults.innerHTML = '';
		for(var i= 0; i<bookmarks.length; i++){
			var name = bookmarks[i].name;
			var url = bookmarks[i].url;
			// console.log(name)
			bookmarksResults.innerHTML += '<div class="card bg-light text-dark card-body">'+
											'<h3>'+name+
											'<a class="btn btn-default" target="_blank" href="'+url+'">visit</a>'+
											'<a onclick="deleteBookmarks(\''+url+'\')" class="btn btn-danger" href="#">delete</a>'+
											'</h3>'+
											'</div>';
		}
	}


	function validateForm(siteName,siteUrl) {
		if (!siteName||!siteUrl) {
		alert('please fill in the form');
		return false
	}
	var expression = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;


   	var regex = new RegExp(expression);

   	if (!siteUrl.match(regex)) {
   		alert('use a valid url');
   		return false
   	}
   	return true
	}






