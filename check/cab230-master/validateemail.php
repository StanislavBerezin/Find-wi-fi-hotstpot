<html>
<?php
function ValidateEmail(&$errors, $field_list, $field_name) {
	//Check to see if they entered a value into the field
	if (!isset($field_list[$field_name])){
		$errors[$field_name]='Please enter your email!';
		return false;
	}
	//Create a a regex for checking the email
	$pattern='/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/';
	//If the pattern does not match
	if (!preg_match($pattern,$field_list[$field_name])){
		$errors[$field_name]='Not a valid email';
		return false;
	}
	//If nothing has returned false so far, return true
	return true;
}
 function ValidatePassword(&$errors, $field_list, $field_name, $field2_name) {
		//Check to see if they entered a value into both password fields
		if(!isset($field_list[$field_name]) || !isset($field_list[$field2_name])){
			$errors[$field_name]='Please enter your password';
			return false;
		}
		//Check to see if both passwords are the same
		if ($field_list[$field_name]!=$field_list[$field2_name]){
			$errors[$field_name]= "The passwords do not match";
			return false;
		}
		//Check to see if the password has an uppercase letter, lowercase letter and a number
		$pattern_uppercase='/.*[A-Z]+.*/';
		$pattern_lowercase='/.*[a-z]+.*/';
		$pattern_number='/.*[0-9]+.*/';
		//Compare the regex to the first inputted password
		if ((!preg_match($pattern_uppercase, $field_list[$field_name])) || (!preg_match($pattern_lowercase, $field_list[$field_name])) || (!preg_match($pattern_number, $field_list[$field_name]))){
			$errors[$field_name]= "The password must contain a lower case, upper case and a number";
			return false;
		}
		//If nothing has returned false, then return true
		return true;
			
} 
?>
</html>