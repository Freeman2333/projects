$(function () {
		
	var $nav = $(".nav-underline"),
		$line = $('<div>').appendTo($nav),
		$activeLi,
		lineWidth,
		liPos;

		function refresh() {
			$activeLi = $nav.find('li.active');
			lineWidth = $activeLi.outerWidth();
			liPos = $activeLi.position().left;
			// console.log($activeLi.position())
		}
		refresh();

		$nav.css('position','relative');


		function lineSet() {
			$line.css({
				'position':'absolute',
     			'background-color':'#ffffff',
     			'bottom':'0',
     			'height':'3px'
			}).animate({
				'left': liPos,
				'width': lineWidth
			},200)
		}
		lineSet();

		$nav.find('li').on('click',function () {
			$activeLi.removeClass('active');
			$(this).addClass('active');
			refresh();
			lineSet();
		})

})