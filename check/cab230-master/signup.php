<!DOCTYPE html>
<head>
<link rel="stylesheet" type="text/css" href="style.css">
<title>Brisbane Hotspot Reviewer</title>
<script type="text/javascript" src="javascript.js"></script>
</head>
<body>
<!--The wrapper wraps around the entire webpage to keep it a certain size-->
<div class="wrapper">	
	<!--The header class contains the name at the top of the page and the links to other pages-->
	<div class="header">
		<h1>Brisbane Hotspot Reviewer</h1>
		<hr>
		<!--The links to other pages in the website-->
		<div class="links">
			<a href="homepage.php">Homepage</a> <a href="">Hotspots</a> <a href="">Recent reviews</a> 
			<!--Dropdown for the search buttons-->
			<div class="dropdown">
				<a href="">Search</a>
				<div class="dropdown-content">
					<a href="searchname.php">Keywords</a>
					<a href="nearesthotspot.php">Nearest hotspot</a>
			    </div>
			</div>
		</div>
		<!--The links to login/signup are on the other side of the header-->
		<div class="login">
			<?php
			require 'loginout.php';
			IsLoggedIn();
			?>
		</div>
	</div>
	<form onsubmit="ValidateSignup();" method="post">
  		<div class="container">
    			<h1>Sign Up</h1>
  			<p>Please fill in this form to create an account.</p>
    			<hr>

    			<label for="email"><b>Email</b></label>
    			<input type="text" placeholder="Enter Email" id="email" name="email" value="<?php
				if (isset($_POST['email'])){	
					echo htmlspecialchars($_POST['email']);
				}?>"
				required><br>

				<label for="psw"><b>Password</b></label>
    			<input type="password" placeholder="Enter Password" id="psw" name="password" value="<?php
				if (isset($_POST['email'])){	
					echo htmlspecialchars($_POST['password']);
				}?>" required><br>

    			<label for="psw-repeat"><b>Repeat Password</b></label>
    			<input type="password" placeholder="Repeat Password" id="psw-repeat" name="psw-repeat" value="<?php
				if (isset($_POST['email'])){	
					echo htmlspecialchars($_POST['psw-repeat']);
				}?>"required><br>
				
				<label for="bday"><b>Birthday</b></label>
				<input type="date" placeholder="dd/mm/yyyy" id="bday" name="dob" value="<?php
				if (isset($_POST['email'])){	
					echo htmlspecialchars($_POST['dob']);
				}?>"required><br>
    			<label>
      			<input type="checkbox" checked="checked" id="remember" style="margin-bottom:15px"> Remember me
    			</label><br>
			
    			<p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p><br>

    			<div class="clearfix">
      				<button type="button" class="cancelbtn">Cancel</button>
      				<input type="submit" name="button">
   			</div>
  		</div>
	</form>
<?php
require 'validateemail.php';
$errors=array();
$errors2=array();
//If the button has been pressed
if(isset($_POST["button"])){
	//Validate the email
	ValidateEmail($errors, $_POST,'email');
	//Return an error if the email is invalid (get rid of this once testing is over)
	if ($errors){
		echo "Errors:<br/>";
		foreach ($errors as $field => $error){
				echo "$field $error<br/>";
		}
	}
	else{	
		ValidatePassword($errors2, $_POST, 'password', 'psw-repeat');
		if ($errors2){
			echo "Errors:<br/>";
			foreach ($errors2 as $field2 => $error2){
				echo "$field2 $error2<br/>";
			}
		}
		else{
			$servername = "localhost";
			$dbname="hotspot_database";
			$username = "root";
			$pword = "";
			$password=hash('SHA256',$_POST["password"]);
			try {
				$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $pword);
				// set the PDO error mode to exception
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				$sql = $conn->prepare("INSERT INTO members (email, password, birthday) VALUES ('".$_POST["email"]."','".$password."','".$_POST["dob"]."')");
				// use exec() because no results are returned
				$sql->execute();
				
				}
			catch(PDOException $e)
				{
				echo $e;
				}
			$conn = null;	
		}
	} 
}

?> 
	<!--The footer of the webpage-->
	<div class="footer">
	<p>Webpage created by Jean-Luc Danoy and Azure Hutchings, 2018.</p>
	</div>
</div>
</body>