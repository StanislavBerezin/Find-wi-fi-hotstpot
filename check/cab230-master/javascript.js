function ValidateEmail()
{
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value))
			{
				return (true)
			}
		else
			{
				alert("You have entered an invalid email address.")
				return (false)
			}
}

function ValidatePasswordSignup()
{
	var password = (document.getElementById("psw").value)
	var password2 = (document.getElementById("psw-repeat").value)
	if (password == password2 )
		{
			if ((/.*[A-Z]+.*/.test(password)) && (/.*[a-z]+.*/.test(password)) && (/.*[0-9]+.*/.test(password)))
			{
				if(password.length>=8)
				{
					return(true)
				}
				else 
				{
					alert("Your password must contain a minimum of 8 characters.")
				}
			}
			else
				{
					alert("Your password must contain at least one uppercase letter and a number.")
				}
		}
	else
		{
			alert("Your passwords do not match.")
			return (false)
		}
}

function ValidateSignup()
{
	if (ValidateEmail() && ValidatePasswordSignup()){
		return(true)
	}
	else{
		return(false)
	}
}
function searchPageValidate(){
	var pc = document.getElementById("postcode").value;
	var regtest = new RegExp(/[0-9]{4}/);
	if (regtest.test(pc) || pc==""){
		//Opening this window is for demonstration purposes only
		window.open("results.php");
	}
	else {
		window.alert("Enter a valid postcode");
		return false;
	}
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(nearestHotspot);
    } else {
        window.alert("no geolocation active");
    }
}
function nearestHotspot(position){

	var lat2=[-27.37893,-27.50942285,-27.44394629,-27.37396641,-27.56353,-27.31797261,-27.47724];
	var lng2=[153.04461,153.0333218,152.9870981,153.0783234,152.89372,153.0378735,152.97599];
	var i=0;
	var lat1=position.coords.latitude;
	var lng1=position.coords.longitude;
	var R=6371e3;
	var distanceBetweenYouAndHotspot=1000000000; //Really large distance so all hotspots will be closer than this
	var newLat=0;
	var newLng=0;

	for (i=0; i<lat2.length;i++){

		var phi1=lat1*Math.PI/180;
		var phi2=lat2[i]*Math.PI/180;
		var deltaPhi=(lat2[i]-lat1)*Math.PI/180;
		var deltaLambda=(lng2[i]-lng1)*Math.PI/180;
		var a=Math.sin(deltaPhi/2)*Math.sin(deltaPhi/2)+Math.cos(phi1)*Math.cos(phi2)*Math.sin(deltaLambda/2)*Math.sin(deltaLambda/2);
		var c=2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		var d= R*c;
		if (d<distanceBetweenYouAndHotspot){
			newLat=lat2[i];
			newLng=lng2[i];
		}
	}
	var hotspot={lat:newLat, lng:newLng};
	var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center:  hotspot
        })
	var marker = new google.maps.Marker({
          position: hotspot,
          map: map
        });
}

function individualHotspot(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(specificLocation);
    } else {
        window.alert("no geolocation active");
    }
}

function specificLocation(){
			var carindale={lat:-27.50475928, lng:153.1003965}
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 10,
				center:  carindale
			})
			var marker = new google.maps.Marker({
				position: carindale,
				map: map
			});
}