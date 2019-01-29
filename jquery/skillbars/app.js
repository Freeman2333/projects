$('.skillbar').each(function () {
	$(this).find('.skillbar-bar').animate({
		width:$(this).attr('data-per')
	},4000)
})