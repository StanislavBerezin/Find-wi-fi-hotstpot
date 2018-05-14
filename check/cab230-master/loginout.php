<html>
<?php
session_start();
function IsLoggedIn(){
	if(isset($_SESSION['loggedin']) && $_SESSION['loggedin']==true){
		echo "<a href='logout.php'>Logout</a>";
	}
	else{
		echo "<a href='login.php'>Log in</a> <a href='signup.php'>Sign up</a>";
	}
}
?>
</html>