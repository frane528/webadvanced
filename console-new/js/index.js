$('h1').click(function() {
    $('#target').show();
});

$(window).resize(function(){

    if($(window).width() < 1499 ) {
        $('#target, h1, .shape').hide();}
     else {$('#target, h1, .shape').show();
  }

    if($(window).width() < 1000 ) {
        $('#almost').show();}
    else {$("#almost").hide();
    }

    $(window).resize(function(){
    if($(window).width() < 700 ) {
        $('#perfect').show();}
    else {$("#perfect").hide();
  }
  
});