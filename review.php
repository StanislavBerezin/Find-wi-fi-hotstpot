<?php  require "./small/header.php" ?>
<?php  require "./small/searchNav.php" ?>
  
  <div class="flex-container map" id="mapContainer">

            <script type="text/javascript">
                initMap();
            </script>

            <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBLNgLe9iS9uMammPCATYMQG1-R3L6NZYc&callback=initMap">
            </script>

        </div>
 <div class="flex-all">

    <div class="left-side">
        <div class="test">
            <h2  class="placename" style="color:#2c3e50;">PlaceName cafe</h1>
        <p style="font-size: 120%;" class="get_grey">15 Location street</p>
        
        <div class="circles">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot-grey"></span>
        </div>
        
        <a class="button-filled">Review</a>
    </div>
    
 </div>

    <div class="right-side"> 
        <div class="comment">
            <div class="ratings-comments">
            <div class="circles">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
        </div>
            <p class="get_grey"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
            <div class="user-details"><p>Username Joe </p>  <p class="get_grey"> 12/12/2014</p></div>
        </div>
        <div class="comment">
            <div class="ratings-comments">

            <div class="circles">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot-grey"></span>
                    <span class="dot-grey"></span>
            </div>
            <p class="get_grey"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        
            <div class="user-details"><p>Username Joe </p>  <p class="get_grey"> 12/12/2014</p></div>

        </div>
        
        
            
    </div>
</div>

<?php  require "./small/footer.php" ?>