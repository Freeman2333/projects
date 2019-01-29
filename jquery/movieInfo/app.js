

$(document).ready(()=>{
	$('#searchForm').on('submit', (e)=>{
		let searchText = $('#searchText').val();
		getMovies(searchText);
		e.preventDefault();
	})
	// sessionStorage.setItem('movieId', "id");
});

function getMovies(sText) {
	axios.get('http://omdbapi.com?apikey=3cdb72d6&s='+sText)
	.then((response)=>{
		// console.log(response)
		let movies = response.data.Search;
		let output = '';
		// console.log(response.data.Search)
		// console.log(${movie.Poster})
		// console.log(${movie.title})
		$.each(movies, (index, movie) => {
			output += `
			<div class='col-md-3'>
				<div class ='well text-center'>
					<img src=${movie.Poster} alt="s" />
					<h5>${movie.Title}<h5>
					<a onclick='movieSelected("${movie.imdbID}")' href="#" class='btn btn-primary'>Movie details</a>
				</div>
			</div>
			`;
		})
		$('#movies').html(output)
	})
	.catch((err)=>{
		console.log(err);
	})
}

function movieSelected(id) {
	sessionStorage.setItem('movieId', id);
	window.location = 'movie.html'
	return false
}
function getMovie() {
	let movieId = sessionStorage.getItem('movieId');
	axios.get('http://omdbapi.com?apikey=3cdb72d6&i='+movieId)
	.then((response)=>{
		let movie = response.data;
		let output =`
			<div class='row'>
				<div class="col-md-4">
				<img src="${movie.Poster}" alt="4" class="thumbnail" />
				</div>
				<div class="col-md-8">
				<h2>${movie.Title}</h2>
				<ul class="list-group">
				<li class="list-group-item">genre: ${movie.Genre}</li>
				<li class="list-group-item">released: ${movie.Released}</li>
				<li class="list-group-item">rated: ${movie.Rated}</li>
				</ul>
				</div>
				<div class="row">
				<div class="well">
				<h3>Plot</h3>
				${movie.Plot}</div></div>
			</div>
		`
		$('#movie').html(output)
		
	})
	.catch((err)=>{
		console.log(err);
	})
}





			