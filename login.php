<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="author" content="">
  <meta name="description" content="">
  <link rel="stylesheet" href="register.css" type="text/css"/>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">

  <!-- <link href="css/normalize.css" rel="stylesheet">
  <link href="css/style.css" rel="stylesheet"> -->
</head>

<body>
  <div class="wrapper">
       <?php  require "./small/searchNav.php" ?>
  <form action="" class="entire" method="post">
   
 <div class="register">
    <h3 id="create">LOGIN</h3>
   <input type="email" placeholder = "Email" name="fname"  value="" class="inputs" required><br>

  <input type="password"
  title="Should be one number, one uppercase, one lowercase letter, and at least 8 characters"
   placeholder = "Password" 
  name="lname"  value=""class="inputs" required><br>
 

 <input type="submit" class="button-filled" value="Sign in">
  <p>Already have an account?</p>
  
  <a class="button-outlined" type="submit" value="Submit" href="register.html">Register</a>

 </div>
  
</form> 
</div>
	<div class="flex-container" id="footer">

			<p>&copy 2018 SOMETHING</p>

		</div>


</body>

</html>