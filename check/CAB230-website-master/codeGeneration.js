/*On the "Home" page creates a set of boxes that display top rating wifi spots */
function displayTopRating () {
    var TopRateHTML = document.getElementsByClassName("topRating");
	var dataTableString = "";
	if (TopRateHTML.length > 0) {
		for (arrayPos = 0; arrayPos < TopRateHTML.length; arrayPos++) {
			dataTableString = "";
			
			dataTableString = dataTableString + 
							  "<div id='map"+[arrayPos]+"' class='map'></div>";
			
			dataTableString = dataTableString + "<h3><a onclick='openLocation("+topPlacesArray[arrayPos].siteID+");'>" + 
							   topPlacesArray[arrayPos].name +
							   "</a></h3>"+
							   "<p><span class='rating greyfont'>";
			dataTableString = dataTableString + topPlacesArray[arrayPos].rating;
			dataTableString = dataTableString +
					  "</span>" + 
					  "<span class='textspace'></span>" +
					  "<span class='heart greyfont'>"+
					  "<img alt=' ' src='images/heart-empty.png' />" +
					  "<sup> Add to favourites</sup></span></p>"
					 ;
		TopRateHTML[arrayPos].innerHTML = dataTableString ;
		}
	}
	initMultiMaps(topPlacesArray);
}

var numberOfTopRatedPlaces = 0; 
function displayTopRating_new () {
    var TopRateHTML = document.getElementsByClassName("topRating");
	numberOfTopRatedPlaces = TopRateHTML.length;
	var dataTableString = "";
	if (numberOfTopRatedPlaces > 0) {
		for (arrayPos = 0; arrayPos < numberOfTopRatedPlaces; arrayPos++) {
			dataTableString = "";
			
			dataTableString = dataTableString + 
							  "<div id='map"+[arrayPos]+"' class='map'></div>";
							  /*<a onclick='openLocation("+myReview.placeID+");'>"*/
			/*dataTableString = dataTableString + "<h3><a href='location.html'>" + /* "<a onclick='openLocation("+reference+");'>" +*/
			dataTableString = dataTableString + "<h3><a onclick='openLocation("+topPlacesArray[arrayPos].siteID+");'>" + 
							   topPlacesArray[arrayPos].name + 
							   "</a></h3>"+
							   "<p><span class='rating greyfont'>";
			dataTableString = dataTableString + topPlacesArray[arrayPos].rating;
			dataTableString = dataTableString +
					  "</span>" + 
					  "<span class='textspace'></span>" +
					  "<span class='heart greyfont'>"+
					  "<img alt=' ' src='images/heart-empty.png' />" +
					  "<sup> Add to favourites</sup></span></p>"
					 ;
		TopRateHTML[arrayPos].innerHTML = dataTableString ;
		}
	}
	
	initMultiMaps(topPlacesArray);
}

var markers = [];
var maps = [];
/* creates and inserts a set of maps for the toprated display */
function initMultiMaps(myArray) {
	//get all locations set in html page
	//generate a map for each
	var latitude = 0;
	var longitude = 0;
	var location;
	
	for(var i = 0; i < myArray.length; i++){
		latitude = parseFloat(myArray[i].lat);
		longitude = parseFloat(myArray[i].lon);
		if (document.getElementById('map'+i)){
			location = {lat: latitude, lng: longitude};
			maps[i] = new google.maps.Map(document.getElementById('map'+i), {
			  zoom: 16,
			  center: location
			});
			markers[i] = new google.maps.Marker({
			  position: location,
			  map: maps[i]
			});
		}
	}
}

function displayDataTable(page) {
	var j = 0;
	var dataHTML = document.getElementsByClassName("dataTable");
	var dataTableString = "<table>" + 
							"<thead><tr>" + 
							"<td>Name</td>" +
							"<td>Address</td>" +
							"<td>Suburb</td>" +
							"<td>Coordinates</td>"+
							"</tr></thead>" +
							   "<tbody >"
		;
	
	for (i = 0; i <locationObj.locations.length; i++) {
		
		var curLocation = locationObj.locations[i];
		
		var thisLat = "";
		var thisLon = "";
		
		var rndScale = 1000;
		
		
		if (page == "found") {
			if (curLocation.found == 'Yes') {
				dataTableString = dataTableString + createTableRow (curLocation,rndScale);
			}
		}
		
		if (page == "Favourite") {
			if (curLocation.favourite == 'Yes') {
				dataTableString = dataTableString + createTableRow (curLocation,rndScale);
			}
		}
	}
	var dataTableString = dataTableString +
								"</tbody >" + 
						   "</table>"
						
		;
		
	dataHTML[0].innerHTML = dataTableString;
	
}

function createTableRow (curLocation,rndScale){
	
	if (curLocation.lat >=0) {
		var thisLat = Math.round(curLocation.lat*rndScale)/rndScale + " N";
		} else {
		var thisLat = -Math.round(curLocation.lat*rndScale)/rndScale + " S";
	}

	if (curLocation.lon >=0) {
		var thisLon = Math.round(curLocation.lon*rndScale)/rndScale + " E";
	} else {
		var thisLon = -Math.round(curLocation.lon*rndScale)/rndScale + " W";
	}
	
	var  dataTableString = 
			"<tr >" + 
				/*"<td><a href='location.html'>" +*/
				"<td><a onclick='openLocation("+curLocation.siteID+");'>" +
					curLocation.name+"</a></td><td>" +
					curLocation.address+"</td><td>"+
					curLocation.suburb+"</td><td>"+
					thisLat+" : "+thisLon+
					"</td>"+
				"</tr>";

	return (dataTableString);
}

function initMapMulti(field) {
	var j = 0;
	var location_list = []
	var latitude = 0;
	var longitude = 0;
	var reference = "";
	
	//convert raw lat/long numbers into google map locations
	for (var i = 0; i < locationObj.locations.length; i++) {
		
		var curLocation = locationObj.locations[i];
		
		//were the locations the result of a search?
		if (field == "found") {
			if (curLocation.found == 'Yes') {
				createLocationList(location_list,curLocation);
			}	
		}
		
		//were the locations sent from the users favourites list?
		if (field == "Favourite") {
			if (curLocation.favourite == 'Yes') {
				createLocationList(location_list,curLocation);
			}	
		}
		
		//were the locations places the user has reviewed?
		if (field == "reviewed"){
			createLocationList(location_list,curLocation);
		}
	}
	
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 1,
	  center: new google.maps.LatLng(0, 0)
	});
	
	//turn location list into markers
	for (var i = 0; i < location_list.length; i++) {
		new google.maps.Marker({
			position: location_list[i].latlng,
			map: map,
			title: location_list[i].name
		});
	}
	//fit map zoom to markers
	var latlngbounds = new google.maps.LatLngBounds();
	for (var i = 0; i < location_list.length; i++) {
		latlngbounds.extend(location_list[i].latlng);
	}
	map.fitBounds(latlngbounds);
}
 
function getSearchHTML () {
	var searchHTML =  "";
	searchHTML = searchHTML + 
		"<!-- search form -->"+
			"<p>Search</p>"+
			"<hr />"+
			"<form>"+
				"<p>Name<br /><input name='name' onchange = 'validateName()' type='text'> </p>"+
				"<p>Suburb<br />"+
				"<select name='suburb'>";
	
	for (i = 0; i <suburbObj.suburb.length; i++) {
		if (i == 0) {
			searchHTML = searchHTML + "<option value='" + suburbObj.suburb[i].suburb + "'>"+"</option>"; 	
		} else {
			searchHTML = searchHTML + "<option value='" + suburbObj.suburb[i].suburb + "'>"+suburbObj.suburb[i].suburb+"</option>"; 	
		}
	}
		searchHTML = searchHTML + 			
				"</select></p>"+
				"<p>Postcode<br />"+
					"<input name='postcode' type='number'></p>"+
				"<p>Within <input name='distance' type='number' class='thininput'> km</p>"+
				"<p>Find closest wifi spot? <input class='checkbox' name='closest' type='checkbox' value='yes'></p>"+
				/*"<p><button type=\"button\" onclick=\"window.location='results.html'\">Search</button></p>"+*/
				"<p><button type='button' onclick='openSearchResults()'>Search</button></p>"
			"</form>";
		return searchHTML;
};
 
 
function getSearchHTMLB () {
	var searchHTML =  "";
	searchHTML = searchHTML + 
		"<!-- search form -->"+
			"<p>Search</p>"+
			"<hr />"+
			"<form name='searchResults' onsubmit='return validateSearchForm(this);' method='post' action=''>"+
				"<p>Name<br /><input name='name' type='text'> </p>"+
				"<p>Suburb<br />"+
				"<select name='suburb'>";
	
	for (i = 0; i <suburbObj.suburb.length; i++) {
		if (i == 0) {
			searchHTML = searchHTML + "<option value='" + suburbObj.suburb[i].suburb + "'>"+"</option>"; 	
		} else {
			searchHTML = searchHTML + "<option value='" + suburbObj.suburb[i].suburb + "'>"+suburbObj.suburb[i].suburb+"</option>"; 	
		}
	}
		searchHTML = searchHTML + 			
				"</select></p>"+
				"<p>Postcode<br />"+
					"<input name='postcode' type='number' step = '1' min = '4000' max = '4999'></p>"+
				"<p>Within <input name='distance' type='number' class='thininput' step = '1' min = '0' max = '50'> km</p>"+
				"<p>Find closest wifi spot? <input class='checkbox' name='closest' type='checkbox' value='yes'></p>"+
				"<p>Minimum Rating <select name='rating'> " +
								"<option value='0'>0</option>"+
								"<option value='1'>1</option>"+
								"<option value='2'>2</option>"+
								"<option value='3'>3</option>"+
								"<option value='4'>4</option>"+
								"<option value='5'>5</option>"+
				"</select>";
		
		searchHTML = searchHTML + "<p><input type = 'submit' value='Search'></p></form>";
				
				/*"<p><button type=\"button\" onclick=\"window.location='results.html'\">Search</button></p>"+*/
				/*"<p><button type='button' onclick='openSearchResults()'>Search</button></p>"*/
			
		return searchHTML;
}; 

function getLocationIDfromHREF (){
	var thislocation = window.location.href;
	var whereQ = thislocation.search("_") +1;
	thislocation = thislocation.substr(whereQ);
	
	var idCode = "";
	if (thislocation < 10 ) {
		idCode = "0"+thislocation+"" ;	
	} else {
		idCode = ""+thislocation+"" ;	
	}
	return idCode;
	
}
 

function setupLocation(){

	var idCode = getLocationIDfromHREF();
	console.log(idCode);
	for (k = 0; k < locationObj.locations.length; k++){
		if (locationObj.locations[k].siteID == idCode) {
			var curLocation = locationObj.locations[k];
		}
	}
	
	var rndScale = 1000;		
	var singleLocationHTML = document.getElementsByClassName("singleLocation");
	var dataTableString = "";
	if (singleLocationHTML.length == 1) {
		
		if (curLocation.lat >=0) {
			var thisLat = Math.round(curLocation.lat*rndScale)/rndScale + " N";
			} else {
			var thisLat = -Math.round(curLocation.lat*rndScale)/rndScale + " S";
		}

		if (curLocation.lon >=0) {
			var thisLon = Math.round(curLocation.lon*rndScale)/rndScale + " E";
		} else {
			var thisLon = -Math.round(curLocation.lon*rndScale)/rndScale + " W";
		}
		
		
		dataTableString = "";
		
		dataTableString = dataTableString + 
						  "<div id='map"+0+"' class='map'></div><br />";
		dataTableString = dataTableString + "<h3>" + curLocation.name +"</h3>"+
						   "<p><span class='rating greyfont'>";
		dataTableString = dataTableString + curLocation.rating;
		dataTableString = dataTableString + 
							"</span>" +
							"<span class='textspace'></span>" +
							"<span class='heart greyfont'>"+
							"<img onclick='addFavourite("+idCode+","+thisUserID+")' alt=' ' src='images/heart-empty.png' />" +
							/*"<img alt=' ' src='images/heart-empty.png' />" +*/
							"<sup> Add to favourites</sup></span></p>"
				 ;
		dataTableString = dataTableString + 
						  "<p>" + curLocation.address + "</p><p>"+
						  curLocation.suburb + "</p><p>" + thisLat+" : "+thisLon + "</p>"
						  ;		
		singleLocationHTML[0].innerHTML = dataTableString ;
		
		var selectedSite = [];
		selectedSite[0] = curLocation;
		initMultiMaps(selectedSite);
		
	}	

	displayReviews('location', idCode)
}

//searchtype is either by location or by user
function displayReviews(searchtype, idCode) {

	var index = ""
	var formattedList = ""
	var dummyText ="" ;
	
	console.log(idCode);
	if (searchtype == "location") {
		/* sort reviews according to need */
		reviewObj.review.sort(function(b, a){return a.rating - b.rating});
		
		/*generate code */
		for (i = 0; i < reviewObj.review.length; i++) {
			if (reviewObj.review[i].placeID == idCode) {
				var myReview = reviewObj.review[i];
				console.log(myReview);
				formattedList += "<div class='review'><p><b>" + getUserName (reviewObj.review[i].userID) +"</b> &nbsp; &nbsp; <span class='rating'>" + 
								  myReview.rating + "</span></p><p>" + myReview.message + "</p></div>";
								  
				if (myReview.messag =="" && myReview.rating == 0 && myReview.favourite == 1) {
					heartHTML = document.getElementsByClassName("heart");
					heartHTML[0].innerHTML = "<img onclick='removeFavourite("+reviewData[index].location+","+UserID+")' alt='Favourited' src='images/heart.png' />"
				}
			}
		}
		//set whether locations is a favourite or not
			/*
		} else if (searchType == "location" && reviewData[index].location == idCode && reviewData[index].message == "" && reviewData[index].rating == 0 && reviewData[index].favourite == 1){
			heartHTML = document.getElementsByClassName("heart");
			heartHTML[0].innerHTML = "<img onclick='removeFavourite("+reviewData[index].location+","+UserID+")' alt='Favourited' src='images/heart.png' />"
			*/
	} else if (searchtype == "user" ) {
		/* sort reviews according to need */
		reviewObj.review.sort(function(b, a){return a.rating - b.rating});
		
		/*generate code */
		for (i = 0; i < reviewObj.review.length; i++) {
			if (reviewObj.review[i].userID == idCode) {
				var myReview = reviewObj.review[i];
				formattedList += "<div class='half'><div class='review'><p><b><a onclick='openLocation("+myReview.placeID+");'>"
								  + getLocationName (reviewObj.review[i].placeID) +"</a></b> &nbsp; &nbsp;  <span class='rating'>" + myReview.rating 
								  + "</span></p><p>" + myReview.message + "</p></div></div>";
			}	
		}
	} else if (searchtype == "Home" ) {
		/* sort reviews according to need */
		reviewObj.review.sort(function(b, a){return a.reviewID - b.reviewID});
		console.log(reviewObj);
		var num_review = Math.min(reviewObj.review.length,idCode);
		console.log(num_review);
		var answer = "";
		var thisLocation = ""
		/*generate code */
		for (i = 0; i < num_review; i++) {
			var myReview = reviewObj.review[i];
			thisLocation = getLocationName (reviewObj.review[i].placeID);
			
			formattedList = formattedList + "<div class='third textleft'><div class='review'><p><b><a onclick='openLocation("+myReview.placeID+");'>";
			formattedList = formattedList + thisLocation + "</a></b> &nbsp; &nbsp;  <span class='rating'>" + myReview.rating;
			formattedList = formattedList + "</span></p><p>" + myReview.message + "</p></div>"+
			"</div>";
		}
			
	} 
		
	document.getElementById("ReviewList").innerHTML = formattedList;
}

function addFavourite(location,user){
	var reviewData = JSON.parse(reviewList); 
	var reviewCount = 0;
	for (x in reviewData) {
		reviewCount++;
	}
	var index = ""
	var recordexists = false
	for (i = 1; i <= reviewCount; i++) {
		index = i.toString()
		if (reviewData[index].location == location && reviewData[index].userID == user){
			reviewData[index].favourite = 1
			recordexists = true
			break
		}
	}
	if (!recordexists) {
		//create new revew record
		reviewData[index].location = location
		reviewData[index].userID = user
		reviewData[index].favourite = 1
	}
	heartHTML = document.getElementsByClassName("heart");
	heartHTML[0].innerHTML = "<img onclick='removeFavourite("+location+","+user+")' alt='Favourited' src='images/heart.png' />"
}

function removeFavourite(location,user){
	var reviewData = JSON.parse(reviewList); 
	var reviewCount = 0;
	for (x in reviewData) {
		reviewCount++;
	}
	var index = ""
	for (i = 1; i <= reviewCount; i++) {
		index = i.toString()
		if (reviewData[index].location == location && reviewData[index].userID == user){
			reviewData[index].favourite = 0
			break
		}
	}
	heartHTML = document.getElementsByClassName("heart");
	heartHTML[0].innerHTML = "<img onclick='addFavourite("+location+","+user+")' alt=' ' src='images/heart-empty.png' /><sup> Add to favourites</sup>"
}