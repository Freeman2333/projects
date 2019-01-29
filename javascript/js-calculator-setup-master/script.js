
(function () {
	const btn = document.querySelectorAll('.btn');
	btn.forEach(function (btn) {
		btn.addEventListener('click',function () {
			document.querySelector('.screen').value += btn.dataset.num;
			
		})
	})
	document.querySelector('.btn-equal').addEventListener('click',function (event) {
		event.preventDefault;
		if (document.querySelector('.screen').value==='') {
			document.querySelector('.screen').value = 'please enter something'
			setTimeout(function () {
				document.querySelector('.screen').value='';
			},2000)
		} else{
		document.querySelector('.screen').value= eval(document.querySelector('.screen').value);
	}
	});
	document.querySelector('.btn-clear').addEventListener('click',function (event) {
		event.preventDefault;
		document.querySelector('.screen').value= '';
	});

})();



// getAttribute('data-num')




