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

    if($(window).width() < 700 ) {
        $('#perfect').show();}
    else {$("#perfect").hide();
  }

});

function triangleAnimation(){
var triangleTimer = 0;
let triangleArray = ['    ⚠️', '  ⚠️⚠️⚠️', ' ⚠️⚠️⚠️⚠️⚠️', '⚠️⚠️⚠️⚠️⚠️⚠️⚠️'];
var counter = 0; 

  for (t = 0; t <( triangleArray.length * 1); t++) {
    setTimeout(function() {

      console.log(triangleArray[counter]);
   
      if( counter < triangleArray.length -1 ){ 
        counter++;
      } else{
        counter = 0;
      }
    
    }, triangleTimer); 
    triangleTimer += 300;
};
  
}

function squareAnimation(){
var squareTimer = 0;
let squareArray = ['🔻🔺🔻🔺', '🔺🔻🔺🔻', '🔻🔺🔻🔺'];
var counter = 0; 

  for (s = 0; s <( squareArray.length * 1); s++) {
    setTimeout(function() {

      console.log(squareArray[counter]);
   
      if( counter < squareArray.length -1 ){ 
        counter++;
      } else{
        counter = 0;
      }
    
    }, squareTimer); 
    squareTimer += 300;
};
  
}

function circleAnimation(){
var shapeTimer = 0;
let shapeArray = ['     🔵🔵🔵', '  🔵        🔵', '🔵            🔵','  🔵        🔵', '     🔵🔵🔵'];
var counter = 0; 

  for (i = 0; i <( shapeArray.length * 1); i++) {
    setTimeout(function() {

      console.log(shapeArray[counter]);
   
      if( counter < shapeArray.length -1 ){ 
        counter++;
      } else{
        counter = 0;
      }
    
    }, shapeTimer); 
    shapeTimer += 300;
};
  
}