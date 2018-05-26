
<!-- this file is responsible for making connections to our database
                        throughout the entire website                 -->
<?php
       //establishing connection to database by using host,dbname, username and passowrd that is included in db.php
       $database = new PDO("mysql:host=$host;dbname=$dbName", $username, $password);
       //display any errors if they exist
       $database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>