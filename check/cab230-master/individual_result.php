<!DOCTYPE html>
<head>
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script async defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDt0-G_rlX5XwmwOJfd_yYBesB_bZc3bfU&callback=initMap">
</script>
<title>Brisbane Hotspot Reviewer</title>
<script type="text/javascript" src="javascript.js"></script>
</head>
<body onload="individualHotspot();">
<!--The wrapper wraps around the entire webpage to keep it a certain size-->
<div class=wrapper">	
	<!--The header class contains the name at the top of the page and the links to other pages-->
		<div class="header">
		<h1>Brisbane Hotspot Reviewer</h1>
		<hr>
		<!--The links to other pages in the website-->
		<div class="links">
			<a href="homepage.php">Homepage</a> <a href="">Hotspots</a> <a href="">Recent reviews</a> 
			<!--Dropdown for the search buttons-->
			<div class="dropdown">
				<a href="">Search</a>
				<div class="dropdown-content">
					<a href="searchname.php">Keywords</a>
					<a href="nearesthotspot.php">Nearest hotspot</a>
			    </div>
			</div>
		</div>
		<!--The links to login/signup are on the other side of the header-->
		<div class="login">
			<a href="login.php">Log in</a> <a href="signup.php">Sign up</a>
		</div>
	</div>
	<div class="content">
		<h2>Carindale Library WiFi</h2>
		<div class="rating">
				<span class="fa fa-star checked"></span>
				<span class="fa fa-star checked"></span>
				<span class="fa fa-star checked"></span>
				<span class="fa fa-star"></span>
				<span class="fa fa-star"></span>
			</div>
		<div id="map"></div>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
		<p>Located at The Home and Leisure Centre, Corner Carindale Street & Banchory Court, Westfield Carindale Shopping Centre, Carindale Library WiFi offers a great range of amazing books and wifi.</p>
		<div class="review">
			<h3>The library broke my leg</h3>
			<div class="rating">
				<span class="fa fa-star checked"></span>
				<span class="fa fa-star"></span>
				<span class="fa fa-star"></span>
				<span class="fa fa-star"></span>
				<span class="fa fa-star"></span>
			</div>
			<p>I fell off a shelf and broke both of my legs. Worst library ever.</p>
		</div>
		<div class="review">
			<h3>I met my wife at this library</h3>
			<div class="rating">
				<span class="fa fa-star checked"></span>
				<span class="fa fa-star checked"></span>
				<span class="fa fa-star checked"></span>
				<span class="fa fa-star checked"></span>
				<span class="fa fa-star checked"></span>
			</div>
			<p>I saved this girl from someone falling on her and we got married three days later.</p>
		</div>
	</div>

	<!--The footer of the webpage-->
	<div class="footer">
	<p>Webpage created by Jean-Luc Danoy and Azure Hutchings, 2018.</p>
	</div>
</div>
</body>