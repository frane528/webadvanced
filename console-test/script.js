function shapes(){
      var shapeGroup = document.getElementById("shapeGroup");
      var breakLine = '\n';
      
      var result = '';
      
      var width = document.getElementById('rowNumber').value;
      var height = document.getElementById('colNumber').value;
    
      for(var j=0;j<height;j++){
        for(var i=0;i<width;i++){
          result += shapeGroup;
        };
        
      };
      console.log(result);
    };