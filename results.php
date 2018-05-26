
<!-- this page shows results of the search, as described it uses searchResults.php to generate the output -->
<?php  session_start(); ?>
<?php  require "./small/headerResults.php" ?>
  <div class="wrapper">
    <?php  require "./small/searchNav.php" ?>

      <div class="flex-wrapper">
          <div class="sidemenu">
              <h1 class="logo">Your results:</h1>
              <?php  require "./db/searchResults.php" ?>

            </div>

         <div class="flex-container fix-map" id="mapContainer">
         <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDIzI21475EerXIZBjSqiJyuXBdktFWYbk&callback=initMap" async defer>
                initMap();
			</script>
        </div>
        <?php  require "./small/footer.php" ?>
  </div>

