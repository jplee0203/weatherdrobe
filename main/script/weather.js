
var current_conditionImg = document.getElementById("temperImg1");
var checkWeather_img = document.getElementById("checkWeather_img");
var home_containerImg = document.getElementById("home_container");
var header2_img = document.getElementById("header2");

var outwearIcon = document.getElementById("outwearIcon");
var shirtIcon = document.getElementById("shirtIcon");
var pantsIcon = document.getElementById("pantsIcon");
var shoesIcon = document.getElementById("shoesIcon");
var accessoriesIcon = document.getElementById("accessoriesIcon");

var outwearP = document.getElementById("outwearP");
var shirtP = document.getElementById("shirtP");
var pantsP = document.getElementById("pantsP");
var shoesP = document.getElementById("shoesP");
var accessoriesP = document.getElementById("accessoriesP");
var wearDiv1 = document.getElementById("wearDiv1");
var wearDiv2 = document.getElementById("wearDiv2");
var wearDiv3 = document.getElementById("wearDiv3");
var wearDiv4 = document.getElementById("wearDiv4");
var wearDiv5 = document.getElementById("wearDiv5");

var toggleBut = document.getElementById("toggleMF");
var toggleBut2 = document.getElementById("toggleMF2");
var genderCase = 0;
var shirtIcon2= document.getElementById("shirtIcon_Future");
var shoesIcon2= document.getElementById("shoesIcon_Future");  
var leanMore_weather = "https://github.com/jplee0203/weatherdrobe";
var leanMore_travel = "https://github.com/jplee0203/weatherdrobe";

//var city;
var country;

var searchInp = document.getElementById("searchInp");    
var city = searchInp.value;

toggleBut.addEventListener("click", function(){  

 
 if(genderCase == 1){
     if(toggleBut.checked) { shoesIcon.style.backgroundImage = "URL('./img/wearIcon/shoes-woman.png')"
    } else { shoesIcon.style.backgroundImage = "URL('./img/wearIcon/shoes-man.png')"; }
     
 } else if (genderCase == 2) {
      if(toggleBut.checked) { shoesIcon.style.backgroundImage = "URL('./img/wearIcon/shoes-woman.png')";
             shirtIcon.style.backgroundImage = "URL('./img/wearIcon/shirts-woman.png')";
    } else { shoesIcon.style.backgroundImage = "URL('./img/wearIcon/shoes-man.png')";
                              shirtIcon.style.backgroundImage = "URL('./img/wearIcon/shirt-man.png')";
           }
     
 } 

});

//toggleBut2.addEventListener("click", function(){  
//
//     if(genderCase == 1){
//     if(toggleBut2.checked) { shoesIcon2.style.backgroundImage = "URL('./img/wearIcon/shoes-woman.png')"
//    } else { shoesIcon2.style.backgroundImage = "URL('./img/wearIcon/shoes-man.png')"; }
//     
// } else if (genderCase == 2) {
//      if(toggleBut2.checked) { shoesIcon.style.backgroundImage = "URL('./img/wearIcon/shoes-woman.png')";
//             shirtIcon2.style.backgroundImage = "URL('./img/wearIcon/shirts-woman.png')";
//    } else { shoesIcon2.style.backgroundImage = "URL('./img/wearIcon/shoes-man.png')";
//             shirtIcon2.style.backgroundImage = "URL('./img/wearIcon/shirt-man.png')";
//           }
//     
// } 
//
//}); 

// shirts && shoes 
function umbrellaWeather(){
   genderCase = 2;
   wearDiv1.style.display = "block"; 
    wearDiv2.style.top = "20%";
    wearDiv3.style.top = "40%";
    wearDiv4.style.top = "60%";
    wearDiv5.style.top = "80%";    

    
   outwearIcon.style.backgroundImage = "URL('./img/wearIcon/outerwear.png')";
   outwearP.innerHTML = "Outerwear";    
                 
   shirtIcon.style.backgroundImage = "URL('./img/wearIcon/shirts-woman.png')";
   shirtP.innerHTML = "Shirt";
                  
   pantsIcon.style.backgroundImage = "URL('./img/wearIcon/pants.png')";
   pantsP.innerHTML = "Pants";
               
   shoesIcon.style.backgroundImage = "URL('./img/wearIcon/shoes-woman.png')";
   shoesP.innerHTML = "Shoes";
            
   accessoriesIcon.style.backgroundImage = "URL('./img/wearIcon/umbrella.png')";
   accessoriesP.innerHTML = "Umbrella";
                
}

// shoes 
function coldWeather(){
    
  genderCase = 1;    
   wearDiv1.style.display = "block";
    wearDiv2.style.top = "20%";
    wearDiv3.style.top = "40%";
    wearDiv4.style.top = "60%";
    wearDiv5.style.top = "80%";
    
   outwearIcon.style.backgroundImage = "URL('./img/wearIcon/outerwear.png')";
   outwearP.innerHTML = "Outerwear";    
                 
   shirtIcon.style.backgroundImage = "URL('./img/wearIcon/sweater.png')";
   shirtP.innerHTML = "Sweater";
                  
   pantsIcon.style.backgroundImage = "URL('./img/wearIcon/pants.png')";
   pantsP.innerHTML = "Pants";
               
   shoesIcon.style.backgroundImage = "URL('./img/wearIcon/shoes-woman.png')";
   shoesP.innerHTML = "Shoes";
            
   accessoriesIcon.style.backgroundImage = "URL('./img/wearIcon/accessories.png')";
   accessoriesP.innerHTML = "Accessories";
              
}

// shirts shoes
function hotWeather(){
     genderCase = 2;
   wearDiv1.style.display = "none"; 
    wearDiv2.style.top = 0;
    wearDiv3.style.top = "20%";
    wearDiv4.style.top = "40%";
    wearDiv5.style.top = "60%";
                 
   shirtIcon.style.backgroundImage = "URL('./img/wearIcon/shirts-woman.png')";
   shirtP.innerHTML = "Shirt";
                  
   pantsIcon.style.backgroundImage = "URL('./img/wearIcon/bottomwear-shorts-man.png')";
   pantsP.innerHTML = "Bottomwear";
               
   shoesIcon.style.backgroundImage = "URL('./img/wearIcon/shoes-woman.png')";
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
            
            //var country;
            //var city;
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
                
                var geocoder = new google.maps.Geocoder;

              if (LatLng.lat != 0 && LatLng.lng != 0) {
                geocodeLatLng(geocoder);
            }

                
                //initMap();           
            }    
            
    
//      function initMap() {
//        
//            var geocoder = new google.maps.Geocoder;
//
//              if (LatLng.lat != 0 && LatLng.lng != 0) {
//                geocodeLatLng(geocoder);
//            }
//
//      }
        
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
        
/*
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
*/        
        
    //reverse geocode to get location info form LatLng  
    function geocodeLatLng(geocoder) {
        
        console.log("geo");
        
        geocoder.geocode({'location': LatLng}, function(results, status) {
          if (status === 'OK') {
          
            if (results[1]) {
                
                console.log(results);
                
                

                country = results[5].address_components[0].long_name;
                
                city = results[0].address_components[2].long_name;

                console.log(city);
                
                var searchInp = document.getElementById("searchInp");
                
                searchInp.placeholder = "Current location is " + city;
        
//                insertSearch();
                
                //getWeather();
                readWeather();
                
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
    coldWeather();
    snowWeatherInfo();
    travelSnowInfo();
    leanMore_weather = "https://www.google.ca/search?q=Snow&rlz=1C1CHBF_enCA750CA750&oq=Snow&aqs=chrome..69i57j69i61j35i39j0l3.576j0j7&sourceid=chrome&ie=UTF-8";
    
} else if(current_condition === "Thunderstorm"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/thunderstorm.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/thunderstorm-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Thunderstorm1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Thundestorm.jpeg')";
    con.innerHTML = "";
    umbrellaWeather(); 
    thunderstormWeatherInfo();
    travelThunderstormInfo();
    leanMore_weather = "https://www.google.ca/search?q=Thunderstorm&rlz=1C1CHBF_enCA750CA750&oq=Thunderstorm&aqs=chrome..69i57j35i39j0l4.634j0j9&sourceid=chrome&ie=UTF-8";
   
} else if(current_condition === "Drizzle"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/shower.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/shower-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Drizzle1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Drizzle2.jpg')";
    con.innerHTML = "";
    umbrellaWeather(); 
    drizzleWeatherInfo();
    travelDrizzleInfo();
    leanMore_weather = "https://www.google.ca/search?q=Drizzle&rlz=1C1CHBF_enCA750CA750&oq=Drizzle&aqs=chrome..69i57j0l5.4147j0j9&sourceid=chrome&ie=UTF-8";
    
} else if(current_condition === "Rain"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/rain.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/rain-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Rain1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Rain2.jpeg')";
    con.innerHTML = "";
    umbrellaWeather(); 
    rainWeatherInfo();
    travelRainInfo();
    leanMore_weather = "https://www.google.ca/search?q=Rain&rlz=1C1CHBF_enCA750CA750&oq=Rain&aqs=chrome..69i57j69i61j35i39j0l3.689j0j7&sourceid=chrome&ie=UTF-8";
    
}else if(current_condition === "Mist" || current_condition === "Fog"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Haze1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Haze2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    mistWeatherInfo();
    leanMore_weather = "https://www.google.ca/search?rlz=1C1CHBF_enCA750CA750&ei=D22cWtH9E83EjwOpjLOwAw&q=Mist+and+Fog&oq=Mist+and+Fog&gs_l=psy-ab.3..0i67k1l2j0l4j0i30k1l4.31808.33208.0.33408.4.4.0.0.0.0.165.457.2j2.4.0....0...1.1.64.psy-ab..0.4.456...0i7i30k1.0.PQ5HJhnb99c";
    if(current_condition === "Mist"){
        travelMistInfo()
    } else if (current_condition === "Fog"){
        travelFogInfo() 
    } 
    
} else if( current_condition === "Smoke" || current_condition === "Haze"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Smoke1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Smoke2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    hazeWeatherInfo();
    leanMore_weather = "https://www.google.ca/search?rlz=1C1CHBF_enCA750CA750&ei=MW2cWsmVPJSkjQP837CADQ&q=smoke+and+haze&oq=Smoke+and+ha&gs_l=psy-ab.1.1.0l3j0i22i30k1l7.22322.24319.0.25336.3.3.0.0.0.0.81.221.3.3.0....0...1.1.64.psy-ab..0.3.218...0i7i30k1.0.o890Bzwr4Jo";
     if(current_condition === "Smoke"){
        travelSmokeInfo()
    } else if (current_condition === "Haze"){
        travelHazeInfo() 
    } 
    
} else if(current_condition === "Sand, dust whirls" || current_condition === "Sand" || current_condition === "Dust"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/WeatherIcon/Sand1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/WeatherIcon/Sand2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    sandWeatherInfo();
    leanMore_weather = "https://www.google.ca/search?rlz=1C1CHBF_enCA750CA750&ei=TG2cWufYKtDgjwPG2ZrYDA&q=Sand%2C+dust+whirls%2C+Sand+and+Dust&oq=Sand%2C+dust+whirls%2C+Sand+and+Dust&gs_l=psy-ab.3..33i160k1l2.50557.70272.0.70560.12.10.2.0.0.0.165.779.9j1.10.0....0...1.1.64.psy-ab..0.5.478...35i39k1.0.dKCP3Ou37oo";
    if(current_condition === "Sand, dust whirls"){
        travelSanddustInfo()
    } else if (current_condition === "Sand"){
        travelSandInfo()      
    } else if (current_condition === "Dust"){
        travelDustInfo()     
    } 
    
} else if(current_condition === "Volcanic ash"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage =  "URL('./img/WeatherIcon/VolcanicAsh1.jpg')";
    header2_img.style.backgroundImage =  "URL('./img/WeatherIcon/VolcanicAsh2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    volcanicAshWeatherInfo();
    travelVolcanicAshInfo();
    leanMore_weather = "https://www.google.ca/search?rlz=1C1CHBF_enCA750CA750&ei=lG2cWsP8NciEjwOG_JjIAQ&q=Volcanic+ash&oq=Volcanic+ash&gs_l=psy-ab.3..35i39k1j0i67k1j0l8.14002.14002.0.14357.1.1.0.0.0.0.114.114.0j1.1.0....0...1.1.64.psy-ab..0.1.113....0.Sndp16JwEss";
    
} else if(current_condition === "Squalls" || current_condition === "Tornado"){
     current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage =  "URL('./img/WeatherIcon/Tornado1.jpg')";
    header2_img.style.backgroundImage =  "URL('./img/WeatherIcon/Tornado2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    squallsWeatherInfo();
    leanMore_weather = "https://www.google.ca/search?rlz=1C1CHBF_enCA750CA750&ei=4G2cWtfbJd2qjQPVvovgBA&q=Squalls+and+Tornado&oq=Squalls+and+Tornado&gs_l=psy-ab.3..33i22i29i30k1l2.36346.43147.0.43626.7.7.0.0.0.0.110.625.4j3.7.0....0...1.1.64.psy-ab..0.7.625...0j35i39k1j0i10k1j0i20i263k1j0i203k1j0i22i30k1j0i22i10i30k1.0.e3SK_soLE_k";
    if(current_condition === "Tornado"){
       travelTornadoInfo(); 
    } else if (current_condition === "Squalls"){
       travelSquallsInfo();
    }
    
    
} else if(current_condition === "Clear"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/clear-sky.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/clear-sky-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Clear1.jpeg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Clear2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    clearWeatherInfo();
    travelClearInfo();
    leanMore_weather = "https://www.google.ca/search?rlz=1C1CHBF_enCA750CA750&ei=DW6cWuikGInQjwOzvbeQCw&q=Clear+day&oq=Clear+day&gs_l=psy-ab.3..35i39k1j0l9.39742.42659.0.42760.7.6.1.0.0.0.106.463.5j1.6.0....0...1.1.64.psy-ab..0.7.504...0i131i67k1j0i67k1j0i131k1.0.hrnkz4QaQ0s";
   
} else if(current_condition === "Clouds"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/scattered-clouds.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/scattered-clouds-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Clouds1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Clouds2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    cloudsWeatherInfo();
    travelCloudsInfo();
    leanMore_weather = "https://www.google.ca/search?rlz=1C1CHBF_enCA750CA750&ei=TW6cWs2NOo2ajwOZtrOgBQ&q=Clouds+day&oq=Clouds+day&gs_l=psy-ab.3..0j0i22i30k1l9.459.873.0.1048.3.3.0.0.0.0.132.336.1j2.3.0....0...1.1.64.psy-ab..0.3.335...0i20i263k1j0i10k1.0.hvpl1FAuwGs";
    
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
        
        
/* Forecast */     
        console.log(city);
        var xhttp_weather_forecast = new XMLHttpRequest();
        xhttp_weather_forecast.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&APPID=" + weatherKey);
        xhttp_weather_forecast.send();
        xhttp_weather_forecast.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                var response = JSON.parse(this.responseText);
                console.log(response);
                
                var today = new Date(),
                    day1 = today.getDate(),
                    day2 = today.getDate()+1,
                    day3 = today.getDate()+2,
                    day4 = today.getDate()+3,
                    day5 = today.getDate()+4,
                    
                    month = today.getMonth() + 1,
                    year = today.getFullYear();
                
                if (month < 10){
                    month = "0" + month;
                }
                
                
                if (day1 < 10){
                    day1 = "0" + day1;
                }
                
                if (day2 < 10){
                    day2 = "0" + day2;
                }
                
                if (day3 < 10){
                    day3 = "0" + day3;
                }
                
                if (day4 < 10){
                    day4 = "0" + day4;
                }
                
                if (day5 < 10){
                    day5 = "0" + day5;
                }
                
                
                
                var date1 = year + "-" + month + "-" + day1;
                var date2 = year + "-" + month + "-" + day2;
                var date3 = year + "-" + month + "-" + day3;
                var date4 = year + "-" + month + "-" + day4;
                var date5 = year + "-" + month + "-" + day5;
                
                console.log(date1);
                console.log(date2);
                console.log(date3);
                console.log(date4);
                console.log(date5);
                
                  function insertForecast(){
                var request;
        
                if(window.XMLHttpRequest){
                    request = new XMLHttpRequest();
                }

                else if(window.ActiveXObject){
                    request = new ActiveXObject("Microsoft.XMLHTTP");
                }

                var forecastObj = new FormData();
                
                forecastObj.append("day1_condition", response.list[0].weather[0].main);
                forecastObj.append("day1_description", response.list[0].weather[0].description);
                forecastObj.append("day1_high_temp", response.list[0].main.temp_max);
                forecastObj.append("day1_low_temp", response.list[0].main.temp_min);
                forecastObj.append("day1_date", date1);
                
                forecastObj.append("day2_condition", response.list[8].weather[0].main);
                forecastObj.append("day2_description", response.list[8].weather[0].description);
                forecastObj.append("day2_high_temp", response.list[8].main.temp_max);
                forecastObj.append("day2_low_temp", response.list[8].main.temp_min);
                forecastObj.append("day2_date", date2);
            
                forecastObj.append("day3_condition", response.list[16].weather[0].main);
                forecastObj.append("day3_description", response.list[16].weather[0].description);
                forecastObj.append("day3_high_temp", response.list[16].main.temp_max);
                forecastObj.append("day3_low_temp", response.list[16].main.temp_min);
                forecastObj.append("day3_date", date3);
            
                forecastObj.append("day4_condition", response.list[24].weather[0].main);
                forecastObj.append("day4_description", response.list[24].weather[0].description);
                forecastObj.append("day4_high_temp", response.list[24].main.temp_max);
                forecastObj.append("day4_low_temp", response.list[24].main.temp_min);
                forecastObj.append("day4_date", date4);
            
                forecastObj.append("day5_condition", response.list[32].weather[0].main);
                forecastObj.append("day5_description", response.list[32].weather[0].description);
                forecastObj.append("day5_high_temp", response.list[32].main.temp_max);
                forecastObj.append("day5_low_temp", response.list[32].main.temp_min);
                forecastObj.append("day5_date", date5);
            
            
            
                request.open("POST", "./php/insertWeather.php", true);

                request.send(forecastObj);
    }             
                
                            
                insertForecast();
            }
        } 
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
        
    //var searchInp = document.getElementById("searchInp");    
    //var city = searchInp.value;
        
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
    coldWeather();
    snowWeatherInfo();
    travelSnowInfo();
    leanMore_weather = "https://www.google.ca/search?q=Snow&rlz=1C1CHBF_enCA750CA750&oq=Snow&aqs=chrome..69i57j69i61j35i39j0l3.576j0j7&sourceid=chrome&ie=UTF-8";
    
} else if(current_condition === "Thunderstorm"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/thunderstorm.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/thunderstorm-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Thunderstorm1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Thundestorm.jpeg')";
    con.innerHTML = "";
    umbrellaWeather(); 
    thunderstormWeatherInfo();
    travelThunderstormInfo();
    leanMore_weather = "https://www.google.ca/search?q=Thunderstorm&rlz=1C1CHBF_enCA750CA750&oq=Thunderstorm&aqs=chrome..69i57j35i39j0l4.634j0j9&sourceid=chrome&ie=UTF-8";
   
} else if(current_condition === "Drizzle"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/shower.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/shower-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Drizzle1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Drizzle2.jpg')";
    con.innerHTML = "";
    umbrellaWeather(); 
    drizzleWeatherInfo();
    travelDrizzleInfo();
    leanMore_weather = "https://www.google.ca/search?q=Drizzle&rlz=1C1CHBF_enCA750CA750&oq=Drizzle&aqs=chrome..69i57j0l5.4147j0j9&sourceid=chrome&ie=UTF-8";
    
} else if(current_condition === "Rain"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/rain.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/rain-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Rain1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Rain2.jpeg')";
    con.innerHTML = "";
    umbrellaWeather(); 
    rainWeatherInfo();
    travelRainInfo();
    leanMore_weather = "https://www.google.ca/search?q=Rain&rlz=1C1CHBF_enCA750CA750&oq=Rain&aqs=chrome..69i57j69i61j35i39j0l3.689j0j7&sourceid=chrome&ie=UTF-8";
    
}else if(current_condition === "Mist" || current_condition === "Fog"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Haze1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Haze2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    mistWeatherInfo();
    leanMore_weather = "https://www.google.ca/search?rlz=1C1CHBF_enCA750CA750&ei=D22cWtH9E83EjwOpjLOwAw&q=Mist+and+Fog&oq=Mist+and+Fog&gs_l=psy-ab.3..0i67k1l2j0l4j0i30k1l4.31808.33208.0.33408.4.4.0.0.0.0.165.457.2j2.4.0....0...1.1.64.psy-ab..0.4.456...0i7i30k1.0.PQ5HJhnb99c";
    if(current_condition === "Mist"){
        travelMistInfo()
    } else if (current_condition === "Fog"){
        travelFogInfo() 
    } 
    
} else if( current_condition === "Smoke" || current_condition === "Haze"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Smoke1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Smoke2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    hazeWeatherInfo();
    leanMore_weather = "https://www.google.ca/search?rlz=1C1CHBF_enCA750CA750&ei=MW2cWsmVPJSkjQP837CADQ&q=smoke+and+haze&oq=Smoke+and+ha&gs_l=psy-ab.1.1.0l3j0i22i30k1l7.22322.24319.0.25336.3.3.0.0.0.0.81.221.3.3.0....0...1.1.64.psy-ab..0.3.218...0i7i30k1.0.o890Bzwr4Jo";
     if(current_condition === "Smoke"){
        travelSmokeInfo()
    } else if (current_condition === "Haze"){
        travelHazeInfo() 
    } 
    
} else if(current_condition === "Sand, dust whirls" || current_condition === "Sand" || current_condition === "Dust"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/WeatherIcon/Sand1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/WeatherIcon/Sand2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    sandWeatherInfo();
    leanMore_weather = "https://www.google.ca/search?rlz=1C1CHBF_enCA750CA750&ei=TG2cWufYKtDgjwPG2ZrYDA&q=Sand%2C+dust+whirls%2C+Sand+and+Dust&oq=Sand%2C+dust+whirls%2C+Sand+and+Dust&gs_l=psy-ab.3..33i160k1l2.50557.70272.0.70560.12.10.2.0.0.0.165.779.9j1.10.0....0...1.1.64.psy-ab..0.5.478...35i39k1.0.dKCP3Ou37oo";
    if(current_condition === "Sand, dust whirls"){
        travelSanddustInfo()
    } else if (current_condition === "Sand"){
        travelSandInfo()      
    } else if (current_condition === "Dust"){
        travelDustInfo()     
    } 
    
} else if(current_condition === "Volcanic ash"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage =  "URL('./img/WeatherIcon/VolcanicAsh1.jpg')";
    header2_img.style.backgroundImage =  "URL('./img/WeatherIcon/VolcanicAsh2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    volcanicAshWeatherInfo();
    travelVolcanicAshInfo();
    leanMore_weather = "https://www.google.ca/search?rlz=1C1CHBF_enCA750CA750&ei=lG2cWsP8NciEjwOG_JjIAQ&q=Volcanic+ash&oq=Volcanic+ash&gs_l=psy-ab.3..35i39k1j0i67k1j0l8.14002.14002.0.14357.1.1.0.0.0.0.114.114.0j1.1.0....0...1.1.64.psy-ab..0.1.113....0.Sndp16JwEss";
    
} else if(current_condition === "Squalls" || current_condition === "Tornado"){
     current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/mist.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/mist-text.svg')";
    home_containerImg.style.backgroundImage =  "URL('./img/WeatherIcon/Tornado1.jpg')";
    header2_img.style.backgroundImage =  "URL('./img/WeatherIcon/Tornado2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    squallsWeatherInfo();
    leanMore_weather = "https://www.google.ca/search?rlz=1C1CHBF_enCA750CA750&ei=4G2cWtfbJd2qjQPVvovgBA&q=Squalls+and+Tornado&oq=Squalls+and+Tornado&gs_l=psy-ab.3..33i22i29i30k1l2.36346.43147.0.43626.7.7.0.0.0.0.110.625.4j3.7.0....0...1.1.64.psy-ab..0.7.625...0j35i39k1j0i10k1j0i20i263k1j0i203k1j0i22i30k1j0i22i10i30k1.0.e3SK_soLE_k";
    if(current_condition === "Tornado"){
       travelTornadoInfo(); 
    } else if (current_condition === "Squalls"){
       travelSquallsInfo();
    }
    
    
} else if(current_condition === "Clear"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/clear-sky.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/clear-sky-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Clear1.jpeg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Clear2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    clearWeatherInfo();
    travelClearInfo();
    leanMore_weather = "https://www.google.ca/search?rlz=1C1CHBF_enCA750CA750&ei=DW6cWuikGInQjwOzvbeQCw&q=Clear+day&oq=Clear+day&gs_l=psy-ab.3..35i39k1j0l9.39742.42659.0.42760.7.6.1.0.0.0.106.463.5j1.6.0....0...1.1.64.psy-ab..0.7.504...0i131i67k1j0i67k1j0i131k1.0.hrnkz4QaQ0s";
   
} else if(current_condition === "Clouds"){
    current_conditionImg.style.backgroundImage = "URL('./img/WeatherIcon/scattered-clouds.svg')";
    checkWeather_img.style.backgroundImage = "URL('./img/WeatherIcon/scattered-clouds-text.svg')";
    home_containerImg.style.backgroundImage = "URL('./img/backgrounds/Clouds1.jpg')";
    header2_img.style.backgroundImage = "URL('./img/backgrounds/Clouds2.jpg')";
    con.innerHTML = "";
    FollowTempWear();
    cloudsWeatherInfo();
    travelCloudsInfo();
    leanMore_weather = "https://www.google.ca/search?rlz=1C1CHBF_enCA750CA750&ei=TW6cWs2NOo2ajwOZtrOgBQ&q=Clouds+day&oq=Clouds+day&gs_l=psy-ab.3..0j0i22i30k1l9.459.873.0.1048.3.3.0.0.0.0.132.336.1j2.3.0....0...1.1.64.psy-ab..0.3.335...0i20i263k1j0i10k1.0.hvpl1FAuwGs";
    
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

var travel_show = document.getElementById("travel_show");
var travel_left = document.getElementById("travel_left");
var travel_right = document.getElementById("travel_right");
var travel_p = document.getElementById("travel_p");
var travel_h1 = document.getElementById("travel_h1");
var learnTravel = document.getElementById("learnTravel");

learnWeater.addEventListener("click", function(){  
  window.open(leanMore_weather);
});

learnTravel.addEventListener("click", function(){  
  window.open(leanMore_travel);
});


//weather info _ haze&smoke 
function hazeWeatherInfo(){
    
var num=0;
    
var weatherInfo = ["These are usually caused when a nearby forest is burning, and the smoke is drifting through your area, or smoke is trapped in our atmosphere, creating a foggy view of your town.", "It is recommended to stay indoors to avoid breathing in the CO2, but if you are required to head out today, I would recommend dressing up wearing something cool (t-shirts, maybe shorts or pants that does not go tightly onto your leg), while also having some cover to your eyes, and a scarf to cover your mouth and nose to avoid breathing in CO2.", "For drivers, you should avoid driving long periods of time, and move at a slower speed." ];
    
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
  
var num=0;
//3    
var weatherInfo = ["It’s cold out! Blanket of snow all over your city! It is recommended to stay indoors for people who are taking the bus or driving to somewhere.", "If you need to head out today, you need to dress warm from top to bottom; I recommend wearing a sweater underneath your jacket, a warm hat, and boots that can resist water, keeps traction and keep your feet warm.", "When heading out, you should avoid deep snow, and sidewalks that are covered with powdered snow for drivers to avoid losing traction or skidding (so drive in a lower speed and more distance between your car and the car in front of you)." ];
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

var num=0;
    
var weatherInfo = ["The sky is rumbling… It may sound far away, but I recommend avoiding the outdoor for long periods of time, and staying either in a building or in a car in case the thunder strike at your area, and the winds get stronger.", "In case of rain, you should dress appropriate in case you go out tonight for an important meeting; I recommend wearing a rain coat, boots that can resist water, and new pair of pants and shirt in case you get wet anyway. ", "Umbrellas can also be used, but try to avoid using them when the winds get stronger to avoid getting your umbrella destroyed. When you are out in a middle of the thunderstorm, try to avoid staying next to something metal, underneath trees, and try to stay indoors such as stores or station until the thunder blows over." ];
  
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

var num=0;
    
var weatherInfo = ["It looks like it’s going to rain lightly today… But you should always prepare for the worse. Drizzle might turn into rain, which would make you soaked. You should dress-up warm for today, but maybe just a jacket and normal pants and shoes would be fine.", "But an umbrella is recommended in case it starts raining heavily, or you just don’t want to get wet today.", "There is nothing to worry when it is just a drizzle, but it recommended that you prepare and bring along your umbrella in case the weather change drastically." ];
   
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
 
var num=0;
  
var weatherInfo = ["Uh oh… It’s pouring rain outside. It is important to stay warm and dry.", "If you are heading out today, I recommend the following to avoid getting wet and catching a cold; either a raincoat or jacket that keeps water out, rain boots, and an umbrella.", "Since it is raining out everywhere you go, always hold on your umbrella, or wear your raincoat, and avoid puddles. For drivers, it is important to drive slowly to avoid loss of traction." ];

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

var num=0;
   
var weatherInfo = ["It is hard to see where you’re going today. It is recommended to stay indoors to avoid getting hit by people who can’t see in the fog.", "IF you need to head out today, you will need to dress warm and something that does not blend with the fog; a jacket maybe enough.", "When you are out, don’t try to rush through the sidewalk, or you might bump into someone, and try to avoid walking in roads for cars (if you have to, try walking at the side to avoid getting hit by cars). For drivers, always remember to drive slowly, with your lights on." ];
   
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
    
var num=0;
   
var weatherInfo = ["It’s dry and hot, and to make matters worse, sand and dusts are flying everywhere at your area.  I would recommend staying indoors.", "But if it is necessary , but if you are required to head out today, I would recommend staying outside for shorts periods of time while staying inside buildings, and dressing up wearing something cool (t-shirts, maybe shorts or pants that does not go tightly onto your leg), while also having some cover to your eyes, and a scarf to cover your mouth and nose to avoid having sand or dust in your lungs.", "For drivers, you should avoid driving long periods of time, and move at a slower speed." ];
    
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
    
var num=0;
  
var weatherInfo = ["This is when a volcanic mountain erupted shooting our burning-hot lava and volcanic ashes to the atmosphere.", "It is extremely recommended to stay indoors, but if you do have to go outdoors, you still need to stay indoors, and travel by car or bus if you have to. Wear something that can protect you from the volcanic ash, such as a jacket, long pants and sleeves, and a hat.", "It is also recommended to wear eye protection. For car drivers, it is best to drive for shorter period of time." ];
    
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

var num=0;
     
var weatherInfo = ["The outside is violently blowing winds in the area, and it is highly recommended to stay indoors at all times.", "Avoid driving or going outside because it is highly dangerous right now.", "But it is recommended to wear something warm such as a jacket, long pants and shirt, and spare clothing in case the one you are wearing gets wet, and stay indoors (possibly inside your basement with your door and windows nailed shut)." ];
     
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
    
var num=0;
  
var weatherInfo = ["It is clear outside, and is a perfect day to go outside for a brisk walk, talking a drive through your town, or anything you can imagine.", "Though, depending on the weather, what you can wear can vary, but it is not recommended to wear something warm.", "For summer time, it is recommended to wear something that keeps you cool (possibly a t-shirt, and shorts), but always carry a jacket in case the wind starts to blow in your area. In the winter or early spring time, it is recommended to wear something warm, but maybe just a jacket would be enough, and long pants to avoid cold winds." ];
    
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
 
var num=0;
  
var weatherInfo = ["It’s cloudy out, but it is currently not raining. I would recommend wearing something slightly warm such as a jacket or a long-sleeved shirt and long pants.", "IT is recommended to bring along an umbrella (maybe a compact one) in case the weather starts to get a little wet.", "For drivers out there, there are not distraction to drive at a normal speed, but it can rain at some point, so you should be prepared to drive at a slow speed if necessary." ];
    
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











////////////////////  travel 

function travelSnowInfo(){ 
var num2=0;    
var travelH = ["Museum", "Library", "Convenience Store" ];   
var travelInfo = ["Even though it’s snowing out, staying indoors is a best method to keep yourself warm. Museums are a best place to stay and keeping yourself warm.", "Even though it’s snowing out, staying indoors is a best method to keep yourself warm. Library are a best place to stay and keeping yourself warm.", "Even though it’s snowing out, staying indoors is a best method to keep yourself warm. It is important to stay indoors, but convenience stores are a perfect place to keep yourself warm, and buy the things you need." ];
    
travel_show.style.backgroundImage = "url('./img/travelSuggestion/snow0.png ')"; 

travel_h1.innerHTML = travelH[0]
travel_p.innerHTML = travelInfo[0]     

//right    
travel_right.addEventListener("click", function(){ 

num2 = num2 + 1; 
      
if (num2 > 2 ){  
num2=0;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/snow" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/snow" + num2 + ".png ')"; 
} 
travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});
        
//left
travel_left.addEventListener("click", function(){  

num2= num2 - 1;
   
if (num2 < 0 ){  
num2=2;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/snow" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/snow" + num2 + ".png ')"; 
} 
travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});
}    
     
function travelThunderstormInfo(){ 
////////////////////  travel 
var num2=0;    
var travelH = ["Indoors", "House"];    
var travelInfo = ["In weather conditions like these, it is important to stay indoors rather than outside, to places such as convenience stores, museums, art galleries, etc. In weather conditions like these, it is dangerous to stay outside for long periods of times", "In weather conditions like these, it is important to stay indoors rather than outside, and stay at your house. In weather conditions like these, it is dangerous to stay outside for long periods of times"];
    
travel_show.style.backgroundImage = "url('./img/travelSuggestion/thunderstorm0.png ')"; 

travel_h1.innerHTML = travelH[0]
travel_p.innerHTML = travelInfo[0]      

//right    
travel_right.addEventListener("click", function(){ 

num2 = num2 + 1; 
      
if (num2 > 1 ){  
num2=0;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/thunderstorm" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/thunderstorm" + num2 + ".png ')"; 
} 
travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});
        
//left
travel_left.addEventListener("click", function(){  

num2= num2 - 1;
   
if (num2 < 0 ){  
num2=1;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/thunderstorm" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/thunderstorm" + num2 + ".png ')"; 
} 
travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});    
    
} 

function travelDrizzleInfo(){ 
////////////////////  travel 
   
var num2=0;    
    
var travelH = ["Art Gallery", "Museum", "Library", "Night Club", "Convenience Store", "Movie Theater"]; 
var travelInfo = ["It’s a little wet outside, but staying outdoors for a long time would make you wet, so it is important to stay indoors rather than outside. Art gallery are a great place to visit for you artistic people out there. It’s warm and contains the most recent artwork done by people around your area.", "It’s a little wet outside, but staying outdoors for a long time would make you wet, so it is important to stay indoors rather than outside. Museums are a great place to visit to learn about history. It’s warm and contains pieces of artwork and artifacts that is great to look at and learn from.", "It’s a little wet outside, but staying outdoors for a long time would make you wet, so it is important to stay indoors rather than outside. Libraries are a great place to stay since you can read books and watch movies while you stay there. It is also warm and contain materials which would keep you entertained or educated.", "It’s a little wet outside, but staying outdoors for a long time would make you wet, so it is important to stay indoors rather than outside. Night clubs are a great place to hang out before the weekend, and grab a couple of drinks, and meet with other people. It is also warm, and keeps you out of the rain.", "It’s a little wet outside, but staying outdoors for a long time would make you wet, so it is important to stay indoors rather than outside. Convenience stores are a great place that will keep you warm, and to grab things you need for the day.", "It’s a little wet outside, but staying outdoors for a long time would make you wet, so it is important to stay indoors rather than outside. Movies to kill some time are a great idea for a wet weather like these. It will keep you warm, and out of the rain."];    
    
travel_show.style.backgroundImage = "url('./img/travelSuggestion/drizzle0.png ')"; 

travel_h1.innerHTML = travelH[0]
travel_p.innerHTML = travelInfo[0]     

//right    
travel_right.addEventListener("click", function(){ 

num2 = num2 + 1; 
      
if (num2 > 5 ){  
num2=0;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/drizzle" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/drizzle" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});
        
//left
travel_left.addEventListener("click", function(){  

num2= num2 - 1;
   
if (num2 < 0 ){  
num2=5;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/drizzle" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/drizzle" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});  
    
} 

function travelRainInfo(){ 
// travel 
   
var num2=0;    
 
var travelH = ["Art Gallery", "Museum", "Library", "Night Club", "Convenience Store", "Movie Theater"];    
var travelInfo = ["It’s wet, and it is likely anyone would be out for long periods of time. Art gallery are a great place to visit for you artistic people out there. It’s warm and contains the most recent artwork done by people around your area.", "It’s wet, and it is likely anyone would be out for long periods of time. . Museums are a great place to visit to learn about history. It’s warm and contains pieces of artwork and artifacts that is great to look at and learn from.", "It’s wet, and it is likely anyone would be out for long periods of time. Libraries are a great place to stay since you can read books and watch movies while you stay there. It is also warm and contain materials which would keep you entertained or educated.", "It’s wet, and it is likely anyone would be out for long periods of time. Night clubs are a great place to hang out before the weekend, and grab a couple of drinks, and meet with other people. It is also warm, and keeps you out of the rain.", "It’s wet, and it is likely anyone would be out for long periods of time. Convenience stores are a great place that will keep you warm, and to grab things you need for the day.", "It’s wet, and it is likely anyone would be out for long periods of time. Movies to kill some time are a great idea for a wet weather like these. It will keep you warm, and out of the rain." ];
    
travel_show.style.backgroundImage = "url('./img/travelSuggestion/rain0.png ')"; 

travel_h1.innerHTML = travelH[0]
travel_p.innerHTML = travelInfo[0]   

//right    
travel_right.addEventListener("click", function(){ 

num2 = num2 + 1; 
      
if (num2 > 5 ){  
num2=0;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/rain" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/rain" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});
        
//left
travel_left.addEventListener("click", function(){  

num2= num2 - 1;
   
if (num2 < 0 ){  
num2=5;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/rain" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/rain" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});        
  
} 

function travelMistInfo(){ 
// travel 
   
var num2=0;    
var travelH = ["Art Gallery", "Museum", "Library", "Night Club", "Convenience Store", "Movie Theater"];     
var travelInfo = ["It’s a little wet outside, but staying outdoors for a long time would make you wet, so it is important to stay indoors rather than outside. Art gallery are a great place to visit for you artistic people out there. It’s warm and contains the most recent artwork done by people around your area.", "It’s a little wet outside, but staying outdoors for a long time would make you wet, so it is important to stay indoors rather than outside. Museums are a great place to visit to learn about history. It’s warm and contains pieces of artwork and artifacts that is great to look at and learn from.", "It’s a little wet outside, but staying outdoors for a long time would make you wet, so it is important to stay indoors rather than outside. Libraries are a great place to stay since you can read books and watch movies while you stay there. It is also warm and contain materials which would keep you entertained or educated. ", "It’s a little wet outside, but staying outdoors for a long time would make you wet, so it is important to stay indoors rather than outside. Night clubs are a great place to hang out before the weekend, and grab a couple of drinks, and meet with other people. It is also warm, and keeps you out of the mist.", "It’s a little wet outside, but staying outdoors for a long time would make you wet, so it is important to stay indoors rather than outside. Convenience stores are a great place that will keep you warm, and to grab things you need for the day. ", "It’s a little wet outside, but staying outdoors for a long time would make you wet, so it is important to stay indoors rather than outside. Movies to kill some time are a great idea for a wet weather like these. It will keep you warm, and out of the mist." ];
    
travel_show.style.backgroundImage = "url('./img/travelSuggestion/mist0.png ')"; 

travel_h1.innerHTML = travelH[0]
travel_p.innerHTML = travelInfo[0]     

//right    
travel_right.addEventListener("click", function(){ 

num2 = num2 + 1; 
      
if (num2 > 5 ){  
num2=0;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/mist" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/mist" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});
        
//left
travel_left.addEventListener("click", function(){  

num2= num2 - 1;
   
if (num2 < 0 ){  
num2=5;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/mist" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/mist" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});      
    
} 

function travelFogInfo(){ 
// travel 
   
var num2=0;    
var travelH = ["Art Gallery", "Museum", "Library", "Night Club", "Convenience Store", "Movie Theater"];   
    
var travelInfo = ["It’s foggy out, and it is not recommended to stay outdoors for long periods of time. Art gallery are a great place to visit for you artistic people out there. It’s warm and contains the most recent artwork done by people around your area.", "It’s foggy out, and it is not recommended to stay outdoors for long periods of time. Museums are a great place to visit to learn about history. It’s warm and contains pieces of artwork and artifacts that is great to look at and learn from.", "It’s foggy out, and it is not recommended to stay outdoors for long periods of time. Libraries are a great place to stay since you can read books and watch movies while you stay there. It is also warm and contain materials which would keep you entertained or educated.", "It’s foggy out, and it is not recommended to stay outdoors for long periods of time. Night clubs are a great place to hang out before the weekend, and grab a couple of drinks, and meet with other people. It is also warm, and keeps you out of the fog.", "It’s foggy out, and it is not recommended to stay outdoors for long periods of time. Convenience stores are a great place that will keep you warm, and to grab things you need for the day.", "It’s foggy out, and it is not recommended to stay outdoors for long periods of time. Movies to kill some time are a great idea for a wet weather like these. It will keep you warm, and out of the mist." ];
    
travel_show.style.backgroundImage = "url('./img/travelSuggestion/fog0.png ')"; 

travel_h1.innerHTML = travelH[0]
travel_p.innerHTML = travelInfo[0]     

//right    
travel_right.addEventListener("click", function(){ 

num2 = num2 + 1; 
      
if (num2 > 5 ){  
num2=0;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/fog" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/fog" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});
        
//left
travel_left.addEventListener("click", function(){  

num2= num2 - 1;
   
if (num2 < 0 ){  
num2=5;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/fog" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/fog" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});   
} 

function travelSmokeInfo(){ 
  ////////////////////  travel 
   
var num2=0;   
    
var travelH = ["Museum", "Library", "Convenience Store"];     
var travelInfo = ["The smoke that surrounds your area may cause coughing, pain in the eyes, and breathing in CO2. But staying indoors are a great choice in these weather conditions. Museums are a great place to visit to learn about history. It’s contains pieces of artwork and artifacts that is great to look at and learn from.", "The smoke that surrounds your area may cause coughing, pain in the eyes, and breathing in CO2. But staying indoors are a great choice in these weather conditions. Libraries are a great place to stay since you can read books and watch movies while you stay there. It contains materials which would keep you entertained or educated.", "The smoke that surrounds your area may cause coughing, pain in the eyes, and breathing in CO2. But staying indoors are a great choice in these weather conditions.  Convenience stores are a great place to grab things you need for the day."];
    
travel_show.style.backgroundImage = "url('./img/travelSuggestion/smoke0.png ')"; 

travel_h1.innerHTML = travelH[0]
travel_p.innerHTML = travelInfo[0]     

//right    
travel_right.addEventListener("click", function(){ 

num2 = num2 + 1; 
      
if (num2 > 2 ){  
num2=0;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/smoke" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/smoke" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});
        
//left
travel_left.addEventListener("click", function(){  

num2= num2 - 1;
   
if (num2 < 0 ){  
num2=2;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/smoke" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/smoke" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});    
    
} 

function travelHazeInfo(){ 
 ////////////////////  travel 
   
var num2=0;   
    
var travelH = ["Museum", "Library", "Convenience Store"];     
var travelInfo = ["The smoke is caused by a forest fire is currently stuck in our atmosphere, and I would recommend that you stay indoors to prevent yourself breathing in the smoke, and having teary eyes from the smoke. So, stay indoors if you want to go out for the day. Museums are a great place to visit to learn about history. It contains pieces of artwork and artifacts that is great to look at and learn from.", "The smoke is caused by a forest fire is currently stuck in our atmosphere, and I would recommend that you stay indoors to prevent yourself breathing in the smoke, and having teary eyes from the smoke. So, stay indoors if you want to go out for the day. Libraries are a great place to stay since you can read books and watch movies while you stay there. It contains materials which would keep you entertained or educated.", "The smoke is caused by a forest fire is currently stuck in our atmosphere, and I would recommend that you stay indoors to prevent yourself breathing in the smoke, and having teary eyes from the smoke. So, stay indoors if you want to go out for the day. Convenience stores are a great place to grab things you need for the day."];
    
travel_show.style.backgroundImage = "url('./img/travelSuggestion/haze0.png ')"; 

travel_h1.innerHTML = travelH[0]
travel_p.innerHTML = travelInfo[0]     

//right    
travel_right.addEventListener("click", function(){ 

num2 = num2 + 1; 
      
if (num2 > 2 ){  
num2=0;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/haze" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/haze" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});
        
//left
travel_left.addEventListener("click", function(){  

num2= num2 - 1;
   
if (num2 < 0 ){  
num2=2;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/haze" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/haze" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});   
}

function travelSanddustInfo(){ 
// travel 
   
var num2=0;    
var travelH = ["House", "Indoors"];       
var travelInfo = ["Sand and dusts are flying everywhere in your area. In weather conditions like these, it is important to stay indoors until the sand storm blows over. You house is a great place to stay, since all of the things are there until the sand storm blows over.", "Sand and dusts are flying everywhere in your area. In weather conditions like these, it is important to stay indoors until the sand storm blows over. Indoors such as art gallery, museums, and other places that are in a large building are a great place to stay until the sand storm blows over."];
    
travel_show.style.backgroundImage = "url('./img/travelSuggestion/sanddust0.png ')"; 

travel_h1.innerHTML = travelH[0]
travel_p.innerHTML = travelInfo[0]    

//right    
travel_right.addEventListener("click", function(){ 

num2 = num2 + 1; 
      
if (num2 > 1 ){  
num2=0;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/sanddust" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/sanddust" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});
        
//left
travel_left.addEventListener("click", function(){  

num2= num2 - 1;
   
if (num2 < 0 ){  
num2=1;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/sanddust" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/sanddust" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});         
    
}

function travelSandInfo(){ 
// travel 
   
var num2=0;    
var travelH = ["House", "Indoors"];       
var travelInfo = ["Sand are flying everywhere in your area. In weather conditions like these, it is important to stay indoors until the sand storm blows over. You house is a great place to stay, since all of the things are there until the sand storm blows over.", "Sand are flying everywhere in your area. In weather conditions like these, it is important to stay indoors until the sand storm blows over. Indoors such as art gallery, museums, and other places that are in a large building are a great place to stay until the sand storm blows over."];
    
travel_show.style.backgroundImage = "url('./img/travelSuggestion/sand0.png ')"; 

travel_h1.innerHTML = travelH[0]
travel_p.innerHTML = travelInfo[0]    

//right    
travel_right.addEventListener("click", function(){ 

num2 = num2 + 1; 
      
if (num2 > 1 ){  
num2=0;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/sand" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/sand" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});
        
//left
travel_left.addEventListener("click", function(){  

num2= num2 - 1;
   
if (num2 < 0 ){  
num2=1;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/sand" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/sand" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});   
}

function travelDustInfo(){ 
// travel 
   
var num2=0;    
var travelH = ["House", "Indoors"];       
var travelInfo = ["Dusts are flying everywhere in your area. In weather conditions like these, it is important to stay indoors until the sand storm blows over. You house is a great place to stay, since all of the things are there until the sand storm blows over.", "Dusts are flying everywhere in your area. In weather conditions like these, it is important to stay indoors until the sand storm blows over. Indoors such as art gallery, museums, and other places that are in a large building are a great place to stay until the sand storm blows over."];
    
travel_show.style.backgroundImage = "url('./img/travelSuggestion/dust0.png ')"; 

travel_h1.innerHTML = travelH[0]
travel_p.innerHTML = travelInfo[0]    

//right    
travel_right.addEventListener("click", function(){ 

num2 = num2 + 1; 
      
if (num2 > 1 ){  
num2=0;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/dust" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/dust" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});
        
//left
travel_left.addEventListener("click", function(){  

num2= num2 - 1;
   
if (num2 < 0 ){  
num2=1;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/dust" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/dust" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});   
}

function travelVolcanicAshInfo(){ 
// travel 
   
var num2=0;    
var travelH = ["House", "Indoors"];      
var travelInfo = ["Volcano in your area erupted, blowing hot ash all over your area. In weather conditions like these, it is highly recommended to stay indoors until situation gets lighten. You house is a great place to stay, since all of the things are there until the volcano situation blows over.", "Volcano in your area erupted, blowing hot ash all over your area. In weather conditions like these, it is highly recommended to stay indoors until situation gets lighten. But if you need to get out today, I recommend staying indoors at all times. Indoors such as art gallery, museums, and other places that are in a large building are a great place to stay until the volcano situation blows over."];
    
travel_show.style.backgroundImage = "url('./img/travelSuggestion/volcanicAsh0.png ')"; 

travel_h1.innerHTML = travelH[0]
travel_p.innerHTML = travelInfo[0] 

//right    
travel_right.addEventListener("click", function(){ 

num2 = num2 + 1; 
      
if (num2 > 1 ){  
num2=0;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/volcanicAsh" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/volcanicAsh" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});
        
//left
travel_left.addEventListener("click", function(){  

num2= num2 - 1;
   
if (num2 < 0 ){  
num2=1;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/volcanicAsh" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/volcanicAsh" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});   
    
}

function travelSquallsInfo(){ 
// travel 
   
var num2=0;    
var travelH = ["House", "Indoors"];     
var travelInfo = ["Wind and rain are blowing violently in your area. In weather conditions like these, it is highly recommended to stay indoors until situation gets lighten. You house is a great place to stay, since all of the things are there until the weather lightens.", "Wind and rain are blowing violently in your area. In weather conditions like these, it is highly recommended to stay indoors until situation gets lighten. But if you need to get out today, I recommend staying indoors at all times. Indoors such as art gallery, museums, and other places that are in a large building are a great place to stay until the weather lightens"];
    
travel_show.style.backgroundImage = "url('./img/travelSuggestion/squalls0.png ')"; 

travel_h1.innerHTML = travelH[0]
travel_p.innerHTML = travelInfo[0]   

//right    
travel_right.addEventListener("click", function(){ 

num2 = num2 + 1; 
      
if (num2 > 1 ){  
num2=0;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/squalls" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/squalls" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});
        
//left
travel_left.addEventListener("click", function(){  

num2= num2 - 1;
   
if (num2 < 0 ){  
num2=1;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/squalls" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/squalls" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});   
    
}

function travelTornadoInfo(){ 
   
var travelH = ["House"];     
var travelInfo = ["A tornado was located around your area. It is highly recommended to stay indoors in these kinds of weather conditions. You house is a great place to stay, since all of the things are there until the weather lightens."];
    
travel_show.style.backgroundImage = "url('./img/travelSuggestion/tornado0.png ')"; 

travel_h1.innerHTML = travelH[0]
travel_p.innerHTML = travelInfo[0]
}

function travelClearInfo(){ 
// travel 
   
var num2=0;    
var travelH = ["Park", "Festival", "Art Gallery", "Museum", "Library", "Night Club", "Convenience Store", "Movie Theater"];     
var travelInfo = ["The weather is nice, and a visit to the park is a great idea. Here, you can have a picnic, have a soccer or football match with your buddies, or have a brisk walk with either your family or your dog.", "The weather is nice, a visit to your local festival is a great idea. Here, you can have fun, meet with other people, eat unique and tasty foods, enjoy various kinds of entertainment, and many more.", "The weather is nice, and a visit to your art gallery is a great idea. Art gallery are a great place to visit for you artistic people out there. It contains the most recent artwork done by artist around your area.", "The weather is nice, and a visit to your museum is a great idea. Museums are a great place to visit to learn about history. It contains pieces of artwork and artifacts that is great to look at and learn from.", "The weather is nice, and a visit to your library is a great idea. Libraries are a great place to stay since you can read books and watch movies while you stay there. It contains materials which would keep you entertained or educated.", "The weather is nice, and a visit to a night club is a great idea. Night clubs are a great place to hang out before the weekend, and grab a couple of drinks, and meet with other people.", "The weather is nice, and a visit to your convenience store is a great idea. Convenience stores are a great place that will keep you warm, and to grab things you need for the day.", "The weather is nice, and a visit to your movie theater is a great idea. Movies to kill some time are a great idea."];
    
travel_show.style.backgroundImage = "url('./img/travelSuggestion/clear0.png')"; 

travel_h1.innerHTML = travelH[0]
travel_p.innerHTML = travelInfo[0]    

//right    
travel_right.addEventListener("click", function(){ 

num2 = num2 + 1; 
      
if (num2 > 7 ){  
num2=0;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/clear" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/clear" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});
        
//left
travel_left.addEventListener("click", function(){  

num2= num2 - 1;
   
if (num2 < 0 ){  
num2=7;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/clear" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/clear" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]

});      
    
}

function travelCloudsInfo(){ 
// travel 
   
var num2=0;
var leanMore = [""]   
var travelH = ["Park", "Festival", "Art Gallery", "Museum", "Library", "Night Club", "Convenience Store", "Movie Theater"];     
var travelInfo = ["The weather is nice for now , and a visit to the park is a great idea. Here, you can have a picnic, have a soccer or football match with your buddies, or have a brisk walk with either your family or your dog.", "The weather is nice for now, a visit to your local festival is a great idea. Here, you can have fun, meet with other people, eat unique and tasty foods, enjoy various kinds of entertainment, and many more.", "The weather is nice for now, and a visit to your art gallery is a great idea. Art gallery are a great place to visit for you artistic people out there. It contains the most recent artwork done by artist around your area.", "The weather is nice for now, and a visit to your museum is a great idea. Museums are a great place to visit to learn about history. It contains pieces of artwork and artifacts that is great to look at and learn from.", "The weather is nice for now, and a visit to your library is a great idea. Libraries are a great place to stay since you can read books and watch movies while you stay there. It contains materials which would keep you entertained or educated.", "The weather is nice for now, and a visit to a night club is a great idea. Night clubs are a great place to hang out before the weekend, and grab a couple of drinks, and meet with other people.", "The weather is nice for now, and a visit to your convenience store is a great idea. Convenience stores are a great place that will keep you warm, and to grab things you need for the day.", "The weather is nice for now, and a visit to your movie theater is a great idea. Movies to kill some time are a great idea."];
    
travel_show.style.backgroundImage = "url('./img/travelSuggestion/clouds0.png ')"; 

travel_h1.innerHTML = travelH[0]
travel_p.innerHTML = travelInfo[0]     
leanMore_travel = leanMore[0]
//right    
travel_right.addEventListener("click", function(){ 

num2 = num2 + 1; 
      
if (num2 > 7 ){  
num2=0;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/clouds" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/clouds" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]
leanMore_travel = leanMore[num2]
});
        
//left
travel_left.addEventListener("click", function(){  

num2= num2 - 1;
   
if (num2 < 0 ){  
num2=7;
travel_show.style.backgroundImage = "url('./img/travelSuggestion/clouds" + num2 + ".png ')"; 
} else {
travel_show.style.backgroundImage = "url('./img/travelSuggestion/clouds" + num2 + ".png ')"; 
} 

travel_h1.innerHTML = travelH[num2]
travel_p.innerHTML = travelInfo[num2]
leanMore_travel = leanMore[num2]    

});         
    
}

