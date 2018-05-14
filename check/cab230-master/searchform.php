<?php
   $pdo = new PDO('mysql:host=localhost;dbname=hotspot_database', 'root', '');
   $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   if (isset($_SESSION['searchresults']){
        try {
            echo "<div class='content'>";
            //$statement = $pdo->query('SELECT name, address FROM items');
            //$data=$statement->fetchAll();
            foreach ($data as $row){
                ?><div class='result'>
                    <h2><?=$row["name"]?></h2>
                    <div class="rating">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <p class="address"><?=$row["address"]?></p>
                    <a href="individual_result.php">More details</a>
                </div><?php
            }
            echo "</div>";
        } catch (PDOException $e) {
            echo $e->getMessage();
        }    
    }
    else{
        catch(PDOException $e){
            echo $e->getMessage();
        }
    }
?>