(function( $ ){

	//plugin
   $.fn.timejs = function(options) {
		var defaults = $.extend({
			//Defaults
			morning: "",
			afternoon: "",
			evening: "",
			dayPart: "afternoon", //morning, afternoon, evening
			autoPlay: false,
			autoPlaySpeed: 15000,
			dayTime: true
		}, options);
		
		var options = $.extend(defaults, options);
	
		$(document).ready(function() {
			$(options.morning).addClass('timejs-set');
			$(options.afternoon).addClass('timejs-set');
			$(options.evening).addClass('timejs-set');
			
			if(options.dayPart == "morning") {
				$(options.morning).addClass('active');
			}
			else if(options.dayPart == "afternoon") {
				$(options.afternoon).addClass('active');
			}
			else if(options.dayPart == "evening") {
				$(options.evening).addClass('active');
			}
			
			//autoPlay check
			if(options.autoPlay) {
				autoPlay();
			}
			
			if(options.dayTime) {
				onDayTime();
			}
		});

		function onDayTime() {
			var dayTime = (new Date()).getHours(); //(0-23)
			options.autoPlay = false;
			
			if(dayTime >= 6 && dayTime <= 12) {
				showMorning();
			}
			else if(dayTime > 12 && dayTime < 18) {
				showAfternoon();
			}
			else if(dayTime >= 18) {
				showEvening();
			}
		}
		
   
   
   //switch functions
   
   //showMorning
   function showMorning() {
			if(!$(options.morning).hasClass('active')) {
				if($(options.afternoon).hasClass('active')) {
					// DISAPPEAR MORNING
					$(options.afternoon).fadeOut(1000);
					$(options.morning).fadeIn(500);
				}
				else if($(options.evening).hasClass('active')) {
					$(options.evening).fadeOut(1000);
					$(options.morning).fadeIn(500);
				}
			}
			$('.timejs-set').removeClass('active');
			$(options.morning).addClass('active');
	};
	
   //showMorning
   function showAfternoon() {
			if(!$(options.afternoon).hasClass('active')) {
				if($(options.morning).hasClass('active')) {
					$(options.morning).fadeOut(1000);
					$(options.afternoon).fadeIn(500);
				}
				else if($(options.evening).hasClass('active')) {
					// DISAPPEAR MORNING
					$(options.evening).fadeOut(1000);
					$(options.afternoon).fadeIn(500);
				}
			}
			$('.timejs-set').removeClass('active');
			$(options.afternoon).addClass('active');
	};
	
	//showEvening
   function showEvening() {
			if(!$(options.evening).hasClass('active')) {
				if($(options.afternoon).hasClass('active')) {
					$(options.afternoon).fadeOut(1000);
					$(options.evening).fadeIn(500);
				}
				else if($(options.morning).hasClass('active')) {
					$(options.morning).fadeOut(1000);
					$(options.evening).fadeIn(500);
				}
			}
			$('.timejs-set').removeClass('active');
			$(options.evening).addClass('active');
	};
	
	
	
	//autoplay
	var firstSum = options.autoPlaySpeed * 1.666666;
	var secondSum = firstSum * 1.666666;
	
	function autoPlay() {
		var run = true;
		function foo(){
			if (run){
				setTimeout(function () {
					showAfternoon();
				}, options.autoPlaySpeed);
				setTimeout(function () {
					showEvening();
				}, firstSum);
				setTimeout(function () {
					showMorning();
				}, secondSum);
			}
		}
		
		/*
		function stop(){
			run = false;
		}
		*/

		foo();
	}
	
}; 
})( jQuery );