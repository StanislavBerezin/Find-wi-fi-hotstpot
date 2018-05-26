<!-- THis page is responsible for submitting reviews and indicating that a user has to be logged in,
    in order to leave a review. -->

<?php
//if the form has been pressed then do the following
if (isset($_POST["submit"])) {
  include 'db.php';
  try {
    //if there is a session with a username then this somebody is logged in
    if(isset($_SESSION['username']))
    {
        //seting the variables $row is still being passed to here too
        $place       =$row['name'];
        $userEmail        =$_SESSION["email"];
        $user        =$_SESSION["username"];
        $textReview =$_POST["reviewDescription"];
        $score       =$_POST["rating-review"];
        //check if the user has already subbmitted his review
        $statementCheck = $database->prepare("SELECT  email, user, place FROM reviews
                                                WHERE email LIKE '%".$userEmail."%' AND place LIKE '%".$place."%'"); 
        $statementCheck->execute();
        $countUser = $statementCheck->rowCount(); 


        //if a user has submitted his review, then it should terminate the entire process of this file.
        //otherwise on the refresh page keeps submiting the the file. 
        if($countUser > 0) {
            $message = '<label>You have already submitted your review</label>';
        }
        //if a user hasnt submitted his review then go ahead and insert it
        else{

            $sql = "INSERT INTO reviews (place, review, user,score, date, email) 
                    VALUES ('$place', '$textReview', '$user', $score , CURDATE(), '$userEmail')";

            $database->exec($sql);

        }
        
    }

    }
    //drama case
    catch(PDOException $e){
      echo $sql . "<br>" . $e->getMessage();
    }


}
?>


