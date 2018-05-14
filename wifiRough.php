<?php  require "./small/header.php" ?>

    <div class="mega-wrap">

    <?php  require "./small/registerNav.php" ?>
  
        <div class="flex-container" id="mapContainer">

            <script type="text/javascript">
                initMap();
            </script>

            <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBLNgLe9iS9uMammPCATYMQG1-R3L6NZYc&callback=initMap">
            </script>

        </div>

        <div class="flex-container" id="searchContainer">
            <div class="flex-container" id="headline">
                <h2>FIND THE BEST WIFI HOTSPOTS IN BRISBANE</h1></div>

				<div class="flex-container" id="searchBar">

				<input type="search" name="wifiName">

				<select id="ratingSelect">

					<option disabled selected>Rating</option>
					<option value="five">5</option>
					<option value="four">4</option>
					<option value="three">3</option>
					<option value="two">2</option>
					<option value="one">1</option>

				</select>

				<select id="suburbSelect">

					<option disabled selected>Suburb</option>
					<option value="carindale">Carindale</option>
					<option value="mansfield">Mansfield</option>
					<option value="mtGravatt">Mt Gravatt</option>
					<option value="annerley">Annerley</option>

				</select>

				<input type="submit" class="button" name="searchSubmit">
				</div>
            </div>
        </div>
        
<?php  require "./small/footer.php" ?>
