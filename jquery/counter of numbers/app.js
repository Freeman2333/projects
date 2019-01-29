$('.count').each(function () {
	$(this).prop('counter',0).animate({
		Counte:$(this).text()
	},{
		duration: 1000,
		easing: 'swing',
		step: function (now) {
			$(this).text(Math.ceil(now));
		}
	});
	
})