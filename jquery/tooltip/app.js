$(function () {
		
	var $parent,
		windowW,
		windowH;

	function winSize(argument) {
		windowW = $(window).width();
		windowH = $(window).height();
	}

	winSize();

	$(window).resize(winSize);

	$(".tooltip").each(function () {
		$(this).parent().hover(function () {
			$(this).find(".tooltip").fadeIn('fast');
		}, function (argument) {
			$(this).find(".tooltip").fadeOut('fast');
		});
	});

	$(document).mousemove(function (e) {
		// console.log(e)
		var mouseY = e.clientY,
			 mouseX = e.clientX,
			 toolTipH,
			 toolTipW;
			 $('.tooltip').each(function () {
			 	var $toolTip = $(this)
			 	$parent = $toolTip.parent()
			 	toolTipH = $toolTip.outerHeight();
			 	toolTipW = $toolTip.outerWidth();

			 	$toolTip.css({
			 		'left': mouseX,
			 		'top': mouseY +20
			 	});

			 	if (toolTipW+ mouseX) {
			 		$toolTip.css({
			 		'left': mouseX - toolTipW -20 
			 	});
			 	}

		 		if (toolTipH+ mouseY+20> windowH) {
	 				$toolTip.css({
			 		'top': mouseY - toolTipH -20 
			 	});
		 		}
			 })
	})




	$('.drag').draggable();

})