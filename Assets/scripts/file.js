// Homm page
// Loading screen 
$(window).on('load', function (){
	"use strict";
$(".loading-overlay .sk-cube-grid").fadeOut(1000,
		function(){	
	$("body").css("overflow","auto");
	$(this).parent().fadeOut(500,
		 function(){
		
		$(this).remove();
		});
	});	
});

// product card 

/*_____________ End Home Page  _______________*/


