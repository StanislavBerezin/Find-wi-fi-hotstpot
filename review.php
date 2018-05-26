<!-- the page that is responbile for individual item component where users can leave their reviews -->
<?php  session_start(); ?>
<?php  require "./small/headerReview.php" ?>
<?php  require "./small/searchNav.php" ?>
<?php  require "./db/specific.php" ?>
<?php  require "./db/submitReview.php" ?>


<div class="flex-container map" id="mapContainer">
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDIzI21475EerXIZBjSqiJyuXBdktFWYbk&callback=initMap"
        async defer>
        initMap();
    </script>
</div>
<div class="flex-all">

    <div class="left-side">
        <div class="test">
            <h2 class="placename" style="color:#2c3e50;">
                <?php echo htmlspecialchars($row['name']) ?>
                </h1>
                <p style="font-size: 120%;" class="get_grey">
                    <?php echo htmlspecialchars($row['address']) ?>
                </p>
                <!-- on the left side, showing the average rating -->
                <?php  require "./db/spotRating.php" ?>


        </div>

    </div>

    <div class="right-side">

        <!-- getting the reviews from the database -->
        <?php  require "./db/getReviews.php" ?>


        <!-- to decide if we need to display the form to submit a review, if a user has already submited it, then dont show a form -->
        <?php  require "./db/ifSubmited.php" ?>






    </div>
</div>

<?php  require "./small/footer.php" ?>