<!-- Our index page, the page where users able to perform searches  -->
<?php  session_start(); ?>
<?php  require "./small/header.php" ?>
<meta itemprop="accessibilityControl" content="fullMouseControl">
  <meta itemprop="accessibilityHazard" content="noFlashingHazard">
  <meta itemprop="accessibilityHazard" content="noMotionSimulationHazard">
  <meta itemprop="accessibilityHazard" content="noSoundHazard">
<div class="mega-wrap">
	<div>
		<?php  require "./small/searchNav.php" ?>
	</div>
	<div class='intro-screen'>
		<div id='text-intro'>

		<h1 >Wifi hotspot finder</h1>
		<hr>
	<h3 >Find the best around you</h3>
</div>


</div>
	<div class="hide-it">

		<?php  require "./db/mainPageMap.php" ?>

	</div>
	<div class="flex-container" id="searchContainer">

		<div id="searchBar">

			<h2 id='headline'>FIND THE BEST WIFI HOTSPOTS IN BRISBANE</h1>
				<div class="search-items">
					<form onsubmit="return searchValidator()" class='formSearch' action="results.php" method="GET">

						<input type="search" id="idWifiName" name="wifiName">

						<select id="ratingSelect" name="ratings">
				 
									<option disabled selected>Rating</option>
									<option value="5">5</option>
									<option value="4">4</option>
									<option value="3">3</option>
									<option value="2">2</option>
									<option value="1">1</option>
				
								</select>
						<?php  require "./db/dropDown.php" ?>

						<input type="submit" name="searchSubmit">


					</form>
					
					<div id="snackbar"></div>
				</div>
				<h2 id='headline'>All locations around Brisbane</h1>
		</div>
	</div>
	<div class="flex-container" id="mapContainer">


		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDIzI21475EerXIZBjSqiJyuXBdktFWYbk&callback=initMap"
		    async defer>
			initMap();
		</script>

	</div>


</div>


<?php  require "./small/footer.php" ?>