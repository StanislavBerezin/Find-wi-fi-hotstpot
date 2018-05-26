
<!-- If user is already logged then no need to show this page, should redirect to index page -->
<?php
session_start();
if(isset($_SESSION['username'])){
  header("Location: wifiRough.php");
}


?>

<?php  require "./small/headerLogin.php" ?>

  <div class="wrapper">
    <!-- search nav, and most the loginDb.php file that is responbile for database interaction importantly -->
       <?php  require "./small/searchNav.php" ?>
       <?php  include "./db/loginDb.php" ?>

    <!-- the form that that gets the data from user -->
  <form action="" class="entire" method="post">

      <div class="register">


          <h3 id="create">LOGIN</h3>

                <input type="email" placeholder = "Email" name="email"  value="" class="inputs" required><br>

                <input type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                    title="Should be one number, one uppercase, one lowercase letter, and at least 8 characters"
                    placeholder = "Password" 
                    name="password"  value=""class="inputs" required><br>
                    <?php  
                                    if(isset($message))  
                                    {  
                                        echo '<label class="text-danger">'.$message.'</label>';  
                                    }  
                        ?>  

            <input type="submit" class="button-filled" name="btnLogin" value="Sign in">
                <p>Already have an account?</p>
                
                <a class="button-outlined" type="submit" value="Submit" href="register.php">Register</a>

      </div>
  
</form> 
<div id="snackbar"></div>
</div>

<?php  require "./small/footer.php" ?>