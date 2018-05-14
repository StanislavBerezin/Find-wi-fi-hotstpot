function initialiseData () {
	/*generate the data tables for Wifi Sites*/
	createLocationData ();

	/*generate the initial array for Search Results location*/
	/*generate when going to that page*/
	//createSearchLocation ();

	/*generate the data table for User Registration Data*/
	createRegistrationData ();
	
	/*generate the data table Reviews*/
	createReviewData ();
	
	/*generate the data table Suburbs*/
	createSuburbData ();
	
	/*generate the initial array for Favourite Location (from the review table)*/ 
	/*generate when going to that page*/
	//createFavouriteLocation ();
	
	/* check if all data is found */ 
	/* create error if not found */
	/*
	if (locationObj != null || reviewObj != null || userObj != null) {
		console.log ("Your data wasn't created");
		startData = true;
	}  else {
		startData = true;
		console.log ("data creation successful");
	}
	*/

	localStorage.setItem("InitData", true);
}

function createLocalData() {
	locationObj = JSON.parse(localStorage.getItem("locationObj"));
	reviewObj = JSON.parse(localStorage.getItem("reviewObj"));
	registrationObj = JSON.parse(localStorage.getItem("registrationObj"));
	suburbObj = JSON.parse(localStorage.getItem("suburbObj"));
	
	/*generate the initial array for the selected location*/
	createInitialSingleLocation ();
	
	/*generate the initial array for TopRated location*/
	/*generate when going to that page*/
	
	createTopRatedLocation ();
}

function saveLocalData() {
	localStorage.setItem("locationObj", JSON.stringify(locationObj));
	localStorage.setItem("reviewObj", JSON.stringify(reviewObj));
	localStorage.setItem("registrationObj", JSON.stringify(registrationObj));
	localStorage.setItem("suburbObj", JSON.stringify(suburbObj));
	
}

/* create a dummy table for wifi locations */
var locationObj;
function createLocationData (){
		/*create a data string with the info*/
		var wifiSpot = '{"locations":['+
							'{"siteID":"01","name":"7th Brigade Park, Chermside","address":"Delaware St","suburb":"Chermside","postcode":"4032","rating":"4.0","favourite":"Yes","found":"No","lat":"-27.37893","lon":"153.04461"},'+
							'{"siteID":"02","name":"Annerley Library Wifi","address":"450 Ipswich Road","suburb":"Annerley","postcode":"4103","rating":"2.5","favourite":"No","found":"No","lat":"-27.50942285","lon":"153.0333218"},'+
							'{"siteID":"03","name":"Ashgrove Library Wifi","address":"87 Amarina Avenue","suburb":"Ashgrove","postcode":"4060","rating":"1.5","favourite":"Yes","found":"Yes","lat":"-27.44394629","lon":"152.9870981"},'+
							'{"siteID":"04","name":"Banyo Library Wifi","address":"284 St. Vincents Road","suburb":"Banyo","postcode":"4014","rating":"3.3","favourite":"No","found":"No","lat":"-27.37396641","lon":"153.0783234"},'+
							'{"siteID":"05","name":"Booker Place Park","address":"Birkin Rd & Sugarwood St","suburb":"Bellbowrie","postcode":"4070","rating":"2.4","favourite":"No","found":"No","lat":"-27.56353","lon":"152.89372"},'+
							'{"siteID":"06","name":"Bracken Ridge Library Wifi","address":"Corner Bracken and Barrett Street","suburb":"Bracken Ridge","postcode":"4017","rating":"4.9","favourite":"Yes","found":"No","lat":"-27.31797261","lon":"153.0378735"},'+
							'{"siteID":"07","name":"Brisbane Botanic Gardens","address":"Mt Coot-tha Rd","suburb":"Toowong","postcode":"4066","rating":"0.0","favourite":"No","found":"No","lat":"-27.47724","lon":"152.97599"},'+
							'{"siteID":"08","name":"Brisbane Square Library Wifi","address":"Brisbane Square, 266 George Street","suburb":"Brisbane","postcode":"4000","rating":"4.2","favourite":"No","found":"No","lat":"-27.47091173","lon":"153.0224598"},'+
							'{"siteID":"09","name":"Bulimba Library Wifi","address":"Corner Riding Road & Oxford Street","suburb":"Bulimba","postcode":"4171","rating":"0.4","favourite":"No","found":"Yes","lat":"-27.45203086","lon":"153.0628242"},'+
							'{"siteID":"10","name":"Calamvale District Park","address":"Formby & Ormskirk Sts","suburb":"Calamvale","postcode":"4116","rating":"1.1","favourite":"No","found":"No","lat":"-27.62152","lon":"153.03665"},'+
							'{"siteID":"11","name":"Carina Library Wifi","address":"Corner Mayfield Road & Nyrang Street","suburb":"Carina","postcode":"4152","rating":"3.1","favourite":"No","found":"No","lat":"-27.49169314","lon":"153.0912127"},'+
							'{"siteID":"12","name":"Carindale Library Wifi","address":"The Home and Leisure Centre, Corner Carindale Street  & Banchory Court, Westfield Carindale Shopping Centre","suburb":"Carindale","postcode":"4152","rating":"0.5","favourite":"Yes","found":"No","lat":"-27.50475928","lon":"153.1003965"},'+
							'{"siteID":"13","name":"Carindale Recreation Reserve","address":"Cadogan and Bedivere Sts","suburb":"Carindale","postcode":"4152","rating":"4.5","favourite":"No","found":"No","lat":"-27.497","lon":"153.11105"},'+
							'{"siteID":"14","name":"Chermside Library Wifi","address":"375 Hamilton  Road","suburb":"Chermside","postcode":"4032","rating":"4.1","favourite":"No","found":"No","lat":"-27.3856032","lon":"153.0349028"},'+
							'{"siteID":"15","name":"City Botanic Gardens Wifi","address":"Alice Street","suburb":"Brisbane","postcode":"4000","rating":"1.0","favourite":"No","found":"No","lat":"-27.47561","lon":"153.03005"},'+
							'{"siteID":"16","name":"Coopers Plains Library Wifi","address":"107 Orange Grove Road","suburb":"Coopers Plains","postcode":"4108","rating":"3.5","favourite":"No","found":"No","lat":"-27.56510509","lon":"153.0403183"},'+
							'{"siteID":"17","name":"Corinda Library Wifi","address":"641 Oxley Road","suburb":"Corinda","postcode":"4075","rating":"3.9","favourite":"No","found":"No","lat":"-27.53880237","lon":"152.9809091"},'+
							'{"siteID":"18","name":"D.M. Henderson Park","address":"Granadilla St","suburb":"MacGregor","postcode":"4109","rating":"0.3","favourite":"No","found":"No","lat":"-27.57745","lon":"153.07603"},'+
							'{"siteID":"19","name":"Einbunpin Lagoon","address":"Brighton Rd","suburb":"Sandgate","postcode":"4017","rating":"1.8","favourite":"No","found":"No","lat":"-27.31947","lon":"153.06822"},'+
							'{"siteID":"20","name":"Everton Park Library Wifi","address":"561 South Pine Road","suburb":"Everton park","postcode":"4053","rating":"4.5","favourite":"No","found":"No","lat":"-27.4053336","lon":"152.9904205"},'+
							'{"siteID":"21","name":"Fairfield Library Wifi","address":"Fairfield Gardens Shopping Centre, 180 Fairfield Road","suburb":"Fairfield","postcode":"4103","rating":"4.1","favourite":"No","found":"No","lat":"-27.50909038","lon":"153.0259709"},'+
							'{"siteID":"22","name":"Forest Lake Parklands","address":"Forest Lake Bld","suburb":"Forest Lake","postcode":"4078","rating":"2.9","favourite":"No","found":"No","lat":"-27.6202","lon":"152.96625"},'+
							'{"siteID":"23","name":"Garden City Library Wifi","address":"Garden City Shopping Centre, Corner Logan and Kessels Road","suburb":"Upper Mount Gravatt","postcode":"4122","rating":"1.7","favourite":"No","found":"No","lat":"-27.56244221","lon":"153.0809183"},'+
							'{"siteID":"24","name":"Glindemann Park","address":"Logan Rd","suburb":"Holland Park West","postcode":"4121","rating":"4.9","favourite":"No","found":"No","lat":"-27.52552","lon":"153.06923"},'+
							'{"siteID":"25","name":"Grange Library Wifi","address":"79 Evelyn Street","suburb":"Grange","postcode":"4051","rating":"0.7","favourite":"No","found":"No","lat":"-27.42531193","lon":"153.0174728"},'+
							'{"siteID":"26","name":"Gregory Park","address":"Baroona Rd","suburb":"Paddington","postcode":"4064","rating":"0.1","favourite":"No","found":"Yes","lat":"-27.467","lon":"152.99981"},'+
							'{"siteID":"27","name":"Guyatt Park","address":"Sir Fred Schonell Dve","suburb":"St Lucia","postcode":"4067","rating":"4.4","favourite":"No","found":"No","lat":"-27.49297","lon":"153.00187"},'+
							'{"siteID":"28","name":"Hamilton Library Wifi","address":"Corner Racecourt Road and Rossiter Parade","suburb":"Hamilton","postcode":"4007","rating":"4.6","favourite":"No","found":"No","lat":"-27.43790137","lon":"153.0642227"},'+
							'{"siteID":"29","name":"Hidden World Park","address":"Roghan Rd","suburb":"Fitzgibbon","postcode":"4018","rating":"3.6","favourite":"No","found":"No","lat":"-27.33971701","lon":"153.034981"},'+
							'{"siteID":"30","name":"Holland Park Library Wifi","address":"81 Seville Road","suburb":"Holland Park","postcode":"4121","rating":"3.1","favourite":"No","found":"No","lat":"-27.52292286","lon":"153.0722921"},'+
							'{"siteID":"31","name":"Inala Library Wifi","address":"Inala Shopping centre, Corsair Ave","suburb":"Inala","postcode":"4077","rating":"0.5","favourite":"No","found":"No","lat":"-27.59828574","lon":"152.9735217"},'+
							'{"siteID":"32","name":"Indooroopilly Library Wifi","address":"Indrooroopilly Shopping centre, Level 4, 322 Moggill Road","suburb":"Indooroopilly","postcode":"4068","rating":"0.2","favourite":"No","found":"No","lat":"-27.49764287","lon":"152.9736471"},'+
							'{"siteID":"33","name":"Kalinga Park","address":"Kalinga St","suburb":"Clayfield","postcode":"4011","rating":"3.2","favourite":"No","found":"No","lat":"-27.40666","lon":"153.05217"},'+
							'{"siteID":"34","name":"Kenmore Library Wifi","address":"Kenmore Village Shopping Centre, Brookfield Road","suburb":"Kenmore","postcode":"4069","rating":"2.3","favourite":"No","found":"No","lat":"-27.50592852","lon":"152.9386437"},'+
							'{"siteID":"35","name":"King Edward Park (Jacob\'s Ladder)","address":"Turbot St and Wickham Tce","suburb":"Brisbane","postcode":"4000","rating":"1.3","favourite":"No","found":"No","lat":"-27.46589","lon":"153.02406"},'+
							'{"siteID":"36","name":"King George Square","address":"Ann & Adelaide Sts","suburb":"Brisbane","postcode":"4000","rating":"4.8","favourite":"No","found":"No","lat":"-27.46843","lon":"153.02422"},'+
							'{"siteID":"37","name":"Mitchelton Library Wifi","address":"37 Helipolis Parada","suburb":"Mitchelton","postcode":"4053","rating":"0.6","favourite":"No","found":"No","lat":"-27.41704165","lon":"152.9783402"},'+
							'{"siteID":"38","name":"Mt Coot-tha Botanic Gardens Library Wifi","address":"Administration Building, Brisbane Botanic Gardens (Mt Coot-tha), Mt Coot-tha Road","suburb":"Toowong","postcode":"4066","rating":"3.8","favourite":"No","found":"No","lat":"-27.47529908","lon":"152.9760412"},'+
							'{"siteID":"39","name":"Mt Gravatt Library Wifi","address":"8 Creek Road","suburb":"Mount Gravatt","postcode":"4122","rating":"2.0","favourite":"Yes","found":"No","lat":"-27.53855482","lon":"153.0802628"},'+
							'{"siteID":"40","name":"Mt Ommaney Library Wifi","address":"Mt Ommaney Shopping Centre, 171 Dandenong Road","suburb":"Mount Ommaney","postcode":"4074","rating":"0.2","favourite":"No","found":"No","lat":"-27.54824198","lon":"152.9378099"},'+
							'{"siteID":"41","name":"New Farm Library Wifi","address":"135 Sydney Street","suburb":"New Farm","postcode":"4005","rating":"0.3","favourite":"No","found":"No","lat":"-27.46736574","lon":"153.0495841"},'+
							'{"siteID":"42","name":"New Farm Park Wifi","address":"Brunswick Street","suburb":"New Farm","postcode":"4005","rating":"0.0","favourite":"No","found":"No","lat":"-27.47046","lon":"153.05223"},'+
							'{"siteID":"43","name":"Nundah Library Wifi","address":"1 Bage Street","suburb":"Nundah","postcode":"4012","rating":"2.6","favourite":"No","found":"No","lat":"-27.40125908","lon":"153.0583751"},'+
							'{"siteID":"44","name":"Oriel Park","address":"Cnr of Alexandra & Lancaster Rds","suburb":"Ascot","postcode":"4007","rating":"3.0","favourite":"No","found":"No","lat":"-27.42928","lon":"153.05768"},'+
							'{"siteID":"45","name":"Orleigh Park","address":"Hill End Tce","suburb":"West End","postcode":"4101","rating":"3.2","favourite":"No","found":"No","lat":"-27.48995","lon":"153.00326"},'+
							'{"siteID":"46","name":"Post Office Square","address":"Queen & Adelaide Sts","suburb":"Brisbane","postcode":"4000","rating":"2.2","favourite":"No","found":"No","lat":"-27.46735","lon":"153.02735"},'+
							'{"siteID":"47","name":"Rocks Riverside Park","address":"Counihan Rd","suburb":"Seventeen Mile Rocks","postcode":"4073","rating":"4.4","favourite":"No","found":"Yes","lat":"-27.54153","lon":"152.95913"},'+
							'{"siteID":"48","name":"Sandgate Library Wifi","address":"Seymour Street","suburb":"Sandgate","postcode":"4017","rating":"2.2","favourite":"No","found":"No","lat":"-27.32060523","lon":"153.0704927"},'+
							'{"siteID":"49","name":"Stones Corner Library Wifi","address":"280 Logan Road","suburb":"Stones Corner","postcode":"4120","rating":"3.5","favourite":"No","found":"No","lat":"-27.49803575","lon":"153.043655"},'+
							'{"siteID":"50","name":"Sunnybank Hills Library Wifi","address":"Sunnybank Hills Shopping Centre, Corner Compton and Calam Roads","suburb":"Sunnybank Hills","postcode":"4109","rating":"4.5","favourite":"No","found":"No","lat":"-27.6109253","lon":"153.0550706"},'+
							'{"siteID":"51","name":"Teralba Park","address":"Pullen & Osborne Rds","suburb":"Everton park","postcode":"4053","rating":"3.6","favourite":"No","found":"No","lat":"-27.40286","lon":"152.98059"},'+
							'{"siteID":"52","name":"Toowong Library Wifi","address":"Toowon Village Shopping Centre, Sherwood Road","suburb":"Toowong","postcode":"4066","rating":"0.3","favourite":"No","found":"No","lat":"-27.48505116","lon":"152.9925091"},'+
							'{"siteID":"53","name":"West End Library Wifi","address":"178 - 180 Boundary Street","suburb":"West End","postcode":"4101","rating":"2.8","favourite":"No","found":"No","lat":"-27.48245078","lon":"153.0120763"},'+
							'{"siteID":"54","name":"Wynnum Library Wifi","address":"Wynnum Civic Centre, 66 Bay Terrace","suburb":"Wynnum","postcode":"4178","rating":"3.2","favourite":"No","found":"No","lat":"-27.44244894","lon":"153.1731968"},'+
							'{"siteID":"55","name":"Zillmere Library Wifi","address":"Corner Jennings Street and Zillmere Road","suburb":"Zillmere","postcode":"4034","rating":"4.6","favourite":"No","found":"No","lat":"-27.36014232","lon":"153.0407898"}'+
				']}';
	/*parse it into a object*/	
	locationObj = JSON.parse(wifiSpot); 
	
	/* save data to browser*/
	localStorage.setItem("locationObj", JSON.stringify(locationObj));
		
}



var reviewObj;
function createReviewData (){
		/*create a data string with the info*/
	
		var review = '{"review":['+
							'{"reviewID":"01","userID":"01","placeID":"02","rating":"4.0","message":"text text text text text","time":"156.0","favourite":"1"},'+
							'{"reviewID":"02","userID":"02","placeID":"01","rating":"3.5","message":"abc def ghi jkl mno pqr stu vwx yz","time":"163.0","favourite":"0"},'+
							'{"reviewID":"03","userID":"03","placeID":"04","rating":"2.5","message":"test review","time":"161.0","favourite":"0"},'+
							'{"reviewID":"04","userID":"04","placeID":"05","rating":"2.0","message":"text","time":"157.0","favourite":"0"},'+
							'{"reviewID":"05","userID":"05","placeID":"03","rating":"1.0","message":"test text","time":"168.0","favourite":"0"},'+
							'{"reviewID":"06","userID":"01","placeID":"06","rating":"4.0","message":"text text text text text","time":"180.0","favourite":"1"},'+
							'{"reviewID":"07","userID":"06","placeID":"07","rating":"3.5","message":"abc def ghi jkl mno pqr stu vwx yz","time":"194.0","favourite":"1"},'+
							'{"reviewID":"08","userID":"07","placeID":"08","rating":"2.5","message":"test review","time":"189.0","favourite":"0"},'+
							'{"reviewID":"09","userID":"04","placeID":"09","rating":"3.0","message":"test text","time":"188.0","favourite":"1"},'+
							'{"reviewID":"10","userID":"05","placeID":"10","rating":"2.0","message":"text","time":"185.0","favourite":"0"}'+
				']}';
	/*parse it into a object*/	
	reviewObj = JSON.parse(review); 
	/* save data to browser*/
	localStorage.setItem("reviewObj", JSON.stringify(reviewObj));
}

var registrationObj;
function createRegistrationData () {
     		/*create a data string with the info*/
	var register = '{"register":['+
								'{"userID":"01","name":"Bob","email":"Bob@the.apple","userName":"Bob 4878","dateOfBirth":"32307","postCode":"4878","suburb":"Bethania","password":"mmmm"},'+
								'{"userID":"02","name":"Sam","email":"Gamgee@middle.earth","userName":"Sam 4878","dateOfBirth":"32645","postCode":"4878","suburb":"Bethania","password":"mmmm"},'+
								'{"userID":"03","name":"Jerry","email":"Handle@outlook.com","userName":"Jerry 4002","dateOfBirth":"34073","postCode":"4002","suburb":"Russia","password":"_123"},'+
								'{"userID":"04","name":"Jack","email":"Luck@here.ac","userName":"Jack 4250","dateOfBirth":"32568","postCode":"4250","suburb":"Nathan","password":"aaa213"},'+
								'{"userID":"05","name":"Alice","email":"Alice@myplace.co","userName":"Alice 5041","dateOfBirth":"32486","postCode":"5041","suburb":"Holt","password":"213aaa"},'+
								'{"userID":"06","name":"Sam","email":"Sam@theman.washere","userName":"Sam 2603","dateOfBirth":"32269","postCode":"2603","suburb":"Holder","password":"JSK"},'+
								'{"userID":"07","name":"Jerry","email":"Jezza@USUSUS.A","userName":"Jerry 21354","dateOfBirth":"36842","postCode":"21354","suburb":"Limerick","password":"Justice"}'+
								']}';
	/*parse it into a object*/	
	registrationObj = JSON.parse(register); 
	
	/* save data to browser*/
	localStorage.setItem("registrationObj", JSON.stringify(registrationObj));
}

var suburbObj;
function createSuburbData () {
     		/*create a data string with the info*/
	var suburb = '{"suburb":['+
							'{"suburb":"null"},'+
							'{"suburb":"Annerley"},'+
							'{"suburb":"Ascot"},'+
							'{"suburb":"Ashgrove"},'+
							'{"suburb":"Banyo"},'+
							'{"suburb":"Bellbowrie"},'+
							'{"suburb":"Bracken Ridge"},'+
							'{"suburb":"Brisbane"},'+
							'{"suburb":"Bulimba"},'+
							'{"suburb":"Calamvale"},'+
							'{"suburb":"Carina"},'+
							'{"suburb":"Carindale"},'+
							'{"suburb":"Chermside"},'+
							'{"suburb":"Clayfield"},'+
							'{"suburb":"Coopers Plains"},'+
							'{"suburb":"Corinda"},'+
							'{"suburb":"Everton park"},'+
							'{"suburb":"Fairfield"},'+
							'{"suburb":"Fitzgibbon"},'+
							'{"suburb":"Forest Lake"},'+
							'{"suburb":"Grange"},'+
							'{"suburb":"Hamilton"},'+
							'{"suburb":"Holland Park"},'+
							'{"suburb":"Holland Park West"},'+
							'{"suburb":"Inala"},'+
							'{"suburb":"Indooroopilly"},'+
							'{"suburb":"Kenmore"},'+
							'{"suburb":"MacGregor"},'+
							'{"suburb":"Mitchelton"},'+
							'{"suburb":"Mount Gravatt"},'+
							'{"suburb":"Mount Ommaney"},'+
							'{"suburb":"New Farm"},'+
							'{"suburb":"Nundah"},'+
							'{"suburb":"Paddington"},'+
							'{"suburb":"Sandgate"},'+
							'{"suburb":"Seventeen Mile Rocks"},'+
							'{"suburb":"St Lucia"},'+
							'{"suburb":"Stones Corner"},'+
							'{"suburb":"Sunnybank Hills"},'+
							'{"suburb":"Toowong"},'+
							'{"suburb":"Upper Mount Gravatt"},'+
							'{"suburb":"West End"},'+
							'{"suburb":"Wynnum"},'+
							'{"suburb":"Zillmere"}'+
				']}';
	/*parse it into a object*/	
	suburbObj = JSON.parse(suburb); 
	
	/* save data to browser*/
	localStorage.setItem("suburbObj", JSON.stringify(suburbObj));
}

function getUserName (idCode) {
	var answer = "___";
	for (j = 0; j < registrationObj.register.length; j++) {
		console.log(registrationObj.register[j].userID );
		if (registrationObj.register[j].userID == idCode) {
			answer = registrationObj.register[j].userName;
		}
	}
	return answer;
}

function getLocationName (idCode) {
	var answer = "___";
	
	for (j = 0; j < locationObj.locations.length; j++) {
		if (locationObj.locations[j].siteID == idCode) {
			answer = locationObj.locations[j].name;
		}
	}
	return answer;
	
}


var singleLocation = [];
function createInitialSingleLocation () {
     singleLocation.push(locationObj.locations[0]);
}

function createTopRatedLocation () {
	/* find the number of places required*/
    var numberOfPlaces = 4; 
	/*numberOfTopRatedPlaces determined in displayTopRating_new*/
	var length = locationObj.locations.length;
	/*
	for (x in dataObj) {
		length++;
	}*/
	
	//numberOfTopRatedPlaces = Math.min(length,numberOfTopRatedPlaces);
	numberOfTopRatedPlaces = Math.min(length,numberOfPlaces);
	
	var	maximumRating = 99;
	var	minimumRating = 0;
	var	minimumPosition = 0;
	
	// reset array to empty //
	topPlacesArray = [];
	
	for (i = 0; i <length; i++) {
		
		j = i+1;
		var reference = "";
		if (j < 10 ) {
			reference = "0"+j+"" ;	
		} else {
			reference = ""+j+"" ;	
		}
		 var curLocation = locationObj.locations[i];
		
		//initiate process //
		if (j == 1) {
			//topPlacesArray.push(dataObj[reference]);
			topPlacesArray.push(curLocation);
			minimumRating = Math.min(curLocation.rating,maximumRating);
			minimumPosition = i;
		} else if (j <= numberOfTopRatedPlaces) {
			//uptil the number of places insert locations//
			topPlacesArray.push(curLocation);
			if (curLocation.rating < minimumRating) {
				minimumRating = curLocation.rating;
				minimumPosition = i;
			}
		} else {
			//after this add in only places with greater rating and remove the last place//
			if (curLocation.rating > minimumRating) {
				//remove minimum object//
				delete topPlacesArray[minimumPosition];
				//add new object//
				topPlacesArray[minimumPosition] = curLocation;
				//locate new minimum object//
				minimumPosition = 0;
				minimumRating = topPlacesArray[0].rating;
				for (tp=1; tp<numberOfTopRatedPlaces;  tp++){
			
				   	if (topPlacesArray[tp].rating < minimumRating) {
						minimumPosition = tp;
						minimumRating = topPlacesArray[tp].rating;
					}
				}
			}
		}
	}

	topPlacesArray.sort(function(b, a){return a.rating - b.rating});
	
	for (k = 0; k <topPlacesArray.length; k++){
		
	}
	
	//console.log (topPlacesArray[0]);
	
}


function createSearchLocation () {
     
}

function createFavouriteLocation () {
     
}

// data objects//
var dataObj;
var dataObjLength = 0;
var searchResultsObject;
var selectedSite = [];
var topPlacesArray =[];


function setUpData (){
var wifiSpot = '{"sites":   [{"siteID":"01","name":"7th Brigade Park, Chermside","address":"Delaware St","suburb":"Chermside","postcode":"4032","rating":"4.0","favourite":"Yes","found":"No","lat":"-27.37893","lon":"153.04461"},'+
							'{"siteID":"02","name":"Annerley Library Wifi","address":"450 Ipswich Road","suburb":"Annerley","postcode":"4103","rating":"2.5","favourite":"No","found":"No","lat":"-27.50942285","lon":"153.0333218"},'+
							'{"siteID":"03","name":"Ashgrove Library Wifi","address":"87 Amarina Avenue","suburb":"Ashgrove","postcode":"4060","rating":"1.5","favourite":"Yes","found":"Yes","lat":"-27.44394629","lon":"152.9870981"},'+
							'{"siteID":"04","name":"Banyo Library Wifi","address":"284 St. Vincents Road","suburb":"Banyo","postcode":"4014","rating":"3.3","favourite":"No","found":"No","lat":"-27.37396641","lon":"153.0783234"},'+
							'{"siteID":"05","name":"Booker Place Park","address":"Birkin Rd & Sugarwood St","suburb":"Bellbowrie","postcode":"4070","rating":"2.4","favourite":"No","found":"No","lat":"-27.56353","lon":"152.89372"},'+
							'{"siteID":"06","name":"Bracken Ridge Library Wifi","address":"Corner Bracken and Barrett Street","suburb":"Bracken Ridge","postcode":"4017","rating":"4.9","favourite":"Yes","found":"No","lat":"-27.31797261","lon":"153.0378735"},'+
							'{"siteID":"07","name":"Brisbane Botanic Gardens","address":"Mt Coot-tha Rd","suburb":"Toowong","postcode":"4066","rating":"0.0","favourite":"No","found":"No","lat":"-27.47724","lon":"152.97599"},'+
							'{"siteID":"08","name":"Brisbane Square Library Wifi","address":"Brisbane Square, 266 George Street","suburb":"Brisbane","postcode":"4000","rating":"4.2","favourite":"No","found":"No","lat":"-27.47091173","lon":"153.0224598"},'+
							'{"siteID":"09","name":"Bulimba Library Wifi","address":"Corner Riding Road & Oxford Street","suburb":"Bulimba","postcode":"4171","rating":"0.4","favourite":"No","found":"Yes","lat":"-27.45203086","lon":"153.0628242"},'+
							'{"siteID":"10","name":"Calamvale District Park","address":"Formby & Ormskirk Sts","suburb":"Calamvale","postcode":"4116","rating":"1.1","favourite":"No","found":"No","lat":"-27.62152","lon":"153.03665"},'+
							'{"siteID":"11","name":"Carina Library Wifi","address":"Corner Mayfield Road & Nyrang Street","suburb":"Carina","postcode":"4152","rating":"3.1","favourite":"No","found":"No","lat":"-27.49169314","lon":"153.0912127"},'+
							'{"siteID":"12","name":"Carindale Library Wifi","address":"The Home and Leisure Centre, Corner Carindale Street  & Banchory Court, Westfield Carindale Shopping Centre","suburb":"Carindale","postcode":"4152","rating":"0.5","favourite":"Yes","found":"No","lat":"-27.50475928","lon":"153.1003965"},'+
							'{"siteID":"13","name":"Carindale Recreation Reserve","address":"Cadogan and Bedivere Sts","suburb":"Carindale","postcode":"4152","rating":"4.5","favourite":"No","found":"No","lat":"-27.497","lon":"153.11105"},'+
							'{"siteID":"14","name":"Chermside Library Wifi","address":"375 Hamilton  Road","suburb":"Chermside","postcode":"4032","rating":"4.1","favourite":"No","found":"No","lat":"-27.3856032","lon":"153.0349028"},'+
							'{"siteID":"15","name":"City Botanic Gardens Wifi","address":"Alice Street","suburb":"Brisbane","postcode":"4000","rating":"1.0","favourite":"No","found":"No","lat":"-27.47561","lon":"153.03005"},'+
							'{"siteID":"16","name":"Coopers Plains Library Wifi","address":"107 Orange Grove Road","suburb":"Coopers Plains","postcode":"4108","rating":"3.5","favourite":"No","found":"No","lat":"-27.56510509","lon":"153.0403183"},'+
							'{"siteID":"17","name":"Corinda Library Wifi","address":"641 Oxley Road","suburb":"Corinda","postcode":"4075","rating":"3.9","favourite":"No","found":"No","lat":"-27.53880237","lon":"152.9809091"},'+
							'{"siteID":"18","name":"D.M. Henderson Park","address":"Granadilla St","suburb":"MacGregor","postcode":"4109","rating":"0.3","favourite":"No","found":"No","lat":"-27.57745","lon":"153.07603"},'+
							'{"siteID":"19","name":"Einbunpin Lagoon","address":"Brighton Rd","suburb":"Sandgate","postcode":"4017","rating":"1.8","favourite":"No","found":"No","lat":"-27.31947","lon":"153.06822"},'+
							'{"siteID":"20","name":"Everton Park Library Wifi","address":"561 South Pine Road","suburb":"Everton park","postcode":"4053","rating":"4.5","favourite":"No","found":"No","lat":"-27.4053336","lon":"152.9904205"},'+
							'{"siteID":"21","name":"Fairfield Library Wifi","address":"Fairfield Gardens Shopping Centre, 180 Fairfield Road","suburb":"Fairfield","postcode":"4103","rating":"4.1","favourite":"No","found":"No","lat":"-27.50909038","lon":"153.0259709"},'+
							'{"siteID":"22","name":"Forest Lake Parklands","address":"Forest Lake Bld","suburb":"Forest Lake","postcode":"4078","rating":"2.9","favourite":"No","found":"No","lat":"-27.6202","lon":"152.96625"},'+
							'{"siteID":"23","name":"Garden City Library Wifi","address":"Garden City Shopping Centre, Corner Logan and Kessels Road","suburb":"Upper Mount Gravatt","postcode":"4122","rating":"1.7","favourite":"No","found":"No","lat":"-27.56244221","lon":"153.0809183"},'+
							'{"siteID":"24","name":"Glindemann Park","address":"Logan Rd","suburb":"Holland Park West","postcode":"4121","rating":"4.9","favourite":"No","found":"No","lat":"-27.52552","lon":"153.06923"},'+
							'{"siteID":"25","name":"Grange Library Wifi","address":"79 Evelyn Street","suburb":"Grange","postcode":"4051","rating":"0.7","favourite":"No","found":"No","lat":"-27.42531193","lon":"153.0174728"},'+
							'{"siteID":"26","name":"Gregory Park","address":"Baroona Rd","suburb":"Paddington","postcode":"4064","rating":"0.1","favourite":"No","found":"Yes","lat":"-27.467","lon":"152.99981"},'+
							'{"siteID":"27","name":"Guyatt Park","address":"Sir Fred Schonell Dve","suburb":"St Lucia","postcode":"4067","rating":"4.4","favourite":"No","found":"No","lat":"-27.49297","lon":"153.00187"},'+
							'{"siteID":"28","name":"Hamilton Library Wifi","address":"Corner Racecourt Road and Rossiter Parade","suburb":"Hamilton","postcode":"4007","rating":"4.6","favourite":"No","found":"No","lat":"-27.43790137","lon":"153.0642227"},'+
							'{"siteID":"29","name":"Hidden World Park","address":"Roghan Rd","suburb":"Fitzgibbon","postcode":"4018","rating":"3.6","favourite":"No","found":"No","lat":"-27.33971701","lon":"153.034981"},'+
							'{"siteID":"30","name":"Holland Park Library Wifi","address":"81 Seville Road","suburb":"Holland Park","postcode":"4121","rating":"3.1","favourite":"No","found":"No","lat":"-27.52292286","lon":"153.0722921"},'+
							'{"siteID":"31","name":"Inala Library Wifi","address":"Inala Shopping centre, Corsair Ave","suburb":"Inala","postcode":"4077","rating":"0.5","favourite":"No","found":"No","lat":"-27.59828574","lon":"152.9735217"},'+
							'{"siteID":"32","name":"Indooroopilly Library Wifi","address":"Indrooroopilly Shopping centre, Level 4, 322 Moggill Road","suburb":"Indooroopilly","postcode":"4068","rating":"0.2","favourite":"No","found":"No","lat":"-27.49764287","lon":"152.9736471"},'+
							'{"siteID":"33","name":"Kalinga Park","address":"Kalinga St","suburb":"Clayfield","postcode":"4011","rating":"3.2","favourite":"No","found":"No","lat":"-27.40666","lon":"153.05217"},'+
							'{"siteID":"34","name":"Kenmore Library Wifi","address":"Kenmore Village Shopping Centre, Brookfield Road","suburb":"Kenmore","postcode":"4069","rating":"2.3","favourite":"No","found":"No","lat":"-27.50592852","lon":"152.9386437"},'+
							'{"siteID":"35","name":"King Edward Park (Jacob\'s Ladder)","address":"Turbot St and Wickham Tce","suburb":"Brisbane","postcode":"4000","rating":"1.3","favourite":"No","found":"No","lat":"-27.46589","lon":"153.02406"},'+
							'{"siteID":"36","name":"King George Square","address":"Ann & Adelaide Sts","suburb":"Brisbane","postcode":"4000","rating":"4.8","favourite":"No","found":"No","lat":"-27.46843","lon":"153.02422"},'+
							'{"siteID":"37","name":"Mitchelton Library Wifi","address":"37 Helipolis Parada","suburb":"Mitchelton","postcode":"4053","rating":"0.6","favourite":"No","found":"No","lat":"-27.41704165","lon":"152.9783402"},'+
							'{"siteID":"38","name":"Mt Coot-tha Botanic Gardens Library Wifi","address":"Administration Building, Brisbane Botanic Gardens (Mt Coot-tha), Mt Coot-tha Road","suburb":"Toowong","postcode":"4066","rating":"3.8","favourite":"No","found":"No","lat":"-27.47529908","lon":"152.9760412"},'+
							'{"siteID":"39","name":"Mt Gravatt Library Wifi","address":"8 Creek Road","suburb":"Mount Gravatt","postcode":"4122","rating":"2.0","favourite":"Yes","found":"No","lat":"-27.53855482","lon":"153.0802628"},'+
							'{"siteID":"40","name":"Mt Ommaney Library Wifi","address":"Mt Ommaney Shopping Centre, 171 Dandenong Road","suburb":"Mount Ommaney","postcode":"4074","rating":"0.2","favourite":"No","found":"No","lat":"-27.54824198","lon":"152.9378099"},'+
							'{"siteID":"41","name":"New Farm Library Wifi","address":"135 Sydney Street","suburb":"New Farm","postcode":"4005","rating":"0.3","favourite":"No","found":"No","lat":"-27.46736574","lon":"153.0495841"},'+
							'{"siteID":"42","name":"New Farm Park Wifi","address":"Brunswick Street","suburb":"New Farm","postcode":"4005","rating":"0.0","favourite":"No","found":"No","lat":"-27.47046","lon":"153.05223"},'+
							'{"siteID":"43","name":"Nundah Library Wifi","address":"1 Bage Street","suburb":"Nundah","postcode":"4012","rating":"2.6","favourite":"No","found":"No","lat":"-27.40125908","lon":"153.0583751"},'+
							'{"siteID":"44","name":"Oriel Park","address":"Cnr of Alexandra & Lancaster Rds","suburb":"Ascot","postcode":"4007","rating":"3.0","favourite":"No","found":"No","lat":"-27.42928","lon":"153.05768"},'+
							'{"siteID":"45","name":"Orleigh Park","address":"Hill End Tce","suburb":"West End","postcode":"4101","rating":"3.2","favourite":"No","found":"No","lat":"-27.48995","lon":"153.00326"},'+
							'{"siteID":"46","name":"Post Office Square","address":"Queen & Adelaide Sts","suburb":"Brisbane","postcode":"4000","rating":"2.2","favourite":"No","found":"No","lat":"-27.46735","lon":"153.02735"},'+
							'{"siteID":"47","name":"Rocks Riverside Park","address":"Counihan Rd","suburb":"Seventeen Mile Rocks","postcode":"4073","rating":"4.4","favourite":"No","found":"Yes","lat":"-27.54153","lon":"152.95913"},'+
							'{"siteID":"48","name":"Sandgate Library Wifi","address":"Seymour Street","suburb":"Sandgate","postcode":"4017","rating":"2.2","favourite":"No","found":"No","lat":"-27.32060523","lon":"153.0704927"},'+
							'{"siteID":"49","name":"Stones Corner Library Wifi","address":"280 Logan Road","suburb":"Stones Corner","postcode":"4120","rating":"3.5","favourite":"No","found":"No","lat":"-27.49803575","lon":"153.043655"},'+
							'{"siteID":"50","name":"Sunnybank Hills Library Wifi","address":"Sunnybank Hills Shopping Centre, Corner Compton and Calam Roads","suburb":"Sunnybank Hills","postcode":"4109","rating":"4.5","favourite":"No","found":"No","lat":"-27.6109253","lon":"153.0550706"},'+
							'{"siteID":"51","name":"Teralba Park","address":"Pullen & Osborne Rds","suburb":"Everton park","postcode":"4053","rating":"3.6","favourite":"No","found":"No","lat":"-27.40286","lon":"152.98059"},'+
							'{"siteID":"52","name":"Toowong Library Wifi","address":"Toowon Village Shopping Centre, Sherwood Road","suburb":"Toowong","postcode":"4066","rating":"0.3","favourite":"No","found":"No","lat":"-27.48505116","lon":"152.9925091"},'+
							'{"siteID":"53","name":"West End Library Wifi","address":"178 - 180 Boundary Street","suburb":"West End","postcode":"4101","rating":"2.8","favourite":"No","found":"No","lat":"-27.48245078","lon":"153.0120763"},'+
							'{"siteID":"54","name":"Wynnum Library Wifi","address":"Wynnum Civic Centre, 66 Bay Terrace","suburb":"Wynnum","postcode":"4178","rating":"3.2","favourite":"No","found":"No","lat":"-27.44244894","lon":"153.1731968"},'+
							'{"siteID":"55","name":"Zillmere Library Wifi","address":"Corner Jennings Street and Zillmere Road","suburb":"Zillmere","postcode":"4034","rating":"4.6","favourite":"No","found":"No","lat":"-27.36014232","lon":"153.0407898"}'+
				']}';
		
	dataObj = JSON.parse(wifiSpot); 
	
	console.log(typeof(dataObj));
	console.log(dataObj);
	getMapData();
	
	dataObjLength = 0;
	for (x in dataObj) {
		dataObjLength++;
	}
	
	selectedSite.push(dataObj["01"]);
 }

/* insert into the data object Google Maps information */
function getMapData () {
	
	var latitude = 0;
	var longitude = 0;
	var location;

	
	for (i = 0; i <dataObjLength; i++) {
		j = i+1;
		var reference = "";
		if (j < 10 ) {
			reference = "0"+j+"" ;	
		} else {
			reference = ""+j+"" ;	
		}
		
		latitude = parseFloat(dataObj[reference].lat);
		longitude = parseFloat(dataObj[reference].lon);
		
		if (document.getElementById('map'+i)){
			location = {lat: latitude, lng: longitude};
			dataObj[reference].map = new google.maps.Map(document.getElementById('map'+i), {
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
 
function displayDataTable(field) {
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

	for (i = 0; i <dataObjLength; i++) {
		j = i+1;
		var reference = "";
		if (j < 10 ) {
			reference = "0"+j+"" ;	
		} else {
			reference = ""+j+"" ;	
		}
		var thisLat = "";
		var thisLon = "";
		
		var rndScale = 1000;
		
		if (field == "found") {
			if (dataObj[reference].found == 'Yes') {
				dataTableString = dataTableString + createDataTable (reference,rndScale);
			}
		}
		
		if (field == "favourite") {
			if (dataObj[reference].favourite == 'Yes') {
				dataTableString = dataTableString + createDataTable (reference,rndScale);
			}
		}
	}
	var dataTableString = dataTableString +
								"</tbody >" + 
						   "</table>"
						
		;
		
	dataHTML[0].innerHTML = dataTableString;
	
}



function openLocation(reference) {
	/*
	var nameID = "";
	if (reference < 10 ) {
		nameID = "0"+reference+"" ;	
	} else {
		nameID = ""+reference+"" ;	
	}
	
	var ItemID = "_" + nameID;
	*/
	//selectedSite.clear;
	//selectedSite.push(dataObj[nameID]);
	window.location = 'location.php?'+"_"+reference;
	
}



function topPlaces(){
	var numberOfPlaces = 4;
	
	var length = 0;
	for (x in dataObj) {
		length++;
	}
	
	numberOfPlaces = Math.min(length,numberOfPlaces);
	
	var	maximumRating = 99;
	var	minimumRating = 0;
	var	minimumPosition = 0;
	
	// reset array to empty //
	topPlacesArray = [];
	
	for (i = 0; i <length; i++) {
		
		j = i+1;
		var reference = "";
		if (j < 10 ) {
			reference = "0"+j+"" ;	
		} else {
			reference = ""+j+"" ;	
		}
		
		//initiate process //
		/*
		if (j == 1) {
			topPlacesArray.push(dataObj[reference]);
			minimumRating = Math.min(dataObj[reference].rating,maximumRating);
			minimumPosition = i;
		} else if (j <= numberOfPlaces) {
			//uptil the number of places insert locations//
			topPlacesArray.push(dataObj[reference]);
			if (dataObj[reference].rating < minimumRating) {
				minimumRating = dataObj[reference].rating;
				minimumPosition = i;
			}
		} else {
			//after this add in only places with greater rating and remove the last place//
			if (dataObj[reference].rating > minimumRating) {
				//remove minimum object//
				delete topPlacesArray[minimumPosition];
				//add new object//
				topPlacesArray[minimumPosition] = dataObj[reference];
				//locate new minimum object//
				minimumPosition = 0;
				minimumRating = topPlacesArray[0].rating;
				for (tp=1; tp<numberOfPlaces;  tp++){
			
				   	if (topPlacesArray[tp].rating < minimumRating) {
						minimumPosition = tp;
						minimumRating = topPlacesArray[tp].rating;
					}
				}
			}
		}-*/
	}
	
	topPlacesArray.sort(function(b, a){return a.rating - b.rating});
	
	for (k = 0; k <topPlacesArray.length; k++){
		
	}
	
	console.log (topPlacesArray[0]);
	
 }


function createLocationList (location_list, curLocation) {
		/*console.log(curLocation);*/
		latitude = parseFloat(curLocation.lat);
		longitude = parseFloat(curLocation.lon);
		location_list.push({
			"name": curLocation.name,
			"latlng": new google.maps.LatLng(latitude, longitude)
		});
}


function test(event) {
	window.xxx = event;
}

function convertToText2D (value){
	
	var reference = "";
	if (value < 10 ) {
		reference = "_0"+value+"" ;	
	} else {
		reference = "_"+value+"" ;	
	}
	
	return reference;
}

 
 /*
 // iterate through key-value gracefully
for (const [key, value] of Object.entries(xxx.dataObj)) {
  console.log(` ${value.name}`); // "a 5", "b 7", "c 9"
}*/