var counter = 0;
var counter = 0;
var initialLocation = true;
var previousLocation;
var pyrmont = {lat: null, lng: null};   
var resultDiv = document.getElementById("resultDiv");
var selectType = document.getElementById("selectType");
var selectedLocationType;
var markers = [];
var cityName; 
var searchInp = document.getElementById('searchInp');
var searchBut = document.getElementById("searchBut");
var centerPoint;


//if there is input (which will be autocomplete), then use that placeID, else use the user's current placeID
function checkInput(){
            
        if (searchInp.value != ""){
        initialLocation = false;
        console.log("init", initialLocation);
        }
    
        else {
            initialLocation = true;
        console.log("init", initialLocation);    
        }
    }

//setting the type of location onto a variable
function changeType(){
    selectedLocationType = selectType.value;
    console.log(selectedLocationType);
}


//initializing the map
function initPlacesMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13
});

//auto complete for search bar          
var autocomplete = new google.maps.places.Autocomplete(
            searchInp, {placeIdOnly: true});

    //setting the map on all markers in the array
    function setMapOnAll(map){
        for (var i = 0; i < markers.length; i++){
            markers[i].setMap(map);
        }
            
    }         
          
        var geocoder = new google.maps.Geocoder;
        var marker = new google.maps.Marker({
          map: map,
          icon: new google.maps.MarkerImage("./img/map/marker0.png")
        });
          
searchBut.addEventListener('click', function() {        
        
        city = searchInp.value;
        
        if (searchInp.value == ""){
            placeID = initialPlaceID; 
        }
            
        else {    
            //get location data from the autocomplete function in the search bar
            var place = autocomplete.getPlace();
            var mapCity = place.name;
            var cityArr = mapCity.split(" ");
            cityName = cityArr[cityArr.length - 1];

            console.log("place", place);
            
             
          if (!place.place_id) {
            return;
          }
            
            placeID = place.place_id;
          
            }
            
            geocoder.geocode({'placeId': placeID}, function(results, status) {

            if (status !== 'OK') {
              window.alert('Geocoder failed due to: ' + status);
              return;
            }
         
             readWeather(); 
              
            //console.log(results);
        var lat = results[0].geometry.location.lat();
        var lng = results[0].geometry.location.lng();
         
        pyrmont.lat = lat;
        pyrmont.lng = lng;
              
            console.log ("lat", lat);
            console.log ("lng", lng);
            
            centerPoint = results[0].geometry.location;
              
            map.setZoom(13);
            map.setCenter(results[0].geometry.location);
            // Set the position of the marker using the place ID and location.
            marker.setPlace({
              placeId: placeID,
              location: results[0].geometry.location
              
            });
        
        //delete all markers    
        function deleteMarkers(){
            setMapOnAll(null);
            markers = [];
        }          
                
        callForPOI();   
                
        //deletes markers before getting markers for new location        
        selectType.addEventListener("change", function(){
           
            if (markers.length > 0){
            deleteMarkers();
            resultDiv.innerHTML = null;
            counter = 0;
            console.log("del", markers);
        }
            
            callForPOI(); 
        });        
                
                
        function callForPOI() {
           
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: pyrmont,
          radius: 5000,
          type: [selectedLocationType]
        }, callback);
      

      function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          
            
            
            console.log(results);
            var resultLength;
            
            if (results.length > 5){
                resultLength = 5;
            }
            
            else {
                resultLength = results.length;
            }
            
            
            for (var i = 0; i < resultLength; i++) {
            counter++;
            addMarker(results[i]);
            
            
          }
            //resize map to include all markers on map view
            var bounds = new google.maps.LatLngBounds(); 
            
            map.setZoom(13);
            
            if (selectType.value != ""){
                for (var i = 0; i < resultLength; i++){

                    var location = results[i].geometry.location;
                    console.log(location);

                    bounds.extend(location);

                }
            bounds.extend(centerPoint);    
                
            map.fitBounds(bounds);    
            }
        }
      }
        }

        //adds marker to map and push to array
        function addMarker(place) {
        
            var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          icon: new google.maps.MarkerImage("./img/map/marker" + counter + ".png")
                
            });    
            
            
            markers.push(marker);
            
            var name = place.name;
          var nameStr = name.split(" ");
          
          nameStr = nameStr.join("+");
          
          //console.log(nameStr);
            
          var poiDiv = document.createElement("div");
            poiDiv.className = "travelDiv" + counter;
            poiDiv.setAttribute("id", "poiDiv");    
            resultDiv.appendChild(poiDiv);    
     
          var travelIdP = document.createElement("p"); 
              travelIdP.className = "travelP"
              travelIdP.innerHTML = counter + ". " + name
              poiDiv.appendChild(travelIdP);  
          
          
          var travelIdImg = document.createElement("div"); 
              travelIdImg.className = "travelImg"
              poiDiv.appendChild(travelIdImg);     
          
          travelIdImg.addEventListener("click", function(){
              window.open("https://www.google.ca/maps/place/" + nameStr + "+" + cityName);
          });
            
            
        }      
              

              });
            
        });
        }
              
      
            