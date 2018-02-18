document.getElementById("searchBut").addEventListener("click", function(){
    var scTop = document.getElementById("body_scroll").scrollTop;
    var scStart = setInterval(function(){ 
        scTop = scTop+15;   
    document.getElementById("body_scroll").scrollTop = scTop;
        if(scTop > 803){   
           clearInterval(scStart); 
        }                              
     },1);
  });    
 document.getElementById("goWear").addEventListener("click", function(){
    var scTop = document.getElementById("body_scroll").scrollTop;
    var scStart = setInterval(function(){ 
        scTop = scTop+15;   
    document.getElementById("body_scroll").scrollTop = scTop;
        if(scTop > 2005){   
           clearInterval(scStart); 
        }                              
     },1);
  
});  

 document.getElementById("goTravel").addEventListener("click", function(){
    var scTop = document.getElementById("body_scroll").scrollTop;
    var scStart = setInterval(function(){ 
        scTop = scTop+15;   
    document.getElementById("body_scroll").scrollTop = scTop;
        if(scTop > 3347){   
           clearInterval(scStart); 
        }                              
     },1);
});  
    
 document.getElementById("goHome").addEventListener("click", function(){
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
    var scTop = document.getElementById("body_scroll").scrollTop;
    var scStart = setInterval(function(){ 
        scTop = scTop-15;   
    document.getElementById("body_scroll").scrollTop = scTop;
        if(scTop <= 0){   
           clearInterval(scStart); 
        }                              
     },1);
});       
    