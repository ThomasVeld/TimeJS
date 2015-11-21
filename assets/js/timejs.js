		//SHOW EVENING
	function showMorning() {
			if(!$('.morning-set').hasClass('active')) {
				if($('.city-afternoon').hasClass('active')) {
					// DISAPPEAR MORNING
					$('.city-afternoon img').animate({
						height: 0
					}, 1000, function() {
					});
					$('.afternoon-set').animate({
						opacity: 0
					}, 1000, function() {
					});
					
					// SHOW AFTERNOON
					$('.city-afternoon img').promise().done(function(){
						$('.city-morning img').animate({
							height: "100%"
						}, 1800, function() {
						});
					});
					$('.afternoon-set').promise().done(function() {
						$('.morning-set').animate({
							opacity: 100
						})
					}, 1000, function() {
					});
				}
				else if($('.city-evening').hasClass('active')) {
					// DISAPPEAR MORNING
					$('.city-evening img').animate({
						height: 0
					}, 1000, function() {
					});
					$('.night-set').animate({
						opacity: 0
					}, 1000, function() {
					});
					
					// SHOW AFTERNOON
					$('.city-evening img').promise().done(function(){
						$('.city-morning img').animate({
							height: "100%"
						}, 1800, function() {
						});
					});
					$('.night-set').promise().done(function() {
						$('.morning-set').animate({
							opacity: 100
						})
					}, 1000, function() {
					});
				}
			}
			$('.city').removeClass('active');
			$('.city-morning').addClass('active');
	};
	
	
	//SHOW AFTERNOON
	function showAfternoon() {
			if(!$('.afternoon-set').hasClass('active')) {
				if($('.city-morning').hasClass('active')) {
					// DISAPPEAR MORNING
					$('.city-morning img').animate({
						height: 0
					}, 1000, function() {
					});
					$('.morning-set').animate({
						opacity: 0
					}, 1000, function() {
					});
					
					// SHOW AFTERNOON
					$('.city-morning img').promise().done(function(){
						$('.city-afternoon img').animate({
							height: "100%"
						}, 1800, function() {
						});
					});
					$('.morning-set').promise().done(function() {
						$('.afternoon-set').animate({
							opacity: 100
						})
					}, 1000, function() {
					});
				}
				else if($('.city-evening').hasClass('active')) {
					// DISAPPEAR MORNING
					$('.city-evening img').animate({
						height: 0
					}, 1000, function() {
					});
					$('.night-set').animate({
						opacity: 0
					}, 1000, function() {
					});
					
					// SHOW AFTERNOON
					$('.city-evening img').promise().done(function(){
						$('.city-afternoon img').animate({
							height: "100%"
						}, 1800, function() {
						});
					});
					$('.night-set').promise().done(function() {
						$('.afternoon-set').animate({
							opacity: 100
						})
					}, 1000, function() {
					});
				}
			}
			$('.city').removeClass('active');
			$('.city-afternoon').addClass('active');
			
			$('.intro-text h1').fadeTo( "slow", 1, function() {
				$(this).css('color', '#333');
			});
			$('.intro-text ul li').fadeTo( "slow", 1, function() {
				$(this).css('color', '#333');
			});
			$('.intro-text ul li').fadeTo( "slow", 1, function() {
				$(this).css('border', '2px solid #333');
			});
			$('.intro-text a ').fadeTo( "slow", 1, function() {
				$(this).css('color', '#333');
			});
		};
		
		
		
	//SHOW EVENING
	function showEvening() {
			if(!$('.night-set').hasClass('active')) {
				if($('.city-morning').hasClass('active')) {
					// DISAPPEAR MORNING
					$('.city-morning img').animate({
						height: 0
					}, 1000, function() {
					});
					$('.morning-set').animate({
						opacity: 0
					}, 1000, function() {
					});
					
					// SHOW AFTERNOON
					$('.city-morning img').promise().done(function(){
						$('.city-evening img').animate({
							height: "100%"
						}, 1800, function() {
						});
					});
					$('.morning-set').promise().done(function() {
						$('.night-set').animate({
							opacity: 100
						})
					}, 1000, function() {
					});
				}
				else if($('.city-afternoon').hasClass('active')) {
					// DISAPPEAR MORNING
					$('.city-afternoon img').animate({
						height: 0
					}, 1000, function() {
					});
					$('.afternoon-set').animate({
						opacity: 0
					}, 1000, function() {
					});
					
					// SHOW AFTERNOON
					$('.city-afternoon img').promise().done(function(){
						$('.city-evening img').animate({
							height: "100%"
						}, 1800, function() {
						});
					});
					$('.afternoon-set').promise().done(function() {
						$('.night-set').animate({
							opacity: 100
						})
					}, 1000, function() {
					});
				}
			}
			$('.city').removeClass('active');
			$('.city-evening').addClass('active');
			
			$('.intro-text h1').fadeTo( "slow", 1, function() {
				$(this).css('color', '#FFF');
			});
			$('.intro-text ul li').fadeTo( "slow", 1, function() {
				$(this).css('color', '#FFF');
			});
			$('.intro-text ul li').fadeTo( "slow", 1, function() {
				$(this).css('border', '2px solid #FFF');
			});
			$('.intro-text a ').fadeTo( "slow", 1, function() {
				$(this).css('color', '#FFF');
			});
		};
			
			var runCode = true;
			var morningBoolean = true;
			var	afternoonBoolean = false;
			var eveningBoolean = false;
				// do your thing

			
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
				
				