var m1 = 0;   
var m2 = 0;    
var timer = null;
var mOver = false;

document.getElementById("body_scroll").onscroll = function(){
    document.getElementById("navigation").style.top= 0;
    document.getElementById("navigation").style.transition = "top 1s";
    clearTimeout(timer) 
    timer = setTimeout("Data()", 1000);
    m1 = document.getElementById("body_scroll").scrollTop 
}


function Data(){
   m2 = document.getElementById("body_scroll").scrollTop 
   if(m2 == m1 && mOver != true){
       setTimeout(function(){     
          document.getElementById("navigation").style.top= "-10%";
          document.getElementById("navigation").style.transition = "top 1s";
    }, 5000); 
   }
}


  


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
    let m1 = document.getElementById("body_scroll").scrollTop;
    var timer = null;
    document.getElementById("navigation").style.top= 0;
    document.getElementById("navigation").style.transition = "top 1s";
    clearTimeout(timer) 
    timer = setTimeout("Data()", 1000);
}

function fixedMenu(){  
 mOver = true;    
 document.getElementById("navigation").style.top= 0;
 document.getElementById("navigation").style.transition = "top 1s";
}

function fixedMenuOut(){ 
 mOver = false;    
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

document.getElementById("goWear_Future").addEventListener("click", function(){
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

 document.getElementById("logoDiv").addEventListener("click", function(){
    goHome()
}); 
 document.getElementById("footer2_logo").addEventListener("click", function(){
    goHome()
}); 




document.getElementById("wearBut").addEventListener("click", function(){
    document.getElementById("checkWear").style.display = "block" 
    document.getElementById("wearBut").className = "wearBut_clicked"   
    document.getElementById("weatherBut").className = "weatherBut"       
    document.getElementById("travelBut").className = "travelBut"    
    document.getElementById("checkWeather").style.display = "none"
    document.getElementById("checkTravel").style.display = "none"
    
    document.getElementById("futureBut").className = "futureBut"
    document.getElementById("checkFuture").style.display = "none" 
}); 

document.getElementById("weatherBut").addEventListener("click", function(){
    document.getElementById("checkWeather").style.display = "block"
    document.getElementById("weatherBut").className = "weatherBut_clicked"  
    document.getElementById("wearBut").className = "wearBut"     
    document.getElementById("travelBut").className = "travelBut"   
    document.getElementById("checkWear").style.display = "none" 
    document.getElementById("checkTravel").style.display = "none"
    
    document.getElementById("futureBut").className = "futureBut"
    document.getElementById("checkFuture").style.display = "none" 
     
}); 

document.getElementById("travelBut").addEventListener("click", function(){
    document.getElementById("checkTravel").style.display = "block"
    document.getElementById("travelBut").className = "travelBut_clicked"   
    document.getElementById("wearBut").className = "wearBut"
    document.getElementById("weatherBut").className = "weatherBut" 
    document.getElementById("checkWear").style.display = "none"   
    document.getElementById("checkWeather").style.display = "none" 
    
    document.getElementById("futureBut").className = "futureBut"
    document.getElementById("checkFuture").style.display = "none" 
    
}); 

document.getElementById("futureBut").addEventListener("click", function(){
    document.getElementById("futureBut").className = "futureBut_clicked"
    document.getElementById("wearBut").className = "wearBut"
    document.getElementById("weatherBut").className = "weatherBut"
    document.getElementById("travelBut").className = "travelBut" 
    
    document.getElementById("checkFuture").style.display = "block"
    document.getElementById("checkWear").style.display = "none"   
    document.getElementById("checkWeather").style.display = "none" 
    document.getElementById("checkTravel").style.display = "none" 
}); 


document.getElementById("day1").addEventListener("click", function(){
    document.getElementById("day2").className = "forecast2"
    document.getElementById("day3").className = "forecast3"
    document.getElementById("day4").className = "forecast4"
    document.getElementById("day5").className = "forecast5" 
    
    document.getElementById("day1").className = "forecast1_clicked"
}); 

document.getElementById("day2").addEventListener("click", function(){
    document.getElementById("day3").className = "forecast3"
    document.getElementById("day4").className = "forecast4"
    document.getElementById("day5").className = "forecast5"
    document.getElementById("day1").className = "forecast1" 
    
    document.getElementById("day2").className = "forecast2_clicked"
}); 

document.getElementById("day3").addEventListener("click", function(){
    document.getElementById("day4").className = "forecast4"
    document.getElementById("day5").className = "forecast5"
    document.getElementById("day1").className = "forecast1"
    document.getElementById("day2").className = "forecast2" 
    
    document.getElementById("day3").className = "forecast3_clicked"
}); 

document.getElementById("day4").addEventListener("click", function(){
    document.getElementById("day5").className = "forecast5"
    document.getElementById("day1").className = "forecast1"
    document.getElementById("day2").className = "forecast2"
    document.getElementById("day3").className = "forecast3" 
    
    document.getElementById("day4").className = "forecast4_clicked"
}); 

document.getElementById("day5").addEventListener("click", function(){
    document.getElementById("day1").className = "forecast1"
    document.getElementById("day2").className = "forecast2"
    document.getElementById("day3").className = "forecast3"
    document.getElementById("day4").className = "forecast4" 
    
    document.getElementById("day5").className = "forecast5_clicked"
});


document.getElementById("alex").addEventListener("click", function(){
    window.open("http://jplee.ca/");
});
document.getElementById("ben").addEventListener("click", function(){
    window.open("https://liuben.ca/home/");
});
document.getElementById("jacky").addEventListener("click", function(){
 window.open("https://9gag.com/");
});
document.getElementById("keiju").addEventListener("click", function(){
   window.open("https://keijusekiguchi.com/wp/");
});
document.getElementById("shopStyle").addEventListener("click", function(){
   window.open("https://www.shopstyle.ca/");
});
document.getElementById("searchBut").addEventListener("click", function(){
if(document.getElementById("searchInp").value != ""){
document.getElementById("searchInp").style.display = "none";
document.getElementById("searchBut").style.display = "none";
document.getElementById("redo").style.display = "block"; 
document.getElementById("wearBut").style.display = "block";
document.getElementById("travelBut").style.display = "block";
document.getElementById("futureBut").style.display = "block";     
    
  }
});
document.getElementById("redo").addEventListener("click", function(){
location.reload();
});