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

$(document).ready(function() {
 var owl = $("#owl-demo");
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
	  autoPlay:true,
	  navigation :false,
	  paginationNumbers: false,
	  pagination:false
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
	  
	  
	  
	  
  });
 
	
	
// Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })


   $('.first').click(function(){
    owl.trigger('owl.goTo', 0)
  }); 
	  $(".second").click(function(){
    owl.trigger('owl.goTo', 1)
  }); 
    $(".third").click(function(){
    owl.trigger('owl.goTo', 2)
  }); 
    $(".forth").click(function(){
    owl.trigger('owl.goTo', 3)
  }); 
    $(".fives").click(function(){
    owl.trigger('owl.goTo', 4)
  }); 
  
  
  
 
  
  
  
  
  
  

});
