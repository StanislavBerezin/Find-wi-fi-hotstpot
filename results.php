<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="author" content="">
  <meta name="description" content="">
  <link rel="stylesheet" href="results.css" type="text/css"/>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script type="text/javascript" src="scripts.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">

  <!-- <link href="css/normalize.css" rel="stylesheet">
  <link href="css/style.css" rel="stylesheet"> -->
</head>

<body>
  <div class="wrapper">
    <?php  require "./small/searchNav.php" ?>

      <div class="flex-wrapper">
          <div class="sidemenu">
              <h1 class="logo">Your results:</h1>
                <div class="element">
                    
                    <h5>Nestle caffee BOND</h5>

                      <div class="circles">
                        <p>Rating </p>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot-grey"></span>
                    </div>
                    <p>Woolloongabba</p>
                    <a class="button-filled" type="submit" value="Submit" href="review.html">More</a>
                </div>
                
                <div class="element">
                    
                    <h5>Nestle caffee DEMO 007</h5>
                    <div class="circles">
                        <p>Rating </p>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot-grey"></span>
                        <span class="dot-grey"></span>
                    </div>
                    <p>Woolloongabba</p>
                    <a class="button-filled" type="submit" value="Submit" href="review.html">More</a>
                </div>

                <div class="element">
                    
                    <h5>Nestle caffee DEMO 1</h5>
                    <div class="circles">
                        <p>Rating </p>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                    <p>Woolloongabba</p>
                    <a class="button-filled" type="submit" value="Submit" href="review.html">More</a>
                </div>

                <div class="element">
                    
                    <h5>Last test</h5>
                        <div class="circles">
                            <p>Rating </p>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span class="dot-grey"></span>
                    </div>
                    <p>Woolloongabba</p>
                    <a class="button-filled" type="submit" value="Submit" href="review.html">More</a>
                </div>

            </div>

         <div class="flex-container" id="mapContainer">

            <script type="text/javascript">
                initMap();
            </script>

            <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBLNgLe9iS9uMammPCATYMQG1-R3L6NZYc&callback=initMap">
            </script>

        </div>

  </div>
<?php  require "./small/footer.php" ?>