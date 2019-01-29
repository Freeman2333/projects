
// 
class GITHUB{
	constructor(){
		this.client_id ='8a996b79c1f7346031ab';					
		this.client_secret ='a9452729e729b31cc31ada0070a29a1724da6f00';
		this.base ='https://api.github.com/users/';
	}
	async ajaxUser(userValue){
		// user url
		const userUrl = `${this.base}${userValue}?client_id=${this.client_id}&client_secret='${this.client_secret}'`;
		// repos url
		const reposUrl = `${this.base}${userValue}/repos?client_id=${this.client_id}&client_secret='${this.client_secret}'`;
		const userData = await fetch(userUrl);
		const user = await userData.json();
		// console.log(user)
		// get repos
		const reposData = await fetch(reposUrl);
		const repos = await reposData.json();
		
		return{
			user,
			repos
		}
	}
}

class UI{
	constructor(){
		this.fee
	}
	// show feedback
	showFeedback(text){
		const feedback = document.querySelector('.feedback');
		feedback.classList.add('showItem');
		feedback.innerHTML = `<p>${text}</p>`
		setTimeout(function () {
			feedback.classList.remove('showItem');
		},3000)
	}
	// get user
	getUser(user){
		const{avatar_url:image,
			html_url:link,
			public_repos:repos,
			name,login,message} = user;
			if (message==='Not Found') {
				this.showFeedback('no such user')
			}
			else{
				// console.log(user)
				this.displayUser(image,link,repos,name,login);
				const searchUser = document.querySelector('#searchUser');
				searchUser.value = '';
			}
	}
	displayUser(image,link,repos,name,login){
		const userList = document.querySelector('#github-users');
		const div = document.createElement('div');
		div.classList.add('row','single-user', 'my-3');
		div.innerHTML = `<div class=" col-sm-6 col-md-4 user-photo my-2">
       <img src="${image}" class="img-fluid" alt="">
      </div>
      <div class="col-sm-6 col-md-4 user-info text-capitalize my-2">
       <h6>name : <span>${name}</span></h6>
       <h6>github : <a href="${link}" class="badge badge-primary">link</a> </h6>
       <h6>public repos : <span class="badge badge-success">${repos}</span> </h6>
      </div>
      <div class=" col-sm-6 col-md-4 user-repos my-2">
       <button type="button" data-id ='${login}' id="getRepos" class="btn reposBtn text-capitalize mt-3">
        get repos
       </button>
      </div>`
      userList.appendChild(div);
	}
	displayRepos(userId,repos){
		const reposBtn = document.querySelectorAll('[data-id]');
		reposBtn.forEach(btn=>{
			if (btn.dataset.id===userId) {
				const parent = btn.parentNode;
				console.log(repos)
				repos.forEach(repo =>{
					const p = document.createElement('p');
					p.innerHTML = `<p><a href='${repo.html_url}' target='_blank'>${repo.name}</a></p>`
					parent.appendChild(p);
				})
			}
		})
	}
}

(function () {
	const ui = new UI();
	const github = new GITHUB();
	const searchForm = document.querySelector('#searchForm');
	const searchUser = document.querySelector('#searchUser');
	const userList = document.querySelector('#github-users');
	
	searchForm.addEventListener('submit', event =>{
		event.preventDefault();
		const textValue = searchUser.value;
		if (textValue=== '') {
			ui.showFeedback('please enter the user')
		}
		else{
			github.ajaxUser(textValue).then(data => ui.getUser(data.user)).catch(error=> console.log(error));
		}
	})
	// 
	userList.addEventListener('click', event =>{
		if (event.target.classList.contains('reposBtn')) {
			const userId = event.target.dataset.id;
			github.ajaxUser(userId).then(data=> ui.displayRepos(userId, data.repos)).catch(error=>console.log(error))
		}
	})
})()
