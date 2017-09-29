function triangleAnimation(){
  var result = '';
  var t = 0;
  
  for(var i=0;i<1;i++){
    setTimeout(function(){
      result += '🔺';
      console.log(result);
    },t)
    t+=100;
  }
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
  var result = '';
  var t = 0;
  
  for(var i=0;i<1;i++){
    setTimeout(function(){
      result += '🔴';
      console.log(result);
    },t)
    t+=100;
  }
}