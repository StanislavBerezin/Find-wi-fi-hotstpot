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
  <div class="mega-wrap">
  <div class="wrapper">
     <?php  require "./small/searchNav.php" ?>

          <form action="" class="entire" method="post">
          
        <div class="register">
            <h3 id="create">CREATE ACCOUNT</h3>
          <input type="email" placeholder = "Email" name="fname"  value="" class="inputs" required><br>

          <input type="password"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
          title="Should be one number, one uppercase, one lowercase letter, and at least 8 characters"
          placeholder = "Password" 
          name="lname"  value=""class="inputs" required><br>
        
          <input type="text"  class="inputs" placeholder="Username" pattern="[a-z]{4,10}"
                title="Username should only contain lowercase letters. e.g. john and from 4-10 char long" required>
        <div class="radio-btns">
          Select your gender
          <div> <input type="radio" name="gender" value="male" required> Male<br></div>
        
          <div><input type="radio" name="gender" value="female" required> Female<br></div>
        <div><input type="checkbox" name="vehicle" value="Bike"> Send me notifications<br></div>
          </div>
        <input type="submit" class="button-filled" value="Register">
          <p>Already have an account?</p>
        <a class="button-outlined" type="submit" value="Submit" href="login.html">Sign in</a>
        </div>
          
        </form> 

        
</div>
	<div class="flex-container" id="footer">

			<p>&copy 2018 SOMETHING</p>

		</div>
</div>

</body>

</html>