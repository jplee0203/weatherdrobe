
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
                
                                
                
                //ben//               
if(current_condition === "Snow"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/snow.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/snow-text.svg')";
    home_containerImg.style.backgroundImage = "url(https://c1.staticflickr.com/6/5786/30797295081_52c5646db8_b.jpg)";
    header2_img.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2017/12/09/16/41/snow-man-3008179_1280.jpg)";
    con.innerHTML = "";
    
} else if(current_condition === "Thunderstorm"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/thunderstorm.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/thunderstorm-text.svg')";
    home_containerImg.style.backgroundImage = "url(https://coclouds.com/wp-content/uploads/2014/11/distant-thunderstorm-sunny-evening-2014-08-06.jpg)";
    header2_img.style.backgroundImage = "url(https://images.pexels.com/photos/268782/pexels-photo-268782.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb)";
    con.innerHTML = "";
    
} else if(current_condition === "Drizzle"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/shower.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/shower-text.svg')";
    home_containerImg.style.backgroundImage = "url(https://c.pxhere.com/photos/8b/3c/fog_morning_sunrise_mood_landscape_meadow_tree-751186.jpg!d)";
    header2_img.style.backgroundImage = "url(https://www.publicdomainpictures.net/pictures/160000/velka/gouttes-de-pluie-sur-vitrage.jpg)";
    con.innerHTML = "";
    
} else if(current_condition === "Rain"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/rain.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/rain-text.svg')";
    home_containerImg.style.backgroundImage = "url(https://www.publicdomainpictures.net/pictures/70000/velka/view-to-rain-from-wooden-veranda.jpg)";
    header2_img.style.backgroundImage = "url(https://static.pexels.com/photos/110874/pexels-photo-110874.jpeg)";
    con.innerHTML = "";
    
} else if(current_condition === "Mist" || current_condition === "Smoke" || current_condition === "Haze" || current_condition === "Sand, dust whirls" || current_condition === "Fog" || current_condition === "Sand" || current_condition === "Dust" || current_condition === "Volcanic ash" || current_condition === "Squalls" || current_condition === "Tornado"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/en/c/c1/December_Fog_01_edit_Fcb981.jpg)";
    header2_img.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/4/4b/Marine_Fog_Pattern_1_crop.jpg)";
    con.innerHTML = "";
} else if(current_condition === "Clear"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/clear-sky.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/clear-sky-text.svg')";
    home_containerImg.style.backgroundImage = "url(https://static.pexels.com/photos/37728/pexels-photo-37728.jpeg)";
    header2_img.style.backgroundImage = "url(https://static.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg)";
    con.innerHTML = "";
   
} else if(current_condition === "Clouds"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/scattered-clouds.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/scattered-clouds-text.svg')";
    home_containerImg.style.backgroundImage = "url(https://static.pexels.com/photos/19670/pexels-photo.jpg)";
    header2_img.style.backgroundImage = "url(https://pixnio.com/free-images/2017/02/22/2017-02-22-14-21-18-900x600.jpg)";
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
                
                //ben//               
if(current_condition === "Snow"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/snow.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/snow-text.svg')";
    home_containerImg.style.backgroundImage = "url(https://c1.staticflickr.com/6/5786/30797295081_52c5646db8_b.jpg)";
    header2_img.style.backgroundImage = "url(https://cdn.pixabay.com/photo/2017/12/09/16/41/snow-man-3008179_1280.jpg)";
    con.innerHTML = "";
    
} else if(current_condition === "Thunderstorm"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/thunderstorm.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/thunderstorm-text.svg')";
    home_containerImg.style.backgroundImage = "url(https://coclouds.com/wp-content/uploads/2014/11/distant-thunderstorm-sunny-evening-2014-08-06.jpg)";
    header2_img.style.backgroundImage = "url(https://images.pexels.com/photos/268782/pexels-photo-268782.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb)";
    con.innerHTML = "";
    
} else if(current_condition === "Drizzle"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/shower.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/shower-text.svg')";
    home_containerImg.style.backgroundImage = "url(https://c.pxhere.com/photos/8b/3c/fog_morning_sunrise_mood_landscape_meadow_tree-751186.jpg!d)";
    header2_img.style.backgroundImage = "url(https://www.publicdomainpictures.net/pictures/160000/velka/gouttes-de-pluie-sur-vitrage.jpg)";
    con.innerHTML = "";
    
} else if(current_condition === "Rain"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/rain.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/rain-text.svg')";
    home_containerImg.style.backgroundImage = "url(https://www.publicdomainpictures.net/pictures/70000/velka/view-to-rain-from-wooden-veranda.jpg)";
    header2_img.style.backgroundImage = "url(https://static.pexels.com/photos/110874/pexels-photo-110874.jpeg)";
    con.innerHTML = "";
    
} else if(current_condition === "Mist" || current_condition === "Smoke" || current_condition === "Haze" || current_condition === "Sand, dust whirls" || current_condition === "Fog" || current_condition === "Sand" || current_condition === "Dust" || current_condition === "Volcanic ash" || current_condition === "Squalls" || current_condition === "Tornado"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/en/c/c1/December_Fog_01_edit_Fcb981.jpg)";
    header2_img.style.backgroundImage = "url(https://upload.wikimedia.org/wikipedia/commons/4/4b/Marine_Fog_Pattern_1_crop.jpg)";
    con.innerHTML = "";
} else if(current_condition === "Clear"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/clear-sky.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/clear-sky-text.svg')";
    home_containerImg.style.backgroundImage = "url(https://static.pexels.com/photos/37728/pexels-photo-37728.jpeg)";
    header2_img.style.backgroundImage = "url(https://static.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg)";
    con.innerHTML = "";
   
} else if(current_condition === "Clouds"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/scattered-clouds.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/scattered-clouds-text.svg')";
    home_containerImg.style.backgroundImage = "url(https://static.pexels.com/photos/19670/pexels-photo.jpg)";
    header2_img.style.backgroundImage = "url(https://pixnio.com/free-images/2017/02/22/2017-02-22-14-21-18-900x600.jpg)";
    con.innerHTML = "";
} else {
    con.innerHTML = current_condition;
} 
                
//                insertWeather();
                
                //country = results[0].address_components[4].short_name;
            }
        } 
    }    