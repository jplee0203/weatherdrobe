

    //weather start
//    const API_KEY = 'A6KSOkLTPN7j24IZfP3x03XAQPE3tOfo';
//
//    function locationInit(){
//        if (navigator.geolocation) {
//          navigator.geolocation.getCurrentPosition(function(position) {
//            var pos = {
//              lat: position.coords.latitude,
//              lng: position.coords.longitude
//            };
//
//             console.log(pos);
//             retrieveLocation(pos);
//          });
//        } 
//    }
//
//    function retrieveLocation(position){
//        var lat = position.lat,
//            lng = position.lng;
//
//            var api_request =  'http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=' + API_KEY + '&q=' + lat + ', ' + lng;         
//            var result;
//            $.ajax({
//                url: api_request,
//                success: function(response) {
//                    result = response;
//                    console.log(result.ParentCity.LocalizedName);
//                    console.log(result);
//                }
//            });
//    }

    //weather end



    

    var defaultRequestUri = "http://api.shopstyle.com/api/v2/products?pid=uid4400-40597880-66"; 
//     var+ "&fts=red+dress&offset=0&limit=10"
    
    function putOnHat() {
        
        var addParams = "&fts=hat" + weatherParametersClassifier();
    	    var returnData = requestToShopstyle(addParams);
    	    window.open(returnData.responseJSON.products[0].clickUrl);
    }
    
    function putOnShirt() {
        
        var addParams = "&fts=shirt" + weatherParametersClassifier();
    	    var returnData = requestToShopstyle(addParams);
    	    window.open(returnData.responseJSON.products[0].clickUrl);
    }

    function putOnPants() {
    	    var addParams = "&fts=pants" + weatherParametersClassifier();
    	    var returnData = requestToShopstyle(addParams);
    	    window.open(returnData.responseJSON.products[0].clickUrl);
//         return window.open(returnData.responseJSON.products[0].clickUrl);
    }

    function putOnShoes() {
        
        var addParams = "&fts=shoes" + weatherParametersClassifier();
    	    var returnData = requestToShopstyle(addParams);
    	    window.open(returnData.responseJSON.products[0].clickUrl);
    }

    function putOnAccessories() {
        
        var addParams = "&fts=umbrella" + weatherParametersClassifier();
    	    var returnData = requestToShopstyle(addParams);
    	    window.open(returnData.responseJSON.products[0].clickUrl);
    }

    function requestToShopstyle(params) {
    	    var result = "";
        return $.ajax({
            url: defaultRequestUri + params,
            async: false,
            success: function(response) {
                result = response;
            }
        });
        return result;
    }
    
    
//     var addParams = "";
    function weatherParametersClassifier() {
    	    var currentWeather = current_condition;
    	    
    	    // weather
//     	   sunny = 0 , snowy = 1, rainy = 2

    	    var criterionTemp = getCriterionTemp();

    	    console.log(criterionTemp);
    	    
    	    var addParams = "";
    	    if (criterionTemp < 10 ) {
    	    	    addParams = "+sweater";
    	    	    
    	    } else {
                  addParams = "+shirt";
                
    	    	  if(criterionTemp < 20) {
    	    		  addParams = "+longsleeve"; 
                      console.log("매롱");
    	    	  }
    	    	
    	    	  
    	    }
    	    
    	    var addParamsWeather = "";
    	    if (currentWeather == "Rain") {
    	    	    addParamsWeather = "+rain";
    	    	    
    	    } else if (currentWeather == "Snow") {
    	    	    addParamsWeather = "+snow";
    	    	    
    	    }
    	    
    	    addParams = addParams + addParamsWeather;
    	    
    	    return addParams;
    }
    
    function getCriterionTemp() {
//    	    var currentTemp = 5, maxTemp = 12, minTemp = 1;  //test code
        var currentTemp = current_condition, maxTemp = high_temp, minTemp = low_temp;
	    var currentDate = new Date();
	    var currentHour = currentDate.getHours();
	    
	    console.log(currentHour)
	    
//	    currentHour = currentHour - 7;  //test code
	    
	    if (currentHour > 14) {
	    	    return minTemp;
	    }
	    
	    if (currentHour < 11) {
	    	    var tempDifference = maxTemp - currentTemp;
	    	    if (tempDifference > 5) {
	    	    	    return currentTemp;
	    	    }
	    }
	    
	    return maxTemp;
    }

    //make sample

//     function bottomwear() {
//     	   addParams = "&fts=rain+pants";
//     	   var returnData = requestToShopstyle(addParams);
//         var returnValues = "";	    
//         returnData.success(function (data) {
//         	    returnValues = data;
//     	    });
//     	return returnValues;
//     }

//     var result = "";
//     function requestToShopstyle(params) {
//         return $.ajax({
//             url: defaultRequestUri + params,
//             async: false,
//         });
//     }

    //sample end

 