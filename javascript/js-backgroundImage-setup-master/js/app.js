// immediate invoked function expression

(function() {
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];
  let index = 0;
  const btn = document.querySelectorAll('.btn');
  const imgCont = document.querySelector('.img-container');
  btn.forEach(function (btn) {
  	btn.addEventListener('click',function (event) {
  		event.preventDefault();
  		if (event.target.parentElement.classList.contains('btn-left')) {
  			if (index === 0) {
  				index = pictures.length;
  			}
  			index--;
  			console.log(index)
  			let pic = pictures[index]
  			
  			imgCont.style.backgroundImage = `url('img/${pic}.jpeg')`;
  		} else if (event.target.parentElement.classList.contains('btn-right')){
  			if (index === pictures.length-1) {
  				index = -1;
  			}
  			index++;
  			let pic = pictures[index]
  			 
  			imgCont.style.backgroundImage = `url('img/${pic}.jpeg')`; 			
  		}
  	})
  })
})();
