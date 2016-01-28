$(document).ready(function(){
	$(".gallery__number>a").click(function(e){
		if ($(this).hasClass("first")) {
		$(".header_gallery").css("background", "url(../img/header.jpg)");
		e.preventDefault;
	}
		else if($(this).hasClass("second")) {
		$(".header_gallery").css("background", "url(../img/bg_header1.jpg)");
	}
							 
	else if($(this).hasClass("third")) {
		$(".header_gallery").css("background", "url(../img/bg_header2.jpg)");
	}
	else if($(this).hasClass("forth")) {
		$(".header_gallery").css("background", "url(../img/bg_header3.jpg) ");
	}
		else if($(this).hasClass("fives")) {
		$(".header_gallery").css("background", "url(../img/bg_header4.jpg) ");
	}
		
		/*
Додати події до стрілочок, розібратися зі стрілочками, додати анімацію, +додати ротацію (робота з колекцією "gallery__number" через її довжину)
	*/
		
	});
});


