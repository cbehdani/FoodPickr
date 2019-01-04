//right arrow image link back to home page
document.getElementById("rightArrow").addEventListener("click", function(){
    location.href = "/index.html";
});
//creating a map
var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.1, lng: -95.7},
    zoom: 10
});

//creating a marker for our main location
// var marker = new google.maps.Marker({
//     position: {lat: -33.8688, lng: 151.2195},
//     map: map,
//     title: 'Chosen Restaurant'
//   });
// var infoWindow = new google.maps.InfoWindow({
//     content: '<p>Lynn MA<p><p>704-123-4567<p>'
// });
// marker.addListener('click', function(){
//     infoWindow.open(map, marker);
// });
    
// var defaultBounds = new google.maps.LatLngBounds(
//     new google.maps.LatLng(-23.8688, 141.2195),
//     new google.maps.LatLng(-43.8688, 161.2195)
// )

var options = {
    // bounds: defaultBounds,
    // types: ['food', stau]
}
var input = document.getElementById('searchLocation');
autocomplete = new google.maps.places.Autocomplete(input, options);

let markerHolder = [];
let findPlaceButton = document.getElementById("goToLocationButton");
findPlaceButton.addEventListener('click', function(){
    //empty map
    clearMarkers();
    console.log(map.center.lat() + " " +  map.center.lng());
    
    //location contains lat and long functions which are the lat and long values and can be set to map.center
    let currentLocation = autocomplete.getPlace().geometry.location;
    map.setCenter(currentLocation);
    // map.center = currentLocation;
    console.log(map.center.lat() + " " + map.center.lng());

    //finding nearby locations
    let service = new google.maps.places.PlacesService(map);
    let areaRadius = document.getElementById("radius").value * 1609.34;
    let request = {
        location: map.center,
        radius: areaRadius,
        type:["restaurant"],
    }

    //callback function needed to perform search
    function findPlaces(results, status, pagetoken) {
        // page token brings up 60 markers total (initial 20 + 20 + 20)
        if (status == google.maps.places.PlacesServiceStatus.OK) { 
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
                createMarker(results[i]);
                console.log(place);
                //can add fields into the marker which can be placed into the info window
                function createMarker(place) {
                    var placeLoc = place.geometry.location;
                    var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location,
                    name:place.name,
                    infowindow:new google.maps.InfoWindow({
                        content: this.name +"<br>"+this.position
                    })
                    });
                    //************To Delete an info window, either create an array for IW or remember last IF and close */
                    google.maps.event.addListener(marker, 'click', function() {
                        // infowindow.setContent(marker.getPosition());
                        // var infowindow = new google.maps.InfoWindow({
                        //     content: marker.name +"<br>"+marker.position
                        // });
                        marker.infowindow.open(map, this);
                    });
                    //create infowindow for each marker
                    markerHolder.push(marker);
                }
            }
            //Pursue this later for 60 entries
            // pagetoken.nextPage();
        }
        console.log(markerHolder.length);
        chooseRandomLocation();
        }


    service.nearbySearch(request, findPlaces);
      
        
        //Continue here to get single marker, callback is a async function so we have to make this load after
    //   console.log(markerHolder.length);
    //   chooseRandomLocation();


    function clearMarkers(){
        for (let i = 0; i < markerHolder.length; i++){
            markerHolder[i].setMap(null);
        }
        markerHolder = [];
    }
    function chooseRandomLocation(){
        let randomIndex = Math.floor(Math.random() * markerHolder.length); 
        console.log(randomIndex, " is the random Index gotten");
        let selectedMarker = markerHolder[randomIndex];
        console.log("markerholderlength",markerHolder.length,"markerholderchosenspot",markerHolder[randomIndex]);
        var infowindow = new google.maps.InfoWindow({
            content: selectedMarker.name +"<br>"+selectedMarker.position
        });
        infowindow.open(map, this)
    }
});
    



