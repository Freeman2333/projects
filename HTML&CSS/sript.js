

$(document).ready(function(){
	var table =$(".beauty_table"),
		cell = $(".td-info");

	function mouseMove(argument) {
		cell.mouseover(function () {
			$(this).addClass("hover-td");

			var index = $(this).index()
			var siblings = $(this).siblings()
			var rows = $("tr");
	

			rows.each(function () {
				if ($(this).index()==1) {
					$(this).find("td").eq(index-1).addClass("green")
				}
				else if($(this).index()!==0&&$(this).index()!==1){
					// console.log($(this).index())
					$(this).find("td").eq(index).addClass("orange")
				}
			})
			siblings.each(function () {
				$(this).index() == 0 ? $(this).addClass("green") : $(this).addClass("orange")
				
			})

			$(this).removeClass("orange")
		});
		$(cell).mouseout(function () {
			$(this).removeClass("hover-td")

			var index = $(this).index()
			var siblings = $(this).siblings()
			var rows = $("tr");

			rows.each(function () {
				if ($(this).index()==1) {
					$(this).find("td").eq(index-1).removeClass("green")
				}
				else if($(this).index()!==0&&$(this).index()!==1){
					// console.log($(this).index())
					$(this).find("td").eq(index).removeClass("orange")
				}
			})

			siblings.each(function () {
				$(this).index() == 0 ? $(this).removeClass("green") : $(this).removeClass("orange")
				
			})
		})
	}
	mouseMove()
})