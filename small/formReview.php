<?php
    if (empty($_SESSION['username'])) {
        echo "
        <div class='is-logged'>
        <h2 class='placename' style='color:#2c3e50;'>You must be logged in to leave a review</h2>
        <a class = 'button-filled fix' href='login.php'>Sign In</a> 
        </div>
        ";
    }else{
        echo '   
        <form action="" class="write-review" method="post">
        
                <h2 class="placename" style="color:#2c3e50;">Leave your review</h2>
                <textarea class="text-review" name="reviewDescription" value="" placeholder="Write your review here..."></textarea>
                <p>Rating</p>
                <select name="rating-review">s
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select><br>
                <!-- this is needed to update the page after submission -->
                <div class="hide-it">
                    <input type="text" class="latPhp" name="latitude" value= <?php echo htmlspecialchars($row[ "latitude"]) ?>>
                    <input type="text" class="lonPhp" name="longitude" value= <?php echo htmlspecialchars($row[ "longitude"]) ?>>
                    <h5 class="namePhp">
                        <?php echo htmlspecialchars($row["name"]) ?>
                    </h5>
                    <p class="addressPhp">
                        <?php echo htmlspecialchars($row["address"]) ?>
                    </p>
                </div>

                <input class="button-filled" type="submit" name="submit" value="Submit" />
        </form>
        
        ';}


?>