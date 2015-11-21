(function( $ ){

	//plugin
   $.fn.timejs = function(options) {
		var defaults = $.extend({
			//Defaults
			color: "blue",
			backgroundColor: "blue",
			morning: "",
			afternoon: "",
			evening: "",
			dayPart: "afternoon", //morning, afternoon, evening
			autoPlay: false,
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
				$('.timejs-set').removeClass('active');
				$(options.morning).addClass('active');
			}
			else if(dayTime > 12 && dayTime < 18) {
				$('.timejs-set').removeClass('active');
				$(options.afternoon).addClass('active');
			}
			else if(dayTime >= 18) {
				$('.timejs-set').removeClass('active');
				$(options.evening).addClass('active');
			}
		}
		
   
   
   //switch functions
   
   //showMorning
   function showMorning() {
			if(!$(options.morning).hasClass('active')) {
				if($(options.afternoon).hasClass('active')) {
					// DISAPPEAR MORNING
					$(options.afternoon).animate({
						opacity: 0
					}, 1000, function() {
					});
					
					// SHOW AFTERNOON
					$(options.afternoon).promise().done(function() {
						$(options.morning).animate({
							opacity: 100
						})
					}, 1000, function() {
					});
				}
				else if($(options.evening).hasClass('active')) {
					// DISAPPEAR MORNING
					$(options.evening).animate({
						opacity: 0
					}, 1000, function() {
					});
					
					// SHOW AFTERNOON
					$(options.evening).promise().done(function() {
						$(options.morning).animate({
							opacity: 100
						})
					}, 1000, function() {
					});
				}
			}
			$('.timejs-set').removeClass('active');
			$(options.morning).addClass('active');
	};
	
   //showMorning
   function showAfternoon() {
			if(!$(options.afternoon).hasClass('active')) {
				if($(options.morning).hasClass('active')) {
					// DISAPPEAR MORNING
					$(options.afternoon).animate({
						opacity: 0
					}, 1000, function() {
					});
					
					// SHOW AFTERNOON
					$(options.morning).promise().done(function() {
						$(options.afternoon).animate({
							opacity: 100
						})
					}, 1000, function() {
					});
				}
				else if($(options.evening).hasClass('active')) {
					// DISAPPEAR MORNING
					$(options.evening).animate({
						opacity: 0
					}, 1000, function() {
					});
					
					// SHOW AFTERNOON
					$(options.evening).promise().done(function() {
						$(options.afternoon).animate({
							opacity: 100
						})
					}, 1000, function() {
					});
				}
			}
			$('.timejs-set').removeClass('active');
			$(options.afternoon).addClass('active');
	};
	
	//showEvening
   function showEvening() {
			if(!$(options.evening).hasClass('active')) {
				if($(options.afternoon).hasClass('active')) {
					// DISAPPEAR MORNING
					$(options.afternoon).animate({
						opacity: 0
					}, 1000, function() {
					});
					
					// SHOW AFTERNOON
					$(options.afternoon).promise().done(function() {
						$(options.evening).animate({
							opacity: 100
						})
					}, 1000, function() {
					});
				}
				else if($(options.morning).hasClass('active')) {
					// DISAPPEAR MORNING
					$(options.morning).animate({
						opacity: 0
					}, 1000, function() {
					});
					
					// SHOW AFTERNOON
					$(options.morning).promise().done(function() {
						$(options.evening).animate({
							opacity: 100
						})
					}, 1000, function() {
					});
				}
			}
			$('.timejs-set').removeClass('active');
			$(options.evening).addClass('active');
	};
	
	
	
	//autoplay
	function autoPlay() {
		var run = true;
		function foo(){
			if (run){
				setTimeout(function () {
					showAfternoon();
				}, 15000);
				setTimeout(function () {
					showEvening();
				}, 25000);
				setTimeout(function () {
					showMorning();
				}, 35000);
			}
		}

		function stop(){
			run = false;
		}

		foo();
	}
	
}; 
})( jQuery );