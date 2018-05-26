
<!-- THis file is responble for showing items on the first page of our app.
    We do the query for locations, spot names and addresses in order to put them as elements on DOM.
    Then our script.js searches for class names like latPhp, lonPhp and puts them on the map, 
    names and addresses needed so that a user can press on the item on the map and get basic description
     -->
<?php
   include 'db.php';
   
    // Create a new database
    try {
        include 'dbConnection.php';

        //doing query
        $sql = $database->prepare("SELECT latitude, longitude, name, address FROM spots");
       
        //execute and fetch
        $sql->execute();
        $data = $sql->fetchAll();
        
        //horrible instances to be handled
    } catch (PDOException $e) {
        echo $e->getMessage();
    }

?>

<!-- to display elements on DOM for script.js to read and put it on the map, the elements are set to display:none; -->
<?php foreach ($data as $row): ?>

                    <input type="text" class='latPhp' name="latitude" value = <?php echo htmlspecialchars($row['latitude']) ?>>
                    <input type="text" class="lonPhp" name="longitude" value = <?php echo htmlspecialchars($row['longitude']) ?>> 
                    <p class="namePhp"><?php echo htmlspecialchars($row['name']) ?></p>
                    <p class="addressPhp"><?php echo htmlspecialchars($row['address']) ?></p>
                    
<?php endforeach; ?>