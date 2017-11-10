$(document).ready(function(){
   
   
   /*
   COokie has two parts
   
   checking if cookie exists when page loads
   
   adding to cookie throughout interactions
   
   update instrumentArray (so that means either pushing to the array or splicing (i.e. removing) from array)
        
        var idOfInstrument = 'idOfInstrument';
        
        instrumentArray.push(idOfInstrument)
        
        instrumentArray.splice($.inArray(idOfInstrument, instrumentArray),1);
   
   update instrumentCookie to equal new instrumentArray
        Cookies.set('instrumentCookie', instrumentArray)
        
   
   */
   
   var instrumentArray = []; //starts empty
   
   
   var playWholeSong = function(){
       //play song
       var songAudio = $("#whole-song"); 
       songAudio.get(0).play();
   }
   
   
   if(Cookies.getJSON('instrumentCookie')){
        //if this cookie exists
        
       instrumentArray = Cookies.getJSON('instrumentCookie'); // set the empty array clicked to equal the saved cookie
        console.log("exists!",Cookies.getJSON('instrumentCookie') )
        if(instrumentArray.length == 4){
            
            playWholeSong()
        
        }
   }
   
   console.log(instrumentArray)
   
  
  // click on instrument
  $('.instrument').click(function() {
      
      var idOfInstrument = $(this).attr("id");
      console.log(idOfInstrument)
      
      if ($(this).hasClass('active')){
          
          $(this).removeClass('active')
          $(this).siblings('.instrument').removeClass('inactive')
          
          //cookie logic:
          //want to remove it form the array
          
          console.log($.inArray(idOfInstrument, instrumentArray))
          
          instrumentArray = instrumentArray.splice($.inArray(idOfInstrument, instrumentArray),1);
          //alternative is a for loop or an each loop to remove the idOfInstrumetn from array******
          
          
          //update cookie
          Cookies.set('instrumentCookie', instrumentArray, { expires: 7 })
          
      }else if($(this).hasClass('inactive')){
          
          $(this).addClass('active').removeClass('inactive')
           $(this).siblings('.instrument').removeClass('active')
          $(this).siblings('.instrument').addClass('inactive')
          
          //cookie logic
          if($.inArray(idOfInstrument, instrumentArray) !== -1){
              
              console.log($.inArray(idOfInstrument, instrumentArray))
              
              //if its already in array we do nothing
              
          }else if($.inArray(idOfInstrument, instrumentArray) == -1){
              //if its not in array we want to add it to the array
              instrumentArray.push(idOfInstrument);
              // add updated array to the cookie
              Cookies.set('instrumentCookie', instrumentArray, { expires: 7 });
              
          }
          
      }else{ //neutral setting
          
          $(this).addClass('active')
          $(this).siblings('.instrument').addClass('inactive')
          
          //cookie logic
          if($.inArray(idOfInstrument, instrumentArray) !== -1){
              
              console.log($.inArray(idOfInstrument, instrumentArray))
              
              //if its already in array we do nothing
              
          }else if($.inArray(idOfInstrument, instrumentArray) == -1){
              //if its not in array we want to add it to the array
              instrumentArray.push(idOfInstrument);
              // add updated array to the cookie
              Cookies.set('instrumentCookie', instrumentArray, { expires: 7 });
              
          }
      }
    
    console.log(instrumentArray)
      
  })
      /*
      
      click on instrument
      
        all instruments can either be
        1. active
        2. inactive
        3. neutral (don't have an active or inactive class)
      
      - makes this instrument active
      - unless this instrument is already active
      
      -makes all other instruments small
      - unless this instrument is already active
      
      
      */
      
      // gives the other instruments their opposite class (potential bug)
  //$(event.currentTarget).siblings().toggleClass('little-instrument');
    
    /*
     if $(this=='.little-instrument'){
    	$(event.currentTarget).addClass('active')
    	$(event.currentTarget).siblings().removeClass('inactive');
    })
    */
  
  

    
    
    
    //audio stuff
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
  
  console.log(document.cookie);
  
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