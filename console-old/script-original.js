
var shapeTimer = 0;
let shapeArray = ['        🔵', '        🔶', '      🔶🔺🔵🔶','   🔵🔶🔺🔵🔶🔺🔵',' 🔺🔵🔶🔺🔵🔶🔺🔵🔶🔺','🔶🔺🔵🔶🔺🔵🔶🔺🔵🔶🔺🔵🔶', ' 🔺🔵🔶🔺🔵🔶🔺🔵🔶🔺', '   🔵🔶🔺🔵🔶🔺🔵','      🔶🔺🔵🔶','        🔺'];

var counter = 0; 

  for (i = 0; i <( shapeArray.length * 50); i++) {
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
