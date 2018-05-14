<?php include 'header.php'; ?>

<!-- Insert content for universal regions -->
<!-- <body onload="setupHTMLCode('Search'); displayDataTable();initMapMulti(locations);"> -->
<!-- <body onload="setupHTMLCode2('Search'); displayDataTable('found');initMapMulti('found');">-->
<body onload="checkForData('Results');test(this);" >
<div id="wrapper">

	<?php include 'menu.php'; ?>
	
	<div class="fitwidthL padding60">
		<div class="relativewrap">
			<div class="half firsthalf">
				<div id="map"></div>
			</div><div class="half rightcontent verticleScroll">
				<!-- JS find and insert results -->
                <div class="dataTable">
				</div>
			</div>
		</div>
	</div>

	<?php include 'footer.php'; ?>

</div>

<?php include 'popups.php'; ?>

</body>
</html>
