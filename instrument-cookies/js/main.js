//left side instruments

TweenLite.to("#banjo-button", 1, { ease: Power2.easeOut, x: 200 });
TweenLite.to("#sax-button", 1, { ease: Power2.easeOut, x: 200 });

//right side instruments
TweenLite.to("#guitar-button", 1, { ease: Power2.easeOut, x: -200 });
TweenLite.to("#violin-button", 1, { ease: Power2.easeOut, x: -200 });

//top instruments
TweenLite.to("#drum-button", 1, { ease: Power2.easeOut, y: 200 });
TweenLite.to("#bass-button", 1, { ease: Power2.easeOut, y: 200 });

//bottom instruments
TweenLite.to("#harp-button", 1, { ease: Power2.easeOut, y: -200 });
TweenLite.to("#trumpet-button", 1, { ease: Power2.easeOut, y: -200 });

$(document).ready(function(){
    
    var banjoClicked = false;
    
    $("#banjo-button").click(function(){
        
        if(!banjoClicked){
            $("#drum-button").animate({top: '120px', left: '-140px', height: '10em'}, 500);
            $("#bass-button").animate({top: '120px', left: '-140px', height: '10em'}, 500);
            $("#sax-button").animate({top: '150px', height: '10em'}, 500);
            $("#harp-button").animate({top: '350px',height: '10em'}, 500);
            $("#trumpet-button").animate({top: '350px', height: '10em'}, 500);
            $("#violin-button").animate({height: '10em'}, 500);
            $("#guitar-button").animate({top: '300px', right: '-50px', height: '10em'}, 500);      
            
            banjoClicked = true;
        } else{
            $("#drum-button").animate({top: '', left: '', height: '100%'}, 500);
            $("#bass-button").animate({top: '', left: '', height: '100%'}, 500);
            $("#sax-button").animate({top: '', height: '100%'}, 500);
            $("#harp-button").animate({top: '-',height: '100%'}, 500);
            $("#trumpet-button").animate({top: '-', height: '100%'}, 500);
            $("#violin-button").animate({height: '100%'}, 500);
            $("#guitar-button").animate({top: '', right: '', height: '100%'}, 500);
        
            banjoClicked = false;
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