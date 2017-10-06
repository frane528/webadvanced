$('h1').click(function() {
    $('#target').show(300);
});

$(window).resize(function(){

    if($(window).width() < 1499 ) {
        $('#target, h1, .shape').hide(200);}
     else {$('#target, h1, .shape').show(200);
    }

    if($(window).width() < 1000 ) {
        $('#almost').show(200);}
    else {$("#almost").hide(200);
    }

    if($(window).width() < 700 ) {
        $('#perfect').show(200);}
    else {$("#perfect").hide(200);
  }

});

function triangleAnimation(){
var triangleTimer = 0;
let triangleArray = ['    ⚠️', '  ⚠️⚠️⚠️', ' ⚠️⚠️⚠️⚠️⚠️', '⚠️⚠️⚠️⚠️⚠️⚠️⚠️'];
let triangleArray2 = ['        ⚠️', '       ⚠️⚠️⚠️', '     ⚠️⚠️⚠️⚠️⚠️', '    ⚠️⚠️⚠️⚠️⚠️⚠️⚠️', '  ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️', '⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️'];
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

var redCounter = 0.1;

function squareAnimation(){
var squareTimer = 0;
let squareArray = ['🔻🔺🔻🔺🔻🔺🔻', '🔺🔻🔺🔻🔺🔻🔺', '🔻🔺🔻🔺🔻🔺🔻', '🔺🔻🔺🔻🔺🔻🔺'];
let squareArray2 = ['🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺', '🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻', '🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺', '🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻', '🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺', '🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻', '🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺', '🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻🔺🔻'];
var counter = 0; 

let allArrays = [squareArray, squareArray2];

var randomArray = Math.floor(Math.random()*3);
console.log(randomArray)

  for (i = 0; i <( allArrays[randomArray].length * 1); i++) {
    setTimeout(function() {

      console.log(allArrays[randomArray][counter]);
   
      if( counter < allArrays[randomArray].length -1 ){ 
        counter++;
      } else{
        counter = 0;
      }
    
    }, squareTimer); 
    squareTimer += 300;
};

  $("#redSquare").css({ "-webkit-transform" : "scale(" + (1 + redCounter) + ")",
                         "transform" : "scale(" + (1 + redCounter) + ")" 
                        })
  
  redCounter = redCounter + 0.1;

}

var blueCounter = 0.1;

function circleAnimation(){
var shapeTimer = 0;
let shapeArray = ['     🔵🔵🔵', '  🔵        🔵', '🔵            🔵','  🔵        🔵', '     🔵🔵🔵'];
let shapeArray2 = ['    🔵🔵🔵', '  🔵🔵🔵🔵🔵🔵', '🔵🔵🔵🔵🔵🔵🔵🔵','🔵🔵🔵🔵🔵🔵🔵🔵', '  🔵🔵🔵🔵🔵🔵', '    🔵🔵🔵'];
let shapeArray3 = ['     🔵🔵🔵🔵', '   🔵🔵🔵🔵🔵🔵🔵', ' 🔵🔵🔵🔵🔵🔵🔵🔵🔵', '🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵', '🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵', '  🔵🔵🔵🔵🔵🔵🔵🔵🔵', '    🔵🔵🔵🔵🔵🔵🔵', '      🔵🔵🔵🔵'];
var counter = 0; 

let allArrays = [shapeArray, shapeArray2, shapeArray3];

var randomArray = Math.floor(Math.random()*3);
console.log(randomArray)

  for (i = 0; i <( allArrays[randomArray].length * 1); i++) {
    setTimeout(function() {

      console.log(allArrays[randomArray][counter]);
   
      if( counter < allArrays[randomArray].length -1 ){ 
        counter++;
      } else{
        counter = 0;
      }
    
    }, shapeTimer); 
    shapeTimer += 300;
};
  
  $("#blueCircle").css({ "-webkit-transform" : "scale(" + (1 + blueCounter) + ")",
                         "transform" : "scale(" + (1 + blueCounter) + ")" 
                        })
  
  blueCounter = blueCounter + 0.1;
  
}