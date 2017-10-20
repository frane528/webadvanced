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


function banjoCookie(){
    Cookies.set('banjo', 'value', { expires: 7 });
}

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