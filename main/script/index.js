document.getElementById("body_scroll").onmousewheel = function(event){
 
 showMenu();   
};

function showMenu(){
    
 document.getElementById("navigation").style.top= 0;
 document.getElementById("navigation").style.transition = "top 1s";

   setTimeout(function(){     
      document.getElementById("navigation").style.top= "-10%";
 document.getElementById("navigation").style.transition = "top 1s";
    }, 5000);      
    
    
}

    var ben = setInterval(function(){ 
       console.log(document.getElementById("body_scroll").scrollTop);          
     },1000);

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
    showMenu();  
    var scTop = document.getElementById("body_scroll").scrollTop;
    var scStart = setInterval(function(){ 
        scTop = scTop+15;   
    document.getElementById("body_scroll").scrollTop = scTop;
        if(scTop > 2107.77783203125){   
           clearInterval(scStart); 
        }                              
     },1);
  
});  

document.getElementById("goWear_wear").addEventListener("click", function(){
    showMenu();  
    var scTop = document.getElementById("body_scroll").scrollTop;
    var scStart = setInterval(function(){ 
        scTop = scTop+15;   
    document.getElementById("body_scroll").scrollTop = scTop;
        if(scTop > 2107.77783203125){   
           clearInterval(scStart); 
        }                              
     },1);
  
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
    showMenu();  
    var scTop = document.getElementById("body_scroll").scrollTop;
    var scStart = setInterval(function(){ 
        scTop = scTop-15;   
    document.getElementById("body_scroll").scrollTop = scTop;
        if(scTop <= 0){   
           clearInterval(scStart); 
        }                              
     },1);
}); 
    
 document.getElementById("goHomeArrow").addEventListener("click", function(){
    showMenu();  
    var scTop = document.getElementById("body_scroll").scrollTop;
    var scStart = setInterval(function(){ 
        scTop = scTop-15;   
    document.getElementById("body_scroll").scrollTop = scTop;
        if(scTop <= 0){   
           clearInterval(scStart); 
        }                              
     },1);
});       



function navigationMouse() {
   showMenu(); 
}


 document.getElementById("wearBut").addEventListener("click", function(){
  
document.getElementById("checkWeather").style.display = "none"
document.getElementById("checkWear").style.display = "block" 
document.getElementById("wearBut").className = "wearBut_clicked"
document.getElementById("weatherBut").className = "weatherBut"       
     
}); 

 document.getElementById("weatherBut").addEventListener("click", function(){
  
document.getElementById("checkWeather").style.display = "block"
document.getElementById("weatherBut").className = "weatherBut_clicked"
document.getElementById("wearBut").className = "wearBut"     
document.getElementById("checkWear").style.display = "none"     
     
}); 

