



$(function () {
	var currentPosition = 0;
	var slideWidth = 500;
	var createSliderWindow = $('<div id ="sliderWindow"></div>');
	var createSlide = $('<div id ="slide"></div>');
	var createButtons = $('<div id ="buttonRight">></div><div id ="buttonLeft"><</div>');
	var createSlidesWrap = $('<div id ="slidesWrap"></div>');

	var slider = $('#slider')
	var images = ['img/contBcg-0.jpeg','img/contBcg-1.jpeg','img/contBcg-2.jpeg','img/contBcg-3.jpeg','img/contBcg-4.jpeg']
	var length = images.length;

	slider.append(createSliderWindow);
	$('#sliderWindow').append(createButtons);
	$('#sliderWindow').append(createSlide);

	for(i=0; i < length; i++){
		$('#slide').append("<img src ='"+images[i]+"' width='500' />");
	}

	$('#slide').wrapAll(createSlidesWrap);
	$('#slidesWrap').css('float','left');
	$('#slidesWrap').css('width',slideWidth*length);

	function moveSlide() {
		// console.log("{'margin-left':'slideWidth*(-currentPosition)'}")
		$('#slidesWrap').animate({'margin-left':slideWidth*(-currentPosition)});

	}

	function changePosition(left) {
		
		if (currentPosition== length - 1 && !left) {
			currentPosition = 0;
		}
		else if (!left){
			currentPosition++;
		}
		if (currentPosition== 0 && left) {
			currentPosition = length - 1;
		}
		else if (left){
			currentPosition--;
		}
		console.log(currentPosition)
		moveSlide();
	}
	$("#buttonLeft").click(function () {
		changePosition(true)
	})
	$("#buttonRight").click(function () {
		changePosition(false)
	})
})









			