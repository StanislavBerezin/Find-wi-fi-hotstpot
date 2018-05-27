 function initMap() {

     var latiData = document.getElementsByClassName("latPhp");
     var longData = document.getElementsByClassName("lonPhp");
     var nameData = document.getElementsByClassName("namePhp");
     var addressData = document.getElementsByClassName("addressPhp");

     var arrayLati = [].slice.call(latiData);
     var arrayLong = [].slice.call(longData);
     var arrayName = [].slice.call(nameData);
     var arrayAddress = [].slice.call(addressData);


     var arrayCoords = [];
     for (var i = 0; i < arrayLati.length; i++) {
         arrayCoords.push({
             location: {
                 lat: Number(arrayLati[i].value),
                 lng: Number(arrayLong[i].value)
             },
             description: `
                        <div class = 'card-pos'>
                        <h3> ${arrayName[i].innerHTML}</h3>
                        <p>${arrayAddress[i].innerHTML} </p>
                        <img class='resize' src ="http://pluspng.com/img-png/wifi-hd-png-wi-fi-png-images-png-image-1008.png">
                        <a href=" http://localhost:8080/CAB230/review.php?latitude=${arrayLati[i].value}&longitude=${arrayLong[i].value}" class='button-filled'>Leave a review</a>
                        </div>`

         })

         
     }

     // Map options
     var options = {
         zoom: 13,
         center: {
             lat: Number(arrayLati[0].value),
             lng: Number(arrayLong[0].value)
         }
     }

     // New map
     var map = new google.maps.Map(document.getElementById('mapContainer'), options);

     // Listen for click on map
     google.maps.event.addListener(map, 'click', function (event) {
         // Add marker
         addPointer({
             coords: event.latLng
         });
     });

     // build pointers on the map
     for (var i = 0; i < arrayCoords.length; i++) {
         // Add pointers
         addPointer(arrayCoords[i]);
     }



     // Pointer function to add them to the map
     function addPointer(props) {
         var pointer = new google.maps.Marker({
             position: props.location,
             map: map,
         });

         // If there is description, then display it
         if (props.description) {
             var infoWindow = new google.maps.InfoWindow({
                 content: props.description
             });

             pointer.addListener('click', function () {
                 infoWindow.open(map, pointer);
             });
         }
     }

 }