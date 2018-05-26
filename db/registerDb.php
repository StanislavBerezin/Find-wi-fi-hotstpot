<!-- THis file is responsible for making connection and validtion the inputs that we get from the user
    if everything passes then the user is registered and redirected -->

<?php

    ///Validating if the user information is correct
    if(!empty($_POST['btnRegister'])) {
        $password = $_POST["password"];
        if ($_POST['email'] == "") {
            //displays the error message on the top of the registration form to indicate that something has failed
            $message = "<span>Email field is required!</span>";
            //check username
        } else if ($_POST['username'] == "") {
            $message = "<span >Username field is required!</span>";
            //checking password

        } //this code is also taken from that link below from stackoverflow
        elseif (!preg_match("/^[a-zA-Z ]*$/",$_POST['username'])) {
            $message = "<span>Letters and whitespaces</span>"; 
        }else if ($password == "") {
            $message = "<span '>Password field is required!</span>";
            
            //THE FOLLOWING LINES HAVE BEEN COPIED DIRECTLY FROM
            // https://stackoverflow.com/questions/22544250/php-password-validation?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
            //its pretty self explanotory the messages are clearly indiciating what it does by using something like regex
        }elseif (strlen($_POST["password"]) <= '8') {
            $message = "Your Password Must Contain At Least 8 Characters!";
        }
        elseif(!preg_match("#[0-9]+#",$password)) {
            $message = "Your Password Must Contain At Least 1 Number!";
        }
        elseif(!preg_match("#[A-Z]+#",$password)) {
            $message = "Your Password Must Contain At Least 1 Capital Letter!";
        }
        elseif(!preg_match("#[a-z]+#",$password)) {
            $message = "Your Password Must Contain At Least 1 Lowercase Letter!";

            //check if this is the real email
        } else if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $message = "<span >Invalid email address!</span>";
            //comparing the passwords
        }else if($_POST['password'] != $_POST['repeat']){
            $message = "<span>Passwords dont match</span>";
         
        }
        //check if 2 genders selected
        elseif(isset($_POST['genderMale']) && isset($_POST['genderFemale'])){
            $message = "<span '>Man and a woman at once? hmm...</span>";
        }
           //now that all the test are done we go furhter to write data to database
        else{

            $message = "<span style='color: green'>Good</span>";

            include 'db.php';
          
            try {
                //establishing connection to database
                include 'dbConnection.php';
           
           
             //putting variables from form that using POST method
             $email    =$_POST["email"];
             $username =$_POST["username"];
             $password =md5($_POST["password"]);
             //if notification was clicked
            if (isset($_POST["notifications"])) {
                $notifications=0;
            }else{
                $notifications=1;
                
            }
            //checking gender
            if(isset($_POST['genderMale'])){
                $gender   = 1;
            } else{
                $gender = 0;
            }
            //checking if the email exists
            $query = $database->prepare("SELECT email FROM members WHERE email=:email");
            $queryUsername = $database->prepare("SELECT email FROM members WHERE username=:username");
            $query->bindParam("email", $email, PDO::PARAM_STR);
            $queryUsername->bindParam("username", $username, PDO::PARAM_STR);
            $queryUsername->execute();
            $query->execute();
            if ($query->rowCount() > 0) {
                //displaying an error to indiciate that a user already exists
                $message= "<span >Email is already taken</span>";
            } 
            elseif($queryUsername->rowCount() > 0){
                $message= "<span >Username is already taken</span>";
            }
            else{
                //if there is no user with this email address then allow registration to go further
                $sql = "INSERT INTO members (email, username, password,gender,notifications)
                         VALUES ('$email', '$username', '$password','$gender','$notifications')";
                        // use exec() because no results are returned
                $database->exec($sql);
                //seting up the sessions so that our user dont have to login after registration
                $_SESSION["username"] = $username; 
                $_SESSION["email"] = $email; 
                header("Location: login.php");

                }
          
            //in case something happened
            } catch(PDOException $error)  {  
                 $message = $error->getMessage();  
            }  
        }
    }


?>

<!-- FIN -->