<!-- THis file is responsible for showing the drop down, at first we make the connection
    and fetching all information, then we loop through the findings and putting them as options
    after just need to include this component wherever we need it. -->

<?php
    include 'db.php';
 
    try {
        //establishing connections
        include 'dbConnection.php';
        //selecting suburbs for dropdown display
        $sql = $database->prepare('SELECT suburb FROM spots');

        //executing and showing fetching all of them
        $sql->execute();
        $data = $sql->fetchAll();
        
        //in case something horrible happens
    } catch (PDOException $e) {
        echo $e->getMessage();
    }

?>

<!-- the component itself that loops through the finding in fetch all and showing in as options for drop down -->
<select id="suburbSelect" name="suburb">
           <option  disabled selected>Suburb</option>
             <?php foreach($data as $row) { ?>
               <option value="<?php echo $row['suburb'] ?>"><?php echo $row['suburb'] ?></option>

            <?php } ?>
</select> 