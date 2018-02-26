
var current_conditionImg = document.getElementById("temperImg1");
var checkWeather_img = document.getElementById("checkWeather_img");
var home_containerImg = document.getElementById("home_container");
var header2_img = document.getElementById("header2");




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
                
                
                desc.innerHTML = description;
                currentTemp.innerHTML = current_temp;
                highTemp.innerHTML = high_temp;
                lowTemp.innerHTML = low_temp;
                
                                
                
        //Weather Background Header//  
                
if(current_condition === "Snow"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/snow.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/snow-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Snow1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Snow2.jpg')";
    con.innerHTML = "";
    
} else if(current_condition === "Thunderstorm"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/thunderstorm.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/thunderstorm-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Thunderstorm1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Thundestorm.jpeg')";
    con.innerHTML = "";
    
} else if(current_condition === "Drizzle"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/shower.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/shower-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Drizzle1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Drizzle2.jpg')";
    con.innerHTML = "";
    
} else if(current_condition === "Rain"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/rain.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/rain-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Rain1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Rain2.jpeg')";
    con.innerHTML = "";
    
}else if(current_condition === "Mist" || current_condition === "Fog"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Haze1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Haze2.jpg')";
    con.innerHTML = "";
} else if( current_condition === "Smoke" || current_condition === "Haze"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Smoke1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Smoke2.jpg')";
    con.innerHTML = "";
} else if(current_condition === "Sand, dust whirls" || current_condition === "Sand" || current_condition === "Dust"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/WeatherIcon/Sand1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/WeatherIcon/Sand2.jpg')";
    con.innerHTML = "";
} else if(current_condition === "Volcanic ash"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage =  "URL('./img/WeatherIcon/VolcanicAsh1.jpg')";
    header2_img.style.backgroundImage =  "URL('./img/WeatherIcon/VolcanicAsh2.jpg')";
    con.innerHTML = "";
} else if(current_condition === "Squalls" || current_condition === "Tornado"){
     current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage =  "URL('./img/WeatherIcon/Tornado1.jpg')";
    header2_img.style.backgroundImage =  "URL('./img/WeatherIcon/Tornado2.jpg')";
    con.innerHTML = "";
} else if(current_condition === "Clear"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/clear-sky.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/clear-sky-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Clear1.jpeg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Clear2.jpg')";
    con.innerHTML = "";
   
} else if(current_condition === "Clouds"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/scattered-clouds.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/scattered-clouds-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Clouds1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Clouds2.jpg')";
    con.innerHTML = "";
} else {
    con.innerHTML = current_condition;
} 
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
                
             
                desc.innerHTML = description;
                currentTemp.innerHTML = current_temp;
                highTemp.innerHTML = high_temp;
                lowTemp.innerHTML = low_temp;
                
                //Weather Background Footer//               
if(current_condition === "Snow"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/snow.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/snow-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Snow1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Snow2.jpg')";
    con.innerHTML = "";
    
} else if(current_condition === "Thunderstorm"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/thunderstorm.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/thunderstorm-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Thunderstorm1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Thundestorm.jpeg')";
    con.innerHTML = "";
    
} else if(current_condition === "Drizzle"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/shower.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/shower-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Drizzle1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Drizzle2.jpg')";
    con.innerHTML = "";
    
} else if(current_condition === "Rain"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/rain.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/rain-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Rain1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Rain2.jpeg')";
    con.innerHTML = "";
    
}else if(current_condition === "Mist" || current_condition === "Fog"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Haze1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Haze2.jpg')";
    con.innerHTML = "";
} else if( current_condition === "Smoke" || current_condition === "Haze"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Smoke1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Smoke2.jpg')";
    con.innerHTML = "";
} else if(current_condition === "Sand, dust whirls" || current_condition === "Sand" || current_condition === "Dust"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/WeatherIcon/Sand1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/WeatherIcon/Sand2.jpg')";
    con.innerHTML = "";
} else if(current_condition === "Volcanic ash"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage =  "URL('./img/WeatherIcon/VolcanicAsh1.jpg')";
    header2_img.style.backgroundImage =  "URL('./img/WeatherIcon/VolcanicAsh2.jpg')";
    con.innerHTML = "";
} else if(current_condition === "Squalls" || current_condition === "Tornado"){
     current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage =  "URL('./img/WeatherIcon/Tornado1.jpg')";
    header2_img.style.backgroundImage =  "URL('./img/WeatherIcon/Tornado2.jpg')";
    con.innerHTML = "";
} else if(current_condition === "Clear"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/clear-sky.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/clear-sky-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Clear1.jpeg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Clear2.jpg')";
    con.innerHTML = "";
   
} else if(current_condition === "Clouds"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/scattered-clouds.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/scattered-clouds-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Clouds1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Clouds2.jpg')";
    con.innerHTML = "";
} else {
    con.innerHTML = current_condition;
} 
                
//                insertWeather();
                
                //country = results[0].address_components[4].short_name;
            }
        } 
    }    