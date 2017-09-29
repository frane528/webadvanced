function triangleAnimation(){
var shapeTimer = 0;
let triangleArray = ['    ⚠️', '  ⚠️⚠️⚠️', ' ⚠️⚠️⚠️⚠️⚠️', '⚠️⚠️⚠️⚠️⚠️⚠️⚠️'];
var counter = 0; 

  for (i = 0; i <( triangleArray.length * 1); i++) {
    setTimeout(function() {

      console.log(triangleArray[counter]);
   
      if( counter < triangleArray.length -1 ){ 
        counter++;
      } else{
        counter = 0;
      }
    
    }, shapeTimer); 
    shapeTimer += 300;
};
  
}

function squareAnimation(){
  var result = '';
  var t = 0;
  
  for(var i=0;i<1;i++){
    setTimeout(function(){
      result += '⬛';
      console.log(result);
    },t)
    t+=100;
  }
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