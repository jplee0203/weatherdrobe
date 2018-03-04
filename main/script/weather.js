
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
var toggleBut = document.getElementById("toggleMF");
var genderCase = 0

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

  
//    if(toggleBut.checked) {  
//       
//  if(shoesIcon.style.backgroundImage === "URL('./img/wearIcon/shoes-shoes-man.png')"){}
//   
//  
//   shirtIcon.style.backgroundImage = "URL('./img/wearIcon/shirts-woman.png')";
//  
//    } 
//    else {   
//   
//         
//       shoesIcon.style.backgroundImage = "URL('./img/wearIcon/shoes-man.png')";
//     shirtIcon.style.backgroundImage = "URL('./img/wearIcon/shirt-man.png')";
//    }
    


}); 

// shirts && shoes 
function umbrellaWeather(){
   genderCase = 2;
   wearDiv1.style.display = "block"; 
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
    coldWeather();
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
    coldWeather(); 
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

learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Snow");
});      
    
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

 learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Thunderstorm");
});  
    
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

 learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Drizzle");
});     
    
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
    
 learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Rain");
});     

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

 learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Mist");
});      

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
    
learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Dust_storm");
});     

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
    
learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Volcanic_ash");
});     

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

learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Squall");
});     
    
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
    
learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Travel");
});    

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
      
learnWeater.addEventListener("click", function(){  
  window.open("https://en.wikipedia.org/wiki/Cloud");
});
    
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