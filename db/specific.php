<!-- THis file is responbile for showing data on the specific item page based on the searchResults.php form
    by using this we can locate what item we need to get and display its name, adrress and location -->
<?php
    include 'db.php';
    // Create a new database
    try {
        
        include 'dbConnection.php';
      
        //query for properties  
        $sql = $database->prepare("SELECT  name, address, latitude, longitude FROM spots WHERE latitude LIKE '%".$_GET["latitude"]."%' 
                                    AND longitude LIKE '%".$_GET["longitude"]."%'");
        //executing
        $sql->execute();
        $data = $sql->fetchAll();

        //for drama events
    } catch (PDOException $e) {
        echo $e->getMessage();
    }


?>

<!-- this is used to display data once we enter the page 
    its hidden in DOM-->
<?php foreach ($data as $row): ?>

                <div class="hide-it">
                <input type="text" class='latPhp' name="latitude" value = <?php echo htmlspecialchars($row['latitude']) ?>>
                <input type="text" class="lonPhp" name="longitude" value = <?php echo htmlspecialchars($row['longitude']) ?>> 
                <h5 class="namePhp"><?php echo htmlspecialchars($row['name']) ?></h5>
                <p class="addressPhp"><?php echo htmlspecialchars($row['address']) ?></p>
                </div>
             
<?php endforeach; ?>