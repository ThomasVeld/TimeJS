<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>TimeJS</title>

    <!-- Bootstrap -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
	<link href="style.css" rel="stylesheet">
	<link href='https://fonts.googleapis.com/css?family=Lato:400,100,100italic,300,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
	<link href="assets/css/font-awesome.min.css" rel="stylesheet">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="main-section col-md-12 text-center">
		<div class="row">
			<div class="container intro-container">
				<div class="intro-text">
					<h1>TimeJS</h1>
					<ul>
						<a href="timejs-demo.zip"><li><div>Download</div></li></a>
						<a href="#"><li><div>View on github</div></li></a>
					</ul>
				</div>
				<div class="time-buttons" style="display: none;">
					<button class="morning-button" onclick="showMorning();">Morning</button>
					<button class="afternoon-button" onclick="showAfternoon();">Afternoon</button>
					<button class="night-button" onclick="showEvening();">Evening</button>
				</div>
			</div>
		</div>
		<!-- HILLS -->
		<div class="city city-morning active">
			<img src="assets/img/morning.png" />
		</div>
		<div class="city city-afternoon">
			<img src="assets/img/afternoon.png" />
		</div>
		<div class="city city-evening">
			<img src="assets/img/evening.png" />
		</div>
		
		<!-- Morning -->
		<div class="sky-set morning-set"></div>
		<!-- Afternoon -->
		<div class="sky-set afternoon-set">
			<div id="clouds">
				<div class="cloud x1"></div>
				<div class="cloud x2"></div>
				<div class="cloud x3"></div>
				<div class="cloud x4"></div>
			</div>
		</div>
		<!-- NIGHT -->
		<div class="sky-set night-set">
			<div class="moon">
			  <ul>
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
				<li />
			  </ul>
			</div>
			<div class="stars"></div>
			<div class="twinkling"></div>
		</div>
		<div class="fader"></div>
	</div>
	<div class="info-section">
		<div id="particles-js"><canvas class="particles-js-canvas-el" width="1899" height="971" style="width: 100%; height: 100%;"></canvas></div>
		
		<div class="container">
			<div class="col-md-12 what-is-info">
				<div class="row">
					<div class="col-md-6" data-sr='enter left'></div>
					<div class="col-md-6" data-sr='enter right'>
						<h2>What is TimeJS?</h2>
						<p>
							TimeJS is a jquery plugin that lets you create a time-based design. It contains three daypart options; morning, afternoon and evening. TimeJS has the ability to check the current daytime and change your design to the design that fits with the time of the day.
						</p>
					</div>
				</div>
			</div>
			<div class="col-md-12 how-to-use-info">
				<div class="row">
					<div class="col-md-6" data-sr='enter left'>
						<h2>How to use?</h2>
						<p>
							TimeJS is easy to use and fully customizable.
							<br><br>
							Options:
							<ul class="list-group list-group-header">
								<li class="list-group-item">
									<div class="col-md-6 text-center">
										Variable
									</div>
									<div class="col-md-6 text-center">
										Default
									</div>
								</li>
							</ul>
							<ul class="list-group">
								<li class="list-group-item">
									<div class="col-md-6 text-center">
										Morning
									</div>
									<div class="col-md-6 text-center empty-option">
										(empty) <span data-toggle="tooltip" data-placement="right" title="place your morning div here. View demo.">(?)</span>
									</div>
								</li>
							</ul>
							<ul class="list-group">
								<li class="list-group-item">
									<div class="col-md-6 text-center">
										Afternoon
									</div>
									<div class="col-md-6 text-center empty-option">
										(empty) <span data-toggle="tooltip" data-placement="right" title="place your afternoon div here. View demo.">(?)</span>
									</div>
								</li>
							</ul>
							<ul class="list-group">
								<li class="list-group-item">
									<div class="col-md-6 text-center">
										Evening
									</div>
									<div class="col-md-6 text-center empty-option">
										(empty) <span data-toggle="tooltip" data-placement="right" title="place your evening div here. View demo.">(?)</span>
									</div>
								</li>
							</ul>
							<ul class="list-group">
								<li class="list-group-item">
									<div class="col-md-6 text-center">
										dayPart
									</div>
									<div class="col-md-6 text-center">
										"morning" <span data-toggle="tooltip" data-placement="right" title="Choose your starting daypart. There are three options; morning / afternoon / evening.">(?)</span>
									</div>
								</li>
							</ul>
							<ul class="list-group">
								<li class="list-group-item">
									<div class="col-md-6 text-center">
										autoPlay
									</div>
									<div class="col-md-6 text-center boolean-option">
										false <span data-toggle="tooltip" data-placement="right" title="When autoPlay is set on true your daypart designs will be shown in a loop">(?)</span>
									</div>
								</li>
							</ul>
							<ul class="list-group">
								<li class="list-group-item">
									<div class="col-md-6 text-center">
										autoPlaySpeed
									</div>
									<div class="col-md-6 text-center">
										15000 <span data-toggle="tooltip" data-placement="right" title="The default is 15 seconds. Change it to whatever you like.">(?)</span>
									</div>
								</li>
							</ul>
							<ul class="list-group list-group-footer">
								<li class="list-group-item">
									<div class="col-md-6 text-center">
										dayTime
									</div>
									<div class="col-md-6 text-center boolean-option">
										true <span data-toggle="tooltip" data-placement="right" title="When dayTime is set on true, TimeJS will show your morning design between 6am and 12pm, after it your design will switch to your afternoon design or evening design. If autoPlay is set on true, this option will not work">(?)</span>
									</div>
								</li>
							</ul>
						</p>
					</div>
					<div class="col-md-6" data-sr='enter right'>
					</div>
				</div>
			</div>
			
			<div class="col-md-12 fqa-info">
				<div class="row">
					<div class="col-md-6" data-sr='enter left'></div>
					<div class="col-md-6" data-sr='enter right'>
						<h2>FAQ</h2>
						<p>
							<b>Can I use timeJS for free?</b>
							<br>
							Yes!
							<br><br>
							
							<b>Can I ask for a new functionality?</b>
							<br>
							Yes! Use Github
							<br><br>
							
							<b>I need help!</b>
							<br>
							Send me an email or visit Github.<br>
							Don't forget to add a link to your demo/example website!
							<br><br>
						</p>
					</div>
				</div>
			</div>
			
			<div class="col-md-12 demo-info text-center">
				<div class="row">
					<h2>Try the demo</h2>
					<a href="demo">Demo</a>
				</div>
			</div>
		</div>
	</div>
	<footer class="col-md-12">
		<div class="row">
			<div class="container">
				<ul>
					<li>&copy; Copyright <script type="text/javascript">document.write(new Date().getFullYear());</script> Webpeach</li>
				</ul>
				<ul>
					<a href="https://www.facebook.com/webpeach" target="_blank"><li><i class="fa fa-facebook"></i></li></a>
					<a href="https://twitter.com/webpeach_uk" target="_blank"><li><i class="fa fa-twitter"></i></li></a>
					<a href="https://plus.google.com/103738024044331353838/posts" target="_blank"><li><i class="fa fa-google-plus"></i></li></a>
				</ul>
			</div>
		</div>
	</footer>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="assets/js/bootstrap.min.js"></script>
	<script src="assets/js/timejs.js"></script>
	<script src="assets/js/particals.js"></script>
	<script src="assets/js/timefunction.js"></script>
	<script src='assets/js/scrollReveal.js'></script>
    <script>

      window.sr = new scrollReveal();

    </script>
	<script>
            particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function() {
					console.log('callback - particles.js config loaded');
			});
						
						$("#subscribeform").submit(function(e) {
				e.preventDefault();
				subscribe("emailAddress");
			});
			$("#subscribeform2").submit(function(e) {
				e.preventDefault();
				subscribe("emailAddress2");
			});
		
	</script>
	<script>
		$(function () {
		  $('[data-toggle="tooltip"]').tooltip()
		})
	</script>	
  </body>
</html>