/* check if data is already created */
/* if it isn't the go to home page to load */
/* if it is then proceed*/

/* each time a page is closed, it needs to update data in storage. */
var thisUserID = "05";
function checkForData (page) {
	/* create funtion to check if data is created*/
	/* if not go to Main page and create data*/
	/* else write page */

	/*create data objects for this page */
	if (localStorage.length == 0) {
		localStorage.setItem("InitData", "false");	
	}  
	
	if (localStorage.getItem("InitData") == undefined){
		localStorage.clear();
		localStorage.setItem("InitData", "false");	
		initialiseData ();
	} else if (localStorage.getItem("InitData") == "false") {
		initialiseData ();
	} else if (localStorage.getItem("InitData") == "true") {
		createLocalData();
	} else {
		console.log ("false exit for checkForData");
	}
	
	/*generate code for this page */
	switch(page) {
		case "Home":
			var num_reviews = 15; 
			setupHTMLCode (page);
			displayTopRating ();
			displayReviews('Home', num_reviews);
			writeStars();
			break;
		case "Favourite":
			setupHTMLCode (page);
			displayDataTable(page);
			initMapMulti(page);
			break;
		case "Location":
			setupHTMLCode (page);
			setupLocation();
			writeStars();
			break;
		case "Results":
			setupHTMLCode(page); 
			displayDataTable('found');
			initMapMulti('found');
			break;
		case "Search":
			setupHTMLCode(page); 
			break;
		case "My Reviews":
			setupHTMLCode(page);
			initMapMulti('reviewed');
			
			displayReviews('user', thisUserID);
		default:
			setupHTMLCode (page);
	}
}

//insert content into universal regions
function setupHTMLCode (page) {
	setUpSearchPopup ();
	setUpLoginPopup ();
}


// open popup window
function openpopup(popupID){
	if(popupID > 0){
		document.getElementById("popupbg").style.display = "block"
		document.getElementById("popupbg").style.zIndex = "5"
		document.getElementById("popup").style.display = "block"
		document.getElementById("popup").style.zIndex = "7"
		//hide all popup contents
		document.getElementById("popup1").style.display = "none"
		document.getElementById("popup2").style.display = "none"
		//show content based on ID
		document.getElementById("popup"+popupID).style.display = "block"
	} else {//Close popup window
		document.getElementById("popupbg").style.display = "none"
		document.getElementById("popup").style.display = "none"		
	}
}

/* function to return to home page when there is a error*/
function goToHomePage (message) {
	if (message != null) {
		console.log(message);	
	}
	window.location='index.html';
}



//insert footer content
function setUpFooter (){
	var myHTML ;
	if (document.getElementById("footer") != null) {
		myHTML = document.getElementById("footer");
		myHTML.innerHTML = "Copyright © 2018";	
	};	
}

//insert popup1 (search form)
function setUpSearchPopup () {

	var myHTML ;
	if (document.getElementById("popup1") != null) {
		myHTML = document.getElementById("popup1");
		myHTML.innerHTML = getSearchHTML ();
	}
}  

//insert popup2 (login form)
function setUpLoginPopup () {
	var myHTML ;
	
	if (document.getElementById("popup2") != null) { 
		myHTML = document.getElementById("popup2");
		myHTML.innerHTML = 
		"<!-- login form -->"+
		   "<p>Log in</p>"+
		   "<hr />"+
		   "<form>"+
		   "<p>Username<br/><input name='username' type='text'></p>"+
		   "<p>Password<br /><input name='password' type='password'></p>"+
		   "<p><button type='button' onclick='alert(&quot;logging in&quot;);openpopup(0)'>Log in</button></p>"+
		   "</form>"+
		   "<p>Don't have an account? <a href='register.php'>Register now</a>.</p>"
		;
	}
}    

//validate registration form
function checkRegisterForm(){
	var errorMessage = ""
	//hide error message
	document.getElementById("FormErrorMessage").style.display = "none"
	var emailaddress = document.getElementById("email").value
	//make sure password isn't too short / easy to crack
	if(document.getElementById("password").value.length < 7){
		errorMessage = "Please enter a password with at least 7 characters.<br />"
	}
	//password and password confirmation should be the same
	if(document.getElementById("password").value != document.getElementById("cnfrmpassword").value){
		errorMessage += "Please enter the same password twice.<br />"
	}
	//post code should be 4 digit number
	if(document.getElementById("pcode").value.length != 4){
		errorMessage += "Please enter a valid post code.<br />"
	}
	//email address should contain an @ symbol and a . (e.g test@test.com)
	if(emailaddress.indexOf("@") == -1 || emailaddress.indexOf(".") == -1){
		errorMessage += "Please enter a valid email address.<br />"
	}
	//fields with less than 3 characters are either empty or don't have valid info
	if(document.getElementById("name").value.length < 3 || 
			document.getElementById("email").value.length < 3 || 
			document.getElementById("username").value.length < 3 || 
			document.getElementById("dob").value.length < 3 || 
			document.getElementById("suburb").value.length < 3){
		errorMessage += "Please fill all the form fields."
	}
	if(errorMessage == ""){
		//successfully registered
		window.location='index.php'
	} else {
		//display error message
		document.getElementById("FormErrorMessage").innerHTML = errorMessage
		document.getElementById("FormErrorMessage").style.display = "block"
	}
}


//convert numerical rating to stars
function writeStars() {
	var maxStars = 5;
	//get element with rating in it, is it an average?
	//or is it a rating from one specific review?
	var ratingHTMLA = document.getElementsByClassName("rating greyfont");
	var ratingHTMLB = document.getElementsByClassName("rating");
	//different star icons
	HTMLFullString = "<img alt='1 star' src='images/star.png' />"
	HTMLHalfString = "<img alt='half star' src='images/star-half.png' />"
	HTMLNoneString = "<img alt=' ' src='images/star-empty.png' />"
	
	//average ratings
	if (ratingHTMLA.length > 0) {
		for (arrayPos = 0; arrayPos < ratingHTMLA.length; arrayPos++) {
			//get content of rating element
			InnerHTML = ratingHTMLA[arrayPos].innerHTML;
			NewHTML = "";
			//get numerical rating
			var starNum = parseFloat(ratingHTMLA[arrayPos].innerHTML);
			var runThis = false;
			//double check that the rating is a valid number
			if (isNaN(starNum)) {
				runThis = false;
			} else {
				runThis = true;
				//round rating to 1 decimal place
				starNum = Math.round(starNum * 10) / 10;
				starNum = Math.min(Math.max(starNum,0),maxStars);
			}
			if (runThis) {
				var i = 0;
				//round number to closest 'half star'
				do {
				  if ((starNum-i) >=0.75) {
					  NewHTML = NewHTML + HTMLFullString;
				  } else if ((starNum-i) >=0.25) {
					  NewHTML = NewHTML + HTMLHalfString;
				  } else {
					  NewHTML = NewHTML + HTMLNoneString;
				  }
				  i++;
				} while (i < maxStars);
				//insert star icons into element while keeping number
				NewHTML = NewHTML + " " + starNum;
			} else {
			   NewHTML = InnerHTML;
			}
			ratingHTMLA[arrayPos].innerHTML = NewHTML ;
		}
	}
	
	//single ratings
	if (ratingHTMLB.length > 0) {
		for (arrayPos = 0; arrayPos < ratingHTMLB.length; arrayPos++) {
			//get content of rating element
			InnerHTML = ratingHTMLB[arrayPos].innerHTML;
			NewHTML = "";
			//get numerical rating
			var starNum = parseFloat(ratingHTMLB[arrayPos].innerHTML);
			var runThis = false;
			//double check that the rating is a valid number
			if (isNaN(starNum)) {
				runThis = false;
			} else {
				runThis = true;
				//round rating to 1 decimal place
				starNum = Math.round(starNum * 10) / 10;
				starNum = Math.min(Math.max(starNum,0),maxStars);
			}
			
			if (runThis) {
				var i = 0;
				//round number to closest 'half star'
				do {
				  if ((starNum-i) >=0.75) {
					  NewHTML = NewHTML + HTMLFullString;
				  } else if ((starNum-i) >=0.25) {
					  NewHTML = NewHTML + HTMLHalfString;
				  } else {
					  NewHTML = NewHTML + HTMLNoneString;
				  }
				  i++;
				} while (i < maxStars);
				//replace number with star icons
				NewHTML = NewHTML;
			} else {
			   NewHTML = InnerHTML;
			}
			ratingHTMLB[arrayPos].innerHTML = NewHTML ;
		}
	}
}

function insertDataIntoObject () {

}

//allow user to select a rating by clicking on star bar
var leftempty = "images/star-empty-left.png"
var rightempty = "images/star-empty-right.png"
var leftfull = "images/star-left.png"
var rightfull = "images/star-right.png"
var leftfulledge = "images/star-left-edge.png"
function leaveRatingHover(rating){
	for(var i = 0.5; i <= 5; i+=0.5){
		if (i <= rating){
			if (i % 1 != 0){
				if (i+0.5 <= rating){
					document.getElementById("rating"+i).src = leftfull
				} else {
					document.getElementById("rating"+i).src = leftfulledge
				}
			} else {
				document.getElementById("rating"+i+".0").src = rightfull
			}
		} else {
			if (i % 1 != 0){
				document.getElementById("rating"+i).src = leftempty
			} else {
				document.getElementById("rating"+i+".0").src = rightempty
			}
		}
	}
}

//when user clicks set rating
var userRating = 2.5
function leaveRatingClick(rating){
	document.getElementById("leaveReviewEntry").value = rating
	userRating = rating
}
//go back to set rating on mouse out
function resetUserrating(){
	leaveRatingHover(userRating)
}


//google map functions
//initialise single marker map
function initMapSingle(latitude, longtitude) {
	var location = {lat: latitude, lng: longtitude};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 15,
	  center: location
	});
	var marker = new google.maps.Marker({
	  position: location,
	  map: map
	});
}

