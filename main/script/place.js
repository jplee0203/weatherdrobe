    var counter = 0;    
        
    var pyrmont = {lat: null, lng: null};   
        
    var resultDiv = document.getElementById("resultDiv");

    
/*
    function initialize() {
  var searchInp = document.getElementById('searchInp');
  new google.maps.places.Autocomplete(searchInp);
        searchInp.addListener('place_changed', function() {
          infowindow.close();
          var place = autocomplete.getPlace();
        });
}*/

      function initPlacesMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -33.8688, lng: 151.2195},
          zoom: 13
        });

        var searchInp = document.getElementById('searchInp');

        var autocomplete = new google.maps.places.Autocomplete(
            searchInp, {placeIdOnly: true});
        //autocomplete.bindTo('bounds', map);

        //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        var bluepin = "./img/bluepin.png";  
        var cityName; 
          
//        var infowindow = new google.maps.InfoWindow();
//        var infowindowContent = document.getElementById('infowindow-content');
//        infowindow.setContent(infowindowContent);
          
        var geocoder = new google.maps.Geocoder;
        var marker = new google.maps.Marker({
          map: map,
          icon: new google.maps.MarkerImage("./img/map/marker0.png")
        });
//        marker.addListener('click', function() {
//          infowindow.open(map, marker);
//        });

        autocomplete.addListener('place_changed', function() {
//          infowindow.close();
          var place = autocomplete.getPlace();
          resultDiv.innerHTML = null;
          counter = 0;
            
           var city = place.name;
           var cityArr = city.split(" ");
           cityName = cityArr[cityArr.length - 1];
        
            
            
          if (!place.place_id) {
            return;
          }
          geocoder.geocode({'placeId': place.place_id}, function(results, status) {

            if (status !== 'OK') {
              window.alert('Geocoder failed due to: ' + status);
              return;
            }
         
              
              
            //console.log(results);
        var lat = results[0].geometry.location.lat();
        var lng = results[0].geometry.location.lng();
         
        pyrmont.lat = lat;
        pyrmont.lng = lng;
              
            console.log ("lat", lat);
            console.log ("lng", lng);
            
            
              
            map.setZoom(13);
            map.setCenter(results[0].geometry.location);
            // Set the position of the marker using the place ID and location.
            marker.setPlace({
              placeId: place.place_id,
              location: results[0].geometry.location
              
            });
              
            /*
            marker.setVisible(true);
            infowindowContent.children['place-name'].textContent = place.name;
            infowindowContent.children['place-id'].textContent = place.place_id;
            infowindowContent.children['place-address'].textContent =
                results[0].formatted_address;
            infowindow.open(map, marker);
            */
            
//          });
//        });
          
          
          
//        var findBtn = document.getElementById("findBtn");
//          
//        findBtn.addEventListener("click", function(){
           
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: pyrmont,
          radius: 5000,
          type: ['point_of_interest']
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
            createMarker(results[i]);
           
            
          }
        }
      }

      function createMarker(place) {
          
        console.log(counter);
          
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,
          icon: new google.maps.MarkerImage("./img/map/marker" + counter + ".png")
            
//          label: " " + counter + " "
        
        });
   
          var name = place.name;
          var nameStr = name.split(" ");
          
          nameStr = nameStr.join("+");
          
          console.log(nameStr);
            
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
    
          poiDiv.addEventListener("mouseover", function(){
              
          });
          
          poiDiv.addEventListener("mouseout", function(){
              
          });
          
            travelIdImg.addEventListener("click", function(){
              window.open("https://www.google.ca/maps/place/" + nameStr + "+" + cityName);
          });
          
      }
    //});
              });
        });
              
      }
            