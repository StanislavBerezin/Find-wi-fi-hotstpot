<?php include 'header.php'; ?>

<!-- Insert content for universal regions -->
<!-- <body onload="setupHTMLCode2('My Reviews');initMapMulti('reviewed');displayReviews('user', UserID);"> -->
<body onload="checkForData('My Reviews');">
<div id="wrapper">

	<?php include 'menu.php'; ?>
    
    <div class="fitwidthL padding60">
		<div class="relativewrap">
			<div class="third">
                <div id="map"></div>
                <br />
                <h4>Your average rating</h4>
                <p>3.5</p>
                <br />
                <h4>Your highest rated locations</h4>
                <p>With a rating of 4.5</p>
                <p>7th Brigade Park, Chermside</p>
                <p>Carindale Library Wifi</p>
			</div><div class="twothirds rightcontentthirds verticleScroll">
				<!-- JS find and insert results -->
                <div id="ReviewList">
                </div>
			</div>
		</div>
	</div>

	<?php include 'footer.php'; ?>

</div>

<?php include 'popups.php'; ?>

</body>
</html>
