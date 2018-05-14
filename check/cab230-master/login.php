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
	<!-- Search pages-->
	<form onsubmit="ValidateEmail()" method="post">
 		<div class="container">
    			<b>Username</b><input type="text" placeholder="Enter Email" id="email" name="email" required><br>
    			<label for="psw"><b>Password</b></label>
    			<input type="password" placeholder="Enter Password" id="psw" name="password" required><br>
				<label><br>
      			<input type="checkbox" checked="checked" id="remember"> Remember me
				</label><br>
				<button type="submit" name="button">Login</button><br>
				<button type="button" class="cancelbtn">Cancel</button><br>
				<span class="psw"><a href="#">Forgot password?</a></span>
  		</div>
	</form>
	<?php
	if(isset($_POST["button"])){
		//Set the database connection details
		$servername = "localhost";
		$dbname="hotspot_database";
		$username = "root";
		$pword = "";
		//Hash the password to test it against the stored hash
		$password=hash('SHA256',$_POST["password"]);
		
		try {
				$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $pword);
				// set the PDO error mode to exception
				$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				//Create an SQL statement that retrieves the email and password
				$sql = $conn->prepare("SELECT email, password FROM members WHERE email='".$_POST["email"]."'");
				// use execute() because no results are returned
				$sql->execute();
				//Save the result into a variable
				$result=$sql->fetchAll(PDO::FETCH_ASSOC);
				if($result[0]['password']==$password){
					session_start();
					$_SESSION['loggedin'] = true;
					$_SESSION['username'] = $result[0]['email'];
					
				}			
			}
			catch(PDOException $e)
				{
				echo $e;
				}
			$conn = null;	
	}
	?>
	<!--The footer of the webpage-->
	<div class="footer">
	<p>Webpage created by Jean-Luc Danoy and Azure Hutchings, 2018.</p>
	</div>
</div>
</body>