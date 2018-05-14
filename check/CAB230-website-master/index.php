<?php include 'header.php'; ?>

<!-- Insert content for universal regions -->
<!-- <body onload="setupHTMLCode('Home');initMultiMaps(locations);">-->
<!-- <body onload="setupHTMLCode('Home');initMultiMapsB();test(this);" >-->
<!-- <body onload="setupHTMLCode2('Home');test(this);displayReviews('recent', 9);" >-->
<body onload="checkForData('Home');test(this);" >
<div id="wrapper">

	<?php include 'menu.php'; ?>

	<div class="fitwidthL padding60 textcenter">
    	<h3 >Highest Rated Locations</h3>
			<div class="half textleft padding60">
				<div class="topRating">
				</div>
			</div><div class="half textleft padding60">
				<div class="topRating">
				</div>
			</div><div class="half textleft padding60">
				<div class="topRating">
				</div>
			</div><div class="half textleft padding60">
				<div class="topRating">
				</div>
			</div>
	</div>
	<div class="fitwidthL padding60 textcenter">
    	<h3>Recent Reviews</h3>
        <div id="ReviewList">
        </div>
	</div>

	<?php include 'footer.php'; ?>

</div>

<?php include 'popups.php'; ?>

</body>
</html>
