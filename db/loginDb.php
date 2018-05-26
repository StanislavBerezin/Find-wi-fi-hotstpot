<!-- This file is responsible for login in user into the database, with some validation in place,
        error displays, setting sessions and at the end redirecting user back to our first page -->

<?php  
//including the secret variables to connect to database
 include 'db.php';
 try  
 {  
     //establishing connection to database
    include 'dbConnection.php';

    //if the form has been submitted then we implement the following code inside
    if(isset($_POST["btnLogin"])){


            //we check if email and password inputs are empty, and we also do the reality check for email
           if( ($_POST["email"] == "") || ($_POST["password"] == "") || (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)))  
           {  
               //if something wrong we display the message
                $message = '<label>Wrong credentials</label>';  
           }  
           //if everything went smoothly, then we do the query
           else  
           {  
               //selecting members from db based on the email and password that is given
                $query = "SELECT * FROM members WHERE email = :email AND password = :password";  
                $statement = $database->prepare($query);  
                //executing the query and converting recieved password into hash for comparision
                $statement->execute(  
                     array(  
                          'email'     =>     $_POST["email"],  
                          'password'     =>    md5( $_POST["password"] ) 
                     )  
                );  
                //to see how many results came out
                $count = $statement->rowCount();
                //getting the data 
                $data = $statement->fetchAll(); 
                $username = "";
                $email = "";

                
              
                //if we have found at least 1 record in the db then we do the following
                if($count > 0)  
                {
                    //from our results we need to record username and email for setting up session variables
                    foreach ($data as $row){
                        $username = $row['username'];
                        $email = $row['email'];
                    }
                    //then we set those sessions
                     $_SESSION["username"] = $username; 
                     $_SESSION["email"] = $email; 
                     header("Location: wifiRough.php");
                     
                }  
                //if there is no results found then the person needs to check its password or email
                else  
                {  
                     $message = '<label>Please check your credentials</label>';  
                }  
                
           }  
      }  
 }  
 //in case something horible happens
 catch(PDOException $error)  
 {  
      $message = $error->getMessage();  
 }  
 ?>  
