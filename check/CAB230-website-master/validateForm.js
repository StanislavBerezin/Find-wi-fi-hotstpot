/*two parts */
/*check the inputs as they are entered*/
/*check the results after the entire from submitted*/



function validateSearchForm (form) {

	var pattern = "";
	
	/*Save Name*/
	/*assume data is correct then run search*/
	for (k = 0; k < locationObj.locations.length; k++) {
		locationObj.locations[k].found = "No";
		myLocation = locationObj.locations[k];

		/* get name of location with that contains output*/
		/* either the name of the location or the address */
		if (form.name.value.length > 0) {
			var pattern = new RegExp (form.name.value);
			if (myLocation.address.search(pattern)>=0) {
				myLocation.found = "Yes";
				console.log("address");
			}
			if (myLocation.name.search(pattern) >=0) {
				myLocation.found = "Yes";
				console.log("name");
			}
			
		}
		if (myLocation.found = "Yes") {
			locationObj.locations[k].found = "Yes";
			console.log(k);
		}
	}
	
	saveLocalData();
}

function validateSearchFormB (form) {
	
	// if any input is invalid, form won't submit to results screen
	// if all inputs are valid then create a results table.
	// Order of calculation
	//  if  Closest = true  - identify nearest spot (1)
	// else create a list of all spots
	// remove spots when they fail test
	// it no places occur return null
	//
	var searchName =""
	
	var pattern = "";
	var position = 0;
	console.log("Name: " + form.name.value);
	
	for (j = 0; j < locationObj.locations.length; i++) {
		locationObj.locations[i].found = "No";
		
		strName = "";
		if (form.name.value != null) {
			pattern = "/"+form.name.value+"/"; 
			 if (pattern.test(locationObj.locations[i].name)) {
				locationObj.locations[i].found = "Yes"; 
			 } else {
				locationObj.locations[i].found = "No"; 
			 }
		}
		if (form.suburb.value != null) {
				console.log("suburb: " + form.suburb.text);
				console.log("suburb: " + form.suburb.value);
				if (pattern != "null")
				tempData = null;
				SRDataLength = 0;
				/*
				for (x in searchResultsObject) {
					if (searchResultsObject[x].suburb == form.suburb.value) {
						//tempData[x] = searchResultsObject[x];
					}
					//console.log(tempData[x]);
				}
				//searchResultsObject = tempData;
				console.log(searchResultsObject);*/
		}	
	}
			
			//if valid create valid list//
			//Search database
			//return table
	
	if (form.postcode.value != null) {
			console.log("postcode: " + form.postcode.value);
			
			//make sure name is numeric
			//if valid create valid list//
			//Search database
			//return table
	}
	if (form.distance.value != null) {
			console.log("distance: " + form.distance.value);
	}
	
	if (form.rating.value != null) {
			console.log("rating: " + form.rating.value);
	}
	
	openSearchResults (); 

}

function openSearchResults() {
	/* validate data */
	/* test name */
	/* confirm alpha numeric */
	
	/*Test Post code */
	/* post code must be numeric and between 4000 -4999 */
	
	
	/* if all data passes then save data in local storage */
	
	
	
	/* if data is valid then go search results */
	
	/* else return to search form */
	
	window.location = 'results.php';
}


function validateName() {
	
}

/* from demostration */
var justLetters = /^[A-z]+$/;
var numbersLettersLetters = /^[\d]+\s[A-z]+\s[A-z]+$/;

function validate3() {
  // use the 'window.alert' function to pop up an alert box
    window.alert("Submit");  
}

function checkName(form) {
    if(form.name.value == "") {
		window.alert("Enter your name");
		return false;
	}
	else return true;
}

function checkName2(form) {
    if(form.name.value == "") {
		document.getElementById("surnameMissing").style.visibility = "visible";
		form.name.focus();		
		return false;
	}
	else return true;
}

function rehide() {
	document.getElementById("surnameMissing").style.visibility = "hidden";
}


function rehide2() {
	document.getElementById("surnameMissing").style.visibility = "hidden";
}

function checkPassword(form){
    if(form.passwd.value != form.passwd2.value) {
		window.alert("Passwords do not match");
		return false;
	}
	else return true;
	
}

function checkPassword2(form){
	 if(form.passwd.value == "") {
		window.alert("Enter your street");
		return false;
	}
    if(form.passwd.value != form.passwd2.value) {
		window.alert("Passwords do not match");
		return false;
	}
	else return true;
	
}

/*
o	Street address (text area)
o	State (select Qld, NSW, Vic, …)
o	Email address (text box)
o	Sex (Male/Female radio buttons)
o	Vegetarian? (check box)
o	Password
o	Confirm password
*/


function validate2(form) {
    return checkName(form) & checkPassword(form);
}


function justLetters(text){
	return justletters.test(text);
}


function checkName3(form) {
    if(form.surname.value == "") {
		document.getElementById("surnameMissing").style.visibility = "visible";
		form.surname.focus();		
		return false;
	}
	else if (!justLetters.test(form.surname.value)){
		window.alert("Enter your surname jsut using letters");
		return false;
	}
	else return true;
}

function checkStreet(form){
    if(form.street.value == "") {
		window.alert("Enter your street");
		return false;
	}
	else if (!numbersLettersLetters.test(form.street.value)){
		window.alert("Enter your street address in the form: Number StreetName Street|Cres|PDE|Road");
		return false;
	}
	else return true;	
}


function checkEmail(form){
    if(form.email.value == "") {
		window.alert("Enter your Email");
		return false;
	}
	else if (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,})+$/.test(form.email.value)){
		window.alert("Email needs to be in the format me@somehere.somthing");
		return false;
	}
	else return true;	
}

function checkState(form){
	if(form.state.value == "DEFAULT") {
		window.alert("Enter your state");
		return false;
	}
	else return true;
}


function checkSex(form){
	if(form.sex.value == "") {
		window.alert("Enter your Sex");
		return false;
	}
	else return true;
}

function validate(form) {
    if (checkState(form) & checkSex(form) & checkEmail(form) & checkName3(form) & checkPassword(form) & checkStreet(form)) {
		window.alert("Format is valid");
		return true;
	} else return false;
}
