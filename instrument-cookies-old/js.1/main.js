//left side instruments

//TweenLite.to("#banjo-button", 1, { ease: Power2.easeOut, x: 200 });
//TweenLite.to("#sax-button", 1, { ease: Power2.easeOut, x: 200 });

//right side instruments
//TweenLite.to("#guitar-button", 1, { ease: Power2.easeOut, x: -200 });
//TweenLite.to("#violin-button", 1, { ease: Power2.easeOut, x: -200 });

//top instruments
//TweenLite.to("#drum-button", 1, { ease: Power2.easeOut, y: 200 });
//TweenLite.to("#bass-button", 1, { ease: Power2.easeOut, y: 200 });

//bottom instruments
//TweenLite.to("#harp-button", 1, { ease: Power2.easeOut, y: -200 });
//TweenLite.to("#trumpet-button", 1, { ease: Power2.easeOut, y: -200 });



$(document).ready(function(){
    
/*

$(".instrument").click(function(){
    
    $(".instrument").each(function(){
        
        $(this).removeClass("big-instrument") //this removes the top left position for each
        
    })
    
    $(this).addClass("big-instrument") //this adds the top left position to the instrument that was clicked on
    
    $(".instrument").each(function(){
        
        if($(this).hasClass("big-instrument")){
           
           $(this).animate("to the specific top left location") 
            
        }else{
            
            if($(this).attr("id") == "bass-button"){
                //specific small position
                $("#banjo-button").animate({top: '28em', left: '5em', height: '10em'}, 500);
                $("#drum-button").animate({top: '28em', left: '10em', height: '10em'}, 500);
                $("#bass-button").animate({top: '28em', left: '30em', height: '10em'}, 500);
                $("#sax-button").animate({top: '28em', height: '10em'}, 500);
                $("#harp-button").animate({top: '28em', height: '10em'}, 500);
                $("#trumpet-button").animate({top: '28em', height: '10em'}, 500);
                $("#violin-button").animate({top: '28em', height: '10em'}, 500);
                $("#guitar-button").animate({top: '28em', left: '50em', height: '10em'}, 500); 
                
            }
            
        }
        
        
    })
    
    
})



*/
    
    var banjoClicked = false;
    var banjoAudio = $("#banjo-clip"); 
    
    $("#banjo-button").click(function(){
        
        banjoAudio.get(0).play();
        
        if(!banjoClicked){
            $("#drum-button").animate({top: '28em', left: '10em', height: '10em'}, 500);
            $("#bass-button").animate({top: '28em', left: '30em', height: '10em'}, 500);
            $("#sax-button").animate({top: '28em', height: '10em'}, 500);
            $("#harp-button").animate({top: '28em', height: '10em'}, 500);
            $("#trumpet-button").animate({top: '28em', height: '10em'}, 500);
            $("#violin-button").animate({top: '28em', height: '10em'}, 500);
            $("#guitar-button").animate({top: '28em', left: '50em', height: '10em'}, 500);      
            
            banjoClicked = true;
        } else{
            $("#drum-button").animate({top: '-3em', left: '20em', height: '100%'}, 500);
            $("#bass-button").animate({top: '-4em', left: '40em', height: '100%'}, 500);
            $("#sax-button").animate({top: '11em', height: '100%'}, 500);
            $("#harp-button").animate({top: '10em', left: '40em', height: '100%'}, 500);
            $("#trumpet-button").animate({top: '10em', left: '20em', height: '100%'}, 500);
            $("#violin-button").animate({top: '10em', height: '100%'}, 500);
            $("#guitar-button").animate({top: '-4em', left: '60em', height: '100%'}, 500);
        
            banjoClicked = false;
        }
      
    });
    
    var drumAudio = $("#drum-clip");
    var drumClicked = false;
    
    $("#drum-button").click(function(){
        
        drumAudio.get(0).play();
        
        if(!drumClicked){
            $("#banjo-button").animate({top: '28em', left: '10em', height: '10em'}, 500);
            $("#bass-button").animate({top: '28em', left: '30em', height: '10em'}, 500);
            $("#sax-button").animate({top: '28em', height: '10em'}, 500);
            $("#harp-button").animate({top: '28em', height: '10em'}, 500);
            $("#trumpet-button").animate({top: '28em', height: '10em'}, 500);
            $("#violin-button").animate({top: '28em', height: '10em'}, 500);
            $("#guitar-button").animate({top: '28em', left: '50em', height: '10em'}, 500);      
            
            drumClicked = true;
        } else{
            $("#banjo-button").animate({top: '-3em', left: '3em', height: '100%'}, 500);
            $("#bass-button").animate({top: '-4em', left: '40em', height: '100%'}, 500);
            $("#sax-button").animate({top: '11em', height: '100%'}, 500);
            $("#harp-button").animate({top: '10em', left: '40em', height: '100%'}, 500);
            $("#trumpet-button").animate({top: '10em', left: '20em', height: '100%'}, 500);
            $("#violin-button").animate({top: '10em', height: '100%'}, 500);
            $("#guitar-button").animate({top: '-4em', left: '60em', height: '100%'}, 500);
        
            drumClicked = false;
        }
      
    });
    
        var bassAudio = $("#bass-clip");
        var bassClicked = false;
    
        $("#bass-button").click(function(){
            
        bassAudio.get(0).play();
        
        if(!bassClicked){
            $("#banjo-button").animate({top: '28em', left: '10em', height: '10em'}, 500);
            $("#drum-button").animate({top: '28em', left: '30em', height: '10em'}, 500);
            $("#sax-button").animate({top: '28em', height: '10em'}, 500);
            $("#harp-button").animate({top: '28em', height: '10em'}, 500);
            $("#trumpet-button").animate({top: '28em', height: '10em'}, 500);
            $("#violin-button").animate({top: '28em', height: '10em'}, 500);
            $("#guitar-button").animate({top: '28em', left: '50em', height: '10em'}, 500);      
            
            bassClicked = true;
        } else{
            $("#banjo-button").animate({top: '-3em', left: '3em', height: '100%'}, 500);
            $("#drum-button").animate({top: '-4em', left: '20em', height: '100%'}, 500);
            $("#sax-button").animate({top: '11em', height: '100%'}, 500);
            $("#harp-button").animate({top: '10em', left: '40em', height: '100%'}, 500);
            $("#trumpet-button").animate({top: '10em', left: '20em', height: '100%'}, 500);
            $("#violin-button").animate({top: '10em', height: '100%'}, 500);
            $("#guitar-button").animate({top: '-4em', left: '60em', height: '100%'}, 500);
        
            bassClicked = false;
        }
      
    });
    
        var guitarAudio = $("#guitar-clip");
        var guitarClicked = false;
    
        $("#guitar-button").click(function(){
            
        guitarAudio.get(0).play();
        
        if(!guitarClicked){
            $("#banjo-button").animate({top: '28em', left: '10em', height: '10em'}, 500);
            $("#drum-button").animate({top: '28em', left: '30em', height: '10em'}, 500);
            $("#sax-button").animate({top: '28em', height: '10em'}, 500);
            $("#harp-button").animate({top: '28em', height: '10em'}, 500);
            $("#trumpet-button").animate({top: '28em', height: '10em'}, 500);
            $("#violin-button").animate({top: '28em', height: '10em'}, 500);
            $("#bass-button").animate({top: '28em', left: '50em', height: '10em'}, 500);      
            
            guitarClicked = true;
        } else{
            $("#banjo-button").animate({top: '-3em', left: '3em', height: '100%'}, 500);
            $("#drum-button").animate({top: '-4em', left: '20em', height: '100%'}, 500);
            $("#sax-button").animate({top: '11em', height: '100%'}, 500);
            $("#harp-button").animate({top: '10em', left: '40em', height: '100%'}, 500);
            $("#trumpet-button").animate({top: '10em', left: '20em', height: '100%'}, 500);
            $("#violin-button").animate({top: '10em', height: '100%'}, 500);
            $("#bass-button").animate({top: '-4em', left: '40em', height: '100%'}, 500);
        
            guitarClicked = false;
        }
      
    });
        var saxAudio = $("#sax-clip");
        var saxClicked = false;
    
        $("#sax-button").click(function(){
            
        saxAudio.get(0).play();
        
        if(!saxClicked){
            $("#sax-button").animate({top: '-3em', left: '3em', height: '100%'}, 500);
            $("#banjo-button").animate({top: '28em', left: '3em', height: '10em'}, 500);
            $("#drum-button").animate({top: '28em', left: '10em', height: '10em'}, 500);
            $("#guitar-button").animate({top: '28em', left: '50em', height: '10em'}, 500);
            $("#harp-button").animate({top: '28em', height: '10em'}, 500);
            $("#trumpet-button").animate({top: '28em', height: '10em'}, 500);
            $("#violin-button").animate({top: '28em', height: '10em'}, 500);
            $("#bass-button").animate({top: '28em', left: '30em', height: '10em'}, 500);      
            
            saxClicked = true;
        } else{
            $("#sax-button").animate({top: '11em', height: '100%'}, 500);
            $("#banjo-button").animate({top: '-3em', left: '3em', height: '100%'}, 500);
            $("#drum-button").animate({top: '-4em', left: '20em', height: '100%'}, 500);
            $("#guitar-button").animate({top: '-4em', left: '60em', height: '100%'}, 500);
            $("#harp-button").animate({top: '10em', left: '40em', height: '100%'}, 500);
            $("#trumpet-button").animate({top: '10em', left: '20em', height: '100%'}, 500);
            $("#violin-button").animate({top: '10em', height: '100%'}, 500);
            $("#bass-button").animate({top: '-4em', left: '40em', height: '100%'}, 500);
        
            saxClicked = false;
        }
      
    });
    
        var trumpetAudio = $("#trumpet-clip");
        var trumpetClicked = false;
    
        $("#trumpet-button").click(function(){
            
        trumpetAudio.get(0).play();
        
        if(!trumpetClicked){
            $("#trumpet-button").animate({top: '-5em', left: '5em', height: '100%'}, 500);
            $("#banjo-button").animate({top: '28em', left: '3em', height: '10em'}, 500);
            $("#drum-button").animate({top: '28em', left: '13em', height: '10em'}, 500);
            $("#guitar-button").animate({top: '28em', left: '50em', height: '10em'}, 500);
            $("#harp-button").animate({top: '28em', height: '10em'}, 500);
            $("#sax-button").animate({top: '28em', left: '22em', height: '10em'}, 500);
            $("#violin-button").animate({top: '28em', height: '10em'}, 500);
            $("#bass-button").animate({top: '28em', left: '30em', height: '10em'}, 500);      
            
            trumpetClicked = true;
        } else{
            $("#sax-button").animate({top: '11em', left: '3em', height: '100%'}, 500);
            $("#banjo-button").animate({top: '-3em', left: '3em', height: '100%'}, 500);
            $("#drum-button").animate({top: '-4em', left: '20em', height: '100%'}, 500);
            $("#guitar-button").animate({top: '-4em', left: '60em', height: '100%'}, 500);
            $("#harp-button").animate({top: '10em', left: '40em', height: '100%'}, 500);
            $("#trumpet-button").animate({top: '10em', left: '20em', height: '100%'}, 500);
            $("#violin-button").animate({top: '10em', height: '100%'}, 500);
            $("#bass-button").animate({top: '-4em', left: '40em', height: '100%'}, 500);
        
            saxClicked = false;
        }
      
    });
        
        var harpAudio = $("#harp-clip");
        var harpClicked = false;
    
        $("#harp-button").click(function(){
            
        harpAudio.get(0).play();
        
        if(!harpClicked){
            $("#harp-button").animate({top: '-5em', left: '5em', height: '100%'}, 500);
            $("#banjo-button").animate({top: '28em', left: '3em', height: '10em'}, 500);
            $("#drum-button").animate({top: '28em', left: '13em', height: '10em'}, 500);
            $("#guitar-button").animate({top: '28em', left: '50em', height: '10em'}, 500);
            $("#trumpet-button").animate({top: '28em', left: '40em', height: '10em'}, 500);
            $("#sax-button").animate({top: '28em', left: '22em', height: '10em'}, 500);
            $("#violin-button").animate({top: '28em', height: '10em'}, 500);
            $("#bass-button").animate({top: '28em', left: '30em', height: '10em'}, 500);      
            
            harpClicked = true;
            
        } else{
            $("#sax-button").animate({top: '11em', left: '3em', height: '100%'}, 500);
            $("#banjo-button").animate({top: '-3em', left: '3em', height: '100%'}, 500);
            $("#drum-button").animate({top: '-4em', left: '20em', height: '100%'}, 500);
            $("#guitar-button").animate({top: '-4em', left: '60em', height: '100%'}, 500);
            $("#harp-button").animate({top: '10em', left: '40em', height: '100%'}, 500);
            $("#trumpet-button").animate({top: '10em', left: '20em', height: '100%'}, 500);
            $("#violin-button").animate({top: '10em', height: '100%'}, 500);
            $("#bass-button").animate({top: '-4em', left: '40em', height: '100%'}, 500);
        
            harpClicked = false;
        }
      
    });
        var violinAudio = $("#violin-clip");
        var violinClicked = false;
    
        $("#violin-button").click(function(){
            
        violinAudio.get(0).play();
        
        if(!violinClicked){
            $("#violin-button").animate({top: '-5em', left: '3em', height: '100%'}, 500);
            $("#banjo-button").animate({top: '28em', left: '3em', height: '10em'}, 500);
            $("#drum-button").animate({top: '28em', left: '13em', height: '10em'}, 500);
            $("#guitar-button").animate({top: '28em', left: '50em', height: '10em'}, 500);
            $("#trumpet-button").animate({top: '28em', left: '60em', height: '10em'}, 500);
            $("#sax-button").animate({top: '28em', left: '22em', height: '10em'}, 500);
            $("#harp-button").animate({top: '28em', height: '10em'}, 500);
            $("#bass-button").animate({top: '28em', left: '30em', height: '10em'}, 500);      
            
            violinClicked = true;
            
        } else{
            $("#sax-button").animate({top: '11em', left: '3em', height: '100%'}, 500);
            $("#banjo-button").animate({top: '-3em', left: '3em', height: '100%'}, 500);
            $("#drum-button").animate({top: '-4em', left: '20em', height: '100%'}, 500);
            $("#guitar-button").animate({top: '-4em', left: '60em', height: '100%'}, 500);
            $("#harp-button").animate({top: '10em', left: '40em', height: '100%'}, 500);
            $("#trumpet-button").animate({top: '10em', left: '20em', height: '100%'}, 500);
            $("#violin-button").animate({top: '10em', left: '60em', height: '100%'}, 500);
            $("#bass-button").animate({top: '-4em', left: '40em', height: '100%'}, 500);
        
            violinClicked = false;
        }
      
    });
});



function drumCookie(){
    Cookies.set('drum', 'value', { expires: 7 });
}

function bassCookie(){
    Cookies.set('bass', 'value', { expires: 7 });
}

function guitarCookie(){
    Cookies.set('guitar', 'value', { expires: 7 });
}

function saxCookie(){
    Cookies.set('sax', 'value', { expires: 7 });
}

function harpCookie(){
    Cookies.set('harp', 'value', { expires: 7 });
}

function trumpetCookie(){
    Cookies.set('trumpet', 'value', { expires: 7 });
}

function violinCookie(){
    Cookies.set('violin', 'value', { expires: 7 });
}