
<!-- this file is responsible for showing the form to submit a review, if a user has already
        submitted his or her review, then dont show the form, but rather tell them that they have
        already submitted it -->
<?php  
                 if(isset($message)) { 
                     //already submitted review or have to be logged in
                     echo '<label class="text-danger">'.$message.'</label>';  
                }elseif(empty($_SESSION['email'])){
                   echo " <div class='must-be'>
                        <h2 class='placename' style='color:#2c3e50;'>You must be logged in to leave a review</h2>
                        <a class = 'button-filled fix' href='login.php'>Sign In</a> 
                        </div>  ";
                }else{
                    $place       =$row['name'];
                    $userEmail        =$_SESSION["email"];
                    $statementCheck = $database->prepare("SELECT  email, user, place FROM reviews
                    WHERE email LIKE '%".$userEmail."%' AND place LIKE '%".$place."%'"); 
                    $statementCheck->execute();
                    $countUser = $statementCheck->rowCount(); 


                    //if a user has submitted his review, then it should terminate the entire process of this file.
                    //otherwise on the refresh page keeps submiting the the file. 
                    if($countUser > 0) {
                        echo '<label class="text-danger"><label>You have already submitted your review</label></label>';
                    }else{
                        // <!-- BASICally if username is set then show the form to submit a review if no, then no tell a user they have to register
                        // check formReview.php for more -->
                        include './small/formReview.php';
                    }

                    
                }
        ?>  