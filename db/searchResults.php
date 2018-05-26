<!-- This file is responsible for results that are shown based on the initial search for wifi spots
    it can be based on the name, suburb(option list), or ratings, however if a user enters the page without any search
    then the page will display all items on the map. Then this files handles the side menu that shows description for items
    and can redirect them to the page where they can leave a review -->

<?php
    include 'db.php';
   
    // Create a new database
    try {
        include 'dbConnection.php';

        //doing search based on the name
        if("" != trim($_GET['wifiName'])){
            $sql = $database->prepare( "SELECT name, address, latitude, longitude FROM spots WHERE name LIKE '%".$_GET["wifiName"]."%'");
        }
        //based on suburb
        elseif(isset($_GET["suburb"])){
            $sql = $database->prepare( "SELECT name, address, latitude, longitude FROM spots WHERE suburb LIKE '%".$_GET["suburb"]."%'");
            
        }
        //based on ratings
        elseif(isset($_GET["ratings"])){
            $sql = $database->prepare( "SELECT name, address, latitude, longitude FROM spots WHERE rating LIKE '%".$_GET["ratings"]."%'");

        }
        //if no search was performed then show all items
        else{
            $sql = $database->prepare( "SELECT name, address, latitude, longitude FROM spots");
        }
      
        
       ///exectuing and fetching the search
        $sql->execute();
        $data = $sql->fetchAll();
        

        //horible events to be handled
    } catch (PDOException $e) {
        echo $e->getMessage();
    }

?>

<!-- this is the side menu that shows the items, its a form that uses get method and can take user to
    the next individual spot page where they can leave a review -->
<?php foreach ($data as $row): ?>
            <div class="element">
            <form  class = '' action="review.php" method = "GET">
                    <h5 class="namePhp"><?php echo htmlspecialchars($row['name']) ?></h5>
                    <?php include 'spotRating.php'; ?>
                    <p class="addressPhp"><?php echo htmlspecialchars($row['address']) ?></p>
                    <input type="submit" class="button-filled" name="" value ="More">
                </div>
                <!-- its hidden but its inside of the DOM element -->
                <div class="hide-it">
                    <!-- THIS IS USED WHEN WE GO TO SPECIFIC ITEM PAGE
                                By using this properties we can find the specific item position, from  -->
                   <input type="text" class='latPhp' name="latitude" value = <?php echo htmlspecialchars($row['latitude']) ?>>
                    <input type="text" class="lonPhp" name="longitude" value = <?php echo htmlspecialchars($row['longitude']) ?>> 


                </div>
			</form>
               

<?php endforeach; ?>