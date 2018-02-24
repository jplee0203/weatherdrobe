
var map = document.getElementById("map");
            
            var LatLng = {
                    lat: 0,
                    lng: 0
            };
            
            var country;
            var city;
            var weatherKey = "bbeb34ebf60ad50f7893e7440a1e2b0b";
         
        
        
            var current_condition = "";
            var description = "";
            var current_temp;
            var high_temp;
            var low_temp;
            
            //get current location
            function getPosition(){
                if (navigator.geolocation){
                    var position = navigator.geolocation.getCurrentPosition(assignLocation);
                    
                }
            }
            //assign location into object        
            function assignLocation(position){
                    LatLng.lat = position.coords.latitude;
                    LatLng.lng = position.coords.longitude;
                    console.log("lat " + LatLng.lat);
                    console.log("long " + LatLng.lng);
                //map.style.display = "block";
                
                console.log ("working here");
                
                initMap();           
            }    
            
    
      function initMap() {
        
        var geocoder = new google.maps.Geocoder;

          if (LatLng.lat != 0 && LatLng.lng != 0) {
            geocodeLatLng(geocoder);
        }
    
      }
        
    function insertSearch(){
        var request;
        
                if(window.XMLHttpRequest){
                    request = new XMLHttpRequest();
                }

                else if(window.ActiveXObject){
                    request = new ActiveXObject("Microsoft.XMLHTTP");
                }

                var searchObj = new FormData();
    
                searchObj.append("city", city);
                searchObj.append("country", country);
                searchObj.append("latitude", LatLng.lat);
                searchObj.append("longitude", LatLng.lng);

                request.open("POST", "./php/insertSearch.php", true);

                request.send(searchObj);
        
                
    }    
        

    function insertWeather(){
        var request;
        
                if(window.XMLHttpRequest){
                    request = new XMLHttpRequest();
                }

                else if(window.ActiveXObject){
                    request = new ActiveXObject("Microsoft.XMLHTTP");
                }

        
        
        
        
                var weatherObj = new FormData();
    
                weatherObj.append("current_condition", current_condition);
                weatherObj.append("description", description);
                weatherObj.append("current_temp", current_temp);
                weatherObj.append("high_temp", high_temp);
                weatherObj.append("low_temp", low_temp);

                request.open("POST", "./php/insertWeather.php", true);

                request.send(weatherObj);
    }      
        
        
    //reverse geocode to get location info form LatLng  
    function geocodeLatLng(geocoder) {
        
        geocoder.geocode({'location': LatLng}, function(results, status) {
          if (status === 'OK') {
          
            if (results[1]) {
                
                console.log(results);
                
                

                country = results[5].address_components[0].long_name;
                
                city = results[0].address_components[2].long_name;

                
                var searchInp = document.getElementById("searchInp");
                
                searchInp.placeholder = "Current location is " + city;
        
//                insertSearch();
                
                getWeather();
                
            } else {
              window.alert('No results found');
            }
          } else {
            window.alert('Geocoder failed due to: ' + status);
          }
        });
      
      }
        
    function getWeather(){
        //api.openweathermap.org/data/2.5/weather?lat=35&lon=139
        
        var xhttp_weather = new XMLHttpRequest();
        xhttp_weather.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + weatherKey);
        xhttp_weather.send();
        
        xhttp_weather.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                var response = JSON.parse(this.responseText);
                console.log(response);
                
                
                current_condition = response.weather[0].main;
                
                description = response.weather[0].description;
                
                current_temp = response.main.temp;
                
                high_temp = response.main.temp_max;
                
                low_temp = response.main.temp_min;
                
                var con = document.getElementById("con"),
                    desc = document.getElementById("desc"),
                    highTemp = document.getElementById("highTemp"),
                    lowTemp = document.getElementById("lowTemp"),
                    currentTemp = document.getElementById("currentTemp");
                
                con.innerHTML = current_condition;
                desc.innerHTML = description;
                currentTemp.innerHTML = current_temp;
                highTemp.innerHTML = high_temp;
                lowTemp.innerHTML = low_temp;
                
                
//                insertWeather();
                
                //country = results[0].address_components[4].short_name;
            }
        }    
        
    }  
        
 function readWeather(){
//        var request;
//        
//        if(window.XMLHttpRequest){
//            request = new XMLHttpRequest();
//        }
//        
//        else if(window.ActiveXObject){
//            request = new ActiveXObject("Microsoft.XMLHTTP");
//        }
//        
//        request.onreadystatechange = function(){
//            if (this.readyState == 4 && this.status == 200){
//                var response = JSON.parse(this.responseText);
//                console.log(response);
//            
//            }
//        }
//        
//        //console.log(request);
//        
//        request.open("GET", "./php/readWeather.php", true);
//        
//        request.send();
    var searchInp = document.getElementById("searchInp");    
    var city = searchInp.value;
        
        var xhttp_weather = new XMLHttpRequest();
        xhttp_weather.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + weatherKey);
        xhttp_weather.send();
        xhttp_weather.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                var response = JSON.parse(this.responseText);
                console.log(response);
                
                
                current_condition = response.weather[0].main;
                
                description = response.weather[0].description;
                
                current_temp = response.main.temp;
                
                high_temp = response.main.temp_max;
                
                low_temp = response.main.temp_min;
                
                var con = document.getElementById("con"),
                    desc = document.getElementById("desc"),
                    highTemp = document.getElementById("highTemp"),
                    lowTemp = document.getElementById("lowTemp"),
                    currentTemp = document.getElementById("currentTemp");
                
                con.innerHTML = current_condition;
                desc.innerHTML = description;
                currentTemp.innerHTML = current_temp;
                highTemp.innerHTML = high_temp;
                lowTemp.innerHTML = low_temp;
                
                
//                insertWeather();
                
                //country = results[0].address_components[4].short_name;
            }
        } 
    }    