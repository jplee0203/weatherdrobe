document.getElementById("body_scroll").onmousewheel = function(event){
 showMenu();   
};

function goHome(){
    showMenu();  
    var scTop = document.getElementById("body_scroll").scrollTop;
    var scStart = setInterval(function(){ 
        scTop = scTop-15;   
    document.getElementById("body_scroll").scrollTop = scTop;
        if(scTop <= 0){   
           clearInterval(scStart); 
        }                              
     },1);
}

function goNext(){
  showMenu();  
    var scTop = document.getElementById("body_scroll").scrollTop;
    var scStart = setInterval(function(){ 
        scTop = scTop+15;   
    document.getElementById("body_scroll").scrollTop = scTop;
        if(scTop > 2107.77783203125){   
           clearInterval(scStart); 
        }                              
     },1);
}

function showMenu(){
    
 document.getElementById("navigation").style.top= 0;
 document.getElementById("navigation").style.transition = "top 1s";

   setTimeout(function(){     
      document.getElementById("navigation").style.top= "-10%";
 document.getElementById("navigation").style.transition = "top 1s";
    }, 5000);      
    
    
}

function fixedMenu(){   
 document.getElementById("navigation").style.top= 0;
 document.getElementById("navigation").style.transition = "top 1s";
}

function fixedMenuOut(){   
 document.getElementById("navigation").style.top= "-10%";
 document.getElementById("navigation").style.transition = "top 1s";
}

function navigationMouseOut(){
  fixedMenuOut();  
}

function navigationMouse() { 
  fixedMenu();
}


document.getElementById("searchBut").addEventListener("click", function(){
    showMenu(); 
    var scTop = document.getElementById("body_scroll").scrollTop;
    var scStart = setInterval(function(){ 
        scTop = scTop+15;   
    document.getElementById("body_scroll").scrollTop = scTop;
        if(scTop > 904.4444580078125){   
           clearInterval(scStart); 
        }                              
     },1);
  });   

document.getElementById("goWear").addEventListener("click", function(){
    goNext() 
});  

document.getElementById("goWear_wear").addEventListener("click", function(){
    goNext()
}); 

document.getElementById("goWear_travel").addEventListener("click", function(){
    goNext() 
}); 

 document.getElementById("goTravel").addEventListener("click", function(){
    showMenu();  
    var scTop = document.getElementById("body_scroll").scrollTop;
    var scStart = setInterval(function(){ 
        scTop = scTop+15;   
    document.getElementById("body_scroll").scrollTop = scTop;
        if(scTop > 3451.111083984375){   
           clearInterval(scStart); 
        }                              
     },1);
});  
    
 document.getElementById("goHome").addEventListener("click", function(){
    goHome()
}); 
    
 document.getElementById("goHomeArrow").addEventListener("click", function(){
    goHome()
});      

document.getElementById("wearBut").addEventListener("click", function(){
    document.getElementById("checkWear").style.display = "block" 
    document.getElementById("wearBut").className = "wearBut_clicked"   
    document.getElementById("weatherBut").className = "weatherBut"       
    document.getElementById("travelBut").className = "travelBut"    
    document.getElementById("checkWeather").style.display = "none"
    document.getElementById("checkTravel").style.display = "none"
}); 

document.getElementById("weatherBut").addEventListener("click", function(){
    document.getElementById("checkWeather").style.display = "block"
    document.getElementById("weatherBut").className = "weatherBut_clicked"  
    document.getElementById("wearBut").className = "wearBut"     
    document.getElementById("travelBut").className = "travelBut"   
    document.getElementById("checkWear").style.display = "none" 
    document.getElementById("checkTravel").style.display = "none"
     
}); 

document.getElementById("travelBut").addEventListener("click", function(){
    document.getElementById("checkTravel").style.display = "block"
    document.getElementById("travelBut").className = "travelBut_clicked"   
    document.getElementById("wearBut").className = "wearBut"
    document.getElementById("weatherBut").className = "weatherBut" 
    document.getElementById("checkWear").style.display = "none"   
    document.getElementById("checkWeather").style.display = "none"  
}); 



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
                

                country = results[1].address_components[3].short_name;
                
                city = results[1].address_components[0].long_name;

                
                var searchInp = document.getElementById("searchInp");
                
                searchInp.placeholder = "Current location is " + city;
                
                insertSearch();
                
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
        xhttp_weather.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&units=metric&APPID=" + weatherKey);
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
                
                
                insertWeather();
                
                //country = results[0].address_components[4].short_name;
            }
        }    
        
    }  
        
    function readWeather(){
        var request;
        
        if(window.XMLHttpRequest){
            request = new XMLHttpRequest();
        }
        
        else if(window.ActiveXObject){
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }
        
        request.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                var response = JSON.parse(this.responseText);
                console.log(response);
            
            }
        }
        
        //console.log(request);
        
        request.open("GET", "./php/readWeather.php", true);
        
        request.send();
    }    
      
    
