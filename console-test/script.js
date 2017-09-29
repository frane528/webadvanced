function triangleAnimation(){
  var shape ="";
  let triangleArrayOne = ['    ⚠️', '\n', '  ⚠️⚠️⚠️', '\n', ' ⚠️⚠️⚠️⚠️⚠️', '\n', '⚠️⚠️⚠️⚠️⚠️⚠️⚠️'];
  let triangleArrayTwo = ['  ◢ ◣', '\n','◢◢ ◣◣'];
  
  
  var smallOrBig = Math.random ()*3;
  if (smallOrBig < 1) {
   shape += "🔺";
  } else if (smallOrBig > 1 && smallOrBig < 2) {
    shape += triangleArrayOne;
  } else {
    shape += triangleArrayTwo;
  }
  console.log(shape);
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