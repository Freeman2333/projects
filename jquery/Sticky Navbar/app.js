$(function () {
	var navPos, winPos, navHeight;

	function refreshWar() {
		navPos =$('nav').offset().top;
		$('.show-navPos').text(navPos);
		navHeight = $('nav').outerHeight(true);
	}
	console.log($('nav'))
	refreshWar()
	$(window).resize(refreshWar);

	$('<div class="clone-nav"></div>').insertBefore('nav').css('height', navHeight).hide();
	$(window).scroll(function () {
		winPos = $(window).scrollTop();
		$('.show-winPos').text(winPos);

		if (winPos>= navPos) {
			$('nav').addClass('fixed shadow');
			$('.clone-nav').show()
		} else
		{
			$('nav').removeClass('fixed shadow');
			$('clone-nav').hide()
		}
	})

	
})