
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




    // function findRandomPlaceOnclick(){
        let findPlaceButton = document.getElementById("goToLocationButton");
        findPlaceButton.addEventListener('click', function(){
            // console.log(autocomplete.getPlace());
            console.log(map.center.lat() + " " +  map.center.lng());
            
            //location contains lat and long functions which are the lat and long values and can be set to map.center
            let currentLocation = autocomplete.getPlace().geometry.location;
            map.setCenter(currentLocation);
            // map.center = currentLocation;
            console.log(map.center.lat() + " " + map.center.lng());

        });
        
    // }
    
// }