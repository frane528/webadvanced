function triangleAnimation(){
var triangleTimer = 0;
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
    
    }, triangleTimer); 
    triangleTimer += 300;
};
  
}

function squareAnimation(){
var squareTimer = 0;
let squareArray = ['🆘🆘🆘🆘', '🆘🆘🆘🆘', '🆘🆘🆘🆘'];
var counter = 0; 

  for (i = 0; i <( squareArray.length * 1); i++) {
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