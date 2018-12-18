
// window.onload = () => {


    // document.addEventListener("click", function (e) {
    //     else if (e.target.id == "goToFavorites"){
    //         location.href = "/favorites.html";
    //     }
    // });
    document.getElementById("rightArrow").addEventListener("click", function(){
        location.href = "/index.html";
    });

    console.log("loaded to before initMap");

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
        types: ['establishment']
    }
    var input = document.getElementById('searchLocation');
    autocomplete = new google.maps.places.Autocomplete(input, options);


    
    let findPlaceButton = document.getElementById("goToLocationButton");
    findPlaceButton.addEventListener('click', function(){
        //empty map
        // setMapOnAll(null);
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
            type:['restaurant']
        }
        service.nearbySearch(request, callback);
        //callback function needed to perform search
        function callback(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
              for (var i = 0; i < results.length; i++) {
                var place = results[i];
                createMarker(results[i]);
                console.log(place);

                function createMarker(place) {
                    var placeLoc = place.geometry.location;
                    var marker = new google.maps.Marker({
                      map: map,
                      position: place.geometry.location
                    });
            
                    // google.maps.event.addListener(marker, 'click', function() {
                    //   infowindow.setContent(place.name);
                    //   infowindow.open(map, this);
                    // });
                  }
                
              }
            }
          }
    });
        
    
    
// }