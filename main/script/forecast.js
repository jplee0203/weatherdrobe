
            var day1 = document.getElementById("day1");
            var day2 = document.getElementById("day2");
            var day3 = document.getElementById("day3");
            var day4 = document.getElementById("day4");
            var day5 = document.getElementById("day5");
        
     function readWeather(){

    var searchInp = document.getElementById("searchInp");    
    var city = searchInp.value;
        
//         function day1(){    
//                con.innerHTML = current_condition;
//                desc.innerHTML = description;
//                highTemp.innerHTML = high_temp;
//                lowTemp.innerHTML = low_temp;
//                day1.innerHTML = dt_txt;
//            }
//              
//            function day2(){    
//                con.innerHTML = current_condition;
//                desc.innerHTML = description;
//                highTemp.innerHTML = high_temp;
//                lowTemp.innerHTML = low_temp;
//                day2.innerHTML = dt_txt;
//            }
//              
//            function day3(){    
//                con.innerHTML = current_condition;
//                desc.innerHTML = description;
//                highTemp.innerHTML = high_temp;
//                lowTemp.innerHTML = low_temp;
//                day3.innerHTML = dt_txt;
//            }
//              
//            function day4(){    
//                con.innerHTML = current_condition;
//                desc.innerHTML = description;
//                highTemp.innerHTML = high_temp;
//                lowTemp.innerHTML = low_temp;
//                day4.innerHTML = dt_txt;
//            }
//            function day5(){    
//                con.innerHTML = current_condition;
//                desc.innerHTML = description;
//                highTemp.innerHTML = high_temp;
//                lowTemp.innerHTML = low_temp;
//                day5.innerHTML = dt_txt;
//            }
         
        var xhttp_weather = new XMLHttpRequest();
        xhttp_weather.open("GET", "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&APPID=" + weatherKey);
        xhttp_weather.send();
        xhttp_weather.onreadystatechange = function(){
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
            
            
            
                request.open("POST", "insertWeather.php", true);

                request.send(forecastObj);
    }             
                
                            
                insertForecast();
            }
        } 
              
    }    
        
              
    