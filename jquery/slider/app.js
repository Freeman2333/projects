


// $('#slider .slides').animate({'margin-left': -720},7000)
$(function () {
	var width = 720;
	var animationSpeed = 1000;
	var pause = 1000;
	var currentSlide = 1
	var $slider = $('#slider')
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide')

	var interval;
	function startSlider(argument) {
		interval = setInterval(function (argument) {
		$slideContainer.animate({'margin-left':'-='+width}, animationSpeed, function () {
			currentSlide++;
			if (currentSlide===$slides.length) {
				currentSlide = 1;
				$slideContainer.css('margin-left',0);
			}
		})
	},pause);
	}
	
	function pauseSlider() {
		clearInterval(interval);
	}
	$slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

	startSlider()
})













			