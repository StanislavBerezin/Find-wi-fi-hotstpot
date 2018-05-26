<!-- THis file is responbile for showing the average rating for the item and displaying circles(stars)
        this file is used when we display ratings for individual item page where users can leave reviews (review.php).
        And we include this file in (searchResults.php)-->
<?php
    include 'db.php';
    // Create a new database
    try {
        include 'dbConnection.php';
        
        //query to get the score once we enter the page
        //the $row['name'] comes from specific.php when we looped through the $data that we've found
        $sql = $database->prepare("SELECT score FROM reviews WHERE place LIKE  '%".$row['name']."%'");
        
        //executing everything and fetching
        $sql->execute();
        $review = $sql->fetchAll();

        //creating an array for ratings
        $scoreArray = [];
        //put all ratings that are found for this wifi spot into the $scoreArray
        foreach($review as $single){
            array_push($scoreArray, $single['score']);   
        }
        //if its empty then the average rating is 0;
        if(empty($scoreArray)){
            $avg = 0;
        }
        //however if there is some ratings for this item then calculate the average and insert that average into the new column in spots
        else{
            $avg = round(array_sum($scoreArray) / count($scoreArray));

            $updateSpot =  "UPDATE spots SET rating = $avg WHERE Name LIKE '%".$row['name']."%'";
            $database->exec($updateSpot);
            
        }

        //drama events
    } catch (PDOException $e) {
        echo $e->getMessage();
    }


?>



<!-- this is responbile for displaying circles(ratings) based on the average number
    e.g if its 4 then show 4 circles and so on -->
<div class="circles">
            <?php
        
                switch ($avg) {
                    case '5':
                        echo "<div class='spacing'>
                                <span class='dot'></span>
                                <span class='dot'></span>
                                <span class='dot'></span>
                                <span class='dot'></span>
                                <span class='dot'></span>
                                </div>";
                        break;
                    case '4':
                        echo "<div class='spacing'>
                                <span class='dot'></span>
                                <span class='dot'></span>
                                <span class='dot'></span>
                                <span class='dot'></span>
                                <span class='dot-grey'></span>
                                </div>";
                        break;
                    case '3':
                        echo "<div class='spacing'>
                                <span class='dot'></span>
                                <span class='dot'></span>
                                <span class='dot'></span>
                                <span class='dot-grey'></span>
                                <span class='dot-grey'></span>
                                </div>";
                        break;
                    case '2':
                        echo "<div class='spacing'>
                                <span class='dot'></span>
                                <span class='dot'></span>
                                <span class='dot-grey'></span>
                                <span class='dot-grey'></span>
                                <span class='dot-grey'></span>
                                </div>";
                        break;
                    case '1':
                        echo "<div class='spacing'>
                                <span class='dot'></span>
                                <span class='dot-grey'></span>
                                <span class='dot-grey'></span>
                                <span class='dot-grey'></span>
                                <span class='dot-grey'></span>
                                </div>";
                        break;
                        
                    default:
                        echo "<div class='spacing'>
                                <span class='dot-grey'></span>
                                <span class='dot-grey'></span>
                                <span class='dot-grey'></span>
                                <span class='dot-grey'></span>
                                <span class='dot-grey'></span>
                                </div>";
                        break;
                }


            ?>
    </div>

