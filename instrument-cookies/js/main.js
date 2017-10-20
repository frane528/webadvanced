CustomWiggle.create("funWiggle", {wiggles: 7, type:"uniform"});
TweenMax.to("#banjo-button", 2, {rotation:30, ease:"funWiggle"}); 

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