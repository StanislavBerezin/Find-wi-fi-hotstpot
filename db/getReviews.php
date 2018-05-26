<!-- This file is responbile for getting all of the reviews the curent item
    at first we find all reviews for a specific item and then we show them in thml -->
<?php
    include 'db.php';
    // Create a new database
    try {
        include 'dbConnection.php';
        
        //selecting the things that we want based on the items name, its only 55 of them so they are pretty unique
        //no need to create ids. 
        $sql = $database->prepare("SELECT place, review, user, score, date FROM reviews WHERE place LIKE  '%".$row['name']."%'");
        
        //executing the query
        $sql->execute();
        $review = $sql->fetchAll();

        
     //something horrible as usual, need to handle
    } catch (PDOException $e) {
        echo $e->getMessage();
    }


?>

<!-- components responsible for displaying the review itself
    $single['score'] is the review, so need to display circles based on the rating. -->
<?php foreach ($review as $single): ?>

    <div class="comment s">
        <div class="ratings-comments">
            <?php
                switch ($single["score"]) {
                    case '5':
                        echo "<span class='dot'></span>
                                <span class='dot'></span>
                                <span class='dot'></span>
                                <span class='dot'></span>
                                <span class='dot'></span>";
                        break;
                    case '4':
                        echo "<span class='dot'></span>
                                <span class='dot'></span>
                                <span class='dot'></span>
                                <span class='dot'></span>
                                <span class='dot-grey'></span>";
                        break;
                    case '3':
                        echo "<span class='dot'></span>
                                <span class='dot'></span>
                                <span class='dot'></span>
                                <span class='dot-grey'></span>
                                <span class='dot-grey'></span>";
                        break;
                    case '2':
                        echo "<span class='dot'></span>
                                <span class='dot'></span>
                                <span class='dot-grey'></span>
                                <span class='dot-grey'></span>
                                <span class='dot-grey'></span>";
                        break;
                    case '1':
                        echo "<span class='dot'></span>
                                <span class='dot-grey'></span>
                                <span class='dot-grey'></span>
                                <span class='dot-grey'></span>
                                <span class='dot-grey'></span>";
                        break;
                        
                    default:
                        echo "<span class='dot-grey'></span>
                                <span class='dot-grey'></span>
                                <span class='dot-grey'></span>
                                <span class='dot-grey'></span>
                                <span class='dot-grey'></span>";
                        break;
                }


            ?>
            <!-- the review itself with username and a date posted -->
            <p class="get_grey review-text"> <?php echo htmlspecialchars($single['review']) ?></p>
        </div>
        <div class="user-details">
            
            <p class="get_grey">Posted on: <?php echo htmlspecialchars($single['date']) ?></p>
            <p>By: <?php echo htmlspecialchars($single['user']) ?> </p>
        </div>
    </div>

<?php endforeach; ?>