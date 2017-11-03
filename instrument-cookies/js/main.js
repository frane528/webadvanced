$(document).ready(function(){
    
/*
$(".instrument").click(function(){
    
    $(".instrument").each(function(){
        
        $(this).removeClass("big-instrument") //this removes the top left position for each
        
    })
    
    $(this).addClass("big-instrument") //this adds the top left position to the instrument that was clicked on
    
    $(".instrument").each(function(){
        
        if($(this).hasClass("big-instrument")){
           
           $(this).css({top: '8em', left: '5em', height: '100%'}) 
            
        }else{
            
            if($(this).attr("id") == "bass-button"){
                //specific small position
                $("#drum-button").css({top: '28em', left: '10em', height: '10em'}, 500);
                $("#sax-button").css({top: '28em', height: '10em'}, 500);
                $("#trumpet-button").css({top: '28em', height: '10em'}, 500);
                
            }
            
            if($(this).attr("id") == "drum-button"){
                //specific small position
                $("#bass-button").css({top: '28em', left: '10em', height: '10em'}, 500);
                $("#sax-button").css({top: '28em', height: '10em'}, 500);
                $("#trumpet-button").css({top: '28em', height: '10em'}, 500);
                
            }
            
            if($(this).attr("id") == "sax-button"){
                //specific small position
                $("#bass-button").css({top: '28em', left: '10em', height: '10em'}, 500);
                $("#drum-button").css({top: '28em', height: '10em'}, 500);
                $("#trumpet-button").css({top: '28em', height: '10em'}, 500);
                
            }
            
            if($(this).attr("id") == "trumpet-button"){
                //specific small position
                $("#bass-button").css({top: '28em', left: '10em', height: '10em'}, 500);
                $("#drum-button").css({top: '28em', height: '10em'}, 500);
                $("#sax-button").css({top: '28em', height: '10em'}, 500);
                
            }
            
        }
        
        
    })
        var drumAudio = $("#drum-clip");
        $("#drum-button").click(function(){
        
        drumAudio.get(0).play();
        });
        
        var saxAudio = $("#sax-clip");
        $("#sax-button").click(function(){
        
        saxAudio.get(0).play();
        });
        
        var bassAudio = $("#bass-clip");
        $("#bass-button").click(function(){
        
        bassAudio.get(0).play();
        });
})
*/
    

    var drumAudio = $("#drum-clip");
    var drumClicked = false;
    
    $("#drum-button").click(function(){
        
        drumAudio.get(0).play();
        
        
        if(!drumClicked){
            $("#bass-button").css({top: '17em', height: '10em'}, 500);
            $("#sax-button").css({top: '17em', height: '10em'}, 500);
            $("#trumpet-button").css({top: '18em', height: '10em'}, 500);
            
            drumClicked = true;
        } else{
            $("#bass-button").css({top: '4em', height: '100%'}, 500);
            $("#sax-button").css({top: '4em', height: '100%'}, 500);
            $("#trumpet-button").css({top: '4em', height: '100%'}, 500);
        
            drumClicked = false;
        }
      
    });
    
        var bassAudio = $("#bass-clip");
        var bassClicked = false;
    
        $("#bass-button").click(function(){
            
        bassAudio.get(0).play();
        
        if(!bassClicked){
            $("#drum-button").css({top: '17em', height: '10em'}, 500);
            $("#sax-button").css({top: '17em', height: '10em'}, 500);
            $("#trumpet-button").css({top: '17em', height: '10em'}, 500);
            
            bassClicked = true;
        } else{
            $("#drum-button").css({top: '4em', height: '100%'}, 500);
            $("#sax-button").css({top: '4em', height: '100%'}, 500);
            $("#trumpet-button").css({top: '4em', height: '100%'}, 500);
        
            bassClicked = false;
        }
      
    });
    

        var saxAudio = $("#sax-clip");
        var saxClicked = false;
    
        $("#sax-button").click(function(){
            
        saxAudio.get(0).play();
        
        if(!saxClicked){
            $("#drum-button").css({top: '17em', height: '10em'}, 500);
            $("#trumpet-button").css({top: '18em', height: '10em'}, 500);
            $("#bass-button").css({top: '17em', height: '10em'}, 500);      
            
            saxClicked = true;
        } else{
            $("#drum-button").css({top: '4em', height: '100%'}, 500);
            $("#trumpet-button").css({top: '4em', height: '100%'}, 500);
            $("#bass-button").css({top: '4em', height: '100%'}, 500);
        
            saxClicked = false;
        }
      
    });
    
        var trumpetAudio = $("#trumpet-clip");
        var trumpetClicked = false;
    
        $("#trumpet-button").click(function(){
            
        trumpetAudio.get(0).play();
        
        if(!trumpetClicked){
            $("#drum-button").css({top: '17em', height: '10em'}, 500);
            $("#sax-button").css({top: '17em', height: '10em'}, 500);
            $("#bass-button").css({top: '17em', height: '10em'}, 500);      
            
            trumpetClicked = true;
        } else{
            $("#sax-button").css({top: '4em', height: '100%'}, 500);
            $("#drum-button").css({top: '4em', height: '100%'}, 500);
            $("#bass-button").css({top: '4em', height: '100%'}, 500);
        
            saxClicked = false;
        }
      
    });
});


function drumCookie(){
    Cookies.set('drum', 'value', { expires: 7 });
}

function bassCookie(){
    Cookies.set('bass', 'value', { expires: 7 });
}

function saxCookie(){
    Cookies.set('sax', 'value', { expires: 7 });
}

function trumpetCookie(){
    Cookies.set('trumpet', 'value', { expires: 7 });
}
