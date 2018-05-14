<!DOCTYPE html>
<head>
<link rel="stylesheet" type="text/css" href="style.css">
<title>Brisbane Hotspot Reviewer</title>
<script type="text/javascript" src="javascript.js"></script>
</head>
<body>
<!--The wrapper wraps around the entire webpage to keep it a certain size-->
<div class="wrapper">	
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
	<!-- Search inputs-->
	<div class="content">
		<form onsubmit="searchPageValidate();">
			Name: <input type="text" id="selectname"><br>
			Suburb: 
			<!-- Dropdown Menu Options-->
			<?php include 'select_options.php';?>
			Postcode: <input type="text" id="selectpostcode"><br>
			Rating: <input type="number" id="rating" min="1" max="5" step="0.01"><br>
			<button type="submit" id ="submitsearch" href="results.php">Search!</button>
			<!-- Connects to Database-->
			<?php include 'selectwifi.php';?>
		</form>
	</div>
	<!--The footer of the webpage-->
	<div class="footer">
		<p>Webpage created by Jean-Luc Danoy and Azure Hutchings, 2018.</p>
	</div>
</div>
</body>