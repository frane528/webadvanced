$(document).ready(function(){
    
  $('.instrument').on('mouseenter', (event) => {
    $(event.currentTarget).addClass('instrument-active')
  }).on('mouseleave', event => {
    $(event.currentTarget).removeClass('instrument-active')
  })
  
  $('.instrument').on('click', event => {
  $(event.currentTarget).siblings().toggleClass('little-instrument');
    })
    
  var drumAudio = $("#drum-clip");
  $("#drum-button").click(function(){drumAudio.get(0).play();
  });
        
  var saxAudio = $("#sax-clip");
  $("#sax-button").click(function(){saxAudio.get(0).play();
  });
        
  var bassAudio = $("#bass-clip"); 
  $("#bass-button").click(function(){ bassAudio.get(0).play();
  });
  
  var trumpetAudio = $("#trumpet-clip"); 
  $("#trumpet-button").click(function(){ trumpetAudio.get(0).play();
  });
});

        

    
    
/*
    Cookies:
    
    part 1
    
    -check if cookie exists
        - if cookie exists
            get information from cookie
            apply it to instruments
        
        - if cookie doesnt exist
            just continue as normal
    
    //part 2
    
    //var clicked = []
    
    - //setting the cookie
    - //essentially, on each instrument click you'll need to reset the cookie
    
    
    //if(Cookies.getJSON('instruments')){
        //if this cookie exists
        
       clicked = Cookies.getJSON('instruments'); // set the empty array clicked to equal the saved cookie
        
        
        var cookieExists = function(){ //then run a function 
            
            // have a for loop iterate through the clicked array
            //for each id that's in the array, set it as if it was already clicked
            
        }
        
        cookiesExists();
        
        if(clicked.length == 4){
            
            //play song
        }
        
    }
 
    
    $("#drum-button").click(function(){
        
        //preparing for cookie
        
        var inArray = false;
        
        for (var i = clicked.length; i--; ) {
            
            if(clicked[i] = "#drum-cookie"){
                
                inArray = true;
            }
        }
        
        if(inArray){ //checking if #drum-button is part of the clicked array
                
                inArary = false;
                //we want to remove #drum-button from array
                
                var itemtoRemove = "#drum-button";
                clicked.splice($.inArray(itemtoRemove, clicked),1);
                
                //Cookies.set('instruments', clicked); //reseting the cookie

                
                console.log("in array", clicked)
            
            }else{ //if #drum-button is not part of the array
                
                clicked.push("#drum-button")
                
                //Cookies.set('instruments', clicked); /resetting the cookie
                console.log("added to array", clicked)
                
            }
        */