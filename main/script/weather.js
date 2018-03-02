
var current_conditionImg = document.getElementById("temperImg1");
var checkWeather_img = document.getElementById("checkWeather_img");
var home_containerImg = document.getElementById("home_container");
var header2_img = document.getElementById("header2");

var hatIcon = document.getElementById("hatIcon");
var shirtIcon = document.getElementById("shirtIcon");
var pantsIcon = document.getElementById("pantsIcon");
var shoesIcon = document.getElementById("shoesIcon");
var accessoriesIcon = document.getElementById("accessoriesIcon");

var hatP = document.getElementById("hatP");
var shirtP = document.getElementById("shirtP");
var pantsP = document.getElementById("pantsP");
var shoesP = document.getElementById("shoesP");
var accessoriesP = document.getElementById("accessoriesP");
var wearDiv1 = document.getElementById("wearDiv1");

function umbrellaWeather(){
   wearDiv1.style.display = "block"; 
   hatIcon.style.backgroundImage = "URL('./img/wearIcon/outerwear.png')";
   hatP.innerHTML = "Outerwear";    
                 
   shirtIcon.style.backgroundImage = "URL('./img/wearIcon/shirt-man.png')";
   shirtP.innerHTML = "Shirt";
                  
   pantsIcon.style.backgroundImage = "URL('./img/wearIcon/pants.png')";
   pantsP.innerHTML = "Pants";
               
   shoesIcon.style.backgroundImage = "URL('./img/wearIcon/shoes-man.png')";
   shoesP.innerHTML = "Shoes";
            
   accessoriesIcon.style.backgroundImage = "URL('./img/wearIcon/umbrella.png')";
   accessoriesP.innerHTML = "Umbrella";
             
}

function coldWeather(){
   wearDiv1.style.display = "block";
    
   hatIcon.style.backgroundImage = "URL('./img/wearIcon/outerwear.png')";
   hatP.innerHTML = "Outerwear";    
                 
   shirtIcon.style.backgroundImage = "URL('./img/wearIcon/sweater.png')";
   shirtP.innerHTML = "Sweater";
                  
   pantsIcon.style.backgroundImage = "URL('./img/wearIcon/pants.png')";
   pantsP.innerHTML = "Pants";
               
   shoesIcon.style.backgroundImage = "URL('./img/wearIcon/shoes-man.png')";
   shoesP.innerHTML = "Shoes";
            
   accessoriesIcon.style.backgroundImage = "URL('./img/wearIcon/accessories.png')";
   accessoriesP.innerHTML = "Accessories";
             
}

function hotWeather(){
   wearDiv1.style.display = "none";   
                 
   shirtIcon.style.backgroundImage = "URL('./img/wearIcon/shirt-man.png')";
   shirtP.innerHTML = "Shirt";
                  
   pantsIcon.style.backgroundImage = "URL('./img/wearIcon/bottomwear-shorts-man.png')";
   pantsP.innerHTML = "Bottomwear";
               
   shoesIcon.style.backgroundImage = "URL('./img/wearIcon/shoes-man.png')";
   shoesP.innerHTML = "Shoes";
            
   accessoriesIcon.style.backgroundImage = "URL('./img/wearIcon/accessories.png')";
   accessoriesP.innerHTML = "Accessories";
             
}




//current_temp




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
function FollowTempWear(){
  if(current_temp < 10){
   coldWeather();
  } else if (current_temp > 20) {
   hotWeather();   
  } else if (current_temp < 20 && current_temp > 10) {
   coldWeather();     
  }         
}                
                            
if(current_condition === "Snow"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/snow.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/snow-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Snow1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Snow2.jpg')";
    con.innerHTML = "";
    umbrellaWeather(); 
    snowWeatherInfo();
    
} else if(current_condition === "Thunderstorm"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/thunderstorm.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/thunderstorm-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Thunderstorm1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Thundestorm.jpeg')";
    con.innerHTML = "";
    umbrellaWeather(); 
    thunderstormWeatherInfo();
   
} else if(current_condition === "Drizzle"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/shower.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/shower-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Drizzle1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Drizzle2.jpg')";
    con.innerHTML = "";
    umbrellaWeather(); 
    drizzleWeatherInfo();
    
} else if(current_condition === "Rain"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/rain.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/rain-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Rain1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Rain2.jpeg')";
    con.innerHTML = "";
    umbrellaWeather(); 
    rainWeatherInfo();
    
}else if(current_condition === "Mist" || current_condition === "Fog"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Haze1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Haze2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    mistWeatherInfo();
    
} else if( current_condition === "Smoke" || current_condition === "Haze"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Smoke1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Smoke2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    hazeWeatherInfo();
    
} else if(current_condition === "Sand, dust whirls" || current_condition === "Sand" || current_condition === "Dust"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/WeatherIcon/Sand1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/WeatherIcon/Sand2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    sandWeatherInfo();
    
} else if(current_condition === "Volcanic ash"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage =  "URL('./img/WeatherIcon/VolcanicAsh1.jpg')";
    header2_img.style.backgroundImage =  "URL('./img/WeatherIcon/VolcanicAsh2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    volcanicAshWeatherInfo();
    
} else if(current_condition === "Squalls" || current_condition === "Tornado"){
     current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage =  "URL('./img/WeatherIcon/Tornado1.jpg')";
    header2_img.style.backgroundImage =  "URL('./img/WeatherIcon/Tornado2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    squallsWeatherInfo();
    
} else if(current_condition === "Clear"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/clear-sky.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/clear-sky-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Clear1.jpeg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Clear2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    clearWeatherInfo();
   
} else if(current_condition === "Clouds"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/scattered-clouds.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/scattered-clouds-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Clouds1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Clouds2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    cloudsWeatherInfo();
    
} else {
    FollowTempWear();
    con.innerHTML = current_condition;
} 
// End               
                
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
function FollowTempWear(){
  if(current_temp < 10){
   coldWeather();
  } else if (current_temp > 20) {
   hotWeather();   
  } else if (current_temp < 20 && current_temp > 10) {
   coldWeather();     
  }         
}                
                            
if(current_condition === "Snow"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/snow.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/snow-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Snow1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Snow2.jpg')";
    con.innerHTML = "";
    umbrellaWeather();  
    snowWeatherInfo();
    
} else if(current_condition === "Thunderstorm"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/thunderstorm.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/thunderstorm-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Thunderstorm1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Thundestorm.jpeg')";
    con.innerHTML = "";
    umbrellaWeather(); 
    thunderstormWeatherInfo();
   
} else if(current_condition === "Drizzle"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/shower.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/shower-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Drizzle1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Drizzle2.jpg')";
    con.innerHTML = "";
    umbrellaWeather(); 
    drizzleWeatherInfo();
    
} else if(current_condition === "Rain"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/rain.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/rain-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Rain1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Rain2.jpeg')";
    con.innerHTML = "";
    umbrellaWeather(); 
    rainWeatherInfo();
    
}else if(current_condition === "Mist" || current_condition === "Fog"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Haze1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Haze2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    mistWeatherInfo();
    
} else if( current_condition === "Smoke" || current_condition === "Haze"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Smoke1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Smoke2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    hazeWeatherInfo();
    
} else if(current_condition === "Sand, dust whirls" || current_condition === "Sand" || current_condition === "Dust"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/WeatherIcon/Sand1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/WeatherIcon/Sand2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    sandWeatherInfo();
    
} else if(current_condition === "Volcanic ash"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage =  "URL('./img/WeatherIcon/VolcanicAsh1.jpg')";
    header2_img.style.backgroundImage =  "URL('./img/WeatherIcon/VolcanicAsh2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    volcanicAshWeatherInfo();
    
} else if(current_condition === "Squalls" || current_condition === "Tornado"){
     current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage =  "URL('./img/WeatherIcon/Tornado1.jpg')";
    header2_img.style.backgroundImage =  "URL('./img/WeatherIcon/Tornado2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    squallsWeatherInfo();
    
} else if(current_condition === "Clear"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/clear-sky.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/clear-sky-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Clear1.jpeg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Clear2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    clearWeatherInfo();
   
} else if(current_condition === "Clouds"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/scattered-clouds.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/scattered-clouds-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Clouds1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Clouds2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    cloudsWeatherInfo();
    
} else {
    FollowTempWear();
    con.innerHTML = current_condition;
} 
// End     
   
                
                
                
                
//                insertWeather();
                
                //country = results[0].address_components[4].short_name;
            }
        } 
    } 



//weather info

var suggestion_show = document.getElementById("suggestion_show");
var suggestion_left = document.getElementById("suggestion_left");
var suggestion_right = document.getElementById("suggestion_right");
var suggestion_p = document.getElementById("suggestion_p");
var suggestion_h1 = document.getElementById("suggestion_h1");
var learnWeater = document.getElementById("learnWeater");

//weather info _ haze&smoke 
function hazeWeatherInfo(){
    
learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Haze");
});       

var num=0;
    
var weatherInfo = ["Haze is traditionally an atmospheric phenomenon in which dust, smoke, and other dry particulates obscure the clarity of the sky. The World Meteorological Organization manual of codes includes a classification of horizontal obscuration into categories of fog, ice fog, steam fog, mist, haze, smoke, volcanic ash, dust, sand, and snow. Sources for haze particles include farming (ploughing in dry weather), traffic, industry, and wildfires.", "Seen from afar (e.g. an approaching airplane) and depending on the direction of view with respect to the Sun, haze may appear brownish or bluish, while mist tends to be bluish grey. Whereas haze often is thought of as a phenomenon of dry air, mist formation is a phenomenon of humid air. However, haze particles may act as condensation nuclei for the subsequent formation of mist droplets; such forms of haze are known as wet haze.", "In meteorological literature, the word haze is generally used to denote visibility-reducing aerosols of the wet type. Such aerosols commonly arise from complex chemical reactions that occur as sulfur dioxide gases emitted during combustion are converted into small droplets of sulfuric acid. The reactions are enhanced in the presence of sunlight, high relative humidity, and stagnant air flow. A small component of wet-haze aerosols appear to be derived from compounds released by trees, such as terpenes. For all these reasons, wet haze tends to be primarily a warm-season phenomenon." ];
    
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/haze0.png ')"; 

suggestion_h1.innerHTML = "The Weather is Terrible Today"
suggestion_p.innerHTML = weatherInfo[0]     

//right    
suggestion_right.addEventListener("click", function(){ 

num = num + 1; 
      
if (num > 2 ){  
num=0;
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/haze" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/haze" + num + ".png ')"; 
} 

suggestion_p.innerHTML = weatherInfo[num]

});
        
//left
suggestion_left.addEventListener("click", function(){  

num= num - 1;
   
if (num < 0 ){  
num=2;
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/haze" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/haze" + num + ".png ')"; 
} 

suggestion_p.innerHTML = weatherInfo[num]

});
}



//weather info _ snow
function snowWeatherInfo(){

learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Snow");
});      
    
var num=0;
//3    
var weatherInfo = ["Snow develops in clouds that themselves are part of a larger weather system. The physics of snow crystal development in clouds results from a complex set of variables that include moisture content and temperatures. The resulting shapes of the falling and fallen crystals can be classified into a number of basic shapes and combinations, thereof. Occasionally, some plate-like, dendritic and stellar-shaped snowflakes can form under clear sky with a very cold temperature inversion present.", "Snow clouds usually occur in the context of larger weather systems, the most important of which is the low pressure area, which typically incorporate warm and cold fronts as part of their circulation. Two additional and locally productive sources of snow are lake-effect (also sea-effect) storms and elevation effects, especially in mountains.", "Mid-latitude cyclones are low pressure areas which are capable of producing anything from cloudiness and mild snow storms to heavy blizzards. During a hemisphere's fall, winter, and spring, the atmosphere over continents can be cold enough through the depth of the troposphere to cause snowfall. In the Northern Hemisphere, the northern side of the low pressure area produces the most snow." ];
//1    
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/snow0.png ')"; 
//1    
suggestion_h1.innerHTML = "It was Beginning to Snow"
suggestion_p.innerHTML = weatherInfo[0]     

//right    
suggestion_right.addEventListener("click", function(){ 
num = num + 1; 
if (num > 2 ){  
num=0;
//2    
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/snow" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/snow" + num + ".png ')"; 
} 
    
suggestion_p.innerHTML = weatherInfo[num]
});
     
//left
suggestion_left.addEventListener("click", function(){  
num= num - 1;
if (num < 0 ){  
num=2;
//2   
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/snow" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/snow" + num + ".png ')"; 
} 

suggestion_p.innerHTML = weatherInfo[num]
});
}

//weather info _ Thunderstorm
function thunderstormWeatherInfo(){

 learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Thunderstorm");
});  
    
var num=0;
    
var weatherInfo = ["A thunderstorm, also known as an electrical storm, lightning storm, or thundershower, is a storm characterized by the presence of lightning and its acoustic effect on the Earth's atmosphere, known as thunder. Thunderstorms occur in association with a type of cloud known as a cumulonimbus. They are usually accompanied by strong winds, heavy rain, and sometimes snow, sleet, hail, or, in contrast, no precipitation at all. ", "Thunderstorms may line up in a series or become a rainband, known as a squall line. Strong or severe thunderstorms, known as supercells, rotate as do cyclones. While most thunderstorms move with the mean wind flow through the layer of the troposphere that they occupy, vertical wind shear sometimes causes a deviation in their course at a right angle to the wind shear direction.", "Any precipitation falls the long distance through the clouds towards the Earth's surface. As the droplets fall, they collide with other droplets and become larger. The falling droplets create a downdraft as it pulls cold air with it, and this cold air spreads out at the Earth's surface, occasionally causing strong winds that are commonly associated with thunderstorms." ];
  
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/thunderstorm0.png ')"; 
    
suggestion_h1.innerHTML = "Be Careful When You Go Out"
suggestion_p.innerHTML = weatherInfo[0]     
    
suggestion_right.addEventListener("click", function(){ 
num = num + 1; 
if (num > 2 ){  
num=0;
   
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/thunderstorm" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/thunderstorm" + num + ".png ')"; 
} 
    
suggestion_p.innerHTML = weatherInfo[num]
});
 
suggestion_left.addEventListener("click", function(){  
num= num - 1;
if (num < 0 ){  
num=2;
  
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/thunderstorm" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/thunderstorm" + num + ".png ')"; 
} 

suggestion_p.innerHTML = weatherInfo[num]
});
}

//weather info _ drizzle

function drizzleWeatherInfo(){

 learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Drizzle");
});     
    
var num=0;
    
var weatherInfo = ["Drizzle is a light liquid precipitation consisting of liquid water drops smaller than those of rain – generally smaller than 0.5 mm (0.02 in) in diameter. Drizzle is normally produced by low stratiform and stratocumulus clouds. Precipitation rates from drizzle are on the order of a millimetre per day or less at the ground. Owing to the small size of drizzle drops, under many circumstances drizzle largely evaporates before reaching the surface and so may be undetected by observers on the ground.", "While most drizzle has only a minor immediate impact upon humans, freezing drizzle can lead to treacherous conditions. Freezing drizzle occurs when supercooled drizzle drops land on a surface whose temperature is below freezing. These drops immediately freeze upon impact, leading to the buildup of sheet ice (sometimes called black ice) on the surface of roads.", "Drizzle tends to be the most frequent form of precipitation over large areas of the world's oceans, particularly in the colder regions of the subtropics. These regions are dominated by shallow marine stratocumulus and trade wind cumulus clouds, which exist entirely within the marine boundary layer. Despite the low rates of surface accumulation, it has become apparent that drizzle actually exerts a major influence over the cloud structure, coverage, and radiative properties in these regions." ];
   
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/drizzle0.png ')"; 
  
suggestion_h1.innerHTML = "The Weather is Not Bad"
suggestion_p.innerHTML = weatherInfo[0]     
//right    
suggestion_right.addEventListener("click", function(){ 
num = num + 1; 
if (num > 2 ){  
num=0;
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/drizzle" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/drizzle" + num + ".png ')"; 
} 
suggestion_p.innerHTML = weatherInfo[num]
}); 
//left
suggestion_left.addEventListener("click", function(){  
num= num - 1;
if (num < 0 ){  
num=2;
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/drizzle" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/drizzle" + num + ".png ')"; 
} 
suggestion_p.innerHTML = weatherInfo[num]
});
}


//weather info _ rain
function rainWeatherInfo(){
    
 learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Rain");
});     

var num=0;
  
var weatherInfo = ["Rain is liquid water in the form of droplets that have condensed from atmospheric water vapor and then becomes heavy enough to fall under gravity. Rain is a major component of the water cycle and is responsible for depositing most of the fresh water on the Earth. It provides suitable conditions for many types of ecosystems, as well as water for hydroelectric power plants and crop irrigation.", "The major cause of rain production is moisture moving along three-dimensional zones of temperature and moisture contrasts known as weather fronts. If enough moisture and upward motion is present, precipitation falls from convective clouds (those with strong upward vertical motion) such as cumulonimbus (thunder clouds) which can organize into narrow rainbands.", "In mountainous areas, heavy precipitation is possible where upslope flow is maximized within windward sides of the terrain at elevation which forces moist air to condense and fall out as rainfall along the sides of mountains. On the leeward side of mountains, desert climates can exist due to the dry air caused by downslope flow which causes heating and drying of the air mass. The movement of the monsoon trough, or intertropical convergence zone, brings rainy seasons to savannah climes." ];

suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/rain0.png ')"; 
 
suggestion_h1.innerHTML = "Don't Forget Your Umbrella"
suggestion_p.innerHTML = weatherInfo[0]     

//right    
suggestion_right.addEventListener("click", function(){ 
num = num + 1; 
if (num > 2 ){  
num=0;
   
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/rain" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/rain" + num + ".png ')"; 
} 
    
suggestion_p.innerHTML = weatherInfo[num]
});
     
//left
suggestion_left.addEventListener("click", function(){  
num= num - 1;
if (num < 0 ){  
num=2;
   
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/rain" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/rain" + num + ".png ')"; 
} 

suggestion_p.innerHTML = weatherInfo[num]
});
}

//weather info _ Mist
function mistWeatherInfo(){

 learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Mist");
});      

var num=0;
   
var weatherInfo = ["Mist is a phenomenon caused by small droplets of water suspended in air. Physically, it is an example of a dispersion. It is most commonly seen where warm, moist air meets sudden cooling, such as in exhaled air in the winter, or when throwing water onto the hot stove of a sauna.", "It can be created artificially with aerosol canisters if the humidity and temperature conditions are right. It can also occur as part of natural weather, when humid air cools rapidly, for example when the air comes into contact with surfaces that are much cooler than the air.", "The formation of mist, as of other suspensions, is greatly aided by the presence of nucleation sites on which the suspended water phase can congeal. Thus even such unusual sources as small particulates from volcanic eruptions, releases of strongly polar gases, and even the magnetospheric ions associated with polar lights can in right conditions trigger the formation of mist." ];
   
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/mist0.png ')"; 
  
suggestion_h1.innerHTML = "Be Careful Driving in Fog"
suggestion_p.innerHTML = weatherInfo[0]     

//right    
suggestion_right.addEventListener("click", function(){ 
num = num + 1; 
if (num > 2 ){  
num=0;
    
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/mist" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/mist" + num + ".png ')"; 
} 
    
suggestion_p.innerHTML = weatherInfo[num]
});
     
//left
suggestion_left.addEventListener("click", function(){  
num= num - 1;
if (num < 0 ){  
num=2;
 
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/mist" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/mist" + num + ".png ')"; 
} 

suggestion_p.innerHTML = weatherInfo[num]
});
}

//weather info _ Sand, dust whirls
function sandWeatherInfo(){
    
learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Dust_storm");
});     

var num=0;
   
var weatherInfo = ["A dust storm is a meteorological phenomenon common in arid and semi-arid regions. Dust storms arise when a gust front or other strong wind blows loose sand and dirt from a dry surface. Fine particles are transported by saltation and suspension, a process that moves soil from one place and deposits it in another.", "Drylands around North Africa and the Arabian peninsula are the main terrestrial sources of airborne dust. Also with some contributions from Iran, Pakistan and India into the Arabian Sea, and China's significant storms deposit dust in the Pacific. It has been argued that recently, poor management of the Earth's drylands, such as neglecting the fallow system, are increasing dust storms size and frequency from desert margins and changing both the local and global climate, and also impacting local economies.", "The term sandstorm is used most often in the context of desert sandstorms, especially in the Sahara Desert, or places where sand is a more prevalent soil type than dirt or rock, when, in addition to fine particles obscuring visibility, a considerable amount of larger sand particles are blown closer to the surface." ];
    
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/sdWhirls0.png ')"; 
 
suggestion_h1.innerHTML = "The Weather is Bad for Going Out"
suggestion_p.innerHTML = weatherInfo[0]     

//right    
suggestion_right.addEventListener("click", function(){ 
num = num + 1; 
if (num > 2 ){  
num=0;
   
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/sdWhirls" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/sdWhirls" + num + ".png ')"; 
} 
    
suggestion_p.innerHTML = weatherInfo[num]
});
     
//left
suggestion_left.addEventListener("click", function(){  
num= num - 1;
if (num < 0 ){  
num=2;
   
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/sdWhirls" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/sdWhirls" + num + ".png ')"; 
} 

suggestion_p.innerHTML = weatherInfo[num]
});
}


//weather info _ VolcanicAsh
function volcanicAshWeatherInfo(){
    
learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Volcanic_ash");
});     

var num=0;
  
var weatherInfo = ["Volcanic ash consists of fragments of pulverized rock, minerals and volcanic glass, created during volcanic eruptions and measuring less than 2 mm in diameter. The term volcanic ash is also often loosely used to refer to all explosive eruption products, including particles larger than 2mm. Volcanic ash is formed during explosive volcanic eruptions when dissolved gases in magma expand and escape violently into the atmosphere.", "The force of the escaping gas shatters the magma and propels it into the atmosphere where it solidifies into fragments of volcanic rock and glass. Ash is also produced when magma comes into contact with water during phreatomagmatic eruptions, causing the water to explosively flash to steam leading to shattering of magma. Once in the air, ash is transported by wind up to thousands of kilometers away.", "Due to its wide dispersal, ash can have a number of impacts on society, including human and animal health, disruption to aviation, disruption to critical infrastructure (e.g., electric power supply systems, telecommunications, water and waste-water networks, transportation), primary industries (e.g., agriculture), buildings and structures." ];
    
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/volcanicAsh0.png ')"; 
    
suggestion_h1.innerHTML = "You Must Run Away"
suggestion_p.innerHTML = weatherInfo[0]     

//right    
suggestion_right.addEventListener("click", function(){ 
num = num + 1; 
if (num > 2 ){  
num=0;
   
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/volcanicAsh" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/volcanicAsh" + num + ".png ')"; 
} 
    
suggestion_p.innerHTML = weatherInfo[num]
});
     
//left
suggestion_left.addEventListener("click", function(){  
num= num - 1;
if (num < 0 ){  
num=2;
  
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/volcanicAsh" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/volcanicAsh" + num + ".png ')"; 
} 

suggestion_p.innerHTML = weatherInfo[num]
});
}


//weather info _ squalls
function squallsWeatherInfo(){

learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Squall");
});     
    
var num=0;
     
var weatherInfo = ["A squall is a sudden, sharp increase in wind speed that is usually associated with active weather, such as rain showers, thunderstorms, or heavy snow. Squalls refer to an increase in the sustained winds over a short time interval, as there may be higher gusts during a squall event. They usually occur in a region of strong mid-level height falls.", "squall is used to refer to a sudden wind-speed increase, both historically and in the present day. In 1962 the World Meteorological Organization defined that to be classified as a squall, the wind must increase at least 8 m/s and must attain a top speed of at least 11 m/s, lasting at least one minute in duration.", "A tornado is a rapidly rotating column of air that is in contact with both the surface of the Earth and a cumulonimbus cloud or, in rare cases, the base of a cumulus cloud. They are often referred to as twisters, whirlwinds or cyclones, although the word cyclone is used in meteorology to name a weather system with a low-pressure area in the center around which winds blow counterclockwise." ];
     
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/squalls0.png ')"; 
    
suggestion_h1.innerHTML = "Be Ready to Avoid the Disaster."
suggestion_p.innerHTML = weatherInfo[0]     

//right    
suggestion_right.addEventListener("click", function(){ 
num = num + 1; 
if (num > 2 ){  
num=0;
  
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/squalls" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/squalls" + num + ".png ')"; 
} 
    
suggestion_p.innerHTML = weatherInfo[num]
});
     
//left
suggestion_left.addEventListener("click", function(){  
num= num - 1;
if (num < 0 ){  
num=2;
  
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/squalls" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/squalls" + num + ".png ')"; 
} 

suggestion_p.innerHTML = weatherInfo[num]
});
}


//weather info _ clear
function clearWeatherInfo(){
    
learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Travel");
});    

var num=0;
  
var weatherInfo = ["You can travel. Travel may be local, regional, national (domestic) or international. In some countries, non-local internal travel may require an internal passport, while international travel typically requires a passport and visa. A trip may also be part of a round-trip, which is a particular type of travel whereby a person moves from one location to another and returns.", "Authorities emphasize the importance of taking precautions to ensure travel safety. When traveling abroad, the odds favor a safe and incident-free trip, however, travelers can be subject to difficulties, crime and violence.", "Some safety considerations include being aware of one's surroundings, avoiding being the target of a crime, leaving copies of one's passport and itinerary information with trusted people, obtaining medical insurance valid in the country being visited and registering with one's national embassy when arriving in a foreign country." ];
    
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/clear0.png ')"; 
//1    
suggestion_h1.innerHTML = "Sunny Weather is Good Today. "
suggestion_p.innerHTML = weatherInfo[0]     

//right    
suggestion_right.addEventListener("click", function(){ 
num = num + 1; 
if (num > 2 ){  
num=0;
   
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/clear" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/clear" + num + ".png ')"; 
} 
    
suggestion_p.innerHTML = weatherInfo[num]
});
     
//left
suggestion_left.addEventListener("click", function(){  
num= num - 1;
if (num < 0 ){  
num=2;
   
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/clear" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/clear" + num + ".png ')"; 
} 

suggestion_p.innerHTML = weatherInfo[num]
});
}



//weather info _ Clouds
function cloudsWeatherInfo(){
      
learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Cloud");
});
    
var num=0;
  
var weatherInfo = ["In meteorology, a cloud is an aerosol comprising a visible mass of minute liquid droplets, frozen crystals, or particles suspended in the atmosphere above the surface of a planetary body. The droplets and crystals may be made of water or various chemicals.", "Two cirriform clouds that form higher up in the stratosphere and mesosphere have common names for their main types. They are seen infrequently, mostly in the polar regions of Earth. Clouds have been observed in the atmospheres of other planets and moons in the Solar System and beyond. ", "Taken as a whole, homospheric clouds can be cross-classified by form and level to derive the ten tropospheric genera and the two additional major types above the troposphere." ];
    
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/clouds0.png ')"; 
   
suggestion_h1.innerHTML = "It is a Nice Day"
suggestion_p.innerHTML = weatherInfo[0]     

//right    
suggestion_right.addEventListener("click", function(){ 
num = num + 1; 
if (num > 2 ){  
num=0;
    
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/clouds" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/clouds" + num + ".png ')"; 
} 
    
suggestion_p.innerHTML = weatherInfo[num]
});
     
//left
suggestion_left.addEventListener("click", function(){  
num= num - 1;
if (num < 0 ){  
num=2;
  
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/clouds" + num + ".png ')"; 
} else {
suggestion_show.style.backgroundImage = "url('./img/WeatherSuggestion/clouds" + num + ".png ')"; 
} 

suggestion_p.innerHTML = weatherInfo[num]
});
}